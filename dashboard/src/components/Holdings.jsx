import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

 useEffect(() => {
  axios
    .get("https://finpulse-dcml.onrender.com/allHoldings", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(allHoldings);
      console.log(res.data);
      setAllHoldings(res.data);
    })
    .catch((error) => {
      console.log("Error fetching holdings:", error);
    });
}, []);

  // Total Investment
  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0,
  );

  // Current Value
  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  // Total P&L
  const totalPnL = currentValue - totalInvestment;

  // Total P&L Percentage
  const totalPnLPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets:[
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };  

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const dayChange =
                ((stock.price - stock.dayStartPrice) / stock.dayStartPrice) *
                100;
              const profitLoss = currValue - stock.avg * stock.qty;
              const isProfit = profitLoss >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>{profitLoss.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(((stock.price - stock.avg) / stock.avg) * 100).toFixed(2)}
                    %
                  </td>
                  <td className={dayChange >= 0 ? "profit" : "loss"}>
                    {dayChange.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row mb-5">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>
            {totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
       <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;

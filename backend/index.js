require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const bcrypt = require("bcrypt");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["https://finpulse-1-cspe.onrender.com", "https://dashboard-wnk8.onrender.com", "https://finpulse-dcml.onrender.com"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
      mongoUrl: url,
    }),

    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  }),
);

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({
      message: "Please login first",
    });
  }
}

app.get("/current-user", isAuthenticated, (req, res) => {
  res.json(req.session.user);
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists. Please login.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("Error during registration:", error);

    res.status(500).json({
      message: "Registration failed",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found. Please signup first.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.log("Error during login:", error);

    res.status(500).json({
      message: "Login failed",
    });
  }
});

app.get("/allHoldings", isAuthenticated, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", isAuthenticated, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", isAuthenticated, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const quantity = Number(qty);
    const stockPrice = Number(price);

    // 1.save order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // 2. check existing holding 
    let holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + quantity;

        const newAvg =
          (holding.avg * holding.qty + stockPrice * quantity) / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = stockPrice;

        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty: quantity,
          avg: stockPrice,
          price: stockPrice,
          dayStartPrice: stockPrice,
        });

        await newHolding.save();
      }
    }

    if (mode === "SELL") {
      if (holding) {
        holding.qty = holding.qty - qty;
        holding.price = price;

        if (holding.qty <= 0) {
          await HoldingsModel.deleteOne({ name });
        } else {
          await holding.save();
        }
      }
    }

    res.status(201).send("Order Saved and Holdings Updated!");
  } catch (error) {
    console.log("Error saving order:", error);
    res.status(500).send("Error saving order");
  }
});

app.get("/allOrders", isAuthenticated, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.log("Error fetching orders:", error);
    res.status(500).send("Error fetching orders");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: "Logout failed",
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      message: "Logout successful",
    });
  });
});

app.get("/", (req, res) => {
  res.send("FinPulse Backend is running!");
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(url);
  console.log("DB connected!");
});

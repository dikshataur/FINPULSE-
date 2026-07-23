import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Kite",
      category: "Trading Platform",
      description:
        "A fast and intuitive trading platform for investing in stocks, mutual funds, ETFs, and more.",
      icon: "🪁",
    },
    {
      name: "Console",
      category: "Portfolio Management",
      description:
        "Track your investments, analyse your portfolio, view reports, and manage your trading account.",
      icon: "📊",
    },
    {
      name: "Coin",
      category: "Mutual Funds",
      description:
        "Invest in direct mutual funds with zero commissions and manage your investments easily.",
      icon: "🪙",
    },
    {
      name: "Varsity",
      category: "Learn & Grow",
      description:
        "Learn everything about the stock market, investing, trading, and personal finance for free.",
      icon: "🎓",
    },
    {
      name: "Kite Connect",
      category: "Developer Platform",
      description:
        "Build powerful trading applications and automate your trading strategies using APIs.",
      icon: "⚙️",
    },
    {
      name: "Streak",
      category: "Strategy & Analysis",
      description:
        "Create, backtest, and deploy trading strategies without writing complex code.",
      icon: "📈",
    },
    {
      name: "TradingQ&A",
      category: "Community",
      description:
        "Ask questions, share knowledge, and learn from a community of traders and investors.",
      icon: "💬",
    },
    {
      name: "Smallcase",
      category: "Thematic Investing",
      description:
        "Invest in professionally managed baskets of stocks based on themes, ideas, and strategies.",
      icon: "🧺",
    },
  ];

  return (
    <div className="apps-page">
      <div className="apps-header">
        <div>
          <h1>Explore our apps</h1>
          <p>
            Discover tools and platforms designed to make investing and trading
            simple.
          </p>
        </div>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-card-top">
              <div className="app-icon">{app.icon}</div>

              <span className="app-category">{app.category}</span>
            </div>

            <h2>{app.name}</h2>

            <p>{app.description}</p>

            <div className="app-card-footer">
              <span>Learn more</span>
              <span className="app-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
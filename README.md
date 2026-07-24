# 📈 FinPulse – Stock Trading Platform

FinPulse is a full-stack stock trading platform inspired by modern stock brokerage applications. It provides users with a seamless interface to explore stocks, manage their portfolio, monitor holdings and positions, place orders, and track available funds.

The project is built using a separate frontend, dashboard, and backend architecture.

---

## 🚀 Live Demo

* 🌐 **Landing Page:** [https://finpulse-1-cspe.onrender.com]
* 📊 **Dashboard:**  [https://dashboard-wnk8.onrender.com]
* ⚙️ **Backend API:** [https://finpulse-dcml.onrender.com]

---

## ✨ Features

### 🔐 User Authentication

* User Signup
* User Login
* Session-based authentication
* Secure user sessions using MongoDB
* Protected dashboard routes
* Logout functionality

### 📊 Dashboard

The dashboard provides a complete overview of the user's trading activities.

* Summary
* Holdings
* Positions
* Orders
* Funds
* Watchlist

### 📈 Holdings

* Displays stocks owned by the user
* Shows stock quantity
* Displays average price
* Shows current price
* Calculates profit/loss

### 📉 Positions

* Displays current trading positions
* Shows quantity and price details
* Displays profit/loss information

### 📋 Orders

* Displays placed orders
* Shows order details
* Displays order type, quantity, price, and status

### 💰 Funds

* Displays available funds
* Shows used margin
* Displays available balance
* Provides fund-related information

### 👀 Watchlist

* Monitor selected stocks
* View stock prices
* Track price changes
* View percentage changes

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Bootstrap
* Axios
* React Router

### Dashboard

* React.js
* JavaScript
* CSS
* Chart.js
* React Chart.js 2
* Material UI Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Session
* Connect-Mongo
* CORS
* Dotenv

### Deployment & Tools

* Git
* GitHub
* Render
* MongoDB Atlas
* VS Code

---

## 📂 Project Structure

```text
FINPULSE/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   │
│   ├── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   │
│   ├── package.json
│
├── backend/
│   ├── models/
│   ├── schemas/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🔄 Application Flow

```text
User
 │
 ▼
Landing Page
 │
 ├── Signup
 │
 └── Login
       │
       ▼
   Authentication
       │
       ▼
    Dashboard
       │
       ├── Summary
       ├── Holdings
       ├── Positions
       ├── Orders
       ├── Funds
       └── Watchlist
```

---

## 🔐 Authentication Flow

1. User creates an account through the Signup page.
2. User logs in using registered credentials.
3. Backend verifies the user's credentials.
4. A session is created for the authenticated user.
5. Session data is stored in MongoDB using `connect-mongo`.
6. The user is redirected to the Dashboard.
7. Protected API routes verify the active session before returning user-specific data.

---

## 📡 API Features

The backend provides APIs for:

* User authentication
* Current user information
* Holdings
* Positions
* Orders
* Funds
* Watchlist
* User-specific trading data

All protected APIs require a valid authenticated session.

---

## 🌐 Deployment

The project is deployed using separate services:

### Frontend

The main landing page is deployed as a static site.

### Dashboard

The dashboard is deployed separately as a static site.

### Backend

The backend is deployed as a web service.

The frontend and dashboard communicate with the backend through API requests.

---

## 🔒 CORS & Session Configuration

Since the frontend, dashboard, and backend are deployed separately, CORS is configured to allow communication between the deployed services.

The backend supports:

* Cross-origin requests
* Credentials
* Secure cookies
* Cross-site session authentication

The session cookie is configured with:

```javascript
{
  httpOnly: true,
  secure: true,
  sameSite: "none"
}
```

This allows authenticated sessions to work between separately deployed frontend, dashboard, and backend services.

---

## 📸 Screenshots

### 🏠 Landing Page (./screenshots/home.png)

---

### 📝 Signup Page (screenshots/signup.png)

---

### 🔐 Login Page (screenshots/login.png)

---

### 📊 Dashboard – Summary (screenshots/summary.png)

---

### 📈 Holdings (screenshots/holdings.png)
### 📈 Holdings Graph (screenshots/holding graph.png)

---

### 📉 Positions (./screenshots/positions.png)

---

### 📋 Orders (screenshots/orders.png)

---
 
### 💰 Funds (screenshots/funds.png)

---

### 👀 Watchlist (screenshots/watchlist.png)
### 👀 Watchlist Graph (screenshots/watchlist graph.png)

---


## 🧪 Testing

The application can be tested by verifying:

* User signup
* User login
* Authentication
* Dashboard access
* Holdings data
* Positions data
* Orders data
* Funds data
* Watchlist functionality
* Logout functionality

---

## 🔮 Future Enhancements

* Real-time stock price updates
* Live stock market API integration
* Buy and sell functionality
* Real-time portfolio updates
* Advanced stock charts
* Payment gateway integration
* Two-factor authentication
* Mobile application
* Improved portfolio analytics

---

## 👩‍💻 Author

**Diksha Taur**

Computer Engineering Student

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.


## ⚠️ Copyright & Usage

© 2026 Diksha Taur. All Rights Reserved.

This project is created and owned by **Diksha Taur**.

The source code, design, structure, features, and implementation of this project may not be copied, reproduced, modified, distributed, or used for personal, academic, commercial, or any other purpose without prior written permission from the author.

Students, developers, or organizations who wish to use, modify, or reuse any part of this project must obtain explicit permission from the author first.

Unauthorized copying, reproduction, redistribution, or use of this project is strictly prohibited.

For permission or collaboration inquiries, please contact the author.


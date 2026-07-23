import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        window.location.href = "http://localhost:5174"; // if login is successful it will take user into dashboard
      }
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container py-5">
      {" "}
      <div className="row justify-content-center">
        {" "}
        <div className="col-12 col-md-8 col-lg-5">
          {" "}
          <div className="card border-0 shadow-sm p-4">
            {" "}
            <div className="card-body">
              {" "}
              <h2 className="text-center mb-2">Welcome Back </h2>
              <p className="text-center text-muted mb-4">
                Login to your Zerodha account
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              {message && (
                <div className="alert alert-info mt-3">{message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

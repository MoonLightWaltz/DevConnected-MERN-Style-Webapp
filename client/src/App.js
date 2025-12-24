import "./App.css";
import React from "react";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Layout/auth/Login";
import Register from "./Components/Layout/auth/Register";

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/register"
            element={
              <section className="container">
                <Register />
              </section>
            }
          />

          <Route
            path="/login"
            element={
              <section className="container">
                <Login />
              </section>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

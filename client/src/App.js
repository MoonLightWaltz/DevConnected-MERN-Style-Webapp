import "./App.css";
import { useEffect } from "react";
import React from "react";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Layout/auth/Login";
import Register from "./Components/Layout/auth/Register";
import Alert from "./Components/Layout/Alert";
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Createprofile from "./Components/profile-form.js/Createprofile";
import Editprofile from "./Components/profile-form.js/Editprofile";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./action/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <>
        {" "}
        <Router>
          <Navbar />
          <Alert />

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

            {/* PRIVATE ROUTES */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/dashboard"
                element={
                  <section className="container">
                    <Dashboard />
                  </section>
                }
              />

              <Route
                path="/create-profile"
                element={
                  <section className="container">
                    <Createprofile />
                  </section>
                }
              />
              <Route
                path="/edit-profile"
                element={
                  <section className="container">
                    <Editprofile />
                  </section>
                }
              />
            </Route>
          </Routes>
        </Router>
      </>
    </Provider>
  );
};

export default App;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Register from "./pages/Register";
import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import { User } from "./models/User";
import Login from "./pages/Login";

function App() {
  let user: User;

  const onRegister = (data: User) => {
    const email = data.email;
    const storedData = localStorage.getItem(email);
    if (!storedData) {
      localStorage.setItem(
        data.email,
        JSON.stringify({
          name: data.name,
          password: data.password,
        })
      );
      console.log(data.name);
    } else {
      console.log("Bu kullanıcı zaten kayıtlı");
    }
  };

  const onLogin = (data: User) => {
    const email = data.email;
    const storedData = localStorage.getItem(email);

    if (storedData) {
      const userData: any = JSON.parse(storedData);
      if (userData) {
        // getItem can return actual value or null
        if (userData.password === data.password) {
          console.log(
            `${userData.name} ${userData.surename}  You Are Successfully Logged In`
          );
        } else {
          console.log("Email or Password is not matching with our record");
        }
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email not available");
    }
  };

  return (
    <>
      <NavbarComp />
      <Routes>
        <Route element path="/" Component={DashBoard} />
        <Route
          path="/register"
          element={<Register onRegister={onRegister} />}
        />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </>
  );
}

export default App;

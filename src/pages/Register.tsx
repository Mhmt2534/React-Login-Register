import { useForm } from "react-hook-form";
import "./Register.css";
import { User } from "../models/User";
import React from "react";

interface IRegister {
  onRegister: (data: any) => void;
}

const Register: React.FC<IRegister> = ({ onRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        surename: data.surename,
        password: data.password,
      })
    );
    console.log(data.surename);
  };

  return (
    <div>
      <p className="title">Registration Form</p>

      <form className="Register" onSubmit={handleSubmit(onRegister)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input type="text" placeholder="surename" {...register("surname")} />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </div>
  );
};

export default Register;

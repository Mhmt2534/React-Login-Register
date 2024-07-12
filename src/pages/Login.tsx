import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

interface ILogin {
  onLogin: (data: any) => void;
}

const Login: React.FC<ILogin> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <p className="title">Login Form</p>

      <form className="Register" onSubmit={handleSubmit(onLogin)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default Login;

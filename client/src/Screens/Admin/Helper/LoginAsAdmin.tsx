import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER_MUTATION } from "../../../Hooks/Mutation/User.Mutation";
import { TextInputBox } from "../../AddTodo/Helper/InputRender";
import UserFunctions from "../../Register/Functions";

type Props = {};

function LoginAsAdmin({}: Props) {
  const form = [
    {
      header: "Enter your admin email id",
      placeholder: "admin@email.com",
      state: "email",
      type: "text",
    },
    {
      header: "Enter your admin password",
      placeholder: "Pa**w*rd...",
      state: "password",
      type: "password",
    },
  ];
  const [loginInput, setLoginInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [LoginUser] = useMutation(LOGIN_USER_MUTATION);
  const userFunctions = new UserFunctions({}, LoginUser, "admin");
  return (
    <div className="AdminLogin">
      {form.map((input, key) => (
        <TextInputBox input={input} setAddTaskInput={setLoginInput} />
      ))}
      <div className="alefin">
        <button
          className="AddButton"
          onClick={() => userFunctions.LoginUserFunction(loginInput)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginAsAdmin;

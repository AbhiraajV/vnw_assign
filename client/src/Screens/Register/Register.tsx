import React, { useState } from "react";
import "./Register.css";

import { useMutation } from "@apollo/client";
import {
  LOGIN_USER_MUTATION,
  REGISTER_USER_MUTATION,
} from "../../Hooks/Mutation/User.Mutation";
import UserFunctions from "./Functions";

type Props = {};
const Form: { [key: string]: string[] } = {
  signup: ["Name", "Email", "Password"],
  login: ["Email", "Password"],
};
export type inputType = {
  name: string;
  email: string;
  password: string;
};
const RenderForm = ({ type }: { type: string }) => {
  const [error, setError] = useState("");
  const [RegisterUser] = useMutation(REGISTER_USER_MUTATION);
  const [LoginUser] = useMutation(LOGIN_USER_MUTATION);
  const [input, setInput] = useState<inputType>({
    name: "",
    email: "",
    password: "",
  });
  const userFunctions = new UserFunctions(RegisterUser, LoginUser, setError);
  return (
    <div className={type}>
      <label htmlFor="chk" aria-hidden="true" className="label">
        {type === "signup" ? "Sign Up" : "Login"}
      </label>
      {Form[type].map((input, key) => (
        <input
          placeholder={input}
          className="InputReg"
          onChange={(e) =>
            setInput((prev) => {
              return { ...prev, [input.toLowerCase()]: e.target.value };
            })
          }
        />
      ))}
      <div className="FormError">{error}</div>
      <button
        className="ButtonReg"
        onClick={() => userFunctions.exec(input, type)}
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};
function Register({}: Props) {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {Object.keys(Form).map((type, key) => (
        <RenderForm type={type} key={key} />
      ))}
    </div>
  );
}

export default Register;

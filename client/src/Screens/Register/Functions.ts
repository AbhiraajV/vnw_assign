import UseReload from "../../Hooks/UseReload";
import { inputType } from "./Register";

export default class UserFunctions {
  constructor(
    private RegisterUser: any,
    private LoginUser: any,
    private setError: any
  ) {
    this.RegisterUser = RegisterUser;
    this.LoginUser = LoginUser;
    this.setError = setError;
  }
  RegisterUserFunction = (input: inputType) => {
    this.RegisterUser({
      variables: { input },
    })
      .then((data: any) => {
        console.log(data.data);
        // seterror("");
      })
      .catch((err: { graphQLErrors: any }) => this.setError(err.toString()));
  };

  LoginUserFunction = (input: inputType) => {
    console.log({ input });
    this.LoginUser({
      variables: {
        input: {
          email: input.email,
          password: input.password,
        },
      },
    })
      .then((data: any) => {
        console.log(data.data.login);
        if (this.setError === "admin")
          localStorage.setItem("admin", data.data.login);
        else if (data.data.login) localStorage.setItem("user", data.data.login);
        UseReload();
      })
      .catch((err: { graphQLErrors: any }) => {
        console.log({ err });
        this.setError(err.toString());
      });
  };

  exec = (input: inputType, type: string) => {
    if (type === "login") this.LoginUserFunction(input);
    else if (type === "signup") this.RegisterUserFunction(input);
  };
}

import React, { useState } from "react";
import "../css/RegisterLogin.css";

function RegisterLogin() {
  const [login, setLogin] = useState(true);
  const [emailforlogin, setEmailForLogin] = useState("");
  const [passwordforlogin, setPasswordForLogin] = useState("");
  console.log("email: ",emailforlogin,"password",passwordforlogin);
  return (
    <div className="loginregister">
      {login && (
        <div className="login__user">
          <p className="login__title">Login</p>
          <label>Email</label>
          <input
            type="text"
            value={emailforlogin}
            onChange={(e) => setEmailForLogin(e.target.value)}
          />
          <p></p>
          <label>Password</label>
          <input
            type="password"
            value={passwordforlogin}
            onChange={(e) => setPasswordForLogin(e.target.value)}
          />
          <p></p>
          <button className="login__submit">Login</button>
          <p className="signin__request">
            If you don't have account please register{" "}
            <span className="signin__span" onClick={() => setLogin(!login)}>
              here
            </span>
          </p>
        </div>
      )}
      {!login && (
        <div className="login__user">
          <p className="login__title">Register</p>
          <label>Email</label>
          <input type="text" />
          <p></p>
          <label>Password</label>
          <input type="password" />
          <p></p>
          <label>Confirm password</label>
          <input type="password" />
          <p></p>
          <button className="register__submit">Register</button>
          <p className="login__request">
            Click{" "}
            <span className="login__span" onClick={() => setLogin(!login)}>
              here
            </span>{" "}
            to login
          </p>
        </div>
      )}
    </div>
  );
}

export default RegisterLogin;

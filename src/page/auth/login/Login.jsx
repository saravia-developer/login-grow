import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import LogoFacebook from "../../../assets/small-logo-facebook.jfif";
import LogoTwitter from "../../../assets/small-logo-twitter.jfif";
import LogoGoogle from "../../../assets/small-logo-google.jpg";
import PadlockIcon from "../../../components/PadlockIcon";
import personImage from "../../../assets/pixelcut-export.png";
import style from "./login.module.scss";
import Icons from "../../../lib/Icons";



function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const fetching = async (url, options = {}) => {
    let response = await fetch(url, options);
    response = response.json();
    return response;
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await fetching(
        "http://localhost:3000/v1/authentication/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.success) throw new Error(response.message);

      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <main className={style["container-login"]}>
      <section className={style["one-part"]}>
        <img src={personImage} alt="person-image" />
        <a href="">Create an account</a>
      </section>

      <section className={style["two-part"]}>
        <form onSubmit={login}>
          <h1>Sign up</h1>

          <div className={style["container-field-login"]}>
            <Input
              size="large"
              placeholder="Enter username"
              prefix={<IoPerson />}
              onChange={handleUsernameChange}
              value={username}
              className={style["custom-button"]}
            />
            <Input.Password
              size="large"
              placeholder="Enter password"
              prefix={<PadlockIcon />}
              onChange={handlePasswordChange}
              className={style["custom-button"]}
              value={password}
              />
          </div>

      
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={style["container-checkbox"]}>
            <Checkbox></Checkbox>
            <span>Remember me</span>
          </div>
          
          <Button htmlType="submit" className="" type="primary">
            Log in
          </Button>
        </form>

        <div className={style["othersLogin"]}>
          <span>Or login with</span>
          <img width={30} height={30} src={LogoFacebook} />
          <img width={30} height={30} src={LogoTwitter} />
          <img width={30} height={30} src={LogoGoogle} />
        </div>
      </section>
    </main>
  );
}

export default Login;

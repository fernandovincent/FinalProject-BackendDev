import React, { useState, useEffect } from "react";
import NavBar from "../../molecules/NavBar";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import firebase from "../../../config/Firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [welcomeText, setWelcomeText] = useState("Hello, Welcome!");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    // setWelcomeText("Welcome!!!");
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => history.push("/main"))
    .catch((error) => console.log("Error ", error));
  };

  useEffect(() => {
    console.log("component did mount");
    setTimeout(() => {
      setWelcomeText("Welcome");
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [welcomeText]);

  console.log("render component");

  return (
    //JSX
    <div className="container">
      <NavBar />
      <h1>{welcomeText}</h1>
      <h3 className="mt-3">Login</h3>
      <p className="form-label mt-3">Email</p>
      <Input
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Password</p>
      <Input
        className="form-control"
        placeholder="Masukan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={handleSubmit} text="Submit"/>
    </div>
  );
};

export default Login;
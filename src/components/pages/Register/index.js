import React, { useState } from "react";
import NavBar from "../../molecules/NavBar";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import firebase from '../../../config/Firebase';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  let history = useHistory();

  const onSubmit = () => {
    const data = {
      email: email,
      fullName: fullName,
    };

    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //Simpan ke Realtime Database
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref('users/' + userId)
          .set(data);

        setFullName("");
        setEmail("");
        setPassword("");
        //Redirect ke Halaman Login
        history.push("/main");
      })
      .catch((error) => {
        console.log(error);
        //Tampilkan Pesan Error
      });
  };

  return (
    <div className="container">
      <NavBar />
      <p className="form-label mt-4">Full Name</p>
      <Input
        className="form-control"
        placeholder="Insert Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <p className="form-label mt-4">Email</p>
      <Input
        className="form-control"
        placeholder="Insert Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-4">Password</p>
      <Input
        className="form-control"
        placeholder="Insert Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={onSubmit} text="Register New User"/>
      </div>
  );
};

export default Register;
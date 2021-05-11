import React, { useState, useEffect } from 'react';
import firebase from '../../../config/Firebase';
import Navbar from '../../molecules/NavBar';

const Main = () => {

  const [toDo, settoDo] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, settoDoList] = useState([]);

  useEffect(() => {
    firebase.database().ref("products").on("value", (res) => {
      if(res.val()){
        //Ubah menjadi array
        //Object.keys mengubah data menjadi array
        const rawData = res.val();
        const productArr = [];
        Object.keys(rawData).map((item) => {
          productArr.push({
            id: item,
            ...rawData[item],
          });
        });
        settoDoList(productArr);
      }
    });
  }, []);

  const onSubmit = () => {
    const data = {
      toDo: toDo,
      time: time,
      description: description,
    };
      firebase.database().ref("products").push(data);
  };
  
  return (
    <div className="container">
      <Navbar />
      <h3>Dashboard</h3>
      <div className="col-6">
        <p>To DO</p>
        <input className="form-control" placeholder="Type your product name" value={toDo} onChange={(e) => settoDo(e.target.value)}  />
        <p>Time</p>
        <input className="form-control" placeholder="Type the category" value={time} onChange={(e) => setTime(e.target.value)} />
        <p>Description</p>
        <input className="form-control" placeholder="Type your price" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button className="btn btn-primary" onClick={onSubmit}>Save</button>  
      </div>
      <hr />
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>To Do</th>
            <th>Time</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Main;

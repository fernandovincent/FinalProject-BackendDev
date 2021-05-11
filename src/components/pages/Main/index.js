import React, { useState, useEffect } from 'react';
import firebase from '../../../config/Firebase';
import Navbar from '../../molecules/NavBar';
import App from '../../../App.css';
import Footer from '../../molecules/Footer';
const Main = () => {

  const [toDo, settoDo] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, settoDoList] = useState([]);
  const [button, setButton] = useState("Save");
  const [selectedProduct, setSelectedProduct] = useState({});

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

  const resetForm = () => {
    settoDo("");
    setTime("");
    setDescription("");
    setButton("Save");
  };

  const onSubmit = () => {
    const data = {
      toDo: toDo,
      time: time,
      description: description,
    };
    if(button === "Save"){
      // Insert
      firebase.database().ref("products").push(data);      
    }else {
      // Update
      firebase.database().ref(`products/${selectedProduct.id}`).set(data);
    }
    resetForm();
  };

  const onUpdateData = (item) => {
    settoDo(item.toDo);
    setTime(item.time);
    setDescription(item.description);
    setButton("Update");
    setSelectedProduct(item);
  };

  const onDeleteData = (item) => {
    // Detele
    firebase.database().ref(`products/${item.id}`).remove();
  };
  
  return (
    <div className="container">
      <>
      <Navbar />
      <h3 className="mt-2">To Do App</h3>
      <div className="col-12 mt-4">
        <p>To Do</p>
        <input className="form-control" placeholder="Type your product name" value={toDo} onChange={(e) => settoDo(e.target.value)}  />
        <p>Time</p>
        <input className="form-control" placeholder="Type the category" value={time} onChange={(e) => setTime(e.target.value)} />
        <p>Description</p>
        <input className="form-control" placeholder="Type your price" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button className="btn btnmain btn-primary" onClick={onSubmit}>{button}</button>  
        {
          button === "Update" && (
            <button className="btn btn-secondary" onClick={resetForm}>Cancel Update</button>  
        )}
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
        <tbody>
          {toDoList.map((item) => (
            <tr key={item.id}>
              <td>{item.toDo}</td>
              <td>{item.time}</td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-success" onClick={() => onUpdateData(item)}>Update</button>
                <button className="btn btn-danger" onClick={() => onDeleteData(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
      <Footer />
    </div>

  );
};

export default Main;

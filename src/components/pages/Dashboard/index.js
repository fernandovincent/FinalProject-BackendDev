import React from 'react';
import Navbar from '../../molecules/NavBar';
import Button from '../../atoms/Button';
import Main from '../../../assets/image/tes.png';
import { useHistory } from 'react-router';
import App from '../../../App.css';

const Dashboard = () => {
  const history = useHistory();

  const handleHistory = () => {
    history.push("/login");
  };

  return (
      <div className="container">
        <Navbar/>
        <div className="row custom-section d-flex align-items-center">
          <div className="col-12 col-lg-4">
            <h3 className="textheader">Simple</h3>
            <h2 className="textheader2">To Do List</h2>
            <p className="text">Make it easier and get tracked with your activity</p>
            <Button text="Get Started" onClick={handleHistory} />
          </div>
          <div className="col-12 col-lg-8">
            <img className="dashboardpic" src={Main} ></img>
          </div>
        </div>
      </div>
  )
}

export default Dashboard;

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
            <h3>Simple</h3>
            <h2>Add Contact</h2>
            <p className="text">Make it easier and get more close with other</p>
            <Button text="Get Started" onClick={handleHistory} />
          </div>
          <div className="col-12 col-lg-8">
            <img className="" src={Main} ></img>
          </div>
        </div>
      </div>
  )
}

export default Dashboard;

import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from '../../molecules/NavBar';

const About = () => {
  return (
    <Container className="mt-5">
      <Navbar />
      <Card className="">
      <h1 className="mb-4">About</h1>
      <h4>Simple Application To Do Your Activities Every Day<br />
      This application helps users in scheduling their daily activities</h4>
      <p>In this application we can register and sign up, and add data in the form of activities carried out, as well as time, as well as a description of the activities we will do according to our respective schedules.</p>
      <p style={{color: "blue"}}>|| Made by Fernando Vincentius Sean Piay ||</p>
      </Card>
    </Container>
  );
}

export default About;
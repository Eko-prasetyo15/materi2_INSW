import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"
import Form from "./components/Form"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <div>
        <Header />
        <div className="container text-center" >
        <h3>BELAJAR REACT</h3>
        <br></br>
        </div>
        <Form />
        <Table />
      </div>
      <Footer />
    </div>


  );
}

export default App;

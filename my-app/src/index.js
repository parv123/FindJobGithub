import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap/Carousel';
//import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
   
    <Navbar />
   <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== "") {
      props.handleSubmit(person);
      setPerson("");
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task here"
        onChange={handleChange}
        value={person}
      />
      <button className="btn-btn danger" btype="submit">
        Add
      </button>
    </form>
  );
}

function PeopleList(props) {
  const [deletev, setDelete] = useState("");

  const arr = props.data;
  var index = arr.indexOf(deletev);
  if (index > -1) {
    arr.splice(index, 1);
  }
  

  const listItems = arr.map((val, index) => (
    <div>
      <li key={index}>{val}</li>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDelete(val);
        }}
      >
        <button id="button1" key={index} value={val} >
          Delete
        </button>
      </form>
    </div>
  ));
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = [];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById("root")
);*/

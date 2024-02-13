import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { signOut } from 'aws-amplify/auth';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

Amplify.configure(config);

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

function App({signOut,user}) {
  return (
  <>
  DOCTYPE! html
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <title>FutureRec</title>
  <div className="sidebar">
    <div className="top">
      <div className="logo">
        <i className="bx bxs-book-open" />
        <span>FutureRec</span>
      </div>
      <i className="bx bx-menu" id="btn" />
    </div>
    <div className="user">
      <img src="profile.jpg" alt="me" className="user-img" />
      <div>
        <p className="bold">Elizabeth M.</p>
        <p>Admin</p>
      </div>
    </div>
    <ul>
      <li>
        <a href="#">
          <i className="bx bxs-home" />
          <span className="nav-item">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-bar-chart" />
          <span className="nav-item">Grades</span>
        </a>
        <span className="tooltip">Grades</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-pencil" />
          <span className="nav-item">Tutoring</span>
        </a>
        <span className="tooltip">Tutoring</span>
      </li>
      <li>
        <a2 href="#">
          <i className="bx bx-line-chart" />
          <span className="nav-item">FutureRec</span>
        </a2>
        <span className="tooltip2">FutureRec</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-graduation" />
          <span className="nav-item">Majors</span>
        </a>
        <span className="tooltip">Majors</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-briefcase-alt-2" />
          <span className="nav-item">Careers</span>
        </a>
        <span className="tooltip">Careers</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-cog" />
          <span className="nav-item">Settings</span>
        </a>
        <span className="tooltip">Settings</span>
      </li>
      <li>
        <button><img src="src\profile.jpg" alt="my image" onClick={handleSignOut} /></button>
      </li>
    </ul>
  </div>
  <div className="main-content">
    <div className="container">
      <h1>FutureRec</h1>
    </div>
  </div>
</>

  );
}

export default withAuthenticator(App);

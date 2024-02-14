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
  useEffect(() => {
    // JavaScript code to toggle sidebar and set initial content
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');

    btn.onclick = function () {
        sidebar.classList.toggle('active');
    };

    document.addEventListener('DOMContentLoaded', function () {
        changeContent('Home');
    });
  }, []);

  return (
  <>
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
        <a href="#" onclick="changeContent('Home')">
          <i className="bx bxs-home" />
          <span className="nav-item">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li>
        <a href="#" onclick="changeContent('Grades')">
          <i className="bx bx-bar-chart" />
          <span className="nav-item">Grades</span>
        </a>
        <span className="tooltip">Grades</span>
      </li>
      <li>
        <a href="#" onclick="changeContent('Tutoring')">
          <i className="bx bxs-pencil" />
          <span className="nav-item">Tutoring</span>
        </a>
        <span className="tooltip">Tutoring</span>
      </li>
      <li>
        <a href="#" onclick="changeContent('Majors')">
          <i className="bx bxs-graduation" />
          <span className="nav-item">Majors</span>
        </a>
        <span className="tooltip">Majors</span>
      </li>
      <li>
        <a href="#" onclick="changeContent('Careers')">
          <i className="bx bxs-briefcase-alt-2" />
          <span className="nav-item">Careers</span>
        </a>
        <span className="tooltip">Careers</span>
      </li>
      <li>
        <a href="#" onclick="changeContent('Settings')">
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
    <div className="container" id="contentContainer">
    </div>
  </div>
</>

  );
}

function changeContent(pageName){
  var content = fetchContentForPage(pageName);
  document.getElementById('contentContainer').innerHTML = content;
}

function fetchContentForPage(pageName){
  switch(pageName){
      case 'Home':
          return '<h1>Home</h1>';
      case 'Grades':
          return '<h1>Grades</h1>';
      case 'Tutoring':
          return '<h1>Tutoring</h1>';
      case 'FutureRec':
          return '<h1>FutureRec</h1>';
      case 'Majors':
          return '<h1>Majors</h1>';
      case 'Careers':
          return '<h1>Careers</h1>';
      case 'Settings':
          return '<h1>Settings</h1>';
      case 'Logout':
          return '<h1>Logout</h1>';
      default:
          return '<h1>Home</h1>';
  }
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.classList.toggle('show');
}

export default withAuthenticator(App);

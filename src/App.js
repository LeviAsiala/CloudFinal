import { Amplify } from 'aws-amplify';
import { listClasses } from './graphql/queries';
import {generateClient} from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from 'aws-amplify/auth';
import profileImg from "./profile.jpg";
import logoutImg from "./logout.jpg";
import { getCurrentUser } from 'aws-amplify/auth';
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
const API = generateClient();

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

async function changeContent(pageName){
  try {
    var content = await fetchContentForPage(pageName);
    document.getElementById('contentContainer').innerHTML = content;
  } catch (error) {
    console.error('Error changing content: ', error);
  }
}

async function fetchContentForPage(pageName){
  try {
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
  } catch (error) {
    console.error('Error fetching content for page: ', error);
    return '<h1>Error loading content</h1>';
  }
}

function App({signOut, user}) {
  const firstName = user.attributes['name'];
  const lastName = user.attributes['family_name'];
  const [userData, setUserData] = useState(null);

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
    fetchUserData();
  }, []);

   async function fetchUserData() {
     try {
       const userInfo = await getCurrentUser(); // Get authenticated user info
  
       console.log(userInfo); 
     } catch (error) {
       console.error('Error fetching user data:', error);
     }
   }

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
      <img src={profileImg} alt="me" className="user-img" />
      <div>
        <p className="bold">{firstName}{lastName}</p>
        <p>Test</p>
      </div>
    </div>
    <ul>
      <li>
        <a href="#" onClick={fetchUserData}> 
        {/* () => changeContent('Home')}> */}
          <i className="bx bxs-home" />
          <span className="nav-item">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li>
        <a href="#" onClick={() => changeContent('Grades')}>
          <i className="bx bx-bar-chart" />
          <span className="nav-item">Grades</span>
        </a>
        <span className="tooltip">Grades</span>
      </li>
      <li>
        <a href="#" onClick={() => changeContent('Tutoring')}>
          <i className="bx bxs-pencil" />
          <span className="nav-item">Tutoring</span>
        </a>
        <span className="tooltip">Tutoring</span>
      </li>
      <li>
        <a href="#" onClick={() => changeContent('Majors')}>
          <i className="bx bxs-graduation" />
          <span className="nav-item">Majors</span>
        </a>
        <span className="tooltip">Majors</span>
      </li>
      <li>
        <a href="#" onClick={() => changeContent('Careers')}>
          <i className="bx bxs-briefcase-alt-2" />
          <span className="nav-item">Careers</span>
        </a>
        <span className="tooltip">Careers</span>
      </li>
      <li>
        <a href="#" onClick={() => changeContent('Settings')}>
          <i className="bx bxs-cog" />
          <span className="nav-item">Settings</span>
        </a>
        <span className="tooltip">Settings</span>
      </li>
      <li>
        <button><img src={logoutImg} alt="my image" onClick={handleSignOut} /></button>
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

export default withAuthenticator(App);

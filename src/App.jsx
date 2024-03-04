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
import { fetchUserAttributes } from 'aws-amplify/auth';
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

async function displayHome(){
  return(
    <>
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to FutureRec!</p>
      <p>Unlock your full potential with our range of features designed to support your educational journey. Whether you're seeking top grades, personalized tutoring assistance, insightful recommendations, or simply looking to explore various school resources, you'll find everything you need right here.</p>
      <p>Empower yourself with our grade tracking system, allowing you to monitor your progress effortlessly and stay on top of your academic goals. Need a helping hand? Our dedicated team of tutoring assistants is ready to provide tailored support and guidance, ensuring you grasp even the most challenging concepts with confidence.</p>
      <p>At FutureRec, education is more than just grades—it's about fostering a supportive community and empowering students to thrive. Join us on this journey of learning, growth, and endless possibilities. Welcome to a brighter academic future.</p>
    </div>
    </>
  );
}

async function fetchContentForPage(pageName){
  try {
    switch(pageName){
      case 'Home':
          //return '<h1>Home</h1>';
          displayHome();
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
  const [full_name, setFullName] = useState("");

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
      const userInfo = await fetchUserAttributes(getCurrentUser()); // Get authenticated user info
      setFullName(userInfo.name + " " + userInfo.family_name);
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
        <p className="bold">{full_name}</p>
      </div>
    </div>
    <ul>
      <li>
        <a href="#" onClick={() => changeContent('Home')}>
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

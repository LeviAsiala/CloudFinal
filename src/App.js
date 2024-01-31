import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  DOCTYPE! html&gt;
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
        <a href="#">
          <i className="bx bx-log-out" />
          <span className="nav-item">Logout</span>
        </a>
        <span className="tooltip">Logout</span>
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

export default App;

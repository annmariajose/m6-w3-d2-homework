import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  //Insert router, links here
  return (
    <div>
      <h2 className="m-5">TV APPS</h2>
      <Router>
        <Link to="/netflix">
          <img className="nf" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" />
        </Link>
        <Link to="/hbo-max">
          <img className="hb" src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" />
        </Link>
        <Link to="/hulu">
          <img className="hu" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" />
        </Link>
        <Link to="/prime-video">
          <img className="pr" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" />
        </Link>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </Router>
    </div>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div className="idHeading">
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
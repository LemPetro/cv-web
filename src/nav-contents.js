import React from "react";
import "./App.css";

function NavContents(){
    return (
        <nav className="nav-bar">
        <div className='Title'>
          <h1>Lem / Petro</h1>
        </div>
        <ul className='list-items'>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </nav>
    );
}


export default NavContents;

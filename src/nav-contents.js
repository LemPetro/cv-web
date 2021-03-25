import React from "react";
import "./App.css";

function NavContents() {
  return (
    <nav className="nav-bar">
      <div className='hamburgerMenu'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className="Title">
        <a href="#">Lem / Petro</a>
      </div>
      <div className="list-items">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default NavContents;

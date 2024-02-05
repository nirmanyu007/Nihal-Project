import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../css/LinkBar.css'


export default function LinkBar() {
  return (
    <div className="color">
      <ul>
        <li>
          <a href="default.asp">About</a>
        </li>
        <li>
          <a href="news.asp">Web Development</a>
        </li>
        <li>
          <a href="contact.asp">App Development</a>
        </li>
        <li>
          <a href="about.asp">AI/ML</a>
        </li>
        <li>
          <a href="about.asp">Testing</a>
        </li>
        <li>
          <a href="about.asp">Consultancy</a>
        </li>
        <li>
          <a href="about.asp">Hire</a>
        </li>
        <li>
          <a href="about.asp">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

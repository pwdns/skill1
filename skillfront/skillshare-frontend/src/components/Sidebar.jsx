import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h3>Topics</h3>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Popular</a></li>
      <li><a href="/">Technology</a></li>
      <li><a href="/">Movies</a></li>
    </ul>
    <h3>Resources</h3>
    <ul>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Sidebar;

import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h3>Topics</h3>
    <ul>
      <li>Home</li>
      <li>Popular</li>
      <li>Technology</li>
      <li>Movies</li>
    </ul>
    <h3>Resources</h3>
    <ul>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Sidebar;

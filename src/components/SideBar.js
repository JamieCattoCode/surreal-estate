import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const SideBar = () => (
  <div className="sidebar">
    <Link to={'?query={"city": "manchester"}'}>Manchester</Link>
    <Link to={'?query={"city": "leeds"}'}>Leeds</Link>
    <Link to={'?query={"city": "sheffield"}'}>Sheffield</Link>
    <Link to={'?query={"city": "liverpool"}'}>Liverpool</Link>
  </div>
);

export default SideBar;

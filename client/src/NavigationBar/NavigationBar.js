import React from 'react';
import { NavLink } from "react-router-dom";
import '../NavigationBar/NavigationBar.css'
function NavigationBar () {
  return (
    <div className="NavigationBar">
        <header>
            <h1>Alleycat Calendar</h1>
            <div className='Nav-Subtitle'>The Online Schedule of Upcoming Races.</div>
            <div>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/">About Us</NavLink>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/all">Previous Races</NavLink>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/create">Create a race</NavLink>
                <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/findall">All new races</NavLink>
            </div>
        </header>
    </div>
    
)
}
export default NavigationBar;
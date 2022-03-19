import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import  AuthService from '../services/authService';
import '../NavigationBar/NavigationBar.css'

export default class NavigationBar extends Component{
    constructor(props) {
        super(props);
        this.user = AuthService.getCurrentUser();
        this.logOut = this.logOut.bind(this);
        this.state = {
            currentUser : undefined
        }
    }
    logOut(){
        AuthService.logout();
      };
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user
            })
        }
    }
    render(){
        const { currentUser } = this.state;
        return(
            <div className="NavigationBar">
                <header>
                    <h1>Alleycat Calendar</h1>
                    <div className='Nav-Subtitle'>The Online Schedule of Upcoming Races.</div>
                    <div>
                        {!currentUser && <NavLink className= "" to="/">About Us</NavLink>}
                        {!currentUser && <NavLink className= "" to="/all">Previous Races</NavLink>}
                        {!currentUser && <NavLink className= "" to="/create">Create a race</NavLink>}
                        {!currentUser && <NavLink className= "" to="/findall">All new races</NavLink>}
                        {!currentUser&& <NavLink className= "" to="/signup">Sign up</NavLink>}
                        {!currentUser && <NavLink className= "" to="/login">Log In</NavLink>}
                        {currentUser&& <NavLink className= "" to="/logout" onClick={this.logOut}>Log Out</NavLink>}
                    </div>
                </header>
            </div>
        )
        
    }
}

// function NavigationBar () {
//         const user = UserService.getCurrentUser();

//   return (
//     <div className="NavigationBar">
//         <header>
//             <h1>Alleycat Calendar</h1>
//             <div className='Nav-Subtitle'>The Online Schedule of Upcoming Races.</div>
//             <div>
//                 {!user && <NavLink className= "" to="/">About Us</NavLink>}
//                 {!user && <NavLink className= "" to="/all">Previous Races</NavLink>}
//                 {user && <NavLink className= "" to="/create">Create a race</NavLink>}
//                 {!user && <NavLink className= "" to="/findall">All new races</NavLink>}
//                 {!user && <NavLink className= "" to="/signup">Sign up</NavLink>}
//                 {!user && <NavLink className= "" to="/login">Log In</NavLink>}
//                 {user && <NavLink className= "" to="/logout" onClick={}>Log Out</NavLink>}
//             </div>
//         </header>
//     </div>
    
// )
// }

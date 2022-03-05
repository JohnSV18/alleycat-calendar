import { NavLink } from 'react-router-dom'
import './Header.css';
function Header() {
    return (
        <div className="Header">
            <header>
                <h1>Alleycat Calendar</h1>
                <div className='Header-Subtitle'>The Online Schedule of Upcoming Races.</div>
                <div>
                    <NavLink 
                            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                            to="/">About Us</NavLink>
                    <NavLink 
                            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                            to="/past-races">Previous Races</NavLink>
                </div>
            </header>
        </div>
        
    )
}
export default Header;

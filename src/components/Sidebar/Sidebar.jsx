import './Sidebar.css';
import { useState } from 'react';
//imagen en la misma carpeta, cambiar la ruta
//import avatarImage from './path_to_avatar_image.jpg';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            
            <button className="hamburger-menu" 
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >☰</button>

            <div className="header">
                <img src={''} alt="Avatar" className="avatar"/>
                <div className="title">
                    <h2>New and trending</h2>
                    <p>Based on player count</p>
                </div>
            </div>
            <nav>
                <div className="links-navbar">
                    <a className="links-home" href="#">Home</a>
                    <a className="links-dark" href="#">Review</a>
                    <a className="links-dark" href="#">New releases</a>
                </div>

                <div className="links-time">
                    <div className="links-time2">
                        <div className="icon-navbar">
                            {/* ícono aqui */}
                        </div>
                        <a className="links-time-week" href="#">This week</a>
                    </div>
                    <div className="links-time2">
                        <div className="icon-navbar">
                            {/* ícono aqui */}
                            </div>
                        <a href="#">This month</a>
                    </div>
                    <div className="links-time2">
                        <div className="icon-navbar">
                            {/* ícono aqui */}
                            </div>
                        <a href="#">Coming soon</a>
                    </div>
                </div>

                <div className="links-popular">
                    <h2>Popular</h2>
                    <div className="links-popular2">
                        <div className="icon-navbar-popular">
                            {/* ícono aqui */}
                            </div>
                        <a href="#" className="last-search">Last searches</a>
                    </div>
                    <div className="links-popular2">
                        <div className="icon-navbar-popular">
                            {/* ícono aqui */}
                            </div>
                        <a href="#">Best of the year</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

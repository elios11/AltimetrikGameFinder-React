import './Sidebar.css';
import desktopAvatarCustom from '../Sidebar/img/desktopavatarcustom.svg';
import desktopSwitchon from '../Sidebar/img/desktopswitchon.svg';
import clock from '../Sidebar/img/clock.svg';
import calendar from '../Sidebar/img/calendar.svg';
import star from '../Sidebar/img/star.svg';
import thumbsUp from '../Sidebar/img/thumbs-up.svg';
import search from '../Sidebar/img/search.svg';
import x from '../Sidebar/img/x.svg';
import React, { useState } from 'react';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            
            {!isSidebarOpen ? (
                <button className="hamburger-menu" 
                    onClick={() => setSidebarOpen(true)}
                >☰</button>
            ) : (
                <>
                    <div className="header">
                        <button className="close-icon" onClick={() => setSidebarOpen(false)}>
                            <img src={x} alt="Close" />
                        </button>
                        <img src={desktopAvatarCustom} alt="Avatar" className="avatar"/>
                        <div className="title">
                            <h2>Jane Doe</h2>
                            <p>@janedoe</p>
                        </div>
                    </div>
                    <div className="line-div"></div>
                    <nav>
                        <a className="nav-item" href="#">Home</a>
                        <a className="nav-item" href="#">Reviews</a>
                        <a className="nav-item" href="#">New Releases</a>

                        <div className="nav-item-with-icon">
                            <img src={star} alt="This week icon"/>
                            <a href="#">This week</a>
                        </div>
                        <div className="nav-item-with-icon">
                            <img src={calendar} alt="This month icon"/>
                            <a href="#">This month</a>
                        </div>
                        <div className="nav-item-with-icon">
                            <img src={clock} alt="Coming soon icon"/>
                            <a href="#">Coming soon</a>
                        </div>

                        <h2 className="nav-section-title">Popular</h2>
                        <div className="nav-item-with-icon">
                            <img src={search} alt="Last searches icon"/>
                            <a href="#" className="last-search">Last searches</a>
                        </div>
                        <div className="nav-item-with-icon">
                            <img src={thumbsUp} alt="Best of the year icon"/>
                            <a href="#">Best of the year</a>
                        </div>
                    </nav>
                    <div className="line-div"></div>
                        <span className="logout">Dark mode</span> 
                        <img src={desktopSwitchon} alt="Dark Mode Icon" className="dark-mode-icon"/>
                    <div className="line-div"></div>
                    <div className="logout">Logout</div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Navbar.css';
import Logo from './images/youtube_logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <MenuIcon className="navbar__left__menuIcon" />
                <img src={Logo} alt="Youtube logo" className="navbar__left__logo" />
            </div>
            <div className="navbar__center">
                <input type="text" className="navbar__center__input" placeholder="Search"/>
                <SearchIcon className="navbar__center__searchBtn" />
            </div>
            <div className="navbar__right">
                <VideoCallIcon className="navbar__right__icon" />
                <AppsIcon className="navbar__right__icon" />
                <NotificationsIcon className="navbar__right__icon" />
                <AccountCircleIcon className="navbar__right__icon navbar__right__icon__avatar" />
            </div>
        </div>
    );
}

export default Navbar;
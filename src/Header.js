import React from 'react'
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoIcon from "@material-ui/icons/VideoCall";
import NotificationIcon from "@material-ui/icons/Notifications";
import AppIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

//es7 snippets extention rfce
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Logo of YouTube (2015-2017).svg">
                </img>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
                <VideoIcon />
                <AppIcon />
                <NotificationIcon />
                <Avatar
                    alt="Praveen Teotia"
                    src="https://avatars1.githubusercontent.com/u/37291981?s=460&u=b0b31a2a3ed5fb51f9869f9f9ac9d1c95f6f876c&v=4"
                />
            </div>

        </div>
    )
}

export default Header

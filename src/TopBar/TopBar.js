import React from "react";
import classes from './TopBar.module.css'
const TopBar = () => {
    return (
        <header>

        <nav className={classes.Topbar}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon log"
        />
      </nav>
        </header>
    )
}

export default TopBar

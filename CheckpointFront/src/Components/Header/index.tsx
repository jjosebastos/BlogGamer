import React from "react";
import './style.css'

const Header : React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="logo_icon">
                    <a href="#"><img src="../assets/Group.png" alt="Icone do logo" /></a>
                </div>
                <nav className="nav_bar">
                    <img src="" alt="" />
                    <span>Menu</span>
                </nav>
                <div className="search_bar">
                    <input type="search" name="" id="input_search" alt="Search" />
                </div>
                <div className="login_bar">
                    <button>LOGIN</button>
                </div>
            </div>
        </>
    )
}
export default Header;
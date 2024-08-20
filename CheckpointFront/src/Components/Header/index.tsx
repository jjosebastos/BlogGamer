import React from "react";
import logoHeader from "../../assets/Vector-2.png"
import './style.css'
import burger from '../../assets/burger.png';
import search from '../../assets/search.png';

const Header : React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="logo_icon">
                    <a href="#"><img src={logoHeader} className="img_logo" alt="Icone do logo"/></a>
                </div>
                <nav className="nav_bar">
                    <img src={burger} alt="burger image" />
                    <span>Menu</span>
                </nav>
                <div className="search_bar">
                    <a href="#">
                        <img src={search} alt="" />
                    </a>
                    <input type="search" name="" id="input_search" placeholder="Search" />
                </div>
                <div className="login_bar">
                    <button>LOGIN</button>
                </div>
            </div>
        </>
    )
}
export default Header;
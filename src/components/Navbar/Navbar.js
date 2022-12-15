import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="p__opensans_1">
                <h1>
                    <Link to="/home" style={{fontFamily: 'var(--font-base)',color:'#dcca87'}}>MFM FOOD</Link>
                </h1>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans_1">
                    <Link to="/home">Home</Link>
                </li>
                <li className="p__opensans_1">
                    <Link to="/About">About</Link>
                </li>
                <li className="p__opensans_1">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="p__opensans_1">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="app__navbar-login">
                <Link to="/booking" className="p__opensans_1">Book Table</Link>
                <Link to="/delivery" className="p__opensans_1">Delivery</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}
                />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />
                        <ul className="app__navbar-smallscreen_links">
                            <li>
                                <Link to="/home" onClick={() => setToggleMenu(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to="/About" onClick={() => setToggleMenu(false)}>About</Link>
                            </li>
                            <li>
                                <Link to="/menu" onClick={() => setToggleMenu(false)}>Menu</Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

import React from "react";

import {SubHeading} from "../../components";
import {images} from "../../constants";
import "./Header.css";
import {Gallery} from "../index";
import {Link} from "react-router-dom";

const Header = () => (
    <section>
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavour"/>
                <h1 className="app__header-h1">The Key To Fine Dining</h1>
                <p className="p__opensans_1" style={{margin: "2rem 0"}}>
                    Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
                    morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
                    tellus{" "}
                </p>
                <button type="button" className="custom__button">
                    <Link to='/menu'>Explore Menu</Link>
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.welcome} alt="header_img"/>
            </div>
        </div>
        <div>
            <Gallery/>
        </div>
    </section>

);

export default Header;

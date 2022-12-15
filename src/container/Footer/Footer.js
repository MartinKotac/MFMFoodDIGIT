import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans_1">Koce Metalec St, Skopje, 1000, MKD</p>
        <p className="p__opensans_1">+389 71-400-166</p>
        <p className="p__opensans_1">+389 78-592-212</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.mfmLogo} alt="footer_logo" />
        <p className="p__opensans_1">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans_1">Monday-Friday:</p>
        <p className="p__opensans_1">08:00 am - 12:00 am</p>
        <p className="p__opensans_1">Saturday-Sunday:</p>
        <p className="p__opensans_1">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans_1">2022 MFM Food DIGIT.</p>
    </div>
  </div>
);

export default Footer;

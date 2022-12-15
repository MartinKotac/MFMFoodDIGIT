import React from "react";
import {Row,Col,Container} from "react-bootstrap"

const FindUs = () => (
  <section style={{marginTop:'50px', marginBottom: '50px'}}>
  <Container>
    <div className="app__wrapper_info">
      <Row>
        <Col>
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Praska 19 , Taftalidze , Skopje
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
      </Col>

      <Col>
      <div className="google-map-code" style={{paddingLeft:'400px'}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1470.6061315413338!2d21.39635828704981!3d41.99827055726828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354146ccb6dafd5%3A0xe57d683b0560bc4d!2sPrashka%2019%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1671055766315!5m2!1sen!2smk" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div>
      </Col>
      </Row>
      </div>
      </Container>
      </section>
    

    
);

export default FindUs;
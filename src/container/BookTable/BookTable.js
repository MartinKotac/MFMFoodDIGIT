import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row,Col} from 'react-bootstrap';
import './BookTable.css'
import {data} from "../../constants";
import React from "react";

const BookTable = () => {
    return(
    <div style={{ backgroundColor:'#0c0c0c'}}>
    <div className='container' style={{paddingLeft:'50px'}}>
        <Row >
            {data.offers.map((offer,index) => (
                <Col>
                <Card className='cardDesign ' >
                    <Card.Body style={{minHeight: '200px'}}>
                        <Card.Title className='cardDesignTitle'>Offer {index + 1}</Card.Title>
                        <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                            {offer.food}   {offer.wine}   {offer.price}
                        </Card.Text>
                        <Button className='buttonDesign'>Book</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </div>
    </div>
    )
}

export default BookTable;
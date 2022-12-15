import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import './BookTable.css'
import React, {useState} from "react";
import Form from "react-bootstrap/Form";


const BookTable = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div style={{backgroundColor: '#0c0c0c'}}>
            <div className='container' style={{paddingLeft: '50px'}}>
                <Row>
                    <Col>
                        <Card className='cardDesign'>
                            <Card.Body>
                                <Card.Title className='cardDesignTitle'>Table 1</Card.Title>
                                <Card.Text style={{fontSize: '20px', textAlign: 'center'}}>
                                    Select this table and choose from our menu options
                                </Card.Text>
                                <Button onClick={() => {
                                    setShowForm(!showForm)
                                }} className='buttonDesign'>Book</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    {showForm &&
                    <div style={{backgroundColor: '#0c0c0c'}}>
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <Form className='forma'>
                                        <Form.Group>
                                            <Form.Label className='labeli'>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name"/>
                                            <Form.Text className="text-muted">
                                                So we can make sure everything as it should be
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formAddress">
                                            <Form.Label className='labeli'>Address</Form.Label>
                                            <Form.Control type="text" placeholder="Enter address"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formPhone">
                                            <Form.Label className='labeli'>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="07X-XXX-YYY"/>
                                        </Form.Group>
                                        <Button variant="primary" type="button" className='custom__button' style={{
                                            textAlign: 'center',
                                            position: 'relative',
                                            left: '28%',
                                            width: '200px'
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    }
                </Row>
            </div>
        </div>
    )
}

export default BookTable;
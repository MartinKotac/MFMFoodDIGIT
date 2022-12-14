import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import seaFood from "../../constants/data";
import "./DeliveryForm.css"
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeliveryForm = () => {
    const [data, setData] = useState({
        name: '',
        address: '',
        phone: '',
        formFood: '',
        payment: 'cash'
    })

    const notify = () => toast.success("Successful order!");
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        notify();
    }
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setData({...data, [e.target.id]: e.target.value})
    }

    return (
        <div style={{backgroundColor: '#0c0c0c'}}>
            <Container>
                <Row>
                    <Col lg="4">
                        <Form className='forma' onChange={handleChange}>
                            <Form.Group className='mb-4'>
                                <Form.Label className='labeli' htmlFor='name'>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" id='name'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formAddress">
                                <Form.Label className='labeli' htmlFor='address'>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" id='address'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formPhone">
                                <Form.Label className='labeli' htmlFor='phone'>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="07X-XXX-YYY" id='phone'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formFood">
                                <Form.Select placeholder="Select your food">
                                    <option selected disabled>Select your food</option>
                                    {seaFood.seaFood.map(food =>
                                        <option value={food.title} id='formFood'>{food.title} {food.price}</option>
                                    )}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formCash">
                                <Form.Label className='labeli' htmlFor='payment'>Select your payment</Form.Label>
                                <div className='pari labeli'>
                                    <div className="row"
                                         style={{paddingLeft: '130px', paddingTop: '15px', paddingBottom: '10px'}}>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <label>
                                                <input value='cash' type="radio" id='payment' name="payment"
                                                       className="card-input-element"/>
                                                <div className="panel panel-default card-input">
                                                    <div className="panel-heading">CASH</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <label>
                                                <input value='card' type="radio" id='payment' name="payment"
                                                       className="card-input-element"/>

                                                <div className="panel panel-default card-input">
                                                    <div className="panel-heading">CARD</div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                            <Button onClick={handleShow} variant="primary" type="button" className='custom__button'
                                    style={{textAlign: 'center', position: 'relative', left: '28%', width: '200px'}}>
                                Submit
                            </Button>
                        </Form>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm your order</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul>
                                    <li>Name: {data.name} </li>
                                    <li>Address: {data.address} </li>
                                    <li>Phone: {data.phone} </li>
                                    <li>Food: {data.formFood} </li>
                                    <li>Payment method: {data.payment}</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className="modal-button" variant="primary" onClick={handleClose}>
                                    Confirm
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <ToastContainer/>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

export default DeliveryForm;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import seaFood from "../../constants/data";


const DeliveryForm = () => (
    <Container>
        <Row>
            <Col lg="4">
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"/>
                        <Form.Text className="text-muted">
                            So we can make sure everything as it should be
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder=""/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="07X-XXX-YYY"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFood">
                        <Form.Select  placeholder="Select your food">
                            <option selected disabled>Select your food</option>
                            {seaFood.seaFood.map(food => {
                                return (<option value={food.title}>{food.title}  {food.price}</option>);
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCash">
                        <Form.Label>Select your payment</Form.Label>
                        <Form.Check type="radio" name="payment" label="Cash"/>
                        <Form.Check type="radio" name="payment" label="Card"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>

);

export default DeliveryForm;
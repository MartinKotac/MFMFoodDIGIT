import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import seaFood from "../../constants/data";
import "./DeliveryForm.css"

const DeliveryForm = () => (
    <div style={{backgroundColor:'#0c0c0c'}}>
        <Container>
        <Row>
            <Col lg="4">
                <Form  className='forma'>
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
                    <Form.Group className="mb-3" controlId="formFood">
                        <Form.Select  placeholder="Select your food">
                            <option selected disabled>Select your food</option>
                            {seaFood.seaFood.map(food => {
                                return (<option value={food.title}>{food.title}  {food.price}</option>);
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCash">
                        <Form.Label className='labeli'>Select your payment</Form.Label>
                        <div className='pari labeli'>
                        <div class="row" style={{paddingLeft:'130px',paddingTop:'15px',paddingBottom:'10px'}}>
    
      <div class="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="product" class="card-input-element" />

            <div class="panel panel-default card-input">
              <div class="panel-heading">CASH</div>
            </div>
        </label>
        
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="product" class="card-input-element" />

            <div class="panel panel-default card-input">
              <div class="panel-heading">CARD</div>
            </div>
        </label>
        
      </div>
      </div>
  </div>
                    </Form.Group>
                    <Button variant="primary" type="button" className='custom__button' style={{textAlign:'center',position:'relative',left:'28%',width:'200px'}}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    </div>
    
);

export default DeliveryForm;
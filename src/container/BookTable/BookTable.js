import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { images } from "../../constants";
import { Row,Col,Dropdown } from 'react-bootstrap';

const BookTable = () => {
    return(

    <div className='container'>
        <Row>
            <Col>
                <Card style={{ width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 1</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray'}}>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 2 </Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray'}}>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 3</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray'}}>Book</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card style={{ width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 4</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray'}}>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 5 </Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray'}}>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{alignItems:'center', justifyContent:'center', width: '18rem', marginTop: '50px', backgroundColor: '#dcca87', borderColor:'#cdb867', borderWidth:'2px',fontFamily: 'var(--font-base)'}}>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>Table 6</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button style={{backgroundColor:'black', borderColor:'gray', alignItems:'center', justifyContent:'center', position: 'relative'}}>Book</Button>
                    {/* on click show dropdown */}
                </Card.Body>
                </Card>
            </Col>
        </Row>
        

    </div>
    )

}

export default BookTable;
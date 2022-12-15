import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row,Col} from 'react-bootstrap';
import './BookTable.css'

const BookTable = () => {
    return(
    <div style={{ backgroundColor:'#0c0c0c'}}>
    <div className='container'>
        <Row>
            <Col>
                <Card className='cardDesign'>
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 1</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='cardDesign' >
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 2 </Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='cardDesign'>
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 3</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card className='cardDesign'>
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 4</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='cardDesign'>
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 5 </Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className='cardDesign'>
                <Card.Body>
                <Card.Title className='cardDesignTitle'>Table 6</Card.Title>
                <Card.Text style={{ fontSize:'20px', textAlign:'center'}}>
                Select this table and choose from our menu options
                </Card.Text>
                <Button className='buttonDesign'>Book</Button>
                    {/* on click show dropdown */}
                </Card.Body>
                </Card>
            </Col>
        </Row>
        

    </div>
    </div>
    )
}

export default BookTable;
import {Link} from "react-router-dom";

const NotFound = () => (
    
    <div>
        <div style={{backgroundColor:'#0c0c0c', color: '#dcca87', fontSize: '64px',lineHeight:'83px',textTransform:'capitalize',textAlign:'center'}}>Page not found</div>

        <div style={{backgroundColor:'#0c0c0c',textAlign:'center'}}>
        <Link to="/home" className="custom__button" style={{lineHeight:'100px',textDecoration:'none',}}>Return to Home Page</Link>
      
        </div>
    </div>
);

export default NotFound;



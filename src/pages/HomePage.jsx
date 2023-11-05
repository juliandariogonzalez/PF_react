import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import relleno from "./relleno.png"
import { Link } from 'react-router-dom';




const homePage = () => {
  return (
    <div>
      <h1>Bienvenidos</h1>
        <Container className="text-center">
          <Link to="/bicicletas"> 
          <img src={relleno} alt="foto-relleno" />
          </Link>
        </Container>
      
    </div>
  );
};

export default homePage;

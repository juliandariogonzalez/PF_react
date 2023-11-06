import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img from "/src/imagenes/fondo.png";
import CartWidget from "./CartWidget";

const Header = ()=> {
  return (
    <>
      <header>

        <div>
        <h4> Abona en cuotas sin interes! </h4>
        </div>

        <Container className="text-center">
        <Navbar.Brand href="/"> <img src={img}  width="25%" height="25%"  alt="Logo-Bike" /> </Navbar.Brand>
        </Container>


        <Nav expand="lg" className="mi-navbar">
          <Container>
          <ul className='text-center'>

          <Button variant="outline-danger m-3" size='sm' >  <Nav.Link href="/bicicletas"> Bicicletas </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="/indumentaria"> Indumentaria </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="/accesorios"> Accesorios </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="/componentes"> componentes </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="/sobre_nosotros"> Sobre nosotros </Nav.Link> </Button>{' '}
          <Button  variant=" m-5" size='xl'><CartWidget></CartWidget>            </Button>
          </ul>
          </Container>


        </Nav >

      </header>
    </>
  );
}

export default Header;



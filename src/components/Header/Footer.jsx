import Nav from "react-bootstrap/Nav";
import "./footer.css";
import img from "./logo-rocky-bikes.png";

function BasicExample() {
  return (
    <div>
      <li className="footer">
        <h5 className="logo-instagram">
          <Nav.Link href="https://instagram.com">Seguinos en Instagram</Nav.Link>
        </h5>
        <h3 className="home-footer">
        <Nav.Link href="/"> <img src={img}  width="30%" height="30%" alt="Logo-Bike" /> </Nav.Link>
        </h3>
        <h5 className="logo-facebook">
          <Nav.Link href="https://facebook.com">Seguinos en Facebook</Nav.Link>
        </h5>
      </li>
    </div>
  );
}

export default BasicExample;

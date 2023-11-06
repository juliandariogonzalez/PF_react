import Nav from "react-bootstrap/Nav";
import "./footer.css";
import img from "./logo-rocky-bikes.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function BasicExample() {
  return (
    <div>
      <li className="footer">
        <h5 className="logo-instagram">
          <Nav.Link href="https://instagram.com">
            Seguinos en Instagram <br />
            <BsInstagram />
          </Nav.Link>
        </h5>
        <h3 className="home-footer">
          <Nav.Link href="/">
            {" "}
            <img src={img} width="38%" height="40%" alt="Logo-Bike" />{" "}
          </Nav.Link>
        </h3>
        <h5 className="logo-facebook">
          <Nav.Link href="https://facebook.com">
            Seguinos en Facebook <br />
            <BsFacebook />
          </Nav.Link>
        </h5>
      </li>
    </div>
  );
}

export default BasicExample;

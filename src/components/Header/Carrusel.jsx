import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";
import { Link } from "react-router-dom";

const Carrusel = () => {
  return (
    <div
      className="text-center"
      style={{ height: "50%", width: "50%", margin: "0 auto" }}
    >
      <Carousel>
        <Carousel.Item>
          <Link to="/bicicletas">
            <img
              className="d-block w-100"
              src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"
              alt=""
            />
          </Link>
          <Carousel.Caption>
            <h3>Bicicletas</h3>
            <p>Conoce todo nuestro stock de Bicicletas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/indumentaria">
            <img
              className="d-block w-100"
              src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"
              alt=""
            />
          </Link>
          <Carousel.Caption>
            <h3>Indumentaria</h3>
            <p>Conoce todo el stock de indumentaria</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/accesorios">
            <img
              className="d-block w-100"
              src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"
              alt=""
            />
          </Link>

          <Carousel.Caption>
            <h3>Accesorios</h3>
            <p>Conoce todo el stock de accesorios</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/componentes">
            <img
              className="d-block w-100"
              src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"
              alt=""
            />
          </Link>

          <Carousel.Caption>
            <h3>Componentes</h3>
            <p>Conoce todo el stock de componentes</p>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;

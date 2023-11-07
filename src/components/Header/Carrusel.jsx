import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";
import { Link } from "react-router-dom";

const Carrusel = () => {
  return (
    <div
      className="text-center"
      style={{height: "50%", width: "50%", margin: "auto", paddingBottom:"80px", }}
    >
      <Carousel>
        <Carousel.Item>
          <Link to="/bicicletas">
            <img
              className="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_737543-MLA50698820652_072022-F.webp"
              alt="bicicleta" style={{ width: "100%", height: "100%" }}
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
              src="https://http2.mlstatic.com/D_NQ_NP_2X_879945-MLA70392712404_072023-F.webp"
              alt="Calza"  style={{   maxWidth: "70%", maxHeight: "100%", marginLeft:"150px" }}
            />
          </Link>
          <Carousel.Caption>
            <h3>Indumentaria</h3>
            <p>Conoce toda la indumentaria</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/accesorios">
            <img
              className="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_741182-MLA47544058768_092021-O.webp"
              alt="inflador"style={{ margin:"50px",maxWidth: "90%", maxHeight: "90%" }}
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
              src="https://http2.mlstatic.com/D_NQ_NP_2X_912031-MLA43105989159_082020-F.webp"
              alt="transmision shimano" style={{ maxWidth: "100%", maxHeight: "100%" }}
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

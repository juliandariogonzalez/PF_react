import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
    
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="danger" onClick={restar}>
          -
        </Button>
        <h2>{contador}</h2>
        <Button variant="danger" onClick={sumar}>
          +
        </Button>

        <Button variant="danger" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

CounterPresentacional.propTypes = {
  sumar: PropTypes.func.isRequired,
  contador: PropTypes.number.isRequired,
  restar: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};


export default CounterPresentacional;
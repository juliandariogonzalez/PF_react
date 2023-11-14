import { Button } from "react-bootstrap";

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




export default CounterPresentacional;
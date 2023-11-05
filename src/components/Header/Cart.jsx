import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2> {product.tittle}</h2>
          <h2> cantidad: {product.quantity}</h2>
        </div>
      ))}

      <Link to="/cheout">
        <Button variant="contained"> Finalizar Cmpra</Button>
      </Link>
      <Button variant="contained" onClick={clearCart}>Vaciar carrito</Button>
    </div>
  );
};

export default Cart;

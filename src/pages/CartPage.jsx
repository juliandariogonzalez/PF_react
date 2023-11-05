import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/Header/CartContext";



const Cart = () => {

  const { cart } = useContext(CartContext)



  return (
    <div>
      <h1>Carrito</h1>

    {cart.map ((product) => (
      <div key= { product.id}>
        <h4> {product.tittle}</h4>
        <h4> Cantidad: {product.quatity} </h4>
      </div>
    ))}

      <Link to="/cheout">
        <Button variant="contained"> Finalizar Compra</Button>
      </Link>
    </div>
  );
};

export default Cart;

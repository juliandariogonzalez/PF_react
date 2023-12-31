import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import  { CartContext } from "../components/Header/CartContext";


const CartPage = () => {
  const {  cart, getQuantityById, getTotalPrice, deleteProductById, clearCart } = useContext(CartContext);

  return(

    <div>
  <h1>Carrito de Compras</h1>
  {cart.map((product) => (
    <div key={product.id}>
      <h3>{product.title}</h3>
      <p>Cantidad: {getQuantityById(product.id)}</p>
      <p>Precio unitario: ${product.price}</p>
      <p>Total: ${product.price * getQuantityById(product.id)}</p>
      <Button onClick={() => deleteProductById(product.id)}>Eliminar del carrito</Button>
    </div>
  ))}
  <p>Total a Pagar: ${getTotalPrice()}</p>
  <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
  <div>

  <Link to="/checkout">
    <Button variant="danger"> Finalizar Compra</Button>
  </Link>
  </div>
  </div>
  )

}

export default CartPage;

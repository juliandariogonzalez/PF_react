import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext);

let total = getTotalPrice();

const clearCartWithAlert = () => {
  Swal.fire({
    title: "Seguro quieres limpiar el carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si, eliminar!",
    denyButtonText: `No, no eliminar!`,
  }).then((result) => {
    if (result.isConfirmed) {
      clearCart();
      Swal.fire("Carrito eliminado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("El carrito queda como estaba", "", "warning");
    }
  });
};

return (
  <div>
    <h1>Estoy en el carrito</h1>

    {cart.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <h3>cantidad: {product.quantity}</h3>

        <Button onClick={()=>deleteProductById(product.id)}>
        </Button>
      </div>
    ))}

    {cart.length > 0 && (
      <div>
        <h2>El total a pagar es : {total}</h2>

        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>

        <Button variant="contained" onClick={clearCartWithAlert}>
          Vaciar Carrito
        </Button>
      </div>
    )}
  </div>
);
};

export default Cart;


import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { BsCart4 } from "react-icons/bs";


const CartWidget = () => {
    const { cart }= useContext(CartContext)
  return (
    <div>
      <Link to="/carrito">
        <Button variant= "danger">  <BsCart4/> <Badge  bg="danger" size='xxl'>{cart.length}</Badge>
    </Button>
      </Link>
    </div>
  )
}

export default CartWidget

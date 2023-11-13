import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { BsCart4 } from "react-icons/bs";


const CartWidget = () => {
    const { cart }= useContext(CartContext)
  return (
    <div>
      <Link to="/cart">
        <BsCart4  style={{ fontSize: '30px', color: 'red', marginRight: '5px' }}/> <Badge  bg="danger" variant="outline-danger m-3" >{cart.length}</Badge>
   
      </Link>
    </div>
  )
}

export default CartWidget

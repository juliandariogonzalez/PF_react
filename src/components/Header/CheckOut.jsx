import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { db } from "../../FireBaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
};

export default Checkout;
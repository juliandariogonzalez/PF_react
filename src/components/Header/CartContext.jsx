import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(  JSON.parse(localStorage.getItem("cart")) || [] ); 
  
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newElement = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newElement);
      localStorage.setItem("cart", JSON.stringify(newElement) )
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]) )
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  // limpiar el carrito

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart")
  };

  // poder borrar un elemento particular del carrito

  const deleteProductById = (id) => {
    let newElement = cart.filter((elemento) => elemento.id !== id);
    setCart(newElement);
    localStorage.setItem("cart", JSON.stringify( newElement ) )
  };

  // obtener el total del carrito

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };
  // obtener la cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity
  };
  
  
  return (
  <CartContext.Provider value={data}>{children}</CartContext.Provider>)
};

export default CartContextComponent;
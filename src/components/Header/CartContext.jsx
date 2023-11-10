import { createContext, useState } from "react";


export const CartContext = createContext()



    
const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] ); 
    

    const addToCart = ( product ) => {
        let exist =isInCart(product.id)
        if(exist) {
            let newElements = cart.map ((elemento) => {
                if (elemento.id == product.id) {
                    return {
                        ...elemento,
                        quantity: elemento.quantity + product.quantity,
                    }
                } else {
                    return elemento;
                }
            });
            setCart (newElements);
            localStorage.setItem("cart", JSON.stringify(newElements) )
        } else {
            setCart([...cart, product]);
            localStorage.setItem("cart", JSON.stringify([...cart, product]) )
        }

    };
    const isInCart = (id) => {
        let exist = cart.some ((elemento) => elemento.id === id);
        return exist;
    };

    const getQuantityById = (id) => {
        let product = cart.find ( elemento => elemento.id === id)
        return product?.quantity
    }

    //limpiar carrito
    const  clearCart = () =>{
        setCart ([])
        localStorage.removeItem("cart")
    }
    const deleteProductById = (id) => {
        let newElements = cart.filter((product) => product.id !== id);
        setCart(newElements);
        localStorage.setItem("cart", JSON.stringify( newElements ) )
      };
    
      // saber el total de productos del carrito
    
      const getTotalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
          return acc + elemento.price * elemento.quantity;
        }, 0);
    
        return total;
      };
      // saber la cantidad de elementos
    
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
    
      return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};


export default CartContextComponent;

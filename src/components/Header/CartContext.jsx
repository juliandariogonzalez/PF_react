import { createContext, useState } from "react";


export const CartContext = createContext()


const CartContextComponent = ( {children} ) => {
    
    const [cart, setCart] = useState( [ ] );

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
        } else {
            setCart([...cart, product]);
        }

    };
    const isInCart = (id) => {
        let exist = cart.some ((elemento) => elemento.id === id);
        return exist;
    };

    const getQuantitybyId = (id) => {
        let product = cart.find ( elemento => elemento.id === id)
        return product?.quantity
    }


    const  clearCart = () =>{
        setCart ([])
    }

    let data = { cart, addToCart, getQuantitybyId, clearCart};
    return <CartContext.Provider value={data}> { children } </CartContext.Provider>;
};


export default CartContextComponent;

import { useContext, useState, useEffect } from "react";
import { db } from "../../FireBaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import {ItemDetail} from "/ItemDetail.jsx";
import Swal from "sweetalert2";

const itemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState({});
    const [showCounter, setShowCounter] = useState(true);

    const {id} = useParams();
    
    const {addToCart, getQuantityById} =useContext(CartContext);

    let TotalQuantity = getQuantityById(id);
    
    useEffect(()=> {
        let itemCollection = collection(db, "products")

        let refDoc = doc(itemCollection, id)
        getDoc(refDoc).then((res)=>{
            setProductSelected( {id: res.id, ...res.data()})
        })
      
    }, [id]);

    const onAdd = (cantidad) => {
      let item = {
        ...productSelected,
        quantity: cantidad,
      };
  
      addToCart(item);
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
  
      setShowCounter(false);
    };
  
    return (
      <ItemDetail
        showCounter={showCounter}
        productSelected={productSelected}
        onAdd={onAdd}
        initial={totalQuantity}
      />
    );
  };


export default itemDetailContainer;
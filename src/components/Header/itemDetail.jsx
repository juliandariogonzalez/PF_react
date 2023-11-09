import { useContext, useState } from "react";
import { db } from "../../FireBaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

const itemDetail = () => {
    const [productSelected, setProductSelected] = useState({});
    const [showCounter, setShowCounter] = useState(true);

    const {id} = useParams();
    
    const {addToCart, getQuantityById} =useContext(CartContext);

    let TotalQuantity = getQuantityById(+id);
    
    useEffect(()=> {
        let itemCollection = collection(db, "products")

        let refDoc = doc(itemCollection, id)
        getDoc(refDoc).then((res)=>{
            setProductSelected( {id: res.id, ...res.data()})
        })
      
    }, [id]);

  return (
    <div></div>
  )
}
}
export default itemDetail
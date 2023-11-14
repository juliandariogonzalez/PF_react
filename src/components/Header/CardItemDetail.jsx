import "./CardItemDetail.css"
import  {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FireBaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";






const CardItemDetail = () => {
    const { addToCart, deleteProductById, clearCart, getTotalPrice } = useContext(CartContext);
    
    const [products, setProducts] = useState([]);
    
    const { id } = useParams();
    
    
    
    
    useEffect(() => {
      const getProducts = async () => {
        const q = query(
          collection(db, "products"),
          where(documentId(), "==", id)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      };
      getProducts();
    }, [id]);
  
    return (
      <div className="div-productos">
        <h1>Detalle: </h1>
      <div id="item" >             
        {products.map((product) => (
          <Card  key={product.id} category={product}  style={{ maxWidth: '800px', Width: '500px', minHeight: "700px" }}>
            <Card.Body className="card-item" style={{ textAlign: 'center' }}>
              <Card.Title >{product.title}
              <Card.Img variant="top" src={product.img} alt={product.title} width={"50%"} height={"45%"}/></Card.Title>
              <Card.Text style={{ fontSize:"30px"}}> Precio: ${product.price} </Card.Text>
              <Card.Text style={{color:"red", fontSize:"20px"}}>Descripcion: <br /> {product.description}</Card.Text>
              
              <div className='mt-auto2' >
             
              <Link to={`/detail/${product.id}`} key={product.id}>
                <Button style={{margin:"10px", justifyContenter:"center"}} variant="danger" onClick={() => addToCart(product)}>
                  Agregar al carrito
                </Button>
                
                <Button style={{margin:"10px", justifyContent:"center"}} onClick={() => deleteProductById()}>Eliminar del carrito</Button>
                
                <Button style={{margin:"10px", justifyContenter:"center"}} onClick={() => clearCart()}>Vaciar Carrito</Button>
              </Link>
                
                <Link to="/checkout">
                <Button style={{margin:"10px", justifyContenter:"center"}} variant="danger" onClick={() => addToCart(product)}>Finalizar Compra</Button>
                </Link>
               <div className="total">
                <p style={{marginTop:"20px", fontSize:"20px", justifyContent:"center"}}>Total a Pagar: ${getTotalPrice()}</p>
               </div>


              </div>
  
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
  };

export default CardItemDetail
import  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FireBaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";






const CardItemDetail = () => {
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
      <div className="">
        {products.map((category) => (
          <Card key={category.id} category={category} className="card" style={{  maxWidth: '500px', height: "7500px" }}>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Img variant="top" src={category.img} alt={category.title} width={"50%"} height={"45%"}/>
              <Card.Title style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.title}</Card.Title>
              <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.description}</Card.Text>
              <Card.Text>Precio: ${category.price}</Card.Text>
              <div className='mt-auto' >
  
              <Link to={`/detail/${category.id}`} key={category.id}>
                <Button  variant="danger">Agregar al carrito</Button><br />
                <Button  variant="danger">Finalizar Compra</Button><br />
                <Button  variant="danger">Eliminar del carrito</Button><br />

              </Link>
              </div>
  
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
  };

export default CardItemDetail
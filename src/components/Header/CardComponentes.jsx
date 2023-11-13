import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../FireBaseConfig";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const CardComponentes = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const q = query(
          collection(db, "products"),
          where("category", "==", "Componentes")
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      };
      getProducts();
    }, []);
  
    return (
      <div className="div-productos">
      <div className="Card-List">
        {products.map((category) => (
          <Card key={category.id} className="card" style={{ maxWidthidth: '18rem'  }}>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Img variant="top" src={category.img} alt={category.title} height={"170rem"}/>
              <Card.Title style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.title}</Card.Title>
              <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.description}</Card.Text>
              <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>Precio: {category.price}</Card.Text>
              <div className='mt-auto' >
  
              <Link to={`/detail/${category.id}`} key={category.id}>
                 <Button  variant="danger">Ver Producto</Button></Link>
              </div>
  
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
  };
  

export default CardComponentes
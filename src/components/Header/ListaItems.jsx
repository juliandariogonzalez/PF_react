import './ListaItems.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import CardBikes from './CardBikes';
// import { Link } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';



const ListaItems = () => {
  const [ items, setItems] = useState([]);

  const {categoryName} =useParams();
  
  useEffect(() => {
    if (!categoryName){
    let productsCollection = collection(db, "products")
    getDocs(productsCollection).then( (res)=> {
      let newElements = res.docs.map((product) => {
          return {id: product.id, ...product.data()};  
        });
        setItems(newElements);
      });
  } else{
    let productsCollection = collection(db, "products");

    let collectionFiltered = query(
      productsCollection,
      where("category", "==", categoryName)
    );
    getDocs(collectionFiltered).then((res) => {
      let newElements =res.docs.map((product) => {
        return {id: product.id, ...product.data() };
      });
      setItems(newElements);
    });
  } 
}, [categoryName]);

  return (
    <div className="div-productos">
    <h1>Todos los productos: {categoryName}</h1>
    <div className="Card-List">
      {items.map((category) => (
        <Card key={category.id} className="card" style={{ maxWidthidth: '18rem'  }}>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Img variant="top" src={category.img} alt={category.title} height={"170rem"}/>
            <Card.Title style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.title}</Card.Title>
            <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.description}</Card.Text>
            <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>Precio: {category.price}</Card.Text>
            <div className='mt-auto' >

            <Link to="/detailitem"> <Button  variant="danger">Ver Producto</Button></Link>
            </div>

          </Card.Body>
        </Card>
      ))}
      </div>
  </div>
);
}



export default ListaItems;
import './ListaItems.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import CardBikes from './CardBikes';
// import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';




const ListaItems = () => {
  const [ items, setItems] = useState([]);

  const {categoryName} =useParams();
  
  useEffect(() => {

    let productsCollection = collection(db, "products")
    getDocs(productsCollection).then( (res)=> {
      let newArray = res.docs.map((product) => {
          return {id: product.id, ...product.data()};  
        });
        setItems(newArray);
      });
  }, [categoryName]);






  return (
    <div>
      <h1>Productos de la categoría: {categoryName}</h1>
      <div className="card-container">
        {items.map((category) => (
          <div key={category.id} className="card">
            <h2>{category.title}</h2>
            <img />
            <p>{category.description}</p>
            <p>Precio: {category.price}</p>
            {/* Aquí puedes agregar más detalles del producto si los tienes */}
          </div>
        ))}
      </div>
    </div>
  );
};



export default ListaItems;
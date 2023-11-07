import './ListaItems.css';
import { useParams, useState, useEffect } from 'react';
import CardBikes from './CardBikes';
import { Link } from 'react-router-dom';
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
    <div className='Card-List'>
    {items.map((item) =>{
      return (
        <div key={item.id}>
          <Link to={`/detailitem/${item.id}`}>          
          <CardBikes key={item.id} item={item}/>
          </Link>
        </div>
          );
    })}
    </div>
    
  );
}

export default ListaItems;
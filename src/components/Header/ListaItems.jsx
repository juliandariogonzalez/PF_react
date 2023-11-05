import './ListaItems.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';
import { Link } from 'react-router-dom';




const ListaItems = () => {
  const [ chars, setChars] = useState([])

  useEffect ( () => {
    axios ("https://api.mercadolibre.com/sites/MLA/search?q=bicicletas").then((res)=> setChars(res.data.results));
  }  );

  return (
    <div className='Card-List'>
    {chars.map((char) =>{
      return (
        <div key={char.id}>
          <Link to={`/detailitem/${char.id}`}>          
          <CardBikes key={char.id} char={char}/>
          </Link>
        </div>
          );
    })}
    </div>
    
  );
}

export default ListaItems;
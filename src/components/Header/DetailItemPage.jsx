import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';
import Spinner from 'react-bootstrap/Spinner';


import {  useParams } from 'react-router-dom';

const DetailItemPage = () => {
  let {id} =useParams();
  const [ items, setChar] = useState([])
  useEffect ( () => {
    axios (`https://api.mercadolibre.com/sites/MLA/search?q=bic/${id}#json`).then((results)=> setChar(results.data));
  }, [id]  );

  return (
    <div style={{ display: 'flex', justifyContent:"center"}}>
      <h1>Detalle del Producto</h1>
      {items.id ? ( <CardBikes char = {items} id={items.id} title={items.title} thumbnail={items.thumbnail} />
      ) : (     
        <div >

          <Spinner animation="border" variant="danger" />
          <p >Cargando...</p>
        </div> 
   
      )}
      <div>

          <p>
          </p>
      </div>
    </div>
  )
}

export default DetailItemPage;
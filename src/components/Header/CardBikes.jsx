// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import CardBikes from './CardBikes';
// import { Link } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';
// import {Card, Button} from "react-bootstrap"
// import { Link } from 'react-router-dom';



const CardBikes = () => {
    const [ Bicicletas, setBicicletas] = useState([]);
    
    useEffect(() =>{
        const getBicicletas = async() => {
            const q = query(collection(db, "products"), where("category", "==", Bicicletas))
            const docs =[];
            const querySnapshot= await getDocs(q);
            querySnapshot.forEach((doc)=> {
                docs.push({...doc.data(), id: doc.id});
                console.log(doc.id, " =>", doc.data())

            })
            setBicicletas(docs);
        };
        getBicicletas();

   },[Bicicletas] );
}
 


export default CardBikes
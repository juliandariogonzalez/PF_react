// import { Card, Button } from 'react-bootstrap';
// import './ListaItems.css';
// import { Link } from 'react-router-dom';
// import "./CardBikes.css"

// import { img } from '../../FireBaseConfig';



// const CardBikes = () => {
//     const [ items, setItems] = useState([]);
  
//     const {categoryName} =useParams();
    
//     useEffect(() => {
  
//       let productsCollection = collection(db, "products")
//       getDocs(productsCollection).then( (res)=> {
//         let newArray = res.docs.map((product) => {
//             return {id: product.id, ...product.data()};  
//           });
//           setItems(newArray);
//         });
//     }, [categoryName]);
//     return (
//         <div>
//         <h1>Todos los productos: {categoryName}</h1>
//         <div className="card-container">
//           {items.map((category) => (
//             <Card key={category.id} className="card">
//               <Card.Body>
//                 <Card.Title>{category.title}</Card.Title>
//                 <Card.Img src={category.image} alt={category.title} />
//                 <Card.Text>{category.description}</Card.Text>
//                 <Card.Text>Precio: {category.price}</Card.Text>
//                 {/* Puedes agregar más detalles del producto aquí si los tienes */}
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

// export default CardBikes;
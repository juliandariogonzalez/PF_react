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
//           <h1>Productos de la categoría: {categoryName}</h1>
//           <div className="card-container">
//             {item.map((category) => (
//               <div key={category.id} className="card">
//                 <h2>{category.title}</h2>
//                 <p>{category.description}</p>
//                 <p>Precio: {category.price}</p>
//                 {/* Aquí puedes agregar más detalles del producto si los tienes */}
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }

// export default CardBikes;
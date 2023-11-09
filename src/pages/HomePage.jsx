import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Carrusel from '../components/Header/Carrusel';
import ListaItems from '../components/Header/ListaItems';


const homePage = () => {
  return (
    <div>
      <h1 className='text-center'>Bienvenidos</h1>

      <div>
      <Carrusel/>
      </div>
    <div>
      <ListaItems/>
    </div>
    </div>
    
  );
};

export default homePage;

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import Carrusel from '../components/Header/Carrusel';



const homePage = () => {
  return (
    <div>
      <h1 className='text-center'>Bienvenidos</h1>

      <div>
      <Carrusel/>
      </div>

    </div>
    
  );
};

export default homePage;

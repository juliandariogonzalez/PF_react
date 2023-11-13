import { Card, Button } from "react-bootstrap"





const CardElementos = () => {
    
  return (
    <div className="Card-List">
    {products.map((category) => (
      <Card key={category.id} className="card" style={{  maxWidth: '18rem'  }}>
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Img variant="top" src={category.img} alt={category.title}  height={"170rem"}/>
          <Card.Title style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.title}</Card.Title>
          <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{category.description}</Card.Text>
          <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>Precio: {category.price}</Card.Text>
          <div className='mt-auto' >

          <Link to={`/detail/${category.id}`} key={category.id}>
            <Button  variant="danger">Ver Producto</Button>
          </Link>
          </div>

        </Card.Body>
      </Card>
    ))}
    </div>
  )
}

export default CardElementos

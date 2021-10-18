import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import "./Item.css"
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";


function Item(props){
    return(
        <>
            <Card  className= "cardProducto" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {props.imgUrl} className= "imagenProducto" />
                <Card.Body className= "cardBody">
                    <Card.Title className="tituloCard">{props.title}</Card.Title>
                    </Card.Body>
                    <Link to= {`/detalle/${props.id}`} >
                    <Button className= "botonContador"> <IoEyeSharp/></Button>
                    </Link>
            </Card> 
        </>
    )
}

export default Item 
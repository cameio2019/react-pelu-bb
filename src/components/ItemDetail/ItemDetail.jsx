import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/cartContext"
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function ItemDetail( {producto={}} ) {
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const {addToCart} = useCartContext ()

    const onAdd = (count) =>{
        setCambiarBoton (false)
        addToCart ({producto: producto, quantity:count})
    }

    return (
    <div className = "itemDetail">
        <div className ="contenedorCard">  
                <div className="cardImagen">
                    <img  src={producto.imgUrl} className="cardImg" alt= "imagenprod" />
                </div>
            <div className='cardDetalle'>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href={`/categoria/${producto.categoria}`}>
                    {producto.categoria}
                </Breadcrumb.Item>
            <Breadcrumb.Item active>{producto.title}</Breadcrumb.Item>
        </Breadcrumb>
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <hr />
                <div className="cardBody">
                        <h3>Características</h3>
                        <p>{producto.composicion}</p>
                        <div className= "cardFooter">
                            <label className="precioProducto">${producto.price}</label>
                            { cambiarBoton ?
                    
                            <ItemCount stock={producto.stock} initial={1} onAdd = {onAdd} />
                            :
                            <div>
                                <Link to= {"/cart"}>
                                    <Button className= "botonContador">Checkout</Button>
                                </Link>
                                
                                <Link to= {"/"}>
                                    <Button className= "botonContador">Seguir Comprando</Button>
                                </Link>
                            </div>
                        }
                        </div>
                </div>   
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;
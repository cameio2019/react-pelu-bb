import React from 'react'
import { useCartContext } from "../Context/cartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import Button from 'react-bootstrap/Button'
import CarroVacio from "../../assets/img/carritovacio.png"
import FaTrash from  "../btnDelete"
import 'firebase/firestore'
import  Checkout from '../Checkout/Checkout'


const Cart = () => {
    
    const {cartList, cantidadTotal, clearList, removeItem, precioTotal} = useCartContext ()

return (
        
    <div className= "bodyCart">
        
        {cartList.length === 0 ? 
        
            <div className= "carritoVacio">   
                <h2>Tu carrito se encuentra vacío 🥺...</h2> 
                <img src= {CarroVacio} className="imgEnCart" alt="carritovacio" />
                    <Link to= {"/"}>
                        <Button className= "botonContador">Volver a Productos</Button>
                    </Link>
            </div>
            :   
            <>
            <div className="contenedorMayor">
                    <div className="contenedorTitulos">
                        <p>Precio</p>
                        <p>Total</p>
                    </div>
            </div>
                {cartList.map(producto =>(

                    <div className="contenedorCardsCarro">
                        <div className="contenedorProd" key={producto.producto.id}>
                            
                            <img src={producto.producto.imgUrl} className="imgEnCart" alt="imagen producto" />
                            <p className= "datosProductos">{producto.producto.title}</p>
                            <p className= "datosProductos">{producto.quantity} unidades</p>
                            <p className= "datosProductos">${producto.producto.price}</p>
                            <p className= "datosProductos">${(producto.producto.price * producto.quantity)}</p>
                            <p onClick={()=> removeItem(producto.producto.id)}><FaTrash /></p>
        
                        </div>
                    </div>
                ))}
                <div className= "precioTotal">
                    <p>Total de Productos: {cantidadTotal()}</p>
                    <p>Precio a Pagar: ${precioTotal()}</p>
                </div>
                
                <div className= "botonesCompra">
                    <Button className="botonVaciarCarrito" onClick={clearList}>Vaciar Mi 🛒</Button>
                    <Link to= {"/"}>
                            <Button className= "botonSeguirComprando">Seguir Comprando 🔥</Button>
                    </Link>
                    </div>
                <Checkout/>         
        </> 
        
        }
    </div>
    
)}

export default Cart
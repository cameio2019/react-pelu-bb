import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    

    function sumar (){
        if (count < stock) {
            setCount (count + 1)
        }
    }

    function restar () {
        if (count > 1){
            setCount (count - 1)
        }
    }

    const agregarAlCarrito = () =>{
        onAdd (count)
    }
    
    return (
        <>
            <div className= "botones">    
            <Button className= "botonContador" onClick = {restar}>-</Button>
            <label className= "numeroContador"> {count} </label>
            <Button className= "botonContador" onClick = {sumar}>+</Button> <br />
            <Button className= "botonContador" onClick = {agregarAlCarrito}>Agregar al carrito</Button>    
            </div>
        </>
    )
}

export default ItemCount;
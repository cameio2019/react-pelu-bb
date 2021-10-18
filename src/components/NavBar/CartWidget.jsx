import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from '../Context/cartContext'
import "./NavBar.css"

const CartWidget = () => {
    const {cantidadTotal, cartList} = useCartContext ()

    return (
        <>
            {cartList.length === 0 ?
                <>
                    <FaShoppingCart className= "cart" />
                </>
                :
                <>
                    <FaShoppingCart className= "cart" />
                    <span className= "cartNumber">{cantidadTotal ()}</span> 
                </>
            }
        </>
    )
}

export default CartWidget;
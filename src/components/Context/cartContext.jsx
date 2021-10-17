import { useState, createContext, useContext } from "react";

const cartContext = createContext ([])

export const useCartContext = () => useContext (cartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState ([])

    function addToCart (nuevoProducto) {
        
        const buscar = cartList.findIndex(producto => nuevoProducto.producto.id === producto.producto.id)
    
        if(buscar === -1){
            setCartList([...cartList,nuevoProducto])
        }else{
            const nuevaCantidad= cartList[buscar].quantity + nuevoProducto.quantity
        
            const oldList = cartList.filter(old=> old.producto.id !== nuevoProducto.producto.id)
            
            setCartList([...oldList,{producto: nuevoProducto.producto, quantity: nuevaCantidad}])
        }
    }

    const removeItem = (productoId) =>{
        const array = cartList.filter(producto => producto.producto.id !== productoId) 
        setCartList(array)
    }

    const cantidadTotal =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) 
    }

    const clearList = () => {
        setCartList ([])
    }

    const precioTotal =()=>{
      return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.producto.price)), 0) 
    }

    return (
        <cartContext.Provider value= {{
            cartList,
            cantidadTotal,
            removeItem,
            addToCart,
            clearList,
            precioTotal
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
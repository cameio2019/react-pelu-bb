import { useState, useEffect } from 'react'
import { useParams } from  "react-router-dom";
import Cargando from '../Spinner/Spinner'
import Item from '../Item/Item'
import './ItemList.css'
import { getFirestore } from '../../services/getFirebase';
import { Link } from "react-router-dom"

function ItemList () { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()


    useEffect(() => {
        const dbQuery = getFirestore()
        const nuevaColeccion = idCategoria ?
                    dbQuery.collection("productos").where("categoria", "==", idCategoria)
                    :
                    dbQuery.collection("productos")

        nuevaColeccion.get()
        .then(resp => {
            setProductos (resp.docs.map(producto => ({id : producto.id, ...producto.data() }  ) ) )
        })
        .finally(()=> setLoading(false))

    }, [idCategoria, setLoading])
    
    return (
        <>             
            { loading ? <Cargando /> : 
            <>
        <div id= "conjuntoIconos">
            <div>
                <Link to="/">
                    <img src="https://i.ibb.co/BVVYTvs/icons8-home-salon-80.png" alt= "imagentodos"
                    style= {{width: "80px", margin: "1rem"}} className="hvr-grow"/>
                    <p className= "categoriaIconos">Todos</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/shampoo">
                    <img src="https://i.ibb.co/v1bwp3B/icons8-shampoo-100.png" alt= "imagenshampoo"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Shampoo</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/vitaminas">
                    <img src="https://i.ibb.co/8MtDm53/icons8-gel-64.png" alt= "imagenvitam"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Vitaminas</p>
                </Link>
                </div>
                <div>
                <Link to="/categoria/mascaras">
                    <img src="https://i.ibb.co/nDMtdjw/icons8-mascara-100.png" alt= "imagenmascaras"
                    style= {{width: "80px", margin: "1rem"}}  className="hvr-grow"/>
                    <p className= "categoriaIconos">Mascaras</p>
                </Link>
                </div>
            </div>

            <div className="conjuntoCards">
            {productos.map((producto) => <Item {...producto}/>)}
        
        </div> 
        
        </>
        }  
    </>
    )
}

export default ItemList;
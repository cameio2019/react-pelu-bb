import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from  "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
import Cargando from "../Spinner/Spinner";


const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams ();
    
        useEffect(() => {
            setLoading(true)
            const dbQuery = getFirestore()
            const itemOne = dbQuery.collection('productos').doc(id)
            itemOne
                .get()
                .then(result => setProducto({ id: result.id, ...result.data() }))
                .catch(err => console.error(err))
                .finally(() => setLoading(false))
        }, [id, setLoading])



    return (
        <>
            { loading ? <Cargando /> 
            : producto && <ItemDetail producto= {producto} initial= {1} />}
            
        </>
    )
}

export default ItemDetailContainer
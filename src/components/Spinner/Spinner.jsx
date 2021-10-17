import React from 'react'
import Spinner from "react-bootstrap/Spinner"
import "./Spinner.css"

const Cargando = () => {
    return (
        <>
        <div class="d-flex justify-content-center" className="bodySpinner">
            <Spinner animation="grow" role="status"   style= {{width: "3rem", height: "3rem", marginTop: "5rem", color:"#212c37"}}></Spinner>
        </div>
        </>
)
}

export default Cargando;

import Header from './Header';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListProduct() {

    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            Navigate('/userLogin')
        }
    }, [Navigate])

    return ( 
        <>
         <Header />
        <h2>List Product</h2>
        </>
     );
}

export default ListProduct;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const {product} = props;
    const {name, price, img} = product;
    return (
        <div>
            <div className="card mt-5">
                <img src={img} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name : {name}</h5>
                 <h6 className="card-title">Price : {price}</h6>
   
                <button href="/" className="btn btn-success text-dark ">Add To Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    </div>
        </div>
    );
};

export default Product;
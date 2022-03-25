import React from 'react';

const Product = (props) => {
    const {product} = props;
    const {name, price, img} = product;
    return (
        <div>
           <div className="card">
  <img src={img} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name : {name}</h5>
    <h6 className="card-title">Price : {price}</h6>
   
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    );
};

export default Product;
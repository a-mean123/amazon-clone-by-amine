import React from 'react';
import './CheckProd.css';



function CheckProd(props) {
    return (
        <div className="productlist">
           
            <img className="product__image1" src={props.image} />


            <div className="product__info1">

                <p>{props.title} </p>

                    <p className="product__price">
                     <small>$</small>
                     <strong>{props.price}</strong>
                </p>

                 <div className="product__rating">
   
                     {Array(props.rating).fill().map((_, i) =>(
                   <p>&#9733;</p>
                  ))}
    
            </div>
                        {!props.hiden && (
                             <button onClick={props.remove} className="remove__button">Remove from basket</button>

                        )}
            </div>

        </div>
    )
}

export default CheckProd;

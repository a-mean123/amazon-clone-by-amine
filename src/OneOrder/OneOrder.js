import React from 'react';
import './OneOrder.css';
import moment from 'moment';
import CheckProd from '../CheckProd/CheckProd';
import CurrencyFormat from 'react-currency-format';
function OneOrder({order}) {
    return (
        <div className="one__order">

            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id"> 
                <small>{order.id}</small>
            </p>

            {
                order.data.basket?.map(product => (
                    <CheckProd 
                            id={product.id} 
                            title={product.title}
                            image={product.image}
                            price = {product.price}
                            rating= {product.rating}
                            hiden
                            />
                ))
            }


                            <CurrencyFormat 
                              renderText={(value)=>(

                              <h3 className="order__total">Order Total : {value}</h3>                            

                              )}

                              decimalScale = {2}
                              value={order.data.amount / 100}
                              displayType={"text"}
                              thousandSeparator =  {true}
                              prefix = {"$"}
              
                                
                          />  
        </div>
    )
}

export default OneOrder;

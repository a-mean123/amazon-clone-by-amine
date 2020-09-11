import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import CheckProd from '../CheckProd/CheckProd';
import { Link, useHistory } from 'react-router-dom';
import './Payment.css';
import {CardElement, useStripe , useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';
function Payment() {
     
   const history = useHistory();
    const [{ basket , user }, dispatch] = useStateValue();
   
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled , setDisabled] = useState(true);

    const [processing , setProcessing] = useState(false);

    const [succeded , setSucceded] = useState("");
    const [clientSecret , setClientSecret] = useState(true);



    useEffect(()=>{

            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',

                    url:`/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret);
            }


         getClientSecret();   

    }, [basket]);

    console.log('the secret is  ' , clientSecret);
    const submitHundler = async (e) =>{

        e.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }

        }).then(  ({paymentIntent}) =>{

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount : paymentIntent.amount,
                  created: paymentIntent.created
              });            


            setSucceded(true);
            setProcessing(false);
            setError(null);

            history.replace('/orders');

        }  )

    }


    const changeHundler = e =>{

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment'>


            <h1>
                Checkout (<Link to='/checkout' > {basket?.length} items </Link>)
            </h1>

            <div className="payment__section">
                 <div className="payment__title">
                    <h3>Delivery Adress</h3>
                 </div>
                 <div className="payment__adress">
                    <p>{user?.email}</p>
                    <p>123 React mennn</p>
                    <p>Los angrlos c bouhnach</p>
                 </div>
            </div>



            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>

                <div className="payment__items">

                    {basket.map(item=>(

                            <CheckProd 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}

                </div>

            </div>


            
            <div className="payment__section">
                 <div className="payment__title">
                        <h3>Payment Method</h3>
                 </div>

                 <div className="payment__detail">
                        
                        <form  onSubmit={submitHundler}>
                            <CardElement onChange={changeHundler} />

                        <div className="payment__priceContainer">

                         <CurrencyFormat 
                              renderText={(value)=>(

                              <h3>Order Total : {value}</h3>                            

                              )}

                              decimalScale = {2}
                              value={getBasketTotal(basket)}
                              displayType={"text"}
                              thousandSeparator =  {true}
                              prefix = {"$"}
              
                                
                          />  


                             <button disabled={processing || disabled || succeded}>
                                 <span>{processing ? <p>Processing</p>: 
                                 "buy Now"
                                 }</span>
                             </button>
                        </div>

                        {error && <div>{error}</div>}
                        </form>

                 </div>
            </div>
        </div>
    )
}

export default Payment;

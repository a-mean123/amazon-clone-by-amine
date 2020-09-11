import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router-dom';




function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    let total = 0;
    const history = useHistory();
    basket.map(p=>{

        total += p.price;

    });


    return (
        <div className="subtotal">
              <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p className="sub">
                Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>

                    </>    

                )}

                decimalScale = {2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator =  {true}
                prefix = {"$"}
              
              
              />  

              <button  onClick={e => {history.push('/payment')}}   className="sub__button">Proced to checkout</button>


        </div>
    )
}

export default Subtotal;

import React from 'react';
import "./Checkout.css";
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckProd from '../CheckProd/CheckProd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const removeProductFromBasket = (id)=>{

        dispatch({

            type: 'REMOVE_FROM_BASKET',
            id: id
    
        });

    }

    return (
        <div className="checkout">
          
            <div className="checkout__left">

                <img className="checkout__ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />



            <div>
    <h4>Hello {user?.email}</h4>
                <h2 className="checkout__title">Your Shopping basket</h2>


            </div>

            <div className="product__list">

                <Container>

                {basket.map((product , index) =>{

                        return(
                            <Row className="row__item">
                            <CheckProd 
                            id={product.id} 
                            title={product.title}
                            image={product.image}
                            price = {product.price}
                            rating= {product.rating}
                            remove={()=>removeProductFromBasket(product.id)} />
                            </Row>
                           
                        
                        );    
                        
                        })}

                </Container>
              


            </div>



            </div>


            <div className="checkout__right">
                 
                 <Subtotal />

            </div>


        </div>
    )
}

export default Checkout;

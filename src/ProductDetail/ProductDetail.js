import React from 'react';
import './ProductDetail.css';
import { useStateValue } from '../StateProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ProductDetail() {
  
    
   
    const [{ basket , product }, dispatch] = useStateValue();
   
  
   const addToBasket = () =>{
 
    dispatch({

        type: 'ADD_TO_BASKET',
        item: {
            id: product?.id,
            title: product?.title,
            image: product?.image,
            price: product?.price,
            rating: product?.rating
        }

    });

   }
    return (
        <div>
           <Container>

                <Row>

                    <h3 className="detail__title">Product detail</h3>
                
                </Row>


                <Row>

                    <Col xs lg={4} sm={12}>

                        <img className="detail__image" src={product?.image} />

                    </Col>

                    <Col xs lg={8}  sm={12}>
                    
                        <div>
                            <h4>{product?.title}</h4>

                        </div>
                    
                        <h5>$ {product?.price}</h5>    
                    

                        <div className="product__ratingDetail">
                       
                            {Array(product?.rating).fill().map((_, i) =>(
                                <p>&#9733;</p>
                            ))}
                       
                         </div>

                         <button onClick={addToBasket} className="basket__buttonDetail">Add to Basket</button>
                    </Col>




                </Row>



           </Container>



        </div>
    )
}

export default ProductDetail;

import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Product( props ) {

    const [{ basket , product }, dispatch] = useStateValue();
   
  
   const addToBasket = () =>{
 
    dispatch({

        type: 'ADD_TO_BASKET',
        item: {
            id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            rating: props.rating
        }

    });

   }


   const detailProduct = () => {

        dispatch({

        type: 'SET_PRODUCT',
        product: {
            id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            rating: props.rating
        }

    });

   }



    return (

        <Card style={{ width: '100%' , height: '450px' }}>
           
                 <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                   <Card.Text>
                    {props.price}

                    <div className="product__rating">
                       
                       {Array(props.rating).fill().map((_, i) =>(
                           <p>&#9733;</p>
                       ))}
                       
                   </div>
                   </Card.Text>
                 
                 </Card.Body>

                 <Card.Img className="product__image" src={props.image} />
                
               <div className="buttons">
               <button onClick={addToBasket} className="basket__button">Add to Basket</button>
              <Link to="/detail">
              <button onClick={detailProduct} className="detail__button">View Detail</button>
              
              </Link>

               </div>
                 
            </Card>






      
    )
}

export default Product;

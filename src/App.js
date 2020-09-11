import React, { useEffect } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './ProductDetail/ProductDetail';
import Payment from './Payment/Payment';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Order from './Order/Order';



const promise = loadStripe("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");



function App() {
  document.body.style.backgroundColor = "#eaeded";
  const [{} , dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("this is the user >>>>" , authUser);
      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })


  }, [])


  return (
   <Router>

    <div className="App">

  
        <Switch>

        <Route path="/orders">
            <Header /> 
            <Order />

        </Route>


        <Route path="/detail">
            <Header /> 
            <ProductDetail />

        </Route>



        <Route path="/login">

            <Login />

        </Route>

        <Route path="/checkout">
        <Header /> 

               <Checkout />  
           </Route>  

           
        <Route path="/payment">
        <Header /> 
          <Elements stripe={promise} >        
                 <Payment />
                 </Elements>
  
           </Route>  
          <Route path="/">
          <Header /> 
 
              <Home />  
          </Route>  
          
          
        </Switch> 
    
     </div>

   </Router>
  );
}

export default App;

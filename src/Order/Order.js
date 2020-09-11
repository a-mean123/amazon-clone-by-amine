import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import { db } from '../firebase';
import OneOrder from '../OneOrder/OneOrder';
import './Order.css';
function Order() {

    const [{ basket , user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      if(user){

        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created' , 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        ))

      } else{
          setOrders([]);
      }
    }, [user]);

    return (
        <div className='order'>
            <h1>Your Orders</h1>

            <div className="orders__order">
                  {orders?.map(order=> (
                      <OneOrder order={order} />
                  ))}  
            </div>
        </div>
    )
}

export default Order;

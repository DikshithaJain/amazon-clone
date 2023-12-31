import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStatValue } from './StateProvider';

function Checkout() {

    const [{ basket, user }, dispatch] = useStatValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                alt='' />
        
            <div>
                <h2 className='checkout_title'>Your shopping Basket</h2>
                {basket.map(item => <CheckoutProduct 
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}/>)}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout

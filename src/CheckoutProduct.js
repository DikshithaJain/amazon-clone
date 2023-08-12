import React from 'react';
import './CheckoutProduct.css';
import { useStatValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStatValue();

    const removeFromBasket = (item) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt='' />
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className=''>
                <small>$
                    <strong>{price}</strong>
                </small>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                ))}
                
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct

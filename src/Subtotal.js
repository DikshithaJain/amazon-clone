import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStatValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [{ basket}, dispatch] = useStatValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>${getBasketTotal(basket)}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox' />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix='$' />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

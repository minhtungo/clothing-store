import './Checkout.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map(({ id, name, quantity }) => (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span onClick={() => removeItemToCart({ id, name, quantity })}>
              -
            </span>
            <span onClick={() => addItemToCart({ id, name, quantity })}>+</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Checkout;

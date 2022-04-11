import './CartDropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import { CartContext } from './../../contexts/Cart.context';
import CartItem from '../cart-item/CartItem';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;

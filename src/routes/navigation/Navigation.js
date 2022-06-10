import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/corgi.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;

import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import CartIcon  from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as ClowdLogo } from '../../assets/cloud-sun-svgrepo-com.svg';

import { CartContext } from '../../contexts/cart.context.jsx';
import { selectCurrentUser } from '../../store/user/user.selector.js';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to={'/'} >
                    <ClowdLogo className='logo' />
                </LogoContainer>
                <NavLinks >
                    <NavLink to={'/shop'} >SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>
                    ) : (
                        <NavLink to={'/auth'} >SIGN IN</NavLink>
                    )}
                    <CartIcon  />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer >
            <Outlet />
        </Fragment>
    );
  };

  export default Navigation;
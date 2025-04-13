'use client';

import React from 'react';
import '../styling/components/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter(); // Next.js Router Hook

  // Function to handle navigation
  const navigateTo = (path) => {
   router.push(path);
};

  return (
    <div className='nav-container'>
        <div className='nav-box'>

                {/* Shopping logo */}
            <img onClick={() => navigateTo('home')} width="4%" src="shopify.png" alt=" "/>

                {/* Search Input */}
                <div className='input-box'>
                <FaSearch size={18} style={{ marginRight: '8px' }} />
                <input type="text" placeholder='search the items'/>
                </div>

                {/* Cart logo */}
            <div className='flexBox'>
                <img width="40%" src="icon-cart.png" alt=" " onClick={() => navigateTo('/cart-page')}/>
                <p>Cart</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar;

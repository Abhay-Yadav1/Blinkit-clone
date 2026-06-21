import React from 'react'
import blinkitLogo from '../assets/blinkit.png'
function Header() {
  return (
    <div>
        <ul className='flex justify-between items-center p-4 bg-white shadow-md'>
            <li>
                <img src={blinkitLogo} alt="Blinkit Logo" className="h-10 " />
            </li>
            <li>my location</li>
            <li>
                <input type="text"  value="search" placeholder="Search for products..." className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </li>
            <li>
                <button className='text-black px-4 py-2 rounded'>Login</button>
            </li>
            <li>
                <button className='bg-[rgb(204_204_204)] text-white px-4 py-2 rounded'>My Cart</button>
            </li>
        </ul>
    </div>
  )
}

export default Header
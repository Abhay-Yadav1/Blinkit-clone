import React from 'react'
import blinkitLogo from '../assets/blinkit.png'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-3 py-3">
          <div className="flex items-center gap-2">
            <img src={blinkitLogo} alt="Blinkit Logo" className="h-9 w-auto sm:h-10" />
          </div>

          <button className="hidden text-sm text-gray-700 sm:block">
            my location
          </button>

          <div className="order-3 w-full sm:order-none sm:flex-1 sm:w-auto">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-800">Login</button>
            <button className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white">My Cart</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
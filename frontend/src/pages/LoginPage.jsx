import React from 'react'

function LoginPage() {
    const handleLogin = () => {
        // Implement login logic here
        console.log('Login button clicked');
    }
  return (
    <div>
        <form action="post" className='flex flex-col gap-4 w-1/3 mx-auto mt-10'>
            <input type="text" placeholder='Username' className='border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200' />
            <input type="password" placeholder='Password' className='border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200' />
            <button type='submit' className='rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white'
              onClick={()=>{handleLogin()}}
            >
                Login
            </button>
        </form>
    </div>
  )
}

export default LoginPage
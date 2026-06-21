import React from 'react'

function TopProducts() {
  const topProducts = [
    {
      id: 1,
      name: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Daily Dairy',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Healthy Snacks',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Beverages',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="pt-2">
        <h3 className='text-2xl font-bold text-gray-900'>Top Products</h3>
        <p className='mt-2 text-gray-600'>Discover our most popular products, loved by customers for their quality and value.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {topProducts.map((product) => (
          <div key={product.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900">{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopProducts
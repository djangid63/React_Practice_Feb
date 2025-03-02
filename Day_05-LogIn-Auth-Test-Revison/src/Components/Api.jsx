import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {

  const [apiData, setApiData] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/carts')
        setApiData(response.data.carts);
        console.log(response.data.carts);
      } catch (error) {
        console.log(error);
      }

    }
    fetchProducts()

  }, [])

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Shopping Carts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiData.map((cart) => (
            <div
              key={cart.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Cart #{cart.id}</div>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cart.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-50 rounded-lg p-4 flex flex-col justify-between"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div>
                        <div className="text-md font-semibold text-gray-700">
                          {product.title}
                        </div>
                        <p className="text-green-600 font-bold mt-2">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Original Total: ${cart.total.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-bold">
                    Discounted: ${cart.discountedTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Api

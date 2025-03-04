import React from 'react'

const ViewMore = ({ product }) => {
  console.log(product);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <img src={product.image} alt={product.title} className="h-64 w-full object-contain mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ViewMore

import React, { useEffect, useState } from 'react'
import ViewMore from "./ViewMore"
import axios from 'axios'
import { data } from 'react-router-dom'

const FakeStoreAPI = () => {
  const [apiData, setApiData] = useState([])
  const [oneProduct, setOneProducts] = useState()
  const [showProduct, setshowProduct] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    }


    fetchProducts()
  }, [])

  const handleViewMore = async (id) => {
    const getOne = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setOneProducts(getOne.data)
    setshowProduct(true)
    console.log(showProduct);
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apiData.map((val) => (
          <div key={val.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="text-xl font-semibold mb-2">{val.id}</div>
            <img src={val.image} alt={val.title} className="h-48 w-full object-contain mb-2" />
            <div className="text-gray-700">${val.price}</div>
            <button onClick={() => handleViewMore(val.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              View More
            </button>
          </div>
        ))}

        {oneProduct && showProduct && (
          <div >
            <ViewMore key="viewMore" product={oneProduct} showProduct={showProduct} setshowProduct={setshowProduct} />
          </div>
        )
        }
      </div>
    </div>
  );
}

export default FakeStoreAPI

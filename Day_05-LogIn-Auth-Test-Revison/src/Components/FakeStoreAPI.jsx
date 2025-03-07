import React, { useEffect, useState } from 'react'
import ViewMore from "./ViewMore"
import axios from 'axios'

const FakeStoreAPI = () => {
  const [apiData, setApiData] = useState([])
  const [oneProduct, setOneProducts] = useState()
  const [showProduct, setshowProduct] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sortOrder, setsortOrder] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        if (response) {
          setApiData(response.data);
          setIsLoading(false)
          console.log(response.data);
        }
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

  const newData = apiData.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()) })


  const sortedData = () => {
    if (sortOrder === 'asc') {
      return [...newData].sort((a, b) => a.price - b.price)
    }
    if (sortOrder === 'dec') {
      return [...newData].sort((a, b) => b.price - a.price)
    }
    return newData
  }



  return (
    <div className="container mx-auto py-8">
      <div>
        <label htmlFor='search' className='' ></label>
        <input
          name='search'
          id='search'
          type='search'
          value={search}
          placeholder='search'
          className="shadow flex items-center justify-center appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setSearch(e.target.value)}
        ></input>

        <div className='flex justify-center items-center space-x-4 mb-4'>
          <button
            onClick={() => setsortOrder("asc")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Price Low to High
          </button>
          <button
            onClick={() => setsortOrder("desc")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Price High to Low
          </button>

        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (<div className='w-screen h-screen flex justify-center items-center'>Loading</div>) :
          (sortedData().map((val) => (
            <div key={val.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="text-xl font-semibold mb-2">{val.id}</div>
              <div className="text-xl font-semibold mb-2">{val.title}</div>
              <img src={val.image} alt={val.title} className="h-48 w-full object-contain mb-2" />
              <div className="text-gray-700">${val.price}</div>
              <button onClick={() => handleViewMore(val.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                View More
              </button>
            </div>
          )))
        }
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

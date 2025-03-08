import React, { useEffect, useState } from 'react'
import ViewMore from "./ViewMore"
import axios from 'axios'
import moment from 'moment'

const FakeStoreAPI = () => {
  const [apiData, setApiData] = useState([])
  const [oneProduct, setOneProducts] = useState()
  const [showProduct, setshowProduct] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sortOrder, setsortOrder] = useState('')
  const [cartValue, setcartValue] = useState([])
  // const [abc, setAbc] = useState([])

  // let initailVal = 0;
  // const increment = () => {
  //   initailVal++;


  // const data = cartValue.push(initailVal)
  // setAbc(data)
  // }

  // const decrement = () => {
  //   const data = cartValue.pop()
  //   setAbc(data)
  // }

  const addToCart = async (id) => {
    const count = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setcartValue((preVal) => [...preVal, count.data])
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        if (response) {
          setApiData(response.data);
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts()
  }, [])

  const handleViewMore = async (id) => {
    setIsLoading(true)
    const getOne = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setOneProducts(getOne.data)
    setshowProduct(true)
    setIsLoading(false)
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

  const userData = JSON.parse(localStorage.getItem('user'))
  const hour = Number(moment().format('h'))
  const meridiem = moment().format('a')

  const getGreeting = () => {
    if (meridiem === 'am') {
      return "Good morning";
    } else if (hour < 6 && meridiem === 'pm') {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 animate-pulse">
            Fake Store Products
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                name='search'
                id='search'
                type='search'
                value={search}
                placeholder='Search products...'
                className="pl-10 w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setsortOrder("asc")}
                className={`bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium py-2 px-4 rounded-lg transition-all duration-300 border ${sortOrder === 'asc' ? 'border-purple-500' : 'border-gray-700'}`}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                  </svg>
                  Price: Low to High
                </span>
              </button>
              <button
                onClick={() => setsortOrder("dec")}
                className={`bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium py-2 px-4 rounded-lg transition-all duration-300 border ${sortOrder === 'dec' ? 'border-purple-500' : 'border-gray-700'}`}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4 4m0 0l4-4m-4 4v-12"></path>
                  </svg>
                  Price: High to Low
                </span>
              </button>
              <div
                className={`bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium py-2 px-4 rounded-lg transition-all duration-300 border border-purple-700`}
              >
                <span className="flex items-center">
                  {cartValue.length}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-8 border-l-4 border-purple-500 shadow-lg transform hover:scale-102 transition-transform duration-300">
            <h2 className="text-lg">
              <span className="font-bold text-purple-400">{userData.fullName}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-300">{getGreeting()}</span>
            </h2>
          </div>
        </div>

        {isLoading ? (
          <div className='w-full h-64 flex justify-center items-center'>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedData().map((val) => (
              <div
                key={val.id}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="p-4 bg-gray-700 flex justify-between items-center">
                  <span className="px-2 py-1 bg-gray-900 rounded-md text-xs font-medium text-purple-400">
                    #{val.id}
                  </span>
                  <span className="text-xs text-gray-400">{val.category}</span>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="h-full w-full object-contain transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2 text-gray-100 line-clamp-2">{val.title}</h2>
                  <div className="mt-auto">
                    <div className="text-2xl font-bold mb-3 text-purple-400">${val.price.toFixed(2)}</div>
                    <button onClick={() => addToCart(val.id)}
                      className={`bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium py-2 px-6 rounded-lg transition-all duration-300 border border-purple-700`}
                    >
                      <span className="flex items-center">
                        Add to Cart
                      </span>
                    </button>
                    <button
                      onClick={() => handleViewMore(val.id)}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {oneProduct && showProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fadeIn">
            <ViewMore key="viewMore" product={oneProduct} showProduct={showProduct} setshowProduct={setshowProduct} />
          </div>
        )}
      </div>
    </div>
  );
}

export default FakeStoreAPI

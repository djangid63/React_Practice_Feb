import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Api = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [orderSort, SetOrderSort] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])



  const filteredData = data.filter((value) => {
    const abc = value.title.toLowerCase().includes(search.toLowerCase()) || value.description.toLowerCase().includes(search.toLowerCase())
    return abc;
  })

  const sortData = () => {
    if (orderSort === "asc") {
      let filteredDataShallowCopy = [...filteredData]
      return filteredDataShallowCopy.sort((a, b) => a.price - b.price)
    }

    if (orderSort === "dec") {
      // Making shallow copy of filteredData without storing it in any variable in this example and in above example we are storing it in a varible there is no difference in output what so ever.
      return [...filteredData].sort((a, b) => b.price - a.price)
    }
    return filteredData
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12">
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
        Premium Products
      </h1>

      <div className='flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4'>
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-6 py-3 rounded-full border-2 border-purple-200 focus:outline-none focus:border-purple-400 w-full sm:w-80 shadow-sm"
        />
        <button
          onClick={() => SetOrderSort('asc')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
        >
          ↑ Price: Low to High
        </button>
        <button
          onClick={() => SetOrderSort('dec')}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
        >
          ↓ Price: High to Low
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {sortData().map((item) => (
          <div
            className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-50"
            key={item.id}
          >
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <LazyLoadImage
                effect="blur"
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-56"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
              {item.title}
            </h2>
            <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
              ${item.price}
            </p>
            <p className="text-gray-600 line-clamp-3 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Api

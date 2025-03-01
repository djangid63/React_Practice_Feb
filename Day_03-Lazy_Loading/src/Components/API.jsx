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
        return filtedData;
      }
    };
    fetchData();
  }, [])

  const filtedData = data.filter((value) => {
    const abc = value.title.toLowerCase().includes(search.toLowerCase()) || value.description.toLowerCase().includes(search.toLowerCase())
    return abc;
  })

  const sortData = () => {
    if (orderSort === "asc") {
      return [...filtedData].sort((a, b) => a.price - b.price)
    }

    if (orderSort === "dec") {
      return [...filtedData].sort((a, b) => b.price - a.price)
    }
    return filtedData
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8 hover:text-blue-700 transition-colors">
        Product Catalog
      </h1>
      
      <div className='flex justify-center gap-4 mb-8'>
        <input 
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
        <button 
          onClick={() => SetOrderSort('asc')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Price: Low to High
        </button>
        <button 
          onClick={() => SetOrderSort('dec')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Price: High to Low
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {sortData().map((item) => (
          <div
            className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            key={item.id}
          >
            <div className="aspect-w-1 aspect-h-1 mb-4">
              <LazyLoadImage
                effect="blur"
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-48"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h2>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              ${item.price}
            </p>
            <p className="text-gray-600 line-clamp-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Api

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Api = () => {
  const [data, setData] = useState([''])
  const [isLoading, setIsLoading] = useState(true)
  const [cartValue, setCartValue] = useState([])

  const navigateToCart = useNavigate()

  const handleCart = () => {
    navigateToCart('/cart')
  }

  // const [val, setVal] = useState([])
  // const [reVal, setReVal] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const ApiData = await axios.get('https://fakestoreapi.com/products')
      setData(ApiData.data);
      setIsLoading(false)
    }
    fetchData()
  }, [])



  // let initalVal = 0;
  // const increment = () => {
  //   initalVal++
  //   const count = val.push(initalVal)
  //   setReVal(count)
  // }

  // const decrement = () => {
  //   const newVal = [...val];
  //   const count = newVal.pop();
  //   setVal(newVal);
  //   if (newVal.length == 0) { alert('Done') }
  //   console.log(val);
  //   setReVal(count)
  // }

  const addToCart = async (id) => {
    const apiData = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setCartValue((preVal) => [...preVal, apiData.data])
    console.log("-----------Added---------", cartValue);
  }

  const removeFromCart = async (id) => {
    const apiData = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setCartValue((prevVal) => {
      const newArr = [...prevVal];

      // let findItem = newArr.indexOf(apiData.id);

      let newItem = newArr.filter((val) => val.id === apiData.id)
      // console.log("-----FindItem------", findItem);

      newArr.length > 0 ? newArr.splice(newItem, 1) : alert("Cart Cannot be in Negative Number")
      // console.log("------Removed-------", newArr);
      return newArr

    })
  }

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      {isLoading ? (
        <div className="text-center text-xl font-semibold text-gray-200">
          Loading....
        </div>
      ) : (
        <div>
          <div className='flex gap-10'>
            <div className="text-lg font-bold mb-4 text-blue-400">Cart Items: {cartValue.length}</div>
            <button className="text-lg font-bold mb-4 text-blue-400 border border-gray-400 rounded-md px-6 py-1">Go To Cart</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="flex flex-col justify-center items-center border border-gray-700 p-4 rounded shadow-md bg-gray-800">
                <div className="mb-2 font-semibold text-gray-200">{item.title}</div>
                <img className="w-32 h-40 object-contain bg-white p-2 rounded" src={item.image} />
                <div>
                  <button onClick={() => addToCart(item.id)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2 mt-2">Add To Cart</button>
                  <button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2 mt-2">Remove from Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Api

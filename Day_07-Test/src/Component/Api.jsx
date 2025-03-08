import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Api = () => {
  const [data, setData] = useState([''])
  const [isLoading, setIsLoading] = useState(true)
  const [cartValue, setCartValue] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const ApiData = await axios.get('https://fakestoreapi.com/products')
      setData(ApiData.data);
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const addToCart = async (id) => {
    const apiData = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setCartValue((preVal) => [...preVal, apiData.data])
  }

  const removeFromCart = () => {
    setCartValue((preVal) => cartValue.length > 0 ? cartValue.pop(preVal) : '')
  }

  return (
    <div>
      {isLoading ? (
        <div>
          Loading....
        </div>
      ) : (
        <div>
          <div>{cartValue.length > 0 ? cartValue.length : 0}</div>
          {data.map((item) => (
            <div key={item.id}>
              <button onClick={() => addToCart(item.id)}>Add To cart</button>
              <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default Api

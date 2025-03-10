import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [storageCart, setStorageCart] = useState([])
  const location = useLocation();



  useEffect(() => {
    const getCartItems = location.state?.cartItems || [];
    const storageData = JSON.parse(localStorage.getItem('item'))
    setStorageCart(storageCart)
    setCartItems(getCartItems);
  }, [location]);




  const removeDataFromStorage = (id) => {
    setCartItems((preVal) => {
      const newArr = [...preVal];
      const findTheIndex = newArr.findIndex((val) => val.id === id);
      newArr.splice(findTheIndex, 1);
      return newArr
    }
    )
  }



  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const newArr = [...prevItems]
      const findRemove = newArr.findIndex((item) => item.id == id);
      console.log("-------Find Remove------", findRemove);
      const a = newArr.splice(findRemove, 1);
      console.log("-------A----------", a);
      return newArr
    });
  }

  let dynKey = 0;
  return (
    <div>
      {
        cartItems ? (cartItems.map((item) => (
          <div key={dynKey++} className="flex flex-col justify-center items-center border border-gray-700 p-4 rounded shadow-md bg-gray-800">
            <div className="mb-2 font-semibold text-gray-200">{item.title}</div>
            <img className="w-32 h-40 object-contain bg-white p-2 rounded" src={item.image} alt={item.title} />
            <div>
              {/* <button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2 mt-2">Remove from Cart</button> */}
              <button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2 mt-2">Remove from Cart</button>
            </div>
          </div>
        ))) : (
          <div>Cart is Empty</div>
        )
      }
    </div>
  );
}

export default Cart;
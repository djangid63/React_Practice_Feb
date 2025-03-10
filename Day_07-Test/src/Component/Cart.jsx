import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getCartItems = location.state?.cartItems || [];
    setCartItems(getCartItems);
  }, [location]);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      
      const newArr = [...prevItems]
      const findRemove = newArr.find((item) => item.id == id);
      newArr.splice(findRemove.id, 1);
      return newArr
    });
  }

  let dynKey = 0;
  return (
    <div>
      {
        cartItems.map((item) => (
          <div key={dynKey++} className="flex flex-col justify-center items-center border border-gray-700 p-4 rounded shadow-md bg-gray-800">
            <div className="mb-2 font-semibold text-gray-200">{item.title}</div>
            <img className="w-32 h-40 object-contain bg-white p-2 rounded" src={item.image} alt={item.title} />
            <div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2 mt-2">Remove from Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Cart;
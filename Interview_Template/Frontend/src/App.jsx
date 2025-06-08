import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import BASE_URL from './api'
import { useDispatch, useSelector } from 'react-redux'
import { storeUser, toggleMode } from './Slice/userSlice'
import useCounter from './CustomHooks/useCounter'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    selectedDate: '',
  })

  const { count, increment, decrement, reset } = useCounter(0)


  let isDarkVal = useSelector(state => state.data.darkMode.isDark)
  console.log(isDarkVal);



  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(false)



  const dispatch = useDispatch()

  const fetchUsers = async () => {
    const resp = await axios.get(`${BASE_URL}/user/getusers`)
    console.log(resp.data.data);
    setUsers(resp.data.data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editing) {
        console.log('Updating user:', formData);
        const res = await axios.patch(`${BASE_URL}/user/updateuser`, formData)
        fetchUsers()
      } else {
        const res = await axios.post(`${BASE_URL}/user/signup`, formData)
        console.log(res.data);
        fetchUsers()
        dispatch(storeUser(formData))
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  const handleEdit = (user) => {
    setFormData(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    )
    setEditing(true)

  }

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`${BASE_URL}/user/deleteuser/${id}`)
      fetchUsers()
    } catch (error) {

    }
  }

  const handleMode = () => {
    dispatch(toggleMode())
  }
  return (
    <div className={`w-screen h-screen ${isDarkVal ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={handleMode}>{isDarkVal ? "Dark" : "Light"}</button>
      <div className='flex gap-5 items-center justify-center'>
        <button onClick={increment}>+</button>
        <div>{`Count : ${count}`}</div>
        <button onClick={decrement}>_</button>
      </div>
      <form onSubmit={handleFormSubmit} className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
        <button onClick={handleMode}>{isDarkVal ? "Dark" : "Light"}</button>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleFormData}
          placeholder='Name'
          className='border-2 border-black rounded-2xl p-4'
        />

        <label htmlFor='email'></label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleFormData}
          placeholder='Email'
          className='border-2 border-black rounded-2xl p-4'
          disabled={editing}
        />

        <label htmlFor='password'></label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleFormData}
          placeholder='********'
          className='border-2 border-black rounded-2xl p-4'
          disabled={editing}
        />

        <label>
          Select Date:
          <input
            type="date"
            value={formData.selectedDate}
            onChange={handleFormData}
            name="selectedDate"
          />
        </label>

        <button>Submit</button>
      </form>

      <div className='flex flex-col gap-2'>
        {
          users.map((user) => (
            <div key={user._id} className='flex gap-2'>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App

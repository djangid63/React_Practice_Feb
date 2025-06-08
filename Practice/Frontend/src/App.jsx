import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, isDarkMode } from './Redux/slice'
import axios from 'axios'

const App = () => {
  const [formData, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [userData, setUserData] = useState([])
  const [isEditing, setIsEditing] = useState(false)


  const { storedName, storedEmail, storedPassword } = useSelector((state) => state.data.userData)
  // console.log(storedEmail);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setForm(preVal => (
      {
        ...preVal,
        [e.target.name]: e.target.value
      }
    ))
  }

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/user/getAll')
        console.log(res.data.data, "user cound");
        setUserData(res.data.data)
      } catch (error) {
        console.log(error, "User not found");
      }
    }
    fetchuser()
  }, [])

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/user/delete/${id}`)
      console.log();
    } catch (error) {

    }
  }

  const handleForm = (e) => {
    e.preventDefault()

    dispatch(addUser(formData))

    const sendData = async () => {
      try {
        if (isEditing) {
          const updateUserData = await axios.post('http://localhost:5000/user/update', formData)

        } else {
          const res = await axios.post('http://localhost:5000/user/signup', formData)
        }
      } catch (error) {
        console.error('API Error:', error.message)
      }
    }

    sendData()
  }

  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      password: user.password
    })

    setIsEditing(true)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleForm} className='flex flex-col gap-2'>
        <label htmlFor='name'></label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className='border-2 border-amber-200 p-2 rounded-2xl'
        ></input>
        <label htmlFor='email'></label>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='border-2 border-amber-200 p-2 rounded-2xl'
        ></input>
        <label htmlFor='password'></label>
        <input
          id='password'
          name='password'
          type='password'
          placeholder='*******'
          value={formData.password}
          onChange={handleChange}
          className='border-2 border-amber-200 p-2 rounded-2xl'
        ></input>
        <label htmlFor='submit'></label>
        <input
          id='submit'
          type='submit'
          placeholder='Submit'
          className='border-2 border-amber-200 p-2 rounded-2xl'
        ></input>
      </form>



      <div className='flex'>
        {
          userData.map((user) => (
            <div className='w-screen flex flex-col' key={user._id}>
              <div>{user.name}</div>
              <div>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </div>
            </div>))
        }
      </div>
    </div>
  )
}

export default App

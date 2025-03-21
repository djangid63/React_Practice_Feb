import React from 'react'
import { addValue } from '../Slice/FooterSlice'
import { useSelector, useDispatch } from 'react-redux'


const Footer = () => {
  const count = useSelector((state) => state.footer.value);
  const dispatch = useDispatch()
  return (
    <div>
      <hi>{count}</hi>
    </div>
  )
}

export default Footer

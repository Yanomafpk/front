import { useState } from 'react'
import { Link } from 'react-router-dom'
import './user.css'
import Navbar from '../../components/navbar/navbar'

function User() {

  return (
    <>
    <div className='body'>
      <Navbar />
      <div className='main-content'>
        <h1>User Page</h1>
        
      </div>
    </div>
    </>
  )
}

export default User

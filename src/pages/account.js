import React, { Fragment } from "react";
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (

  <div className='body-profile-card'>
  <div className='profile-card'>

    <div class="top-icons">
     
      <button type="button" className="btn"  onClick={e => {
        logout();
        e.preventDefault();
      }}>
        <Link to="#logout" >Logout</Link>
      </button>

      <button type="button" className="btn">
        <Link to="/" >Main Page</Link>
      </button>

    </div>

    <div className='profile'>
      <img className='thumbnail' src={user.picture} alt="" />
      <h3 class="name">Dennis Basyrov</h3>
      <p class="title">Javascript Developer</p>
		  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
		  <button type="button" class="btn">New Course</button>
    </div>

  </div>
  </div>

  )
}

export default Account
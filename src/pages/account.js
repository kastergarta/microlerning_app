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
     
      <button type="button" className="btn-top">
        <Link to="/">Home</Link>
      </button>

      <button type="button" className="btn-top"  onClick={e => {
        logout();
        e.preventDefault();
      }}>
        <Link to="#logout" ></Link>Logout
      </button>

    </div>

    <div className='profile'>
      <img className='thumbnail' src={user.picture} alt="" />
      <h3 class="name">Dennis Basyrov</h3>
      <p class="title">Javascript Developer</p>
		  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
    </div>

    <div className='your-courses'>
      <div class="icon">
        <a href="/"><i class="fab fa-dribbble"></i></a>
      </div>
      <div class="icon">
        <a href="/"><i class="fab fa-behance"></i></a>
      </div>
      <div class="icon">
			  <a href="/"><i class="fab fa-twitter"></i></a>
		  </div>
    </div>

    <div className='new-courses'>
    <div class="icon">
        <a href="/"><i class="fab fa-dribbble"></i></a>
      </div>
      <div class="icon">
        <a href="/"><i class="fab fa-behance"></i></a>
      </div>
      <div class="icon">
			  <a href="/"><i class="fab fa-twitter"></i></a>
		  </div>
      <div class="icon">
        <a href="/"><i class="fab fa-dribbble"></i></a>
      </div>
      <div class="icon">
        <a href="/"><i class="fab fa-behance"></i></a>
      </div>
      <div class="icon">
			  <a href="/"><i class="fab fa-twitter"></i></a>
		  </div>
      <button type="button" class="btn">New Course</button>
    </div>
    
  </div>
  </div>

  )
}

export default Account
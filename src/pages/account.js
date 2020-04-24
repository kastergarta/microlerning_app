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
    <>
      <nav>
        <a
          href="#logout"
          onClick={e => {
            logout();
            e.preventDefault();
          }}
        >
          Log Out
        </a>

      <Fragment>
       <img src={user.picture} alt="" />

       <h2>{user.name}</h2>

       <div className={"get-started"}>
          <Link to="/" title={"Homepage"}>Main Page</Link>
       </div>

      </Fragment>
      </nav>
    </>
  )
}

export default Account
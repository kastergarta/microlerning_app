import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/GURU_logo_2.jpg"
import { useAuth0 } from "/Users/denisbasyrov/Desktop/App/microlearning_app/src/react-auth0-spa.js";



const Header = ({siteTitle}) => (
    
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"GURU"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <Link to="/form" title={"Start Learning"}>Start Learning</Link>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

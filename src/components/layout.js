/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/GURU_logo_2.jpg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Microlearning App"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>At GURU, we are always hungry for more knowledge. With GURU, we try to create a simple and easy way for people to gain new knowledge in less time than it takes to drink a cup of coffee. In just 5 minutes, we hope to make you just a little more knowledgeable than you were the day before.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>HiStaff</h4>
                                    <ul>
                                        <li><Link to="/integrations/slack" title={"Integrations"}>Integrations</Link></li>
                                        <li><Link to="/about" title={"About Us"}>About</Link></li>
                                        <li><a href={"https://histaff.io/blog"}>Blog</a></li>
                                        <li><a className={"links__special"} href={"https://feedback.histaff.io/"} target={"_blank"} title={"We look forward to receiving your great feedback"}>Feedback</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                        <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                        <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                    <a href="" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                    <a href="" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                    <a href="" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://google.com" title={"Hive Factory"}>Hive Factory</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"


import featureImage from "../../static/images/Microlearning App_1.png";
import thumbnailEvent from "../../static/images/Microlearning App_2.jpg"
import thumbnailBoard from "../../static/images/Microlearning App_3.jpeg"
import thumbnailNews from "../../static/images/Microlearning App_4.jpg"
import thumbnailTeams from "../../static/images/Microlearning App_5.jpeg"

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>Learn Something New Every Day</h1>
            <p>Each morning, wake up to a new 5-minute lesson delivered to your email inbox. Choose from 300+ topics.<br/> 3,000+ Lessons. 100+ Experts. 400,000+ Lifelong Learners.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Hundreds of Topics</h2>
                                <p>Choose what you'd like to learn from 300+ topics.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Delivery by Email</h2>
                                <p>Get a new lesson straight to your inbox, every morning. Learn at your own pace. </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>5 Minutes a Day</h2>
                                <p>Read each lesson with your morning coffee, in just 5 minutes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Learn from leading instructors and companies</h2>
                                <p>We connect educators, brands, and experts with ambitious lifelong learners across the globe</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Start learning for free</h2>
                    <p>Choose a Topic ➞ Get 10 Daily Episodes ➞ Rinse and Repeat</p>
                </div>

                <div className={"button"}>
                    <Link to="/form" title={"Start Learning"}>Start Learning</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage

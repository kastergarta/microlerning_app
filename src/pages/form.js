import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormPage = () => (
    <Layout>
        <SEO title="FormPage"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Form</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>!!!!!</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Plain email is the best way to contact us.</p>
                            <h2>contact@histaff.io</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default FormPage

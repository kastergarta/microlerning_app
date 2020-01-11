import React from "react"
import emailjs from 'emailjs-com';

import Layout from "../components/layout"
import SEO from "../components/seo"

const handleLoginSubmit = (e) => {

  let templateParams = {
    user_name: name,
    user_email: email,
    message_html: "Hi!",
   }
   
   emailjs.send(
   "hawkaton.us@gmail.com",
   'template_OztCtOOX',
    templateParams,
   'user_qkmMCvLoKG06KjZD3u8VY'
  )

}

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
                         <form onSubmit={handleLoginSubmit}>
                           <label>
                             Name:
                             <input type="text" name="name" />
                           </label>
                           <label>
                             E-mail:
                             <input type="text" name="email" />
                           </label>
                          <input type="submit" value="Submit" />
                         </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default FormPage

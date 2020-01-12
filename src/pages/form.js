import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FormPage () {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleLoginSubmit = (e) => {
  e.preventDefault();

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

  return (

    <Layout>
        <SEO title="FormPage"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>This is Your First Course</h1>
                </div>

                <div className={"row"}>

                    <div className={"col-7"}>
                        <p>This course is for aspiring chess players who know how the pieces move and understand how to use some tactics such as forks and skewers but have never had any formal chess training.<br/><br/>  If you want to improve your chess in as short a time as possible, this is the course for you!</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                         <form onSubmit={handleLoginSubmit}>
                          <input type="text" name="field1" placeholder="Name:" onChange={e => setName(e.target.value)} value={name}/>
                          <input type="email" name="field2" placeholder="E-mail:" onChange={e => setEmail(e.target.value)} value={email}/>
                          <input type="submit" value="Send" />
                         </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>

  );
}

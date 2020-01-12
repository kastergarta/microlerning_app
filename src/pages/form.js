import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FormPage () {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(5);

    let templateParams = {
      user_name: name,
      user_email: email,
      message_html: "Hi!",
     }

     emailjs.send(
     'theguru.app.team@gmail.com',
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
                        <p>Podcasting is exploding! Podcast hosts have the ability to spread their messages, share their views, build an engaged audience, and interview high-profile guests. Now, this can be you! <br/><br/> This course will take you from not knowing anything about the medium to being able to record and launch your very own show.</p>
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

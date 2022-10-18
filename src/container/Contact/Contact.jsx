import React, { useState } from 'react'

import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email,
      message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Create your website - today!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:bradleybkempton@gmail.com" className="p-text">bradleybkempton@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+19286513255" className="p-text">+1 928 651 3255</a>
        </div>
      </div>

      {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder='Your message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
      </div>
      ) : (
        <div>
            <h3 className="p-text">Thank you!</h3>
        </div>
      )}

    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__footer'), 
  'contact',
  "app__whitebg"
);
import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from "../../wrapper"

import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const fetchClient = async () => {
      const query = '*[_type == "abouts"]'

      const data = await client.fetch(query)
      console.log(data)
      setAbouts(data)
    }

    fetchClient()
  }, [])

  return (
    <>
      <h2 className='head-text'>I know <span>good code</span> leads to <span>great projects</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >         
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')


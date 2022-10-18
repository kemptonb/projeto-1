import React from 'react'

const Navigation = (props) => {

  const { active } = props

  return (
    <div className='app__navigation'>
         {["start", "about", "work","skills", "testimonials", "contact"].map(
          (item, index) => (
           <a 
            className='app__navigation-dot'
            key={item + index}
            href={`#${item}`}
            style={active === item ? {backgroundColor: "#0324fc"} : {}}
           />
          )
        )}
    </div>
  )
}

export default Navigation
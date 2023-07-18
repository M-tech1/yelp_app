import React from 'react';
import NavBar from "./Header"

const Landing = ({signOut}) => {
  return (
    <section className='landing'>
        <div><NavBar signOut={signOut} /></div>
    </section>
  )
}

export default Landing
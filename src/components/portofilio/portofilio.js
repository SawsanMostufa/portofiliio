import React from 'react'
import Portofilio_item from '../portofilio_item/Portofilio_item';
import './style.css';
const Portofilio = () => {
  return (
    <section >
    <div className='container'>
    <h4>portofilio</h4>
   
    <div className='row'>
   <Portofilio_item   title="item 1"/>
   <Portofilio_item  title="item 2"/>
   <Portofilio_item  title="item 3"/>
   <Portofilio_item  title="item 4"/>
   <Portofilio_item  title="item 5"/>
   <Portofilio_item  title="item 6"/>
    </div>
    </div>
    </section>
  )
}

export default Portofilio
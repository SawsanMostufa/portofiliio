import React from 'react'
import Skillsitem from '../skill_item/Skill_item';
import './style.css';
const Skills = () => {
  return (
    <section className='sec_skill'>
   <div className='contaier'>
   <div className='row'>
   <div  className='col-12 txtskill'>
    <h1>SKiLLS</h1> 
    <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming lang
    Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming lang</p>
     </div> 
     <div className='col-6 txt_proffil'>
     <h4>My profile</h4>
     <ul>
     <li> application</li>
     <li> application</li>
     <li> application</li>
     <li> application</li>
     <li> application</li>
     </ul>
     </div>    
       <div className='col-6' >
            
         <Skillsitem  title="css"/>
         <Skillsitem  title="html"/>
         <Skillsitem  title="javascript"/>
         <Skillsitem  title="bootstrap"/>
         <Skillsitem  title="csharp"/>
         <Skillsitem  title="xml"/>
         <Skillsitem  title="json"/>
         <Skillsitem  title="react"/>
       </div>    
      
         
         </div>
         </div>
         </section>
  )
}

export default Skills;

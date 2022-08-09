 import React from 'react'
 import './style.css';
// const Skillsitem = (props) => {
//   return (
//     <div class="bar">
//     <span class="title">{props.title}</span>
   
//     <div class="parent">
//         <span class="sp1"></span>
//     </div>
// </div>
//   )
// }

// export default Skillsitem

export default function Skillsitem(done) {
  return (
    <>
      <div class='progress m-2' style={{ height:`30px` }}>
        <div class='progress-done' style={{ width:`${done.done}`+'%' ,background: "lightgray", height:`30px`}}>
          <div className='text-center ' style={{ width:`100px`,background: "gray",height:`30px`}}>{done.title}</div>
        </div>
      </div>
    </>
  );
  }
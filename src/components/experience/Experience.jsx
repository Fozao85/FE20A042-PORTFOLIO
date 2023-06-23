import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div> <h4>HTML</h4>
              <small className='text-light'>Experience</small>
</div>
             
            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div><h4>CSS3</h4>
              <small className='text-light'>Experienced</small></div>
              

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div> <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small></div>
             

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div>       <h4>REACT</h4>
              <small className='text-light'>Experienced</small></div>
       

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div><h4>BOOSTRAP</h4>
              <small className='text-light'>Experienced</small></div>
              

            </article>
          </div>
        </div>


        {/* END OF FRONT END SECTION */}


        <div className="experience__backend">
        <h3>Back End Development</h3>
          <div className="experience__content">
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div> <h4>Node js</h4>
              <small className='text-light'>Experience</small></div>
             

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div><h4>Python</h4>
              <small className='text-light'>intermediate</small></div>
              

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div><h4>PHP</h4>
              <small className='text-light'>Intermediate</small></div>
              

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div> <h4>RDMS</h4>
              <small className='text-light'>Experienced</small></div>
             

            </article>
            <article className='
            experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div> <h4>NEXT JS</h4>
              <small className='text-light'>intermediate</small></div>
             

            </article>
          </div>
          {/* END OF BACK END */}
        </div>

      </div>
    </section>
  )
}

export default Experience
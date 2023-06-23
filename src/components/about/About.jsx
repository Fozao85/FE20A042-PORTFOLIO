import React from 'react'
import './about.css'
import Aboutimg from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { BiBook } from 'react-icons/bi';


function About() {
 
  return (
    <section id='about'>
      <h5>get to</h5>
      <h2>Know me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
<img src={Aboutimg} alt='hello'></img>
<div className="about__me-text"></div>
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>experience</h5>
              <small>5+ Years working </small>

            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>clients</h5>
              <small>10,000 + lcients worldwide</small>

            </article>
            <article className='about__card'>
              <BiBook className="about__icon"/>
              <h5>Projects</h5>
              <small>Over 18,000 done projects</small>
            </article>
          </div>
          <p>Building the future, one line of code at a time - Takem Jim Level 300 Software Engineering Student.</p>
        <a href='#contact' className='btn btn-primary'> let's talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
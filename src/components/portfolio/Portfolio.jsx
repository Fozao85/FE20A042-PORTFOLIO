// import React from 'react'
// import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


// function Portfolio() {
//   const data=[
    
//       {
//     id:1,
//     Image:IMG1,
//     title:'Project',
//     github:'http://github.com/',
//     demo:'https://whasapp.com/'
//       },
//       {
//         id:2,
//         Image:IMG2,
//         title:'Project',
//         github:'http://github.com/',
//         demo:'https://whasapp.com/'
//           },
//           {
//             id:3,
//             Image:IMG3,
//             title:'Project',
//             github:'http://github.com/',
//             demo:'https://whasapp.com/'
//               },
//               {
//                 id:4,
//                 Image:IMG4,
//                 title:'Project',
//                 github:'http://github.com/',
//                 demo:'https://whasapp.com/'
//                   }, 
//                   {
//                     id:5,
//                     Image:IMG5,
//                     title:'Project',
//                     github:'http://github.com/',
//                     demo:'https://whasapp.com/'
//                       },  
//            {
//                         id:6,
//                         Image:IMG6,
//                         title:'Project',
//                         github:'http://github.com/',
//                   demo:'https://whasapp.com/'
//                           },      

  
// ]
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>portfolio</h2>
//       <div className="container portfolio__container">

//       {
//         data.map(({id,Image,title, github, demo})=>{
//           return(
//             <article  key={id} className='portfolio__item'>
//             <div className="portfolio__item-image">
//              <img src={Image} alt={title}/>
//             </div>
//             <h3>{title}</h3>
//             <div className="portfolio__item-cta">
//             <a href={github} className='btn'>Github</a>
//             <a href={demo} className='btn btn-primary' rel='noopener'>Livedemo</a>
//             </div>
//           </article>

//           )
//         })
//       }
        

       
        
        
//         </div> 
//     </section>
//   )
// }

// export default Portfolio

import React from 'react'
import './portfolio.css'
import  { useEffect, useState } from 'react';
import axios from 'axios';


const  Portfolio=() =>{

  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get('https://cloudy-shoe-bear.cyclic.app/api/portfolio')
      .then(response => {
        const formattedData =response.data.data.map(item =>({
          id:item._id,
          image:item.image,
          title:item.title,
          github:item.github,
          demo:item.demo
        }));
        setData(formattedData)
      }).catch(error=>{console.log("error fetching portfolio data",error);})
    },[])
      
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
      { (
          data.map(({id,Image,title, github, demo})=>{
            return(
              <article  key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={Image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' rel='noopener'>Livedemo</a>
              </div>
            </article>
  
            )
          })
        )}

      
        

       
        
        
        </div> 
    </section>
  )
}

export default Portfolio
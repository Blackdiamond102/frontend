import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs"
import Topheader from '../components/Topheader'
// import { Link } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
  const [contents, setData] = useState([])

  console.log(contents);


  

 useEffect(() =>{
  axios.get("http://localhost:8000/getarticles/")
  .then((res) => setData(res.data))
  .catch((err) => console.log(err))
 }, [])
  
  return (
    <div className="home container">
      <Topheader />

        <div className='bottomheader card my-2 '>

          <h5 className=' card-header text-center'>NAIRALAND NIGERIA FORUMS</h5>

          <div className=''>
            <p>
              <Link to="/Home">Nairaland <span>/</span>&nbsp;General:</Link>&nbsp;
              
              
              <Link to="/">Politics,</Link>&nbsp;
              <Link to="/">Crime,</Link>&nbsp;
              <Link to="/">Romance,</Link>&nbsp;
              <Link to="/">Job/Vacancies,</Link>&nbsp;<Link to="/">Career,</Link>&nbsp;
              <Link to="/">Business,</Link>&nbsp;<Link to="/">Investment,</Link>&nbsp;
              <Link to="/">NYSC,</Link>&nbsp;<Link to="/">Education,</Link>&nbsp;
              <Link to="/">Auto,</Link>&nbsp;<Link to="/">Car Talk,</Link>

            </p>

            <p className='middle'>
              <Link to="/">Entertainment:</Link>&nbsp;<Link to="/">Jokes Etc, </Link>&nbsp;<Link to="/">TV/Movies,</Link>&nbsp;
              <Link to="/">Music/Radio,</Link>&nbsp;<Link to="/">Celebrities,</Link>&nbsp;<Link to="/">Fashion,</Link>&nbsp;
              <Link to="/">Events,</Link>&nbsp;<Link to="/">Sports,</Link>&nbsp;<Link to="/">Gaming,</Link>&nbsp;
              <Link to="/">Forum Games,</Link>&nbsp;<Link to="/">Literature</Link>&nbsp;
            </p>


            <p>
              <Link to="/">Entertainment:</Link>&nbsp;<Link to="/">Jokes Etc, </Link>&nbsp;<Link to="/">TV/Movies,</Link>&nbsp;
              <Link to="/">Music/Radio,</Link>&nbsp;<Link to="/">Celebrities,</Link>&nbsp;<Link to="/">Fashion,</Link>&nbsp;
              <Link to="/">Events,</Link>&nbsp;<Link to="/">Sports,</Link>&nbsp;<Link to="/">Gaming,</Link>&nbsp;
              <Link to="/">Forum Games,</Link>&nbsp;<Link to="/">Literature</Link>&nbsp;
            </p>
          </div>
         

        </div>

        <div className='advert d-flex justify-content-center gap-3'>
            <img className='image-fluid' src="../.././firstimage2.png" alt="" />
            <img className='image-fluid' src="../.././girl.jpg" alt="" />
            <img className='image-fluid' src="../.././atlete.jpg" alt="" />

          </div>
        <div className='article'>
          <div className='card'>
            <div className='card-header d-flex justify-content-center gap-3'>
              <Link>Latest News</Link>
              <span>/</span>
              <Link>Twitter</Link>
              <span>/</span>
              <Link>Facebook</Link>
              <span>/</span>
              <Link>How To Advertise</Link>

            </div>
            <div className='card-body'>
              {contents?.map(a =>(
                <Link to={`/details/${a.id}`} className='d-block text-center'>{a.title}</Link>
              ))}

               
            </div>
            
          </div>

        </div>

      
    </div>



  )
}

export default Home
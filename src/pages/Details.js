import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function Details() {
    const { id } = useParams()
    
    const [site, setSite] = useState(null)

    console.log(site);


    useEffect(() => {
      axios.get(`https://blackdiamond102.pythonanywhere.com/getarticle/${id}`)
      .then((res) => setSite(res.data))
      .catch((err) => console.log(err))

    }, [id])
  
  return (
    <div>
         <h1 className='text-center'>{site?.title}</h1>
        <div className="text-primary fs-italic" dangerouslySetInnerHTML={{
          __html: site?.description
        }}></div>
        <img className='w-25 h-25 ' src={`https://blackdiamond102.pythonanywhere.com/${site?.image}`} alt={site?.title} /> 
        <img className='w-25 h-25 ' src={`https://blackdiamond102.pythonanywhere.com/${site?.other}`} alt={site?.title} /> 
    </div>
  )
}

export default Details
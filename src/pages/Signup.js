import React, {useState, useLayoutEffect, useEffect, useRef} from 'react'
import Topheader from "./../components/Topheader"
import axios  from 'axios'

function Signup() {


 async function handleSubmit(e){
  // function handleSubmit(e){
  e.preventDefault()


  // setTimeout(() =>{
  //   alert("this is a timer")
  // }, 3000
  // )
  // alert("hello")

  let form = new FormData(e.currentTarget)
  
  await axios.post("https://blackdiamond102.pythonanywhere.com/signup/", form)
  .then((res) => {
    alert("account created successfully")

  })
  
  .catch((err) => {
    for(let i in err?.response?.data){
      alert(i + "" + err?.response?.data[i])
    }

  })
}
 

  return (
    
    <div className="signup container">
      <Topheader/>
     <form className='' onSubmit={(e) => handleSubmit(e)}>
      <div  className="row">
        <div className="col-md-6">
          <label htmlFor="fname" className='form-label'>FirstName</label>
          <input name="first_name" id="fname"  className='form-control'/>
        </div>

        <div className="col-md-6">
          <label htmlFor="" className='form-label'>LastName</label>
          <input name="last_name" type="text"  className='form-control'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="" className='form-label'>Phone</label>
          <input name="phone" type="text"  className='form-control'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="" className='form-label'>Email</label>
          <input name="email" type="email"  className='form-control'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="" className='form-label'>Password</label>
          <input name="password" type="password"  className='form-control'/>

        </div>
        <div className="col-md-6">
          <label htmlFor="" className='form-label'>photo</label>
          <input name="photo" type="file"  className='form-control'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="" className='form-label'>username</label>
          <input name="username" type="text"  className='form-control'/>
        </div>

        <button type='submit' className="btn-md btn-primary w-100 mt-4 ">Signup</button>

      </div>
      

     </form>
    </div>
  )
}

export default Signup
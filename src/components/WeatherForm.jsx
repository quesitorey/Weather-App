import { useState } from 'react'


const WeatherForm = ({ getLocation }) => {

  const [ form, setForm ] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    console.log({ form })

    if(form === "" || !form) return;

    getLocation(form)
  }
  
  return(

    <>
            <h1 className="h1">WeatherApp</h1>
    <form onSubmit={ onSubmit }>
      <div>
        <input 
          type="text"
          className="form-input"
          placeholder='City'
          onChange={e => setForm(e.target.value)}/>
      </div>
      
    </form>
    </>
  )
}

export default WeatherForm
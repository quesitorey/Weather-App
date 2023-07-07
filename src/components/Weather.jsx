import { useState, useEffect } from 'react'
import axios from 'axios'

import WeatherForm from './WeatherForm'
import Card from './Card'
import Loader from './Loader'

const Weather = () => {

  const [ weather, setWeather ] = useState([])
  const [ searchWeather, setSearchWeather ] = useState([])
  const [ location, setLocation ] = useState("")
  const [ isLoading, setIsLoading ] = useState(true)
  /*---------------------------- */
  useEffect(() => {
    
  function success(pos){
    
    const crd = pos.coords;
      
   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=3b2730e53dc1143db1c9515aa10a5c66`)
      .then( resp => {
        setSearchWeather(resp.data)
        setTimeout(() => { 
         setIsLoading(false)
        }, 200)
      } )
      .catch( err => console.error(err) )
  
  }
    navigator.geolocation.getCurrentPosition(success)
    }, [])
/*----------------------------- */
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=3b2730e53dc1143db1c9515aa10a5c66&lang=es`
    let city = "&q="

  const searchLocation = async(loc) => {
    setLocation(loc)
    weatherUrl = weatherUrl + city + loc

    await fetch(weatherUrl).then(resp => {if( !resp.ok ) throw { resp } 
      return resp.json() })
      .then(resp => {
        console.log(resp)
        setSearchWeather(resp)
      })
      .catch(err => console.error(err))
  }
  
  return(
    <>
      { isLoading && <Loader/> }
      <WeatherForm 
        getLocation={ searchLocation }
      />

      <Card
          weather={ searchWeather }
      />
      
    </>
  )
}
export default Weather


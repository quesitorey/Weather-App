import img1 from '/iconos/1.svg'
import img2 from '/iconos/2.svg'
import img3 from '/iconos/3.svg'
import img4 from '/iconos/6.svg'

const Card = ({ weather }) => {
  return(
    <div className="card-container">

        <img 
          src={ weather.main?.humidity < 60 ? img1 : weather.main?.humidity < 70 ? img2 :  weather.main?.humidity < 80 ? img3 : img4 }
        />
      <div className="card-box">
        <h1 className="text">{ weather.name }</h1>
        <br/>
        <h4 className="text"> Humidity: { weather.main?.humidity }%</h4>
        <h4 className="text"> Pressure: { weather.main?.pressure }%</h4>
      </div>
    </div>
  )
}

export default Card
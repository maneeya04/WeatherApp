import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from 'react'
export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city: "Delhi",
        temp: 22,
        feelsLike: 22.95,
        tempMin: 23.9,
        tempMax: 23.9,
        humidity: 23,
        weather: "overcast clouds",
    })
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>WeatherApp</h2>
            <SearchBox updateInf={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}
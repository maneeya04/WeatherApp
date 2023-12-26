import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInf}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3b61072850553668ceb9b551935d6525";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        }
        catch(err){
            throw err;
        }
    }

    
    let handleChange=(evt)=>{
        evt.preventDefault();
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInf(newInfo);
        }
        catch(err){
            setError(true);
        }
    }
    return (
        <div>
            <h4>Search Box</h4>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" required value={city} onChange={handleChange}/>&nbsp;&nbsp;<Button variant="contained" type='submit'>Search</Button>
                
            </form>
            {error&&<p>NO SUCH PLACE EXISTS</p>}
            
        </div>
    )
}
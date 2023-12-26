import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({weatherInfo}){
    const HOT_URL="https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.jpg?s=1024x1024&w=is&k=20&c=u_8VMQt8kZ9OoMqGygaHKMUN0y-Hk9JXJm-9LhSpZGY=";
    const COLD_URL="https://images.unsplash.com/photo-1519414119614-31e82ec0cce7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
    <div>
        
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={weatherInfo.humidity>80?RAIN_URL:weatherInfo.temp>15?HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}{
                weatherInfo.humidity>80?<ThunderstormIcon/>:weatherInfo.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>
            }
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <div>Temperature={weatherInfo.temp}&deg;C</div>
            <div>Humidity={weatherInfo.humidity}&deg;C</div>
            <div>tempMin={weatherInfo.tempMin}&deg;C</div>
            <div>tempMax={weatherInfo.tempMax}&deg;C</div>
            <div>feelsLike={weatherInfo.feelsLike}&deg;C</div>
            <div><p>Looks like <i>{weatherInfo.weather}</i></p></div>
            </Typography>
        </CardContent>
        </Card>
    
    </div>)
}
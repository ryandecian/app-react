interface MeteoProps {
    icon: "sunny" | "cloudy" | "rainy" | "stormy";}


function Meteo(props: MeteoProps) {
    const {icon} = props;
    const weatherMap = {
        sunny: "☀️",
        cloudy: "☁️",
        rainy: "🌧️",
        stormy: "🌩️"
      }
    
    return (<p>{weatherMap[icon]}</p>)
} 


export default Meteo;
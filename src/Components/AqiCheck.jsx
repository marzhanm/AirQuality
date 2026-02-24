// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
// https://nominatim.openstreetmap.org/search?format=json&q=${city} 

function AqiCheck() {
    const aqi_mock = 48;

    const aqiLabel = (aqi) => {
            if(aqi <= 50) return {color:"#9AEE66",text:"Good"};
            if(aqi <= 100) return {color:"#EEEE66",text:"Moderate"};
            if(aqi <= 150) return {color:"#EEBA66",text:"Unhealthy for sensitive groups"};
            if(aqi <= 200) return {color:"#F45A5D",text:"Unhealthy"};
            if(aqi <= 300) return {color:"#D094FE",text:"Very Unhealthy"};
            return {color:"#8F6AE5", text:"Hazardous"}
    };
    
    const {color, text} = aqiLabel(aqi_mock);

    return (
    <div className="text-center">
      <h3 className="text-xl mb-5 font-medium">AQI (us)</h3>
      <div className="text-6xl font-bold text-[#5a4a3a] my-5">{aqi_mock}</div>
      <div 
        className="inline-block py-2 px-10 rounded-full text-#764A17 font-medium text-base"
        style={{ backgroundColor: color }}
      >
        {text}
      </div>
    </div>
       );
    }

export default AqiCheck;
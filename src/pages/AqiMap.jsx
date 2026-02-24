import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
});

function AqiMap(){

    const center=[43.2220, 76.8512];
    const markers = [
        {id: 1, geocode: [43.2380, 76.8890], aqi: 45},
        {id: 2, geocode: [43.2560, 76.9280], aqi: 87},
        {id: 3, geocode: [43.2050, 76.8350], aqi: 165}
    ]

    const getAqiColor = (aqi) => {
            if(aqi <= 50) return "#9AEE66";
            if(aqi <= 100) return "#EEEE66";
            if(aqi <= 150) return "#EEBA66";
            if(aqi <= 200) return "#F45A5D";
            if(aqi <= 300) return "#D094FE";
            return "#8F6AE5"
    };

    return (
        <div className="relative w-full h-[calc(100vh-60px)]">
            <div className="w-full h-full z-[1]">
        <MapContainer center={center} zoom={11} style={{width: '100%', height: '100%'}}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            {markers.map(marker => (
                <div key={marker.id}>
                    <Circle center={marker.geocode} radius={1000} pathOptions={{ color: getAqiColor(marker.aqi), fillColor: getAqiColor(marker.aqi), fillOpacity: 0.4}}
                    />
                    <Marker position={marker.geocode}>
                        <Popup>
                            AQI: {marker.aqi}
                        </Popup>
                    </Marker>
                </div>
            ))}
        </MapContainer>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-0 rounded-lg overflow-hidden shadow-lg z-[1000]">
              <div className="py-2.5 px-5 font-medium bg-[#9AEE66]">Good</div>
              <div className="py-2.5 px-5 font-medium bg-[#EEEE66]">Moderate</div>
              <div className="py-2.5 px-5 font-medium bg-[#EEBA66]">Unhealthy for sensitive groups</div>
              <div className="py-2.5 px-5 font-medium bg-[#F45A5D]">Unhealthy</div>
              <div className="py-2.5 px-5 font-medium bg-[#D094FE]">Very Unhealthy</div>
              <div className="py-2.5 px-5 font-medium bg-[#8F6AE5]">Hazardous</div>
      </div>
      
        </div>
    )
}

export default AqiMap;
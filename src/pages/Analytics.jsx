import './Analytics.css'
import CityFeatures from '../Components/CityFeatures'
import AqiCheck from '../Components/AqiCheck'
import BatteryGraph from '../Components/BatteryGraph'
import MapView from '../Components/MapView'
import SensorMeasures from '../Components/SensorMeasures'

function Analytics() {
    return (
        <div className="analytics-page">
            <h2 className='analytics-header'>Analytics</h2>
            <div className='analytics-column'>
                <div className='left-column'>
                    

                    <div className='top-boxes'>
                        <div className='dashboard-box'>
                            <CityFeatures/>
                        <div className='dashboard-box'>
                            <AqiCheck/></div>
                        </div>
                    </div>
                        <div className='dashboard-box'>
                            <MapView />
                        </div>
                </div>
               
                <div className='right-column'>  
                    <div className='dashboard-box'>
                        <BatteryGraph />
                    </div>
                <div className='dashboard-box'>
                        <SensorMeasures />
                </div>
                </div>
            
            </div>
        </div>
    ) 
}

export default Analytics;
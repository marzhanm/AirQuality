import {useState} from 'react';

function CityFeatures (){
  const [selectedCity, setSelectedCity] = useState('Almaty');

  //template
  const cityData = {
    Almaty: {
      Temperature: '2°C',
      Humidity: '95%',
      Pressure: '93,060 Pa',
      Wind: '5 km/h'
    },
    Kaskelen: {
      Temperature: '1°C',
      Humidity: '90%',
      Pressure: '94,000 Pa',
      Wind: '3 km/h'
    }
  }
  const currentData = cityData[selectedCity];
    return(
      
    <div className="">
      <div className='flex rounded-lg gap-1 mb-2'>
        <button className={`flex-1 py-3 px-5 border rounded-lg font-medium text-base transition-all city-btn ${selectedCity === 'Almaty' ? 'bg-[#764A17] text-white' : 'bg-white text-[#5a4a3a]'}`}
        onClick={() => setSelectedCity('Almaty')}
        > Almaty
        </button>
        <button className={`flex-1 py-3 px-5 border rounded-lg font-medium text-base transition-all city-btn city-btn ${selectedCity === 'Kaskelen' ? 'bg-[#764A17] text-white' : 'bg-white text-[#5a4a3a]'}`}
        onClick={() => setSelectedCity('Kaskelen')}
        > Kaskelen
        </button>
      </div>
      
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-sm'>Temperature: </span>
          <span className='font-medium text-sm'>{currentData.Temperature}</span>
        </div>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-sm'>Humidity: </span>
          <span className='font-medium text-sm'>{currentData.Humidity}</span>
        </div>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-sm'>Pressure: </span>
          <span className='font-medium text-sm'>{currentData.Pressure}</span>
        </div>
        <div className='flex justify-between items-center py-2 border-b border-gray-100'>
          <span className='text-sm'>Wind: </span>
          <span className='font-medium text-sm'>{currentData.Wind}</span>
        </div>
      </div>
    </div>
    );
}

export default CityFeatures;
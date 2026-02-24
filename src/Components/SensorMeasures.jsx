// src/components/SensorMeasures.jsx
function SensorMeasures() {
  const measures = [
    { label: 'PM1: ', value: 30 },
    { label: 'PM2.5: ', value: 30 },
    { label: 'PM10: ', value: 10 },
    { label: 'SO₂: ', value: 10 },
    { label: 'NO₂: ', value: 19 },
    { label: 'CO: ', value: 3 },
    { label: 'O₃: ', value: 8 },
  ];
  
  return (
    <div>
      <h3 className="text-xl text-[#5a4a3a] mb-6 font-medium">Sensor measures</h3>
      <div className="grid grid-cols-3 gap-5">
        {measures.map((measure, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#5a4a3a] text-base font-medium">{measure.label}</span>
              <span className="text-[#2c2c2c] text-lg font-semibold">{measure.value}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#9BC53D] rounded-full"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SensorMeasures;
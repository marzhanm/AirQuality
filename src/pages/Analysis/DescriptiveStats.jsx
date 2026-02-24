import descriptive from '../../assets/descriptive-statistics.png';


function DescriptiveStats(){
    return (
        <div className='flex flex-col items-center mb-4 gap-5 mb-2 p-20'>
            <h2 className="text-3xl font-bold text-heading">Descriptive statistics of data</h2>
        <div>
           <img src={descriptive} /> 
        </div>
        <p>Descriptive statistics on air quality data at the different stations in Johor</p>           
        </div>  
    )

}

export default DescriptiveStats;
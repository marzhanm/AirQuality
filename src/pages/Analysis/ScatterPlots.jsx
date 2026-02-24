import scatter from '../../assets/scatter-plot.png';

function ScatterPlots(){
    return(
        <div className='flex flex-col items-center mb-4 gap-5 mb-2 p-20'>
            <h2 className="text-3xl font-bold text-heading">Scatter plots</h2>
        <div>
           <img src={scatter} /> 
        </div>
        <p>Scatter plot of air pollution and current account trends. 
        a The full sample scatter plot of air pollution and the current account of 159 countries (2000–2017) around the world. 
        “Air pollution” indicates the natural logarithm of the average annual exposure of PM2.5 in each country (micrograms per cubic metre); “current account” indicates the proportion of the current account balance in GDP of each country; and “fitted values” indicates the fitted line. 
        b Scatter plot of the average air pollution during the sampling period and the current account of 159 countries (2000–2017). 
        “Average air pollution” represents the arithmetic average of the natural logarithm of the average annual exposure of PM2.5 (micrograms per cubic metre) in each country from 2000 to 2017; “average current account” represents the historical arithmetic average of the current account balance in each country; and “fitted values” indicates the fitted line</p>           
        </div> ) 
}

export default ScatterPlots;
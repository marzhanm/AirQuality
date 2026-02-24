import linear from '../../assets/linear-regression.png';

function RegressionAnalysis(){
    return(
        <div className='flex flex-col items-center mb-4 gap-5 mb-2 p-20'>
            <h2 className="text-3xl font-bold text-heading">Regression analysis</h2>
        <div>
           <img src={linear} /> 
        </div>
        <p>
            Linear regression analysis between air quality (NO 2 and SPM), traffic volume, and vehicular emissions. 
            All correlations are significant at the p {'<'} 0.01 level (two-tailed), n = 20 (sampled in four seasons at five sites). ▲ = Site 1, • = Site 2, ◊ = Site 3, Δ = Site 4, ○ = Site 5.
            </p>           
        </div> ) 
}

export default RegressionAnalysis;
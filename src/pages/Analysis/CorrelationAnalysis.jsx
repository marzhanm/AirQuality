import correlation from '../../assets/correlation-analysis.png';

function CorrelationAnalysis(){
    return(
        <div className='flex flex-col items-center mb-4 gap-5 mb-2 p-20'>
            <h2 className="text-3xl font-bold text-heading">Сorrelation analysis of indicators</h2>
            <div>
                <img src={correlation} /> 
            </div>
            <p>Spearman correlation analysis among indicators. Blue indicates a positive correlation and red indicates a negative correlation. 
            The intensity of the color increases with the proximity to 1. 
            The correlation coefficient is displayed in bold and underlined if p {'<'} less than 0.05. AB, actual bicarbonate; ILD, interstitial lung diseases; PaCO2, partial pressure of carbon dioxide; PaO2, partial pressure of oxygen.</p>           
        </div>    
)
}

export default CorrelationAnalysis;
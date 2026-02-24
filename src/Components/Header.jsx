import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import './Header.css';

function Header() {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAnalysisOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {document.removeEventListener('mousedown', handleClickOutside);};
  }, []);

  return (

    <header className="header">
      <div className="container">
        <h1 className='header-title'>AirQuality</h1>
        <nav>
          <Link to="/" onClick={() => setIsAnalysisOpen(false)}>Analytics</Link>
          <Link to="/AqiMap" onClick={() => setIsAnalysisOpen(false)}>AQI Map</Link>
          
          <div className="dropdown" ref={dropdownRef}>
            <button className='dropdown-toggle' onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}>
              Analysis {isAnalysisOpen ? '▲' : '▼'}
            </button>
            {isAnalysisOpen && (
              <div className='dropdown-menu'>
                 <Link to="/analysis/correlation" onClick={() => setIsAnalysisOpen(false)}>Correlation Analysis</Link>
                 <Link to="/analysis/descriptive-stats" onClick={() => setIsAnalysisOpen(false)}>Descriptive Statistics</Link>
                 <Link to="/analysis/scatter-plots" onClick={() => setIsAnalysisOpen(false)}>Scatter Plots</Link>
                 <Link to="/analysis/regression" onClick={() => setIsAnalysisOpen(false)}>Regression Analysis</Link>
              </div>
            )}
          </div>
          
          <Link to="/About">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
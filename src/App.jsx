import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import Analytics from './pages/Analytics';
import AqiMap from './pages/AqiMap';
import About from './pages/About';
import CorrelationAnalysis from './pages/Analysis/CorrelationAnalysis';
import DescriptiveStats from './pages/Analysis/DescriptiveStats';
import RegressionAnalysis from './pages/Analysis/RegressionAnalysis';
import ScatterPlots from './pages/Analysis/ScatterPlots';

function App() {
  return (
    <BrowserRouter>
        <div className='flex flex-col min-h-screen w-full'>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Analytics />} /> 
          <Route path="/aqimap" element={<AqiMap />} />
          <Route path="/analysis/correlation" element={<CorrelationAnalysis />} />
          <Route path="/analysis/descriptive-stats" element={<DescriptiveStats />} />
          <Route path="/analysis/scatter-plots" element={<ScatterPlots />} />
          <Route path="/analysis/regression" element={<RegressionAnalysis />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main> </div>
    </BrowserRouter>
  )
}

export default App

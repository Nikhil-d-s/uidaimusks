import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import DataPreparation from './components/sections/DataPreparation';
import UnivariateAnalysis from './components/sections/UnivariateAnalysis';
import GeographicAnalysis from './components/sections/GeographicAnalysis';
import BivariateAnalysis from './components/sections/BivariateAnalysis';
import TrivariateAnalysis from './components/sections/TrivariateAnalysis';
import GeographicExplorer from './components/sections/GeographicExplorer';
import MigrationRadar from './components/sections/MigrationRadar';
import ChildRiskMap from './components/sections/ChildRiskMap';
import SystemIntelligence from './components/sections/SystemIntelligence';
import EarlyWarning from './components/sections/EarlyWarning';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen" style={{ backgroundColor: '#0d0d0d' }}>
        <Sidebar />
        <main className="flex-1 ml-0 lg:ml-64 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Hero />} />
            <Route path="/data-prep" element={<DataPreparation />} />
            <Route path="/univariate" element={<UnivariateAnalysis />} />
            <Route path="/geographic" element={<GeographicAnalysis />} />
            <Route path="/bivariate" element={<BivariateAnalysis />} />
            <Route path="/trivariate" element={<TrivariateAnalysis />} />
            <Route path="/geographic-explorer" element={<GeographicExplorer />} />
            <Route path="/migration-radar" element={<MigrationRadar />} />
            <Route path="/child-risk-map" element={<ChildRiskMap />} />
            <Route path="/system-intelligence" element={<SystemIntelligence />} />
            <Route path="/early-warning" element={<EarlyWarning />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

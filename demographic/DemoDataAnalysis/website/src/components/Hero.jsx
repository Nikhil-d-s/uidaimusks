import { HiViewGrid, HiChartBar, HiLightningBolt, HiCheckCircle, HiCube } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Hero Section */}
      <div className="rounded-lg p-6 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-3">
          Aadhaar Demographic Intelligence & Early-Warning System
        </h1>
        <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
          A multi-layer, explainable analytical framework transforming Aadhaar demographic update data into actionable intelligence
        </p>
        <div className="flex gap-3">
          <span className="px-3 py-1.5 text-white rounded text-sm font-semibold" style={{ background: '#2a2a2a', border: '1px solid #3a3a3a' }}>
            ADIEWS
          </span>
          <span className="px-3 py-1.5 rounded text-sm" style={{ background: '#1f1f1f', border: '1px solid #2a2a2a', color: '#9ca3af' }}>
            Research Documentation
          </span>
        </div>
      </div>

      {/* Project Overview */}
      <div className="rounded-lg shadow-lg p-5 mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiViewGrid /> Project Overview</h2>
        <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
          This project analyzes anonymized Aadhaar demographic update data to extract behavioral signals about population mobility, child documentation risks, administrative system stress, and policy effectiveness.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-2" style={{ color: '#d1d5db' }}>Designed For</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Unique Identification Authority of India (UIDAI)</p>
          </div>
          <div className="p-3 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-2" style={{ color: '#d1d5db' }}>Core Principle</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Extract insights while maintaining privacy, explainability, and ethical governance</p>
          </div>
        </div>
      </div>

      {/* Dataset Summary */}
      <div className="rounded-lg shadow-lg p-5 mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiChartBar /> Dataset Summary</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div className="text-2xl font-bold" style={{ color: '#6b7280' }}>2.4M</div>
            <div className="text-xs mt-1" style={{ color: '#9ca3af' }}>Total Records</div>
          </div>
          
          <div className="p-4 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div className="text-2xl font-bold" style={{ color: '#6b7280' }}>10</div>
            <div className="text-xs mt-1" style={{ color: '#9ca3af' }}>Months of Data</div>
          </div>
          
          <div className="p-4 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div className="text-2xl font-bold" style={{ color: '#6b7280' }}>967</div>
            <div className="text-xs mt-1" style={{ color: '#9ca3af' }}>Districts</div>
          </div>
          
          <div className="p-4 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div className="text-2xl font-bold" style={{ color: '#6b7280' }}>49.9M</div>
            <div className="text-xs mt-1" style={{ color: '#9ca3af' }}>Total Updates</div>
          </div>
        </div>

        <div className="mt-5 p-4 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
          <h3 className="font-bold text-base mb-3" style={{ color: '#d1d5db' }}>Update Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span style={{ color: '#9ca3af' }}>Child Updates (5-17)</span>
                <span className="font-semibold" style={{ color: '#6b7280' }}>4.5M (9.06%)</span>
              </div>
              <div className="w-full rounded-full h-2" style={{ background: '#2a2a2a' }}>
                <div className="h-2 rounded-full" style={{ width: '9.06%', background: '#4a4a4a' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span style={{ color: '#9ca3af' }}>Adult Updates (17+)</span>
                <span className="font-semibold" style={{ color: '#6b7280' }}>45.4M (90.94%)</span>
              </div>
              <div className="w-full rounded-full h-2" style={{ background: '#2a2a2a' }}>
                <div className="h-2 rounded-full" style={{ width: '90.94%', background: '#4a4a4a' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Architecture */}
      <div className="rounded-lg shadow-lg p-5 mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiCube /> Framework Architecture</h2>
        
        <div className="space-y-3">
          <div className="p-4 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-1" style={{ color: '#d1d5db' }}>Layer 1: Core Signals</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Invisible Migration Radar - detecting population mobility patterns</p>
          </div>
          
          <div className="p-4 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-1" style={{ color: '#d1d5db' }}>Layer 2: Social Risk Lens</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Child Documentation Risk Map - identifying vulnerable populations</p>
          </div>
          
          <div className="p-4 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-1" style={{ color: '#d1d5db' }}>Layer 3: System Intelligence</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Demographic Stability Index & Aadhaar Dependency Proxy</p>
          </div>
          
          <div className="p-4 rounded" style={{ borderLeft: '3px solid #4a4a4a', background: '#141414', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-1" style={{ color: '#d1d5db' }}>Layer 4: Decision Support</h3>
            <p className="text-sm" style={{ color: '#9ca3af' }}>Explainable Early-Warning System for administrators</p>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="rounded-lg shadow-lg p-5 text-white" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><HiLightningBolt /> Key Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <HiCheckCircle className="text-xl flex-shrink-0" style={{ color: '#10b981' }} />
            <div>
              <h3 className="font-bold text-sm mb-1">Privacy-First</h3>
              <p className="text-sm" style={{ color: '#9ca3af' }}>No individual tracking, aggregate analysis only</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <HiCheckCircle className="text-xl flex-shrink-0" style={{ color: '#10b981' }} />
            <div>
              <h3 className="font-bold text-sm mb-1">Explainable</h3>
              <p className="text-sm" style={{ color: '#9ca3af' }}>No black-box ML, rule-based logic</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <HiCheckCircle className="text-xl flex-shrink-0" style={{ color: '#10b981' }} />
            <div>
              <h3 className="font-bold text-sm mb-1">Ethical</h3>
              <p className="text-sm" style={{ color: '#9ca3af' }}>Service improvement, not surveillance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <HiCheckCircle className="text-xl flex-shrink-0" style={{ color: '#10b981' }} />
            <div>
              <h3 className="font-bold text-sm mb-1">Actionable</h3>
              <p className="text-sm" style={{ color: '#9ca3af' }}>Every insight tied to interventions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

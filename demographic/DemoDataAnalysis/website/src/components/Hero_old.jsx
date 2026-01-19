const Hero = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-white mb-6 shadow-xl border border-gray-800">
        <h1 className="text-3xl font-bold mb-3">
          Aadhaar Demographic Intelligence & Early-Warning System
        </h1>
        <p className="text-base text-gray-400 mb-4">
          A multi-layer, explainable analytical framework transforming Aadhaar demographic update data into actionable intelligence
        </p>
        <div className="flex gap-4">
          <span className="px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold border border-gray-600">
            ADIEWS
          </span>
          <span className="px-4 py-2 bg-gray-600 rounded-lg border border-gray-500">
            Research Documentation
          </span>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-800">
        <h2 className="text-xl font-bold text-gray-100 mb-3">🎯 Project Overview</h2>
        <p className="text-sm text-gray-400 mb-4">
          This project analyzes anonymized Aadhaar demographic update data to extract behavioral signals about population mobility, child documentation risks, administrative system stress, and policy effectiveness.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="border-l-4 border-gray-600 pl-4 bg-black p-3 rounded-r">
            <h3 className="font-semibold text-sm text-gray-300 mb-1">Designed For</h3>
            <p className="text-xs text-gray-500">Unique Identification Authority of India (UIDAI)</p>
          </div>
          <div className="border-l-4 border-gray-600 pl-4 bg-black p-3 rounded-r">
            <h3 className="font-semibold text-sm text-gray-300 mb-1">Core Principle</h3>
            <p className="text-xs text-gray-500">Extract insights while maintaining privacy, explainability, and ethical governance</p>
          </div>
        </div>
      </div>

      {/* Dataset Summary */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-800">
        <h2 className="text-xl font-bold text-gray-100 mb-4">📊 Dataset Summary</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="text-2xl font-bold text-gray-200">2.4M</div>
            <div className="text-xs text-gray-500 mt-1">Total Records</div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="text-2xl font-bold text-gray-200">10</div>
            <div className="text-xs text-gray-500 mt-1">Months of Data</div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="text-2xl font-bold text-gray-200">967</div>
            <div className="text-xs text-gray-500 mt-1">Districts</div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="text-2xl font-bold text-gray-200">49.9M</div>
            <div className="text-xs text-gray-500 mt-1">Total Updates</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-black rounded border border-gray-800">
          <h3 className="font-semibold text-base text-gray-300 mb-3">Update Distribution</h3>
          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500">Child Updates (5-17)</span>
                <span className="font-medium text-xs text-gray-400">4.5M (9.06%)</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-gray-500 h-1.5 rounded-full" style={{ width: '9.06%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500">Adult Updates (17+)</span>
                <span className="font-medium text-xs text-gray-400">45.4M (90.94%)</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '90.94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Architecture */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-800">
        <h2 className="text-xl font-bold text-gray-100 mb-4">🏗️ Framework Architecture</h2>
        
        <div className="space-y-3">
          <div className="border-l-4 border-gray-500 bg-gray-900 p-4 rounded-r border border-gray-800">
            <h3 className="font-semibold text-base text-gray-200 mb-1">Layer 1: Core Signals</h3>
            <p className="text-sm text-gray-500">Invisible Migration Radar - detecting population mobility patterns</p>
          </div>
          
          <div className="border-l-4 border-gray-500 bg-gray-900 p-4 rounded-r border border-gray-800">
            <h3 className="font-semibold text-base text-gray-200 mb-1">Layer 2: Social Risk Lens</h3>
            <p className="text-sm text-gray-500">Child Documentation Risk Map - identifying vulnerable populations</p>
          </div>
          
          <div className="border-l-4 border-gray-500 bg-gray-900 p-4 rounded-r border border-gray-800">
            <h3 className="font-semibold text-base text-gray-200 mb-1">Layer 3: System Intelligence</h3>
            <p className="text-sm text-gray-500">Demographic Stability Index & Aadhaar Dependency Proxy</p>
          </div>
          
          <div className="border-l-4 border-gray-500 bg-gray-900 p-4 rounded-r border border-gray-800">
            <h3 className="font-semibold text-base text-gray-200 mb-1">Layer 4: Decision Support</h3>
            <p className="text-sm text-gray-500">Explainable Early-Warning System for administrators</p>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white border border-gray-800">
        <h2 className="text-xl font-bold mb-4">✨ Key Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <div className="text-lg">✅</div>
            <div>
              <h3 className="font-semibold text-sm mb-0.5">Privacy-First</h3>
              <p className="text-xs text-gray-500">No individual tracking, aggregate analysis only</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="text-lg">✅</div>
            <div>
              <h3 className="font-semibold text-sm mb-0.5">Explainable</h3>
              <p className="text-xs text-gray-500">No black-box ML, rule-based logic</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="text-lg">✅</div>
            <div>
              <h3 className="font-semibold text-sm mb-0.5">Ethical</h3>
              <p className="text-xs text-gray-500">Service improvement, not surveillance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="text-lg">✅</div>
            <div>
              <h3 className="font-semibold text-sm mb-0.5">Actionable</h3>
              <p className="text-xs text-gray-500">Every insight tied to interventions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

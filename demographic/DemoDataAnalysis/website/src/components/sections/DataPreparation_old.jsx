import { useState } from 'react';

const DataPreparation = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white mb-6 shadow-xl border border-gray-800">
        <h1 className="text-2xl font-bold mb-2">📁 Data Preparation & Loading</h1>
        <p className="text-sm text-gray-400">
          Comprehensive data cleaning, standardization, and aggregation pipeline
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded p-4 border border-gray-800">
          <div className="text-2xl font-bold text-gray-200 mb-1">69</div>
          <div className="text-xs text-gray-500">CSV Files Processed</div>
        </div>
        
        <div className="bg-gray-800 rounded p-4 border border-gray-800">
          <div className="text-2xl font-bold text-gray-200 mb-1">2.4M</div>
          <div className="text-xs text-gray-500">Records Loaded</div>
        </div>
        
        <div className="bg-gray-800 rounded p-4 border border-gray-800">
          <div className="text-2xl font-bold text-gray-200 mb-1">100%</div>
          <div className="text-xs text-gray-500">Success Rate</div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-800">
        <h2 className="text-lg font-bold text-gray-100 mb-4">📋 Processing Pipeline</h2>
        
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="border rounded-lg overflow-hidden border-gray-700">
            <button
              onClick={() => toggleSection('step1')}
              className="w-full bg-gray-700 hover:bg-gray-600 p-4 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span className="font-bold text-lg text-gray-100">Data Loading from CSV Files</span>
              </div>
              <span className="text-2xl text-gray-300">{expandedSection === 'step1' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step1' && (
              <div className="p-6 bg-gray-900 border-t border-gray-700">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Loaded 69 CSV files from <code className="bg-gray-800 px-2 py-1 rounded border border-gray-700">DemographicData/</code> directory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Concatenated all records into unified DataFrame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Total records: 2,375,882 (156 MB daily dataset)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Time range: March 2025 - January 2026 (10 months)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className="border rounded-lg overflow-hidden border-gray-700">
            <button
              onClick={() => toggleSection('step2')}
              className="w-full bg-gray-700 hover:bg-gray-600 p-4 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span className="font-bold text-lg text-gray-100">Date Standardization</span>
              </div>
              <span className="text-2xl text-gray-300">{expandedSection === 'step2' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step2' && (
              <div className="p-6 bg-gray-900 border-t border-gray-700">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Converted <code className="bg-gray-800 px-2 py-1 rounded border border-gray-700">UpdateDate</code> column to datetime format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Handled mixed date formats using <code className="bg-gray-800 px-2 py-1 rounded border border-gray-700">pd.to_datetime()</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Extracted temporal features: Year, Month, Date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Sorted records chronologically for time-series analysis</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div className="border rounded-lg overflow-hidden border-gray-700">
            <button
              onClick={() => toggleSection('step3')}
              className="w-full bg-gray-700 hover:bg-gray-600 p-4 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span className="font-bold text-lg text-gray-100">Data Cleaning & Validation</span>
              </div>
              <span className="text-2xl text-gray-300">{expandedSection === 'step3' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step3' && (
              <div className="p-6 bg-gray-900 border-t border-gray-700">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Missing value analysis: No missing values detected in core columns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Data type validation: Ensured integer types for update counts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Range checks: Validated positive values for demographic updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Duplicates: Verified no duplicate date-location combinations</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div className="border rounded-lg overflow-hidden border-gray-700">
            <button
              onClick={() => toggleSection('step4')}
              className="w-full bg-gray-700 hover:bg-gray-600 p-4 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <span className="font-bold text-lg text-gray-100">Multi-Level Aggregation</span>
              </div>
              <span className="text-2xl text-gray-300">{expandedSection === 'step4' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step4' && (
              <div className="p-6 bg-gray-900 border-t border-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">Created three aggregation levels for flexible analysis:</p>
                  
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
                    <h4 className="font-bold text-blue-300 mb-2">Pincode Level (Most Granular)</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• 19,772 unique pincodes</li>
                      <li>• Monthly aggregation by pincode</li>
                      <li>• Best for local service delivery planning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900/30 p-4 rounded-lg border border-green-700">
                    <h4 className="font-bold text-green-300 mb-2">District Level (Intermediate)</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• 967 unique districts</li>
                      <li>• Monthly aggregation by district</li>
                      <li>• Best for regional trend analysis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700">
                    <h4 className="font-bold text-purple-300 mb-2">State Level (Highest)</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• 63 unique states/UTs</li>
                      <li>• Monthly aggregation by state</li>
                      <li>• Best for policy comparison and national trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output Files */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">💾 Output Files Generated</h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-900/70 rounded-lg border border-gray-700">
            <div>
              <span className="font-mono text-sm text-blue-400">df_clean_daily.csv</span>
              <p className="text-sm text-gray-400 mt-1">Daily granular data (156 MB)</p>
            </div>
            <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold border border-blue-700">2.4M records</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-900/70 rounded-lg border border-gray-700">
            <div>
              <span className="font-mono text-sm text-green-400">df_monthly_pincode.csv</span>
              <p className="text-sm text-gray-400 mt-1">Monthly aggregation at pincode level</p>
            </div>
            <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-semibold border border-green-700">Pincode</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-900/70 rounded-lg border border-gray-700">
            <div>
              <span className="font-mono text-sm text-purple-400">df_monthly_district.csv</span>
              <p className="text-sm text-gray-400 mt-1">Monthly aggregation at district level</p>
            </div>
            <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold border border-purple-700">District</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-900/70 rounded-lg border border-gray-700">
            <div>
              <span className="font-mono text-sm text-orange-400">df_monthly_state.csv</span>
              <p className="text-sm text-gray-400 mt-1">Monthly aggregation at state level</p>
            </div>
            <span className="bg-orange-900/50 text-orange-300 px-3 py-1 rounded-full text-sm font-semibold border border-orange-700">State</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPreparation;

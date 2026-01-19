import { useState } from 'react';
import { HiFolder, HiDatabase, HiChevronDown, HiChevronUp, HiChevronRight, HiCog } from 'react-icons/hi';

const DataPreparation = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="rounded-lg p-5 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2"><HiFolder /> Data Preparation & Loading</h1>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Comprehensive data cleaning, standardization, and aggregation pipeline
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg shadow-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="text-2xl font-bold mb-1" style={{ color: '#6b7280' }}>69</div>
          <div className="text-sm" style={{ color: '#9ca3af' }}>CSV Files Processed</div>
        </div>
        
        <div className="rounded-lg shadow-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="text-2xl font-bold mb-1" style={{ color: '#6b7280' }}>2.4M</div>
          <div className="text-sm" style={{ color: '#9ca3af' }}>Records Loaded</div>
        </div>
        
        <div className="rounded-lg shadow-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="text-2xl font-bold mb-1" style={{ color: '#6b7280' }}>100%</div>
          <div className="text-sm" style={{ color: '#9ca3af' }}>Success Rate</div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="rounded-lg shadow-lg p-5 mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiCog /> Processing Pipeline</h2>
        
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => toggleSection('step1')}
              className="w-full p-4 flex items-center justify-between transition-colors"
              style={{ background: '#1f1f1f' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2a2a2a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1f1f1f'}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: '#3a3a3a' }}>1</span>
                <span className="font-bold text-base" style={{ color: '#d1d5db' }}>Data Loading from CSV Files</span>
              </div>
              <span className="text-xl" style={{ color: '#9ca3af' }}>{expandedSection === 'step1' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step1' && (
              <div className="p-4" style={{ background: '#141414', borderTop: '1px solid #2a2a2a' }}>
                <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Loaded 69 CSV files from <code className="px-2 py-0.5 rounded text-xs" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>DemographicData/</code> directory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Concatenated all records into unified DataFrame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Total records: 2,375,882 (156 MB daily dataset)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Time range: March 2025 - January 2026 (10 months)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => toggleSection('step2')}
              className="w-full p-4 flex items-center justify-between transition-colors"
              style={{ background: '#1f1f1f' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2a2a2a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1f1f1f'}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: '#3a3a3a' }}>2</span>
                <span className="font-bold text-base" style={{ color: '#d1d5db' }}>Date Standardization</span>
              </div>
              <span className="text-xl" style={{ color: '#9ca3af' }}>{expandedSection === 'step2' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step2' && (
              <div className="p-4" style={{ background: '#141414', borderTop: '1px solid #2a2a2a' }}>
                <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Converted <code className="px-2 py-0.5 rounded text-xs" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>UpdateDate</code> column to datetime format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Handled mixed date formats using <code className="px-2 py-0.5 rounded text-xs" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>pd.to_datetime()</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Extracted temporal features: Year, Month, Date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Sorted records chronologically for time-series analysis</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => toggleSection('step3')}
              className="w-full p-4 flex items-center justify-between transition-colors"
              style={{ background: '#1f1f1f' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2a2a2a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1f1f1f'}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: '#3a3a3a' }}>3</span>
                <span className="font-bold text-base" style={{ color: '#d1d5db' }}>Data Cleaning & Validation</span>
              </div>
              <span className="text-xl" style={{ color: '#9ca3af' }}>{expandedSection === 'step3' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step3' && (
              <div className="p-4" style={{ background: '#141414', borderTop: '1px solid #2a2a2a' }}>
                <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Missing value analysis: No missing values detected in core columns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Data type validation: Ensured integer types for update counts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Range checks: Validated positive values for demographic updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                    <span>Duplicates: Verified no duplicate date-location combinations</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => toggleSection('step4')}
              className="w-full p-4 flex items-center justify-between transition-colors"
              style={{ background: '#1f1f1f' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2a2a2a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1f1f1f'}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: '#3a3a3a' }}>4</span>
                <span className="font-bold text-base" style={{ color: '#d1d5db' }}>Multi-Level Aggregation</span>
              </div>
              <span className="text-xl" style={{ color: '#9ca3af' }}>{expandedSection === 'step4' ? '−' : '+'}</span>
            </button>
            
            {expandedSection === 'step4' && (
              <div className="p-4" style={{ background: '#141414', borderTop: '1px solid #2a2a2a' }}>
                <div className="space-y-3">
                  <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>Created three aggregation levels for flexible analysis:</p>
                  
                  <div className="p-4 rounded" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: '#d1d5db' }}>Pincode Level (Most Granular)</h4>
                    <ul className="space-y-1 text-xs" style={{ color: '#9ca3af' }}>
                      <li>• 19,772 unique pincodes</li>
                      <li>• Monthly aggregation by pincode</li>
                      <li>• Best for local service delivery planning</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: '#d1d5db' }}>District Level (Intermediate)</h4>
                    <ul className="space-y-1 text-xs" style={{ color: '#9ca3af' }}>
                      <li>• 967 unique districts</li>
                      <li>• Monthly aggregation by district</li>
                      <li>• Best for regional trend analysis</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: '#d1d5db' }}>State Level (Highest)</h4>
                    <ul className="space-y-1 text-xs" style={{ color: '#9ca3af' }}>
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
      <div className="rounded-lg shadow-lg p-5" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiDatabase /> Output Files Generated</h2>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div>
              <span className="font-mono text-sm" style={{ color: '#6b7280' }}>df_clean_daily.csv</span>
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Daily granular data (156 MB)</p>
            </div>
            <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: '#1f1f1f', color: '#9ca3af', border: '1px solid #2a2a2a' }}>2.4M records</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div>
              <span className="font-mono text-sm" style={{ color: '#6b7280' }}>df_monthly_pincode.csv</span>
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Monthly aggregation at pincode level</p>
            </div>
            <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: '#1f1f1f', color: '#9ca3af', border: '1px solid #2a2a2a' }}>Pincode</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div>
              <span className="font-mono text-sm" style={{ color: '#6b7280' }}>df_monthly_district.csv</span>
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Monthly aggregation at district level</p>
            </div>
            <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: '#1f1f1f', color: '#9ca3af', border: '1px solid #2a2a2a' }}>District</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <div>
              <span className="font-mono text-sm" style={{ color: '#6b7280' }}>df_monthly_state.csv</span>
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Monthly aggregation at state level</p>
            </div>
            <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: '#1f1f1f', color: '#9ca3af', border: '1px solid #2a2a2a' }}>State</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPreparation;

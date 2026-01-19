import { useState } from 'react';
import { HiExclamation, HiBell, HiShieldExclamation, HiTrendingUp, HiChevronDown, HiChevronRight } from 'react-icons/hi';

const EarlyWarning = () => {
  // State for accordion sections
  const [openSections, setOpenSections] = useState({
    alerts: false,
    priority: false,
    frequency: false,
    system: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const summaryCards = [
    {
      title: 'Critical Alerts',
      value: '10',
      subtitle: 'Immediate action required',
      description: 'Districts with multiple high-severity signals',
      icon: HiShieldExclamation,
      color: '#e74c3c'
    },
    {
      title: 'High Priority',
      value: '93',
      subtitle: 'Urgent intervention needed',
      description: 'Districts requiring prompt response',
      icon: HiExclamation,
      color: '#e67e22'
    },
    {
      title: 'Total Alerts',
      value: '556',
      subtitle: 'Districts with warnings',
      description: '52.7% of all districts monitored',
      icon: HiBell,
      color: '#f39c12'
    },
    {
      title: 'Alert Types',
      value: '10',
      subtitle: 'Rule-based indicators',
      description: 'Fully explainable threshold system',
      icon: HiTrendingUp,
      color: '#3498db'
    }
  ];

  // Alert frequency data
  const alertFrequency = [
    { type: 'Migration Volatility High', districts: 274, percentage: 25.9, color: '#e74c3c' },
    { type: 'Child Share Low', districts: 206, percentage: 19.5, color: '#e67e22' },
    { type: 'Growth Spike', districts: 98, percentage: 9.3, color: '#f39c12' },
    { type: 'Decline Rapid', districts: 73, percentage: 6.9, color: '#3498db' },
    { type: 'Documentation Lag', districts: 51, percentage: 4.8, color: '#9b59b6' },
    { type: 'Stability Low', districts: 31, percentage: 2.9, color: '#1abc9c' },
    { type: 'Dependency High', districts: 30, percentage: 2.8, color: '#27ae60' },
    { type: 'Child Risk High', districts: 9, percentage: 0.9, color: '#c0392b' },
    { type: 'Migration Pressure Critical', districts: 6, percentage: 0.6, color: '#8e44ad' },
    { type: 'Critical Zone', districts: 3, percentage: 0.3, color: '#2c3e50' }
  ];

  // Priority districts data
  const priorityDistricts = [
    { 
      rank: 1, 
      district: 'Balotra', 
      state: 'Rajasthan', 
      severity: 'CRITICAL', 
      score: 100.0, 
      alerts: 3,
      migration: 117181,
      childRisk: 24.0,
      dsi: 34.9,
      adp: 21.0
    },
    { 
      rank: 2, 
      district: 'Beawar', 
      state: 'Rajasthan', 
      severity: 'CRITICAL', 
      score: 100.0, 
      alerts: 4,
      migration: 38605,
      childRisk: 22.7,
      dsi: 32.7,
      adp: 20.5
    },
    { 
      rank: 3, 
      district: 'Khairthal-Tijara', 
      state: 'Rajasthan', 
      severity: 'CRITICAL', 
      score: 100.0, 
      alerts: 3,
      migration: 134681,
      childRisk: 21.4,
      dsi: 37.5,
      adp: 22.0
    },
    { 
      rank: 4, 
      district: 'Washim *', 
      state: 'Maharashtra', 
      severity: 'CRITICAL', 
      score: 96.6, 
      alerts: 5,
      migration: 617,
      childRisk: 50.9,
      dsi: 22.2,
      adp: 12.7
    },
    { 
      rank: 5, 
      district: 'Kotputli-Behror', 
      state: 'Rajasthan', 
      severity: 'CRITICAL', 
      score: 95.8, 
      alerts: 3,
      migration: 37711,
      childRisk: 21.0,
      dsi: 36.9,
      adp: 21.6
    },
    { 
      rank: 6, 
      district: 'Buldana', 
      state: 'Maharashtra', 
      severity: 'CRITICAL', 
      score: 87.1, 
      alerts: 5,
      migration: 197,
      childRisk: 58.1,
      dsi: 36.0,
      adp: 21.9
    },
    { 
      rank: 7, 
      district: 'Didwana-Kuchaman', 
      state: 'Rajasthan', 
      severity: 'CRITICAL', 
      score: 84.6, 
      alerts: 3,
      migration: 25526,
      childRisk: 22.3,
      dsi: 35.3,
      adp: 21.3
    },
    { 
      rank: 8, 
      district: 'Solapur', 
      state: 'Maharashtra', 
      severity: 'CRITICAL', 
      score: 83.6, 
      alerts: 5,
      migration: 1301,
      childRisk: 27.3,
      dsi: 31.7,
      adp: 59.8
    },
    { 
      rank: 9, 
      district: 'Yavatmal', 
      state: 'Maharashtra', 
      severity: 'HIGH', 
      score: 82.2, 
      alerts: 4,
      migration: 9320,
      childRisk: 30.9,
      dsi: 13.1,
      adp: 37.0
    },
    { 
      rank: 10, 
      district: 'Phalodi', 
      state: 'Rajasthan', 
      severity: 'HIGH', 
      score: 79.7, 
      alerts: 3,
      migration: 21943,
      childRisk: 21.8,
      dsi: 41.1,
      adp: 22.5
    }
  ];

  // Severity distribution
  const severityDistribution = [
    { level: 'CRITICAL', count: 10, percentage: 0.9, color: '#e74c3c' },
    { level: 'HIGH', count: 93, percentage: 8.8, color: '#e67e22' },
    { level: 'MODERATE', count: 314, percentage: 29.7, color: '#f39c12' },
    { level: 'LOW', count: 139, percentage: 13.2, color: '#3498db' },
    { level: 'NORMAL', count: 500, percentage: 47.3, color: '#27ae60' }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      'CRITICAL': '#e74c3c',
      'HIGH': '#e67e22',
      'MODERATE': '#f39c12',
      'LOW': '#3498db',
      'NORMAL': '#27ae60'
    };
    return colors[severity] || '#9ca3af';
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0d0d' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">Layer 4: Early Warning System</h1>
              <p className="text-xl text-white text-opacity-90">
                Rule-Based Alert Framework Integrating All ADIEWS Layers
              </p>
            </div>
          </div>
          <p className="text-lg text-white text-opacity-80 max-w-4xl mt-6">
            Transparent, explainable early warning system using 10 threshold-based rules to identify districts 
            requiring immediate intervention. Integrates migration pressure, child risk, and system intelligence 
            signals into actionable priority classifications for government response.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summaryCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="rounded-xl p-6 shadow-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  background: '#1a1a1a',
                  borderColor: '#2a2a2a'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-2" style={{ color: '#9ca3af' }}>
                      {card.title}
                    </p>
                    <h3 className="text-4xl font-bold mb-1" style={{ color: card.color }}>
                      {card.value}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: '#d1d5db' }}>
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${card.color}20` }}>
                    <IconComponent className="text-2xl" style={{ color: card.color }} />
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Alert Severity Distribution */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('alerts')}
            className="w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 border"
            style={{
              background: openSections.alerts ? '#1a1a1a' : '#151515',
              borderColor: '#2a2a2a'
            }}
          >
            <div className="flex items-center gap-4">
              <HiShieldExclamation className="text-3xl" style={{ color: '#e74c3c' }} />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">Alert Severity Distribution</h2>
                <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                  5-tier classification across 1,056 districts
                </p>
              </div>
            </div>
            {openSections.alerts ? (
              <HiChevronDown className="text-2xl" style={{ color: '#9ca3af' }} />
            ) : (
              <HiChevronRight className="text-2xl" style={{ color: '#9ca3af' }} />
            )}
          </button>

          {openSections.alerts && (
            <div className="mt-4 p-6 rounded-xl border" style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
              <div className="space-y-4">
                {severityDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32">
                      <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ 
                        backgroundColor: `${item.color}20`,
                        color: item.color
                      }}>
                        {item.level}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-8 rounded-lg overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
                        <div
                          className="h-full transition-all duration-500 flex items-center justify-end px-3"
                          style={{
                            width: `${item.percentage}%`,
                            background: `linear-gradient(90deg, ${item.color}80, ${item.color})`
                          }}
                        >
                          <span className="text-sm font-bold text-white">
                            {item.count} ({item.percentage}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d' }}>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>Districts Requiring Action</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: '#e74c3c' }}>417</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>CRITICAL + HIGH + MODERATE</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d' }}>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>Immediate Priority</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: '#e67e22' }}>103</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>CRITICAL + HIGH severity</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d' }}>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>Stable Districts</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: '#27ae60' }}>500</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>NORMAL status (47.3%)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Top Priority Districts */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('priority')}
            className="w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 border"
            style={{
              background: openSections.priority ? '#1a1a1a' : '#151515',
              borderColor: '#2a2a2a'
            }}
          >
            <div className="flex items-center gap-4">
              <HiExclamation className="text-3xl" style={{ color: '#e67e22' }} />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">Top 10 Priority Districts</h2>
                <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                  Immediate intervention required
                </p>
              </div>
            </div>
            {openSections.priority ? (
              <HiChevronDown className="text-2xl" style={{ color: '#9ca3af' }} />
            ) : (
              <HiChevronRight className="text-2xl" style={{ color: '#9ca3af' }} />
            )}
          </button>

          {openSections.priority && (
            <div className="mt-4 space-y-3">
              {priorityDistricts.map((district) => (
                <div
                  key={district.rank}
                  className="p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg" style={{ 
                        background: getSeverityColor(district.severity) + '20',
                        color: getSeverityColor(district.severity)
                      }}>
                        {district.rank}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{district.district}, {district.state}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ 
                            backgroundColor: getSeverityColor(district.severity) + '20',
                            color: getSeverityColor(district.severity)
                          }}>
                            {district.severity}
                          </span>
                          <span className="text-sm" style={{ color: '#9ca3af' }}>
                            Priority Score: <span className="font-bold" style={{ color: '#e74c3c' }}>{district.score}</span>
                          </span>
                          <span className="text-sm" style={{ color: '#9ca3af' }}>
                            Alerts: <span className="font-bold text-white">{district.alerts}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="p-3 rounded-lg" style={{ background: '#0d0d0d' }}>
                      <p className="text-xs" style={{ color: '#9ca3af' }}>Migration Pressure</p>
                      <p className="text-lg font-bold mt-1" style={{ color: '#e74c3c' }}>
                        {district.migration.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ background: '#0d0d0d' }}>
                      <p className="text-xs" style={{ color: '#9ca3af' }}>Child Risk Score</p>
                      <p className="text-lg font-bold mt-1" style={{ color: '#e67e22' }}>
                        {district.childRisk.toFixed(1)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ background: '#0d0d0d' }}>
                      <p className="text-xs" style={{ color: '#9ca3af' }}>Stability (DSI)</p>
                      <p className="text-lg font-bold mt-1" style={{ color: '#3498db' }}>
                        {district.dsi.toFixed(1)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ background: '#0d0d0d' }}>
                      <p className="text-xs" style={{ color: '#9ca3af' }}>Dependency (ADP)</p>
                      <p className="text-lg font-bold mt-1" style={{ color: '#9b59b6' }}>
                        {district.adp.toFixed(1)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Alert Type Frequency */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('frequency')}
            className="w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 border"
            style={{
              background: openSections.frequency ? '#1a1a1a' : '#151515',
              borderColor: '#2a2a2a'
            }}
          >
            <div className="flex items-center gap-4">
              <HiBell className="text-3xl" style={{ color: '#f39c12' }} />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">Alert Type Frequency</h2>
                <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                  10 rule-based threshold indicators
                </p>
              </div>
            </div>
            {openSections.frequency ? (
              <HiChevronDown className="text-2xl" style={{ color: '#9ca3af' }} />
            ) : (
              <HiChevronRight className="text-2xl" style={{ color: '#9ca3af' }} />
            )}
          </button>

          {openSections.frequency && (
            <div className="mt-4 p-6 rounded-xl border" style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
              <div className="space-y-4">
                {alertFrequency.map((alert, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-48">
                      <p className="text-sm font-medium text-white">{alert.type}</p>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-10 rounded-lg overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
                        <div
                          className="h-full transition-all duration-500 flex items-center justify-between px-4"
                          style={{
                            width: `${Math.max(alert.percentage, 3)}%`,
                            background: `linear-gradient(90deg, ${alert.color}80, ${alert.color})`
                          }}
                        >
                          <span className="text-sm font-bold text-white">
                            {alert.districts} districts
                          </span>
                          <span className="text-sm font-bold text-white">
                            {alert.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                <h3 className="text-lg font-bold text-white mb-3">Alert Rule Definitions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm" style={{ color: '#9ca3af' }}>
                  <div>• <span className="font-semibold text-white">Migration Volatility:</span> σ &gt; 5,000</div>
                  <div>• <span className="font-semibold text-white">Child Share Low:</span> &lt; 5%</div>
                  <div>• <span className="font-semibold text-white">Growth Spike:</span> &gt; 100% MoM</div>
                  <div>• <span className="font-semibold text-white">Rapid Decline:</span> &lt; -20% MoM</div>
                  <div>• <span className="font-semibold text-white">Documentation Lag:</span> ≥ 2 months</div>
                  <div>• <span className="font-semibold text-white">Low Stability:</span> DSI &lt; 40</div>
                  <div>• <span className="font-semibold text-white">High Dependency:</span> ADP &gt; 60</div>
                  <div>• <span className="font-semibold text-white">Child Risk High:</span> Score &gt; 50</div>
                  <div>• <span className="font-semibold text-white">Migration Critical:</span> Pressure &gt; 10,000</div>
                  <div>• <span className="font-semibold text-white">Critical Zone:</span> Low DSI + High ADP</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* System Methodology */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('system')}
            className="w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 border"
            style={{
              background: openSections.system ? '#1a1a1a' : '#151515',
              borderColor: '#2a2a2a'
            }}
          >
            <div className="flex items-center gap-4">
              <HiTrendingUp className="text-3xl" style={{ color: '#3498db' }} />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white">System Methodology</h2>
                <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                  Transparent, explainable decision framework
                </p>
              </div>
            </div>
            {openSections.system ? (
              <HiChevronDown className="text-2xl" style={{ color: '#9ca3af' }} />
            ) : (
              <HiChevronRight className="text-2xl" style={{ color: '#9ca3af' }} />
            )}
          </button>

          {openSections.system && (
            <div className="mt-4 p-6 rounded-xl border" style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
              <div className="space-y-6">
                {/* Priority Scoring Formula */}
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h3 className="text-lg font-bold text-white mb-3">Priority Score Calculation (0-100)</h3>
                  <div className="font-mono text-sm p-4 rounded" style={{ background: '#1a1a1a', color: '#d1d5db' }}>
                    Priority = (Alert_Count × 5) + (Extreme_Deviations × 10) + 
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Migration_Pressure / 1000) + (Child_Risk × 0.5) + 
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((100 - DSI) × 0.2)
                  </div>
                </div>

                {/* Severity Classification */}
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h3 className="text-lg font-bold text-white mb-3">Severity Classification Logic</h3>
                  <div className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ background: '#e74c3c20', color: '#e74c3c' }}>CRITICAL</span>
                      <span>2+ critical alerts OR 1 critical + 2+ high alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ background: '#e67e2220', color: '#e67e22' }}>HIGH</span>
                      <span>1+ critical alert OR 2+ high alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ background: '#f39c1220', color: '#f39c12' }}>MODERATE</span>
                      <span>1+ high alert OR 2+ moderate alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ background: '#3498db20', color: '#3498db' }}>LOW</span>
                      <span>1+ moderate alert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ background: '#27ae6020', color: '#27ae60' }}>NORMAL</span>
                      <span>No alerts triggered</span>
                    </div>
                  </div>
                </div>

                {/* Statistical Validation */}
                <div className="p-4 rounded-lg" style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h3 className="text-lg font-bold text-white mb-3">Statistical Validation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm mb-2" style={{ color: '#9ca3af' }}>Z-Score Analysis</p>
                      <ul className="text-sm space-y-1" style={{ color: '#d1d5db' }}>
                        <li>• Extreme deviation: |z| &gt; 2</li>
                        <li>• Applied to 5 key metrics</li>
                        <li>• Flags statistical outliers</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm mb-2" style={{ color: '#9ca3af' }}>Data Integration</p>
                      <ul className="text-sm space-y-1" style={{ color: '#d1d5db' }}>
                        <li>• Layer 1: Migration signals</li>
                        <li>• Layer 2: Child risk metrics</li>
                        <li>• Layer 3: System intelligence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg text-center" style={{ background: '#0d0d0d' }}>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>Mean Alerts/District</p>
                    <p className="text-2xl font-bold mt-1 text-white">0.74</p>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ background: '#0d0d0d' }}>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>Median Alerts</p>
                    <p className="text-2xl font-bold mt-1 text-white">1</p>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ background: '#0d0d0d' }}>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>Max Alerts</p>
                    <p className="text-2xl font-bold mt-1 text-white">5</p>
                  </div>
                  <div className="p-4 rounded-lg text-center" style={{ background: '#0d0d0d' }}>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>3+ Alerts</p>
                    <p className="text-2xl font-bold mt-1 text-white">43</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Policy Implications */}
        <div className="p-6 rounded-xl border" style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Policy Implications & Action Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#e74c3c' }}>Immediate Actions (CRITICAL)</h3>
              <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                <li>• Deploy mobile Aadhaar centers to 10 critical districts</li>
                <li>• Establish rapid-response teams in Rajasthan (6 districts)</li>
                <li>• Launch emergency child enrollment drives in Maharashtra (4 districts)</li>
                <li>• Activate cross-ministry coordination protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#e67e22' }}>Urgent Interventions (HIGH)</h3>
              <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                <li>• Enhanced monitoring for 93 high-priority districts</li>
                <li>• Integrate with PDS and health service data</li>
                <li>• Scale Aadhaar infrastructure in high-volatility zones</li>
                <li>• Implement seasonal surge capacity planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#f39c12' }}>Monitoring (MODERATE)</h3>
              <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                <li>• Weekly alert monitoring for 314 districts</li>
                <li>• Proactive engagement with district administrators</li>
                <li>• Document best practices from stable regions</li>
                <li>• Prepare escalation protocols if severity increases</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#3498db' }}>System Features</h3>
              <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
                <li>• 100% explainable - no black-box algorithms</li>
                <li>• Real-time scalable to district-level updates</li>
                <li>• Audit-ready transparent decision logic</li>
                <li>• Ministry-specific actionable priorities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyWarning;

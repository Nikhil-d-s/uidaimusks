import React, { useState, useEffect } from 'react';
import { HiSearch, HiX, HiChartBar, HiTrendingUp, HiLocationMarker } from 'react-icons/hi';
import IndiaMap from '../IndiaMap';

const GeographicExplorer = () => {
  const [geoData, setGeoData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('states'); // 'states' or 'districts'
  const [filterPattern, setFilterPattern] = useState('all');
  const [compareRegions, setCompareRegions] = useState([]);
  const [compareStates, setCompareStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/geographic-data.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Geographic data loaded:', data.metadata);
        setGeoData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading geographic data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] p-8 flex items-center justify-center">
        <div className="text-white text-lg">Loading geographic data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Error loading geographic data</div>
          <div className="text-gray-400">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!geoData || !geoData.districts || !geoData.states) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] p-8 flex items-center justify-center">
        <div className="text-red-400">Invalid data format</div>
      </div>
    );
  }

  const getFilteredData = () => {
    const data = geoData.districts;
    let filtered = data;

    // Apply pattern filter
    if (filterPattern !== 'all') {
      filtered = filtered.filter(item => item.pattern === filterPattern);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item => {
        const name = viewMode === 'states' ? item.state : item.district;
        return name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    return filtered;
  };

  const filteredData = getFilteredData();

  const getPatternColor = (pattern) => {
    const colors = {
      high_volatility: 'bg-red-500/20 border-red-500/50 text-red-400',
      child_lag: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
      high_volume: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
      normal: 'bg-green-500/20 border-green-500/50 text-green-400'
    };
    return colors[pattern] || colors.normal;
  };

  const getPatternLabel = (pattern) => {
    const labels = {
      high_volatility: 'High Volatility',
      child_lag: 'Child Lag',
      high_volume: 'High Volume',
      normal: 'Normal'
    };
    return labels[pattern] || 'Normal';
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const toggleCompare = (region) => {
    const regionId = `${region.district}_${region.state}`;
    const exists = compareRegions.find(r => {
      const id = `${r.district}_${r.state}`;
      return id === regionId;
    });

    if (exists) {
      setCompareRegions(compareRegions.filter(r => {
        const id = `${r.district}_${r.state}`;
        return id !== regionId;
      }));
    } else if (compareRegions.length < 5) {
      setCompareRegions([...compareRegions, region]);
    }
  };

  const isInCompare = (region) => {
    const regionId = `${region.district}_${region.state}`;
    return compareRegions.some(r => {
      const id = `${r.district}_${r.state}`;
      return id === regionId;
    });
  };

  const toggleStateCompare = (state) => {
    const stateId = state.state;
    const exists = compareStates.find(s => s.state === stateId);

    if (exists) {
      setCompareStates(compareStates.filter(s => s.state !== stateId));
    } else if (compareStates.length < 5) {
      setCompareStates([...compareStates, state]);
    }
  };

  const isStateInCompare = (state) => {
    return compareStates.some(s => s.state === state.state);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toFixed(0);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="rounded-lg p-5 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 mb-2">
            <HiLocationMarker className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Interactive Geographic Explorer</h1>
          </div>
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            Explore regional patterns across India - volatility, adult/child ratios, and demographic concentrations
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 mb-2">
            <HiChartBar className="w-6 h-6 text-red-400" />
            <h3 className="font-semibold" style={{ color: '#d1d5db' }}>High Volatility</h3>
          </div>
          <p className="text-3xl font-bold text-red-400">{geoData.metadata.highVolatilityCount}</p>
          <p className="text-sm" style={{ color: '#9ca3af' }}>Districts with σ {`>`} 5K</p>
        </div>

        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 mb-2">
            <HiTrendingUp className="w-6 h-6 text-yellow-400" />
            <h3 className="font-semibold" style={{ color: '#d1d5db' }}>Child Lag</h3>
          </div>
          <p className="text-3xl font-bold text-yellow-400">{geoData.metadata.childLagCount}</p>
          <p className="text-sm" style={{ color: '#9ca3af' }}>Districts with ratio &gt; 20×</p>
        </div>

        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 mb-2">
            <HiChartBar className="w-6 h-6 text-blue-400" />
            <h3 className="font-semibold" style={{ color: '#d1d5db' }}>High Volume</h3>
          </div>
          <p className="text-3xl font-bold text-blue-400">{geoData.metadata.highVolumeCount}</p>
          <p className="text-sm" style={{ color: '#9ca3af' }}>Districts averaging &gt; 10K updates</p>
        </div>

        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 mb-2">
            <HiLocationMarker className="w-6 h-6 text-green-400" />
            <h3 className="font-semibold" style={{ color: '#d1d5db' }}>Total Regions</h3>
          </div>
          <p className="text-3xl font-bold text-green-400">806</p>
          <p className="text-sm" style={{ color: '#9ca3af' }}>28 states + 8 UTs</p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
              <input
                type="text"
                placeholder="Search districts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', color: '#d1d5db' }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <HiX className="w-5 h-5 hover:text-white" style={{ color: '#6b7280' }} />
                </button>
              )}
            </div>

            {/* Filter Pattern */}
            <div>
              <select
                value={filterPattern}
                onChange={(e) => setFilterPattern(e.target.value)}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', color: '#d1d5db' }}
              >
                <option value="all">All Patterns</option>
                <option value="high_volatility">High Volatility</option>
                <option value="child_lag">Child Lag</option>
                <option value="high_volume">High Volume</option>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 mb-8">
        {/* India Map */}
        <div className="w-full">
          <div className="rounded-lg overflow-hidden shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <IndiaMap 
              geoData={geoData}
              viewMode="states"
              selectedRegion={selectedRegion}
              onRegionClick={handleRegionClick}
              onRegionHover={(data) => {
                // Optional: could update a separate hover state if needed
              }}
              onCompare={toggleStateCompare}
              isInCompare={isStateInCompare}
            />
          </div>
        </div>
      </div>

      {/* Region Details Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Region List */}
        <div className="lg:col-span-2">
          <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#d1d5db' }}>
              Districts ({Math.min(filteredData.length, 806)})
            </h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {filteredData.slice(0, 50).map((region, idx) => {
                const name = region.district;
                const pattern = region.pattern;
                
                return (
                  <div
                    key={idx}
                    className={`rounded-lg p-4 cursor-pointer transition-all ${isInCompare(region) ? 'ring-2 ring-purple-500' : ''}`}
                    style={{
                      background: selectedRegion === region ? '#1e3a8a' : '#0d0d0d',
                      border: selectedRegion === region ? '1px solid #3b82f6' : '1px solid #2a2a2a'
                    }}
                    onClick={() => handleRegionClick(region)}
                    onMouseEnter={(e) => {
                      if (selectedRegion !== region) {
                        e.currentTarget.style.borderColor = '#374151';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedRegion !== region) {
                        e.currentTarget.style.borderColor = '#2a2a2a';
                      }
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg" style={{ color: '#d1d5db' }}>{name}</h3>
                        <p className="text-sm" style={{ color: '#9ca3af' }}>{region.state}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPatternColor(pattern)}`}>
                        {getPatternLabel(pattern)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div>
                        <p className="text-xs" style={{ color: '#9ca3af' }}>Adult Updates</p>
                        <p className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(region.totalAdult)}</p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: '#9ca3af' }}>Volatility (σ)</p>
                        <p className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(region.volatility)}</p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: '#9ca3af' }}>Adult/Child Ratio</p>
                        <p className="font-semibold" style={{ color: '#d1d5db' }}>
                          {viewMode === 'districts' ? `${region.adultChildRatio}×` : `${region.ageRatio.toFixed(3)}`}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompare(region);
                      }}
                      className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        background: isInCompare(region) ? '#a855f7' : '#2a2a2a',
                        color: isInCompare(region) ? '#ffffff' : '#9ca3af'
                      }}
                      onMouseEnter={(e) => {
                        if (!isInCompare(region)) {
                          e.currentTarget.style.background = '#374151';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isInCompare(region)) {
                          e.currentTarget.style.background = '#2a2a2a';
                        }
                      }}
                    >
                      {isInCompare(region) ? '✓ In Comparison' : '+ Add to Compare'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1">
          <div className="rounded-lg p-5 shadow-lg sticky top-8" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            {selectedRegion ? (
              <>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#d1d5db' }}>
                  {selectedRegion.district || selectedRegion.state}
                </h2>
                {selectedRegion.district && (
                  <p className="mb-4" style={{ color: '#9ca3af' }}>{selectedRegion.state}</p>
                )}

                <div className="space-y-4">
                  <div className="rounded-lg p-4" style={{ background: '#0d0d0d' }}>
                    <h3 className="text-sm mb-2" style={{ color: '#9ca3af' }}>Pattern Classification</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                      selectedRegion.district 
                        ? getPatternColor(selectedRegion.pattern)
                        : (selectedRegion.isHighVolatility 
                            ? 'bg-red-500/20 border-red-500/50 text-red-400'
                            : 'bg-green-500/20 border-green-500/50 text-green-400')
                    }`}>
                      {selectedRegion.district 
                        ? getPatternLabel(selectedRegion.pattern)
                        : (selectedRegion.isHighVolatility ? 'High Volatility' : 'Normal Pattern')}
                    </span>
                  </div>

                  <div className="rounded-lg p-4" style={{ background: '#0d0d0d' }}>
                    <h3 className="text-sm mb-3" style={{ color: '#9ca3af' }}>Update Statistics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span style={{ color: '#9ca3af' }}>Total Child Updates</span>
                        <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(selectedRegion.totalChild)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#9ca3af' }}>Total Adult Updates</span>
                        <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(selectedRegion.totalAdult)}</span>
                      </div>
                      {selectedRegion.avgChild !== undefined && (
                        <>
                          <div className="flex justify-between">
                            <span style={{ color: '#9ca3af' }}>Avg Child/Month</span>
                            <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(selectedRegion.avgChild)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span style={{ color: '#9ca3af' }}>Avg Adult/Month</span>
                            <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(selectedRegion.avgAdult)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg p-4" style={{ background: '#0d0d0d' }}>
                    <h3 className="text-sm mb-3" style={{ color: '#9ca3af' }}>Pattern Indicators</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span style={{ color: '#9ca3af' }}>Volatility (σ)</span>
                        <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(selectedRegion.volatility)}</span>
                      </div>
                      {selectedRegion.district && (
                        <div className="flex justify-between">
                          <span style={{ color: '#9ca3af' }}>Adult/Child Ratio</span>
                          <span className="font-semibold" style={{ color: '#d1d5db' }}>{selectedRegion.adultChildRatio}×</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span style={{ color: '#9ca3af' }}>Age Ratio</span>
                        <span className="font-semibold" style={{ color: '#d1d5db' }}>{selectedRegion.ageRatio.toFixed(4)}</span>
                      </div>
                      {selectedRegion.districtsCount && (
                        <div className="flex justify-between">
                          <span style={{ color: '#9ca3af' }}>Districts Count</span>
                          <span className="font-semibold" style={{ color: '#d1d5db' }}>{selectedRegion.districtsCount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <HiLocationMarker className="w-16 h-16 mx-auto mb-4" style={{ color: '#4b5563' }} />
                <p style={{ color: '#9ca3af' }}>Select a region to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Panel */}
      {compareRegions.length > 0 && (
        <div className="max-w-7xl mx-auto mt-8">
          <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>District Comparison ({compareRegions.length}/5)</h2>
              <button
                onClick={() => setCompareRegions([])}
                className="px-4 py-2 rounded-lg transition-colors"
                style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
              >
                Clear All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid #2a2a2a' }}>
                    <th className="text-left font-medium py-3 px-4" style={{ color: '#9ca3af' }}>Region</th>
                    <th className="text-right font-medium py-3 px-4" style={{ color: '#9ca3af' }}>Pattern</th>
                    <th className="text-right font-medium py-3 px-4" style={{ color: '#9ca3af' }}>Adult Updates</th>
                    <th className="text-right font-medium py-3 px-4" style={{ color: '#9ca3af' }}>Child Updates</th>
                    <th className="text-right font-medium py-3 px-4" style={{ color: '#9ca3af' }}>Volatility</th>
                    <th className="text-right font-medium py-3 px-4" style={{ color: '#9ca3af' }}>A/C Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRegions.map((region, idx) => {
                    const name = region.district;
                    const pattern = region.pattern;
                    
                    return (
                      <tr key={idx} style={{ borderBottom: '1px solid #2a2a2a' }}>
                        <td className="py-3 px-4">
                          <div className="font-medium" style={{ color: '#d1d5db' }}>{name}</div>
                          <div className="text-xs" style={{ color: '#9ca3af' }}>{region.state}</div>
                        </td>
                        <td className="text-right py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${getPatternColor(pattern)}`}>
                            {getPatternLabel(pattern)}
                          </span>
                        </td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(region.totalAdult)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(region.totalChild)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(region.volatility)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{region.adultChildRatio}×</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* State Comparison Table */}
      {compareStates.length > 0 && (
        <div className="mt-6 rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold" style={{ color: '#d1d5db' }}>State Comparison</h3>
            <button
              onClick={() => setCompareStates([])}
              className="px-4 py-2 rounded-lg transition-all"
              style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
            >
              Clear All
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid #2a2a2a' }}>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>State</th>
                    <th className="text-right py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>Pattern</th>
                    <th className="text-right py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>Adult Updates</th>
                    <th className="text-right py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>Child Updates</th>
                    <th className="text-right py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>Volatility (σ)</th>
                    <th className="text-right py-3 px-4 font-medium" style={{ color: '#9ca3af' }}>Districts</th>
                  </tr>
                </thead>
                <tbody>
                  {compareStates.map((state, idx) => {
                    return (
                      <tr key={idx} style={{ borderBottom: '1px solid #2a2a2a' }}>
                        <td className="py-3 px-4">
                          <div className="font-medium" style={{ color: '#d1d5db' }}>{state.state}</div>
                        </td>
                        <td className="text-right py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${
                            state.isHighVolatility 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {state.isHighVolatility ? 'High Volatility' : 'Normal'}
                          </span>
                        </td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(state.totalAdult)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(state.totalChild)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{formatNumber(state.volatility)}</td>
                        <td className="text-right py-3 px-4" style={{ color: '#d1d5db' }}>{state.districtsCount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeographicExplorer;

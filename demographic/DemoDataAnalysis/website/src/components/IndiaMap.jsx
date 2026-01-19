import React, { useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const IndiaMap = ({ geoData, viewMode, onRegionClick, onRegionHover, selectedRegion, onCompare, isInCompare }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);
  const hideTimeoutRef = useRef(null);

  // India GeoJSON from public source
  const INDIA_GEO_URL = "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

  // Normalize state names to match our data
  const normalizeStateName = (geoName) => {
    const nameMap = {
      'Andaman & Nicobar': 'Andaman And Nicobar Islands',
      'Andhra Pradesh': 'Andhra Pradesh',
      'Arunachal Pradesh': 'Arunachal Pradesh',
      'Assam': 'Assam',
      'Bihar': 'Bihar',
      'Chandigarh': 'Chandigarh',
      'Chhattisgarh': 'Chhattisgarh',
      'Dadra and Nagar Haveli': 'Dadra And Nagar Haveli And Daman And Diu',
      'Daman and Diu': 'Dadra And Nagar Haveli And Daman And Diu',
      'Delhi': 'Delhi',
      'Goa': 'Goa',
      'Gujarat': 'Gujarat',
      'Haryana': 'Haryana',
      'Himachal Pradesh': 'Himachal Pradesh',
      'Jammu and Kashmir': 'Jammu And Kashmir',
      'Jharkhand': 'Jharkhand',
      'Karnataka': 'Karnataka',
      'Kerala': 'Kerala',
      'Lakshadweep': 'Lakshadweep',
      'Madhya Pradesh': 'Madhya Pradesh',
      'Maharashtra': 'Maharashtra',
      'Manipur': 'Manipur',
      'Meghalaya': 'Meghalaya',
      'Mizoram': 'Mizoram',
      'Nagaland': 'Nagaland',
      'Odisha': 'Odisha',
      'Puducherry': 'Puducherry',
      'Punjab': 'Punjab',
      'Rajasthan': 'Rajasthan',
      'Sikkim': 'Sikkim',
      'Tamil Nadu': 'Tamil Nadu',
      'Telangana': 'Telangana',
      'Tripura': 'Tripura',
      'Uttar Pradesh': 'Uttar Pradesh',
      'Uttarakhand': 'Uttarakhand',
      'West Bengal': 'West Bengal',
      'Ladakh': 'Ladakh'
    };
    return nameMap[geoName] || geoName;
  };

  const getStateData = (geoName) => {
    if (!geoData || !geoData.states) return null;
    const normalizedName = normalizeStateName(geoName);
    return geoData.states.find(s => s.state === normalizedName);
  };

  const getDistrictData = (districtName) => {
    if (!geoData || !geoData.districts) return null;
    return geoData.districts.find(d => d.district === districtName);
  };

  const getRegionColor = (geoName) => {
    const data = getStateData(geoName);
    if (!data) return '#2a2a2a';
    
    // Check if this state is selected
    if (selectedRegion && selectedRegion.state === data.state) {
      return '#3b82f6'; // Blue for selected
    }
    
    const pattern = data.isHighVolatility ? 'high_volatility' : 'normal';
    
    const colors = {
      high_volatility: '#ef4444',
      child_lag: '#eab308',
      high_volume: '#3b82f6',
      normal: '#22c55e'
    };
    
    return colors[pattern] || colors.normal;
  };

  const handleMouseEnter = (geo) => {
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    
    const geoName = geo.properties.ST_NM;
    const normalized = normalizeStateName(geoName);
    setHoveredRegion(geoName);
    const data = getStateData(geoName);
    setTooltipContent(data);
    if (onRegionHover && data) {
      onRegionHover(data);
    }
  };

  const handleMouseLeave = () => {
    // Delay clearing to allow moving to tooltip
    hideTimeoutRef.current = setTimeout(() => {
      if (!isTooltipHovered) {
        setHoveredRegion(null);
        setTooltipContent(null);
        if (onRegionHover) onRegionHover(null);
      }
    }, 500);
  };

  const handleClick = (geo) => {
    const geoName = geo.properties.ST_NM;
    const data = getStateData(geoName);
    if (onRegionClick && data) onRegionClick(data);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toFixed(0);
  };

  // Show actual India map using react-simple-maps
  return (
    <div className="relative w-full h-full rounded-xl p-6">
      <div className="text-center mb-4">
        <p className="text-white font-semibold text-lg">India States Map</p>
        <p className="text-gray-400 text-sm">Hover over states to see detailed metrics • Click to view full details</p>
      </div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937]
        }}
        width={800}
        height={600}
        style={{ 
          width: '100%', 
          height: 'auto',
          pointerEvents: 'auto'
        }}
      >
        <Geographies geography={INDIA_GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const geoName = geo.properties.ST_NM;
              const isHovered = hoveredRegion === geoName;
              const data = getStateData(geoName);
              const isSelected = selectedRegion && data && selectedRegion.state === data.state;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getRegionColor(geoName)}
                  stroke={isSelected ? "#3b82f6" : "#0d0d0d"}
                  strokeWidth={isSelected ? 2 : 0.5}
                  style={{
                    default: {
                      outline: 'none',
                      cursor: 'pointer',
                      pointerEvents: 'auto'
                    },
                    hover: {
                      fill: getRegionColor(geoName),
                      outline: 'none',
                      filter: 'brightness(1.3)',
                      cursor: 'pointer',
                      pointerEvents: 'auto'
                    },
                    pressed: {
                      fill: getRegionColor(geoName),
                      outline: 'none',
                      cursor: 'pointer',
                      pointerEvents: 'auto'
                    }
                  }}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      
      {/* Hover tooltip */}
      {tooltipContent && (
        <div 
          className="absolute top-2 right-2 backdrop-blur-lg rounded-lg p-4 shadow-2xl max-w-xs z-50 pointer-events-auto"
          style={{ background: '#1a1a1a', border: '2px solid #7c3aed' }}
          onMouseEnter={() => {
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            setIsTooltipHovered(true);
          }}
          onMouseLeave={() => {
            setIsTooltipHovered(false);
            setHoveredRegion(null);
            setTooltipContent(null);
            if (onRegionHover) onRegionHover(null);
          }}
        >
          <h3 className="font-bold text-lg mb-3" style={{ color: '#d1d5db' }}>{tooltipContent.state}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span style={{ color: '#9ca3af' }}>Total Adults:</span>
              <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(tooltipContent.totalAdult)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span style={{ color: '#9ca3af' }}>Total Children:</span>
              <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(tooltipContent.totalChild)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span style={{ color: '#9ca3af' }}>Volatility (σ):</span>
              <span className="font-semibold" style={{ color: '#d1d5db' }}>{formatNumber(tooltipContent.volatility)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span style={{ color: '#9ca3af' }}>Districts:</span>
              <span className="font-semibold" style={{ color: '#d1d5db' }}>{tooltipContent.districtsCount}</span>
            </div>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid #2a2a2a' }}>
              <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium ${
                tooltipContent.isHighVolatility 
                  ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                  : 'bg-green-500/20 border border-green-500/50 text-green-400'
              }`}>
                {tooltipContent.isHighVolatility ? 'High Volatility' : 'Normal Pattern'}
              </span>
            </div>
            
            {/* Add to Compare button */}
            {onCompare && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCompare(tooltipContent);
                }}
                className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: isInCompare && isInCompare(tooltipContent) ? '#a855f7' : '#2a2a2a',
                  color: isInCompare && isInCompare(tooltipContent) ? '#ffffff' : '#9ca3af'
                }}
                onMouseEnter={(e) => {
                  if (!(isInCompare && isInCompare(tooltipContent))) {
                    e.currentTarget.style.background = '#374151';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!(isInCompare && isInCompare(tooltipContent))) {
                    e.currentTarget.style.background = '#2a2a2a';
                  }
                }}
              >
                {isInCompare && isInCompare(tooltipContent) ? '✓ In Comparison' : '+ Add to Compare'}
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 backdrop-blur rounded-lg p-4 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h4 className="font-semibold text-sm mb-3" style={{ color: '#d1d5db' }}>Pattern Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span style={{ color: '#9ca3af' }}>High Volatility (Top 25%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span style={{ color: '#9ca3af' }}>Normal Pattern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;

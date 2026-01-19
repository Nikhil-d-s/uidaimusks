import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Line, Area, Cell, PieChart, Pie, Treemap
} from 'recharts';

// State-level data (Top 20 states by total population)
const generateStateData = () => {
  return [
    { state: 'Uttar Pradesh', children: 748006, adults: 8232169, total: 8980175 },
    { state: 'Maharashtra', children: 251988, adults: 4987540, total: 5239528 },
    { state: 'Bihar', children: 319056, adults: 4239725, total: 4558781 },
    { state: 'West Bengal', children: 230829, adults: 3883508, total: 4114337 },
    { state: 'Rajasthan', children: 239591, adults: 2552221, total: 2791812 },
    { state: 'Tamil Nadu', children: 333450, adults: 2223818, total: 2557268 },
    { state: 'Madhya Pradesh', children: 333485, adults: 2194151, total: 2527636 },
    { state: 'Andhra Pradesh', children: 297017, adults: 1987217, total: 2284234 },
    { state: 'Chhattisgarh', children: 152982, adults: 1763540, total: 1916522 },
    { state: 'Gujarat', children: 193760, adults: 1646387, total: 1840147 },
    { state: 'Telangana', children: 237711, adults: 1524230, total: 1761941 },
    { state: 'Karnataka', children: 230238, adults: 1388161, total: 1618399 },
    { state: 'Jharkhand', children: 91634, adults: 1338284, total: 1429918 },
    { state: 'Delhi', children: 156117, adults: 1142970, total: 1299087 },
    { state: 'Haryana', children: 145827, adults: 1106691, total: 1252518 },
    { state: 'Odisha', children: 140542, adults: 962582, total: 1103124 },
    { state: 'Assam', children: 81585, adults: 947817, total: 1029402 },
    { state: 'Punjab', children: 50420, adults: 803120, total: 853540 },
    { state: 'Kerala', children: 61624, adults: 759095, total: 820719 },
    { state: 'Uttarakhand', children: 46482, adults: 421167, total: 467649 }
  ];
};

// District-level data (Top 15 districts by total population)
const generateDistrictData = () => {
  return [
    { district: 'Pune', state: 'Maharashtra', children: 30818, adults: 416445, total: 447263 },
    { district: 'Thane', state: 'Maharashtra', children: 31000, adults: 393839, total: 424839 },
    { district: 'South 24 Parganas', state: 'West Bengal', children: 26420, adults: 384298, total: 410718 },
    { district: 'Murshidabad', state: 'West Bengal', children: 30835, adults: 365811, total: 396646 },
    { district: 'Surat', state: 'Gujarat', children: 33152, adults: 320760, total: 353912 },
    { district: 'North 24 Parganas', state: 'West Bengal', children: 14248, adults: 291699, total: 305947 },
    { district: 'North West Delhi', state: 'Delhi', children: 38974, adults: 265785, total: 304759 },
    { district: 'Bengaluru', state: 'Karnataka', children: 34555, adults: 254739, total: 289294 },
    { district: 'Uttar Dinajpur', state: 'West Bengal', children: 16571, adults: 263922, total: 280493 },
    { district: 'Jaipur', state: 'Rajasthan', children: 27315, adults: 249676, total: 276991 },
    { district: 'Solapur', state: 'Maharashtra', children: 6847, adults: 266976, total: 273823 },
    { district: 'Ahmedabad', state: 'Gujarat', children: 28648, adults: 233127, total: 261775 },
    { district: 'Bareilly', state: 'Uttar Pradesh', children: 19808, adults: 234829, total: 254637 },
    { district: 'Nanded', state: 'Maharashtra', children: 6197, adults: 239961, total: 246158 },
    { district: 'Nashik', state: 'Maharashtra', children: 13401, adults: 232092, total: 245493 }
  ];
};

// Pincode-level data (Top 20 pincodes by total population)
const generatePincodeData = () => {
  return [
    { pincode: '244001', district: 'Moradabad', state: 'Uttar Pradesh', children: 8127, adults: 95984, total: 104111 },
    { pincode: '202001', district: 'Aligarh', state: 'Uttar Pradesh', children: 6201, adults: 91436, total: 97637 },
    { pincode: '283203', district: 'Firozabad', state: 'Uttar Pradesh', children: 6734, adults: 85248, total: 91982 },
    { pincode: '110059', district: 'West Delhi', state: 'Delhi', children: 8450, adults: 77437, total: 85887 },
    { pincode: '247001', district: 'Saharanpur', state: 'Uttar Pradesh', children: 5476, adults: 67532, total: 73008 },
    { pincode: '201102', district: 'Ghaziabad', state: 'Uttar Pradesh', children: 5308, adults: 67172, total: 72480 },
    { pincode: '110094', district: 'North East Delhi', state: 'Delhi', children: 11075, adults: 53215, total: 64290 },
    { pincode: '242001', district: 'Shahjahanpur', state: 'Uttar Pradesh', children: 4314, adults: 59951, total: 64265 },
    { pincode: '121004', district: 'Faridabad', state: 'Haryana', children: 8516, adults: 55468, total: 63984 },
    { pincode: '110086', district: 'North West Delhi', state: 'Delhi', children: 8634, adults: 54971, total: 63605 },
    { pincode: '244901', district: 'Rampur', state: 'Uttar Pradesh', children: 4621, adults: 56754, total: 61375 },
    { pincode: '132103', district: 'Panipat', state: 'Haryana', children: 7936, adults: 51388, total: 59324 },
    { pincode: '262122', district: 'Pilibhit', state: 'Uttar Pradesh', children: 4364, adults: 53122, total: 57486 },
    { pincode: '394210', district: 'Surat', state: 'Gujarat', children: 5338, adults: 50158, total: 55496 },
    { pincode: '250002', district: 'Meerut', state: 'Uttar Pradesh', children: 3567, adults: 50029, total: 53596 },
    { pincode: '201301', district: 'Gautam Buddha Nagar', state: 'Uttar Pradesh', children: 4754, adults: 47985, total: 52739 },
    { pincode: '143001', district: 'Amritsar', state: 'Punjab', children: 3516, adults: 46984, total: 50500 },
    { pincode: '122001', district: 'Gurgaon', state: 'Haryana', children: 5719, adults: 43441, total: 49160 },
    { pincode: '395010', district: 'Surat', state: 'Gujarat', children: 4196, adults: 43474, total: 47670 },
    { pincode: '248001', district: 'Dehradun', state: 'Uttarakhand', children: 3866, adults: 43219, total: 47085 }
  ];
};

// State distribution pie chart data (Top 10 only for readability)
const generateStateDistribution = () => {
  const data = generateStateData().slice(0, 10);
  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', 
                  '#06b6d4', '#6366f1', '#f97316', '#14b8a6', '#a855f7'];
  return data.map((item, index) => ({
    name: item.state,
    value: item.total,
    color: colors[index]
  }));
};

// District heatmap data (organized by state)
const generateDistrictHeatmap = () => {
  const districts = generateDistrictData();
  const stateGroups = {};
  
  districts.forEach(d => {
    if (!stateGroups[d.state]) {
      stateGroups[d.state] = [];
    }
    stateGroups[d.state].push({
      name: d.district,
      size: d.total,
      children: d.children,
      adults: d.adults
    });
  });
  
  return Object.entries(stateGroups).map(([state, districts]) => ({
    name: state,
    children: districts
  }));
};

// Color scale for heatmaps
const getColorByValue = (value, max) => {
  const intensity = value / max;
  if (intensity > 0.8) return '#dc2626'; // red-600
  if (intensity > 0.6) return '#f59e0b'; // amber-500
  if (intensity > 0.4) return '#fbbf24'; // amber-400
  if (intensity > 0.2) return '#60a5fa'; // blue-400
  return '#93c5fd'; // blue-300
};

// Custom tooltip for geographic charts
const GeographicTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #2a2a2a',
        padding: '12px',
        borderRadius: '8px'
      }}>
        <p style={{ color: '#d1d5db', fontWeight: 'bold', marginBottom: '8px' }}>
          {data.state || data.district || data.pincode}
        </p>
        {data.district && data.state && (
          <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>
            {data.district}, {data.state}
          </p>
        )}
        <p style={{ color: '#60a5fa', fontSize: '14px' }}>
          Total: {data.total?.toLocaleString()}
        </p>
        <p style={{ color: '#34d399', fontSize: '12px' }}>
          Children (5-17): {data.children?.toLocaleString()}
        </p>
        <p style={{ color: '#fbbf24', fontSize: '12px' }}>
          Adults (17+): {data.adults?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// State Population Bar Chart
export const StatePopulationChart = () => {
  const data = generateStateData();
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a"/>
        <XAxis 
          dataKey="state" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '12px' }}
          label={{ value: 'State', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" width={50} label={{ value: 'Population', angle: -90, position: 'outside', offset: 10, dx: -100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip content={<GeographicTooltip />} />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="children" stackId="a" fill="#34d399" name="Children (5-17)" />
        <Bar dataKey="adults" stackId="a" fill="#3b82f6" name="Adults (17+)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// State Distribution Pie Chart
export const StateDistributionChart = () => {
  const data = generateStateDistribution();
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => value.toLocaleString()}
          contentStyle={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            color: '#ffffff'
          }}
          itemStyle={{ color: '#ffffff' }}
          labelStyle={{ color: '#ffffff' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

// District Population Bar Chart
export const DistrictPopulationChart = () => {
  const data = generateDistrictData();
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
        <XAxis 
          dataKey="district" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '11px' }}
          label={{ value: 'District', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" label={{ value: 'Population', angle: -90, position: 'outside', offset: -5,dx:-100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip content={<GeographicTooltip />} />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="children" stackId="a" fill="#34d399" name="Children (5-17)" />
        <Bar dataKey="adults" stackId="a" fill="#3b82f6" name="Adults (17+)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// District Heatmap using Treemap
export const DistrictHeatmapChart = () => {
  const data = generateDistrictHeatmap();
  
  const CustomContent = (props) => {
    const { x, y, width, height, name, size } = props;
    
    if (width < 50 || height < 30) return null;
    
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: getColorByValue(size, 450000),
            stroke: '#0d0d0d',
            strokeWidth: 2
          }}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#000"
          fontSize={width < 100 ? 10 : 12}
          fontWeight="bold"
        >
          {name}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2 + 15}
          textAnchor="middle"
          fill="#000"
          fontSize={9}
        >
          {(size / 1000).toFixed(0)}K
        </text>
      </g>
    );
  };
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <Treemap
        data={data}
        dataKey="size"
        aspectRatio={4/3}
        stroke="#0d0d0d"
        fill="#3b82f6"
        content={<CustomContent />}
      />
    </ResponsiveContainer>
  );
};

// Pincode Population Chart (Top 20)
export const PincodePopulationChart = () => {
  const data = generatePincodeData();
  return (
    <ResponsiveContainer width="100%" height={600}>
      <ComposedChart data={data} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
        <XAxis 
          dataKey="pincode" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '11px' }}
          label={{ value: 'Pincode', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" label={{ value: 'Population', angle: -90, position: 'outside', offset: -5,dx:-100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip content={<GeographicTooltip />} />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="children" stackId="a" fill="#34d399" name="Children (5-17)" />
        <Bar dataKey="adults" stackId="a" fill="#3b82f6" name="Adults (17+)" />
        <Line type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={2} name="Total Population" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

// Pincode Density Heatmap
export const PincodeDensityChart = () => {
  const data = generatePincodeData();
  const maxTotal = Math.max(...data.map(d => d.total));
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
        <XAxis 
          dataKey="pincode" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '10px' }}
          label={{ value: 'Pincode', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" label={{ value: 'Total Population', angle: -90, position: 'outside', offset: -5,dx:-100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip content={<GeographicTooltip />} />
        <Bar dataKey="total" name="Total Population">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColorByValue(entry.total, maxTotal)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// Geographic Comparison Chart (State vs District)
export const GeographicComparisonChart = () => {
  const stateData = generateStateData().slice(0, 10);
  const districtData = generateDistrictData().slice(0, 10);
  
  const comparisonData = stateData.map((state, idx) => ({
    name: state.state.substring(0, 10) + '...',
    stateTotal: state.total,
    topDistrict: districtData[idx]?.total || 0,
    districtName: districtData[idx]?.district || 'N/A'
  }));
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart data={comparisonData} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
        <XAxis 
          dataKey="name" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '11px' }}
          label={{ value: 'State', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" label={{ value: 'Population', angle: -90, position: 'outside', offset: -5,dx:-100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '8px'
          }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="stateTotal" fill="#3b82f6" name="State Total" />
        <Bar dataKey="topDistrict" fill="#8b5cf6" name="Largest District" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

// Child vs Adult ratio by state
export const StateRatioChart = () => {
  const data = generateStateData().slice(0, 15).map(state => ({
    state: state.state,
    childRatio: ((state.children / state.total) * 100).toFixed(1),
    adultRatio: ((state.adults / state.total) * 100).toFixed(1),
    children: state.children,
    adults: state.adults
  }));
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 100, bottom: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
        <XAxis 
          dataKey="state" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#6b7280"
          style={{ fontSize: '11px' }}
          label={{ value: 'State', position: 'insideBottom', offset: -100, style: { fill: '#9ca3af' } }}
        />
        <YAxis stroke="#6b7280" label={{ value: 'Percentage (%)', angle: -90, position: 'outside', offset: -5,dx: -100, style: { fill: '#9ca3af', textAnchor: 'middle' } }} />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '8px'
          }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="childRatio" fill="#34d399" name="Children %" />
        <Bar dataKey="adultRatio" fill="#3b82f6" name="Adults %" />
      </BarChart>
    </ResponsiveContainer>
  );
};

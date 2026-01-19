import React from 'react';
import {
  ScatterChart, Scatter, LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import bivariateData from '../data/bivariateData.json';

// Real data from the executed bivariate analysis notebook

// 1. Child vs Adult Scatter Data (Daily level - sampled 500 points)
export const generateChildVsAdultScatterData = () => {
  return bivariateData.scatterData;
};

// 2. Child vs Adult Aggregated Data (District level)
export const generateChildVsAdultAggregatedData = () => {
  return bivariateData.aggregatedData;
};

// 3. Age Ratio Distribution Data (Histogram bins)
export const generateAgeRatioDistributionData = () => {
  return bivariateData.ratioDistribution;
};

// 4. Age Ratio Box Plot Data (by top states)
export const generateAgeRatioByStateData = () => {
  return bivariateData.stateRatios;
};

// 5. Top Districts by Total Updates
export const generateTopDistrictsByVolumeData = () => {
  return bivariateData.topDistrictsVolume;
};

// 6. Top Districts by Age Ratio
export const generateTopDistrictsByRatioData = () => {
  return bivariateData.topDistrictsRatio;
};

// 7. Pincode Concentration Curve (Lorenz Curve)
export const generatePincodeConcentrationData = () => {
  // Sample down to 200 points for performance
  const fullData = bivariateData.concentrationCurve;
  if (fullData.length <= 200) return fullData;
  const step = Math.floor(fullData.length / 200);
  return fullData.filter((_, i) => i % step === 0);
};

// 8. Update Volume vs Frequency
export const generateVolumeVsFrequencyData = () => {
  // Sample down to 150 points for performance
  const fullData = bivariateData.volumeFrequency;
  if (fullData.length <= 150) return fullData;
  const step = Math.floor(fullData.length / 150);
  return fullData.filter((_, i) => i % step === 0).slice(0, 150);
};

// 9. Top 20 Pincodes
export const generateTop20PincodesData = () => {
  return bivariateData.top20Pincodes;
};

// 10. Hexbin Joint Plot Data
export const generateHexbinData = () => {
  // Sample down to 2000 points for performance
  const fullData = bivariateData.hexbinData;
  if (fullData.length <= 2000) return fullData;
  const step = Math.floor(fullData.length / 2000);
  return fullData.filter((_, i) => i % step === 0).slice(0, 2000);
};

// 11. Age Ratio Box Plot
export const generateRatioBoxPlotData = () => {
  return bivariateData.ratioBoxPlot;
};

// 12. Age Ratio Log Scale Distribution
export const generateRatioDistributionLogData = () => {
  return bivariateData.ratioDistributionLog;
};

// 13. Pincode Child vs Adult
export const generatePincodeChildAdultData = () => {
  // Sample down to 200 points for performance
  const fullData = bivariateData.pincodeChildAdult;
  if (fullData.length <= 200) return fullData;
  const step = Math.floor(fullData.length / 200);
  return fullData.filter((_, i) => i % step === 0).slice(0, 200);
};

// Chart Components

export const ChildVsAdultScatterChart = () => {
  const data = generateChildVsAdultScatterData();
  const { correlation, trendSlope, trendIntercept } = bivariateData.stats;
  
  // Calculate trend line points
  const maxAdult = Math.max(...data.map(d => d.adult));
  const trendLine = [
    { adult: 0, trend: trendIntercept },
    { adult: maxAdult, trend: trendSlope * maxAdult + trendIntercept }
  ];
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number" 
          dataKey="adult" 
          name="Adult Updates" 
          label={{ value: 'Adult Updates (17+)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          type="number" 
          dataKey="child" 
          name="Child Updates"
          label={{ value: 'Child Updates (5-17)', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Scatter name="Daily Data" data={data} fill="#4682b4" opacity={0.6} />
        <Line type="monotone" data={trendLine} dataKey="trend" stroke="#ff6b6b" strokeWidth={2} strokeDasharray="5 5" dot={false} name={`Trend: y=${trendSlope.toFixed(4)}x${trendIntercept >= 0 ? '+' : ''}${trendIntercept.toFixed(2)}`} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export const ChildVsAdultAggregatedChart = () => {
  const data = generateChildVsAdultAggregatedData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number" 
          dataKey="adult" 
          name="Adult Updates"
          label={{ value: 'Adult Updates (17+)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          type="number" 
          dataKey="child" 
          name="Child Updates"
          label={{ value: 'Child Updates (5-17)', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Scatter name="District Aggregated" data={data} fill="#ff7f50" opacity={0.8} shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export const AgeRatioDistributionChart = () => {
  const data = generateAgeRatioDistributionData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="ratio" 
          label={{ value: 'Age Ratio (Child/Adult)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
          interval={3}
        />
        <YAxis 
          label={{ value: 'Frequency', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="frequency" fill="#4682b4" name="Frequency" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const AgeRatioByStateChart = () => {
  const data = generateAgeRatioByStateData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, bottom: 80, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="state" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          stroke="#fff"
          interval={0}
        />
        <YAxis 
          label={{ value: 'Age Ratio', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="mean" fill="#32cd32" name="Mean Age Ratio" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const TopDistrictsByVolumeChart = () => {
  const rawData = generateTopDistrictsByVolumeData();
  
  if (!rawData || rawData.length === 0) {
    return <div style={{ color: '#fff', padding: '20px' }}>No data available</div>;
  }
  
  // Reverse data so top districts appear at the top
  const data = [...rawData].reverse();
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="horizontal" margin={{ top: 20, right: 50, bottom: 60, left: 180 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number"
          label={{ value: 'Total Updates', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
          tick={{ fill: '#fff' }}
        />
        <YAxis 
          type="category"
          dataKey="district" 
          stroke="#fff"
          width={160}
          tick={{ fill: '#fff' }}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="child" fill="#4682b4" name="Child (5-17)" />
        <Bar dataKey="adult" fill="#ff7f50" name="Adult (17+)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const TopDistrictsByRatioChart = () => {
  const rawData = generateTopDistrictsByRatioData();
  
  if (!rawData || rawData.length === 0) {
    return <div style={{ color: '#fff', padding: '20px' }}>No data available</div>;
  }
  
  // Reverse data so top districts appear at the top
  const data = [...rawData].reverse();
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="horizontal" margin={{ top: 20, right: 50, bottom: 60, left: 200 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number"
          label={{ value: 'Age Ratio (Child/Adult)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
          tick={{ fill: '#fff' }}
        />
        <YAxis 
          type="category" 
          dataKey="district"
          stroke="#fff"
          width={180}
          tick={{ fill: '#fff' }}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="ratio" fill="#32cd32" name="Age Ratio" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const PincodeConcentrationCurveChart = () => {
  const data = generatePincodeConcentrationData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="percentile"
          label={{ value: 'Pincode Percentile (sorted by updates)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          label={{ value: 'Cumulative % of Total Updates', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Area type="monotone" dataKey="actual" stroke="#ff7f50" fill="#ff7f50" fillOpacity={0.6} name="Actual Distribution" />
        <Line type="monotone" dataKey="perfect" stroke="#ff0000" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Perfect Equality" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const VolumeVsFrequencyChart = () => {
  const data = generateVolumeVsFrequencyData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number" 
          dataKey="days" 
          name="Update Days"
          label={{ value: 'Number of Update Days', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          type="number" 
          dataKey="totalUpdates" 
          name="Total Updates"
          label={{ value: 'Total Updates', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Scatter name="Pincode Updates" data={data} fill="#ff7f50" opacity={0.6} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export const Top20PincodesChart = () => {
  const rawData = generateTop20PincodesData();
  
  if (!rawData || rawData.length === 0) {
    return <div style={{ color: '#fff', padding: '20px' }}>No data available</div>;
  }
  
  // Reverse data so top pincodes appear at the top
  const data = [...rawData].reverse();
  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="horizontal" margin={{ top: 20, right: 50, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number"
          label={{ value: 'Total Updates', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
          tick={{ fill: '#fff' }}
        />
        <YAxis 
          type="category" 
          dataKey="pincode"
          stroke="#fff"
          width={80}
          tick={{ fill: '#fff' }}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="totalUpdates" fill="#4682b4" name="Total Updates" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const HexbinJointPlotChart = () => {
  const data = generateHexbinData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number" 
          dataKey="adult" 
          name="Adult Updates"
          label={{ value: 'Adult Updates (17+)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          type="number" 
          dataKey="child" 
          name="Child Updates"
          label={{ value: 'Child Updates (5-17)', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Scatter name="Joint Distribution (10K sample)" data={data} fill="#4682b4" opacity={0.4} shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export const AgeRatioBoxPlotChart = () => {
  const boxData = generateRatioBoxPlotData();
  
  // Convert box plot stats to visual representation
  const data = [
    { name: 'Min', value: boxData.min },
    { name: 'Q1', value: boxData.q1 },
    { name: 'Median', value: boxData.median },
    { name: 'Mean', value: boxData.mean },
    { name: 'Q3', value: boxData.q3 },
    { name: 'Max', value: boxData.max }
  ];
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="name"
          label={{ value: 'Statistical Measure', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          label={{ value: 'Age Ratio Value', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          formatter={(value) => value.toFixed(4)}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="value" fill="#87ceeb" name="Age Ratio">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.name === 'Median' ? '#ff6b6b' : entry.name === 'Mean' ? '#ffa500' : '#87ceeb'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const AgeRatioLogScaleChart = () => {
  const data = generateRatioDistributionLogData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="ratio" 
          label={{ value: 'Age Ratio (Child/Adult)', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
          interval={3}
        />
        <YAxis 
          scale="log"
          domain={[1, 'auto']}
          label={{ value: 'Frequency (log scale)', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Bar dataKey="frequency" fill="#ff7f50" name="Frequency (Log Scale)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const PincodeChildVsAdultChart = () => {
  const data = generatePincodeChildAdultData();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          type="number" 
          dataKey="adult" 
          name="Adult Updates"
          label={{ value: 'Adult Updates', position: 'bottom', offset: 40, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <YAxis 
          type="number" 
          dataKey="child" 
          name="Child Updates"
          label={{ value: 'Child Updates', angle: -90, position: 'outside', offset: -5, style: { fill: '#fff', fontWeight: 'bold' } }}
          stroke="#fff"
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88', color: '#fff' }}
          labelStyle={{ color: '#00ff88' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
        <Scatter name="Top 500 Pincodes" data={data} fill="#32cd32" opacity={0.6} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default {
  ChildVsAdultScatterChart,
  ChildVsAdultAggregatedChart,
  AgeRatioDistributionChart,
  AgeRatioByStateChart,
  TopDistrictsByVolumeChart,
  TopDistrictsByRatioChart,
  PincodeConcentrationCurveChart,
  VolumeVsFrequencyChart,
  Top20PincodesChart,
  HexbinJointPlotChart,
  AgeRatioBoxPlotChart,
  AgeRatioLogScaleChart,
  PincodeChildVsAdultChart
};

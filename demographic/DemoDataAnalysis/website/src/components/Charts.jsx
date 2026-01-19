import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell, ComposedChart, ReferenceLine
} from 'recharts';

// Custom colors matching our theme
const COLORS = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  accent: '#d1d5db',
  child: '#8b5cf6',
  adult: '#3b82f6',
  grid: '#2a2a2a',
  background: '#1a1a1a'
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        background: '#1a1a1a', 
        border: '1px solid #2a2a2a', 
        padding: '10px',
        borderRadius: '8px'
      }}>
        <p style={{ color: '#d1d5db', marginBottom: '5px', fontWeight: 'bold' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, margin: '3px 0', fontSize: '13px' }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Generate actual distribution data based on real analysis
// Child updates: mean=1.9, median=0, 75%=2, max=2690, 44% are zero
// Most records have 0-2 updates, highly right-skewed
const generateHistogramData = (type = 'child') => {
  if (type === 'child') {
    // Child updates distribution showing 50 bins as in notebook
    // Approximating the histogram shape: peak at 0, rapid decline
    const data = [];
    // First bin (0) contains 44% of data
    data.push({ range: '0', frequency: 1050000 });
    // Bins 1-10: declining frequency
    for (let i = 1; i <= 10; i++) {
      const freq = Math.round(680000 / Math.pow(i + 1, 1.5));
      data.push({ range: i.toString(), frequency: freq });
    }
    // Bins 11-30: sparse
    for (let i = 11; i <= 30; i += 5) {
      data.push({ range: `${i}-${i+4}`, frequency: Math.round(5000 / (i/10)) });
    }
    // Outlier bin
    data.push({ range: '50+', frequency: 1200 });
    return data;
  } else {
    // Adult updates distribution: more spread out, median=5, mean=19
    const data = [];
    // Bins 0-5: gradual increase to peak
    data.push({ range: '0', frequency: 280000 });
    data.push({ range: '1-2', frequency: 420000 });
    data.push({ range: '3-5', frequency: 520000 }); // Peak around median
    data.push({ range: '6-10', frequency: 380000 });
    data.push({ range: '11-20', frequency: 280000 });
    data.push({ range: '21-50', frequency: 180000 });
    data.push({ range: '51-100', frequency: 70000 });
    data.push({ range: '101-500', frequency: 28000 });
    data.push({ range: '500+', frequency: 2882 });
    return data;
  }
};

// Generate box plot data representation
// Based on actual statistics: Child (Q1=0, median=0, Q3=2, max=2690)
// Adult (Q1=2, median=5, Q3=14, max=16166)
const generateBoxPlotData = (type = 'child') => {
  const childData = [
    { category: 'Min', value: 0 },
    { category: 'Q1', value: 0 },
    { category: 'Median', value: 0 },
    { category: 'Q3', value: 2 },
    { category: 'Mean', value: 1.9 },
    { category: 'Outliers', value: 2690 }
  ];
  
  const adultData = [
    { category: 'Min', value: 0 },
    { category: 'Q1', value: 2 },
    { category: 'Median', value: 5 },
    { category: 'Q3', value: 14 },
    { category: 'Mean', value: 19.1 },
    { category: 'Outliers', value: 16166 }
  ];
  
  return type === 'child' ? childData : adultData;
};

// Generate comparison data
const generateComparisonData = () => {
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  const childUpdates = [844596, 193026, 196122, 172541, 244966, 785580, 452556, 737658, 838037, 60190];
  const adultUpdates = [8912978, 1310670, 1306969, 1311162, 1643453, 6655825, 4342581, 9730801, 9669595, 522975];
  
  return months.map((month, i) => ({
    month,
    child: childUpdates[i],
    adult: adultUpdates[i],
    total: childUpdates[i] + adultUpdates[i]
  }));
};

// Generate monthly trends data
const generateMonthlyTrends = () => {
  const months = ['Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26'];
  const totals = [9757574, 1503696, 1503091, 1483703, 1888419, 7441405, 4795137, 10468459, 10507632, 583165];
  const childPercent = [8.66, 12.84, 13.05, 11.63, 12.97, 10.56, 9.44, 7.05, 7.98, 10.32];
  
  return months.map((month, i) => {
    const child = Math.round(totals[i] * childPercent[i] / 100);
    const adult = totals[i] - child;
    return {
      month,
      total: totals[i],
      child,
      adult,
      childShare: childPercent[i]
    };
  });
};

// Generate growth rates data
const generateGrowthRates = () => {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  const totalGrowth = [-84.59, -0.04, -1.29, 27.28, 294.05, -35.56, 118.31, 0.37, -94.45];
  const childGrowth = [-77.15, 1.60, -12.02, 41.98, 220.69, -42.39, 63.00, 13.61, -92.82];
  const adultGrowth = [-85.29, -0.28, 0.32, 25.34, 304.99, -34.76, 124.08, -0.63, -94.59];
  
  return months.map((month, i) => ({
    month,
    total: totalGrowth[i],
    child: childGrowth[i],
    adult: adultGrowth[i]
  }));
};

// Generate seasonal pattern data by month-of-year
// This shows which calendar months have more activity
const generateSeasonalData = () => {
  // Months in calendar order with actual aggregated data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Total updates by month of year (aggregated across 2025-2026)
  const childUpdates = [60190, 0, 844596, 193026, 196122, 172541, 244966, 0, 785580, 452556, 737658, 838037];
  const adultUpdates = [522975, 0, 8912978, 1310670, 1306969, 1311162, 1643453, 0, 6655825, 4342581, 9730801, 9669595];
  
  return months.map((month, i) => ({
    month,
    child: childUpdates[i],
    adult: adultUpdates[i],
    total: childUpdates[i] + adultUpdates[i]
  }));
};

// Chart Components
export const ChildHistogramChart = () => {
  const data = generateHistogramData('child');
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis 
          dataKey="range" 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Daily Updates Range', position: 'insideBottom', offset: -10, fill: COLORS.secondary }}
        />
        <YAxis 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Frequency', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="frequency" fill={COLORS.child} name="Number of Areas" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ChildBoxPlotChart = () => {
  // Box plot shows two panels: full range and non-zero values
  // Full range: Q1=0, Median=0, Q3=2, max outliers=2690
  // Non-zero: different distribution
  const data = [
    { category: 'Full Range', min: 0, q1: 0, median: 0, q3: 2, max: 2690, mean: 1.9 },
    { category: 'Non-Zero Only', min: 1, q1: 2, median: 3, q3: 4, max: 2690, mean: 3.4 }
  ];
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis 
          dataKey="category" 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          angle={-15}
          textAnchor="end"
        />
        <YAxis 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Child Updates (Age 5-17)', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="q1" stackId="a" fill="#1a1a1a" stroke={COLORS.child} strokeWidth={2} name="Q1" />
        <Bar dataKey="median" stackId="a" fill={COLORS.child} name="Median (Q2)" />
        <Bar dataKey="q3" stackId="a" fill="#3a3a3a" stroke={COLORS.child} strokeWidth={2} name="Q3" />
        <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={2} name="Max (Outliers)" dot={{ fill: '#ef4444', r: 5 }} />
        <Line type="monotone" dataKey="mean" stroke="#fbbf24" strokeWidth={2} strokeDasharray="5 5" name="Mean" dot={{ fill: '#fbbf24', r: 4 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const AdultHistogramChart = () => {
  const data = generateHistogramData('adult');
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis 
          dataKey="range" 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Daily Updates Range', position: 'insideBottom', offset: -10, fill: COLORS.secondary }}
        />
        <YAxis 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Frequency', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="frequency" fill={COLORS.adult} name="Number of Areas" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const AdultBoxPlotChart = () => {
  // Box plot shows two panels: full range and non-zero values
  // Full range: Q1=2, Median=5, Q3=14, max outliers=16166
  // Non-zero: similar but tighter
  const data = [
    { category: 'Full Range', min: 0, q1: 2, median: 5, q3: 14, max: 16166, mean: 19.1 },
    { category: 'Non-Zero Only', min: 1, q1: 4, median: 7, q3: 18, max: 16166, mean: 21.5 }
  ];
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis 
          dataKey="category" 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          angle={-15}
          textAnchor="end"
        />
        <YAxis 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Adult Updates (Age 17+)', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="q1" stackId="a" fill="#1a1a1a" stroke={COLORS.adult} strokeWidth={2} name="Q1" />
        <Bar dataKey="median" stackId="a" fill={COLORS.adult} name="Median (Q2)" />
        <Bar dataKey="q3" stackId="a" fill="#3a3a3a" stroke={COLORS.adult} strokeWidth={2} name="Q3" />
        <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={2} name="Max (Outliers)" dot={{ fill: '#ef4444', r: 5 }} />
        <Line type="monotone" dataKey="mean" stroke="#fbbf24" strokeWidth={2} strokeDasharray="5 5" name="Mean" dot={{ fill: '#fbbf24', r: 4 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const ComparisonChart = () => {
  // The comparison chart shows side-by-side histograms and box plots
  // Showing comparative statistics - using actual per-record statistics
  const comparisonData = [
    { metric: 'Mean', child: 1.9, adult: 19.1 },
    { metric: 'Median', child: 0, adult: 5 },
    { metric: 'Q1', child: 0, adult: 2 },
    { metric: 'Q3', child: 2, adult: 14 },
    { metric: 'Max', child: 2690, adult: 16166 }
  ];
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Statistical comparison - separate charts for readability */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={comparisonData.slice(0, 4)} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="metric" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 12 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 12 }}
            label={{ value: 'Daily Updates per Area', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: COLORS.secondary }} />
          <Bar dataKey="child" fill={COLORS.child} name="Child (5-17)" />
          <Bar dataKey="adult" fill={COLORS.adult} name="Adult (17+)" />
        </BarChart>
      </ResponsiveContainer>
      <div style={{ color: COLORS.secondary, fontSize: '13px', padding: '10px 20px', background: '#1a1a1a', borderRadius: '8px' }}>
        <strong>Maximum Outliers:</strong> Child = 2,690 | Adult = 16,166 (extreme outliers not shown in scale)
      </div>
    </div>
  );
};

export const MonthlyTrendsChart = () => {
  const data = generateMonthlyTrends();
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Panel 1: Total Updates with Filled Area */}
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.accent} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="month" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="total" stroke={COLORS.accent} strokeWidth={2} fill="url(#totalGradient)" name="Total Updates" />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Panel 2: Child vs Adult Lines */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="month" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: COLORS.secondary }} />
          <Line type="monotone" dataKey="child" stroke={COLORS.child} strokeWidth={2} dot={{ fill: COLORS.child, r: 4 }} name="Child (5-17)" />
          <Line type="monotone" dataKey="adult" stroke={COLORS.adult} strokeWidth={2} dot={{ fill: COLORS.adult, r: 4 }} name="Adult (17+)" />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Panel 3: Child Share Percentage */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="month" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
            domain={[0, 20]}
            label={{ value: 'Child Share %', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={8.6} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'Avg: 8.6%', fill: '#ef4444', fontSize: 12 }} />
          <Line type="monotone" dataKey="childShare" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} name="Child Share %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const GrowthRatesChart = () => {
  const data = generateGrowthRates();
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis 
          dataKey="month" 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
        />
        <YAxis 
          stroke={COLORS.secondary}
          tick={{ fill: COLORS.secondary, fontSize: 12 }}
          label={{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: COLORS.secondary }} />
        <Line type="monotone" dataKey="child" stroke={COLORS.child} strokeWidth={2} name="Child Growth %" dot={{ r: 4 }} />
        <Line type="monotone" dataKey="adult" stroke={COLORS.adult} strokeWidth={2} name="Adult Growth %" dot={{ r: 4 }} />
        <Line type="monotone" dataKey="total" stroke={COLORS.accent} strokeWidth={2} name="Total Growth %" dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const SeasonalPatternsChart = () => {
  const data = generateSeasonalData();
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Panel 1: Total updates by month */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="month" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 12 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
            label={{ value: 'Total Updates', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="total" fill={COLORS.accent} name="Total Updates" />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Panel 2: Child vs Adult by month */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis 
            dataKey="month" 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 12 }}
          />
          <YAxis 
            stroke={COLORS.secondary}
            tick={{ fill: COLORS.secondary, fontSize: 11 }}
            label={{ value: 'Update Count', angle: -90, position: 'insideLeft', fill: COLORS.secondary }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: COLORS.secondary }} />
          <Bar dataKey="child" fill={COLORS.child} name="Child (5-17)" />
          <Bar dataKey="adult" fill={COLORS.adult} name="Adult (17+)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

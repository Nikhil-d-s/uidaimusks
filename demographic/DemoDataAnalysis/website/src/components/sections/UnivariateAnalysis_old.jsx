import GraphCard from '../GraphCard';

const UnivariateAnalysis = () => {
  const graphs = [
    {
      title: "Child Updates Distribution (5-17 years)",
      imagePath: "/01_child_updates_histogram.png",
      description: "Histogram showing the frequency distribution of child demographic updates",
      conclusions: [
        "Highly right-skewed distribution: Most pincodes have very low child update volumes (median: 109 updates)",
        "Extreme outliers exist: Maximum of 63,837 updates in a single pincode indicates concentrated urban activity",
        "Long tail pattern: 75% of pincodes have ≤364 child updates, suggesting rural areas process far fewer updates",
        "High variability: Standard deviation (1,010) exceeds mean (453), indicating heterogeneous processing patterns"
      ],
      insights: [
        "Urban concentration hypothesis: A few metro areas account for disproportionate child update volume",
        "Resource allocation need: Rural service centers may be underutilized or difficult to access",
        "Target investigation: Identify top 5% pincodes for enrollment campaign effectiveness studies",
        "Service equity concern: Low-volume areas may have documentation barriers for children"
      ]
    },
    {
      title: "Child Updates Distribution - Box Plot",
      imagePath: "/02_child_updates_boxplot.png",
      description: "Box plot showing statistical distribution of child updates with outlier detection",
      conclusions: [
        "Compressed IQR: Majority of child updates concentrated in lower range",
        "Extensive outlier presence: Numerous pincodes above upper fence indicate exceptional volumes",
        "Median significantly below mean: Confirms right-skewed distribution pattern",
        "Outlier magnitude: Some pincodes show 50-100x higher volumes than median"
      ],
      insights: [
        "Statistical normalization needed: Use log-transformation for modeling",
        "Outlier investigation priority: High-volume pincodes warrant service quality audits",
        "Geographic clustering: Outliers likely concentrated in specific urban centers",
        "Capacity planning: Resources should scale non-linearly with pincode type"
      ]
    },
    {
      title: "Adult Updates Distribution (17+ years)",
      imagePath: "/03_adult_updates_histogram.png",
      description: "Histogram showing the frequency distribution of adult demographic updates",
      conclusions: [
        "Similar skewness to child updates: Most pincodes cluster at lower adult update volumes (median: 1,149)",
        "Even higher extremes: Maximum of 575,974 updates suggests major urban centers dominate adult activity",
        "Wider spread: Mean of 4,598 with standard deviation 9,129 shows greater variability than child updates",
        "Scale difference: Adult updates are ~10x higher than child updates on average (4,598 vs 453)"
      ],
      insights: [
        "Adult dominance pattern: 90.94% of all updates are adult, reflecting population demographics",
        "Mobility signal strength: High adult update volumes may indicate migration hotspots or address changes",
        "System capacity indicator: Peak load pincodes need infrastructure scaling analysis",
        "Cross-validation opportunity: Compare adult/child ratios with census data for anomaly detection"
      ]
    },
    {
      title: "Adult Updates Distribution - Box Plot",
      imagePath: "/04_adult_updates_boxplot.png",
      description: "Box plot showing statistical distribution of adult updates with outlier detection",
      conclusions: [
        "Similar pattern to child updates: Compressed IQR with extensive outliers",
        "Higher magnitude outliers: Adult updates show even more extreme outlier values",
        "Consistent skewness: Both age groups exhibit comparable distribution shapes",
        "Scale disparity visible: Adult IQR roughly 10x higher than child IQR"
      ],
      insights: [
        "Common distribution drivers: Both demographics affected by same geographic/operational factors",
        "Proportional outliers: High child update pincodes likely also high in adult updates",
        "Statistical consistency: Similar analytical approaches applicable to both groups",
        "Joint modeling potential: Combined models with age scaling factors feasible"
      ]
    },
    {
      title: "Child vs Adult Updates - Comparative Analysis",
      imagePath: "/05_child_vs_adult_comparison.png",
      description: "Side-by-side comparison of child and adult update patterns",
      conclusions: [
        "Proportional relationship maintained: Child/adult ratio remains stable across volume ranges",
        "Synchronized patterns: Both categories follow similar distribution curves",
        "Consistent 10:1 ratio: Adult updates typically 10x higher than child updates",
        "Similar outlier behavior: Both show comparable outlier patterns relative to their scales"
      ],
      insights: [
        "Family update hypothesis: Parents updating children's records alongside their own",
        "Unified service planning: Can use total volume forecasting with fixed age ratio",
        "Ratio monitoring critical: Deviations could signal age-specific campaigns or system errors",
        "Geographic consistency: Child/adult ratio should be validated against census demographics"
      ]
    },
    {
      title: "Monthly Trends Time Series",
      imagePath: "/06_monthly_trends_timeseries.png",
      description: "Monthly aggregated trends showing temporal patterns in demographic updates",
      conclusions: [
        "Monthly volatility visible: Significant month-to-month fluctuations in update volumes",
        "No clear long-term trend: Data appears stationary without sustained growth or decline",
        "Seasonal hints: Some months consistently show elevated or reduced activity",
        "Synchronized age patterns: Child and adult trends move together temporally"
      ],
      insights: [
        "Campaign impact detection: Spikes likely correspond to awareness drives or policy changes",
        "Capacity planning window: Monthly aggregation useful for resource allocation planning",
        "External factor correlation: Match trend changes with government initiatives or holidays",
        "Forecasting baseline: Use historical monthly patterns for future demand prediction"
      ]
    },
    {
      title: "Monthly Growth Rates Analysis",
      imagePath: "/07_monthly_growth_rates.png",
      description: "Month-over-month percentage growth rates for child and adult updates",
      conclusions: [
        "High volatility: Growth rates swing dramatically between -43% to +89% for child updates",
        "Adult updates more stable: Growth rates range from -32% to +42% for adults",
        "Synchronized fluctuations: Growth rate patterns roughly align between age groups",
        "No stable trend: Erratic month-to-month changes suggest irregular demand or campaign effects"
      ],
      insights: [
        "Campaign impact hypothesis: Large positive spikes may align with enrollment drives",
        "Forecasting challenge: High volatility requires external variables for accuracy",
        "Capacity buffer need: System must handle +40-80% surges in some months",
        "Policy evaluation opportunity: Match growth spikes to specific interventions for effectiveness assessment"
      ]
    },
    {
      title: "Seasonal Patterns - Monthly Averages",
      imagePath: "/08_seasonal_patterns.png",
      description: "Average daily updates by month to identify seasonal trends",
      conclusions: [
        "Visible seasonal variation: Some months consistently show higher average daily updates",
        "Mid-year peak pattern: May-June appear to have elevated activity compared to other months",
        "Year-end slowdown: December-January show relatively lower average updates",
        "Moderate magnitude: Seasonal variation exists but not as dramatic as weekly cycles"
      ],
      insights: [
        "Financial year alignment: Activity peaks may coincide with government fiscal year (April start in India)",
        "Holiday effect: Year-end festivals and holidays likely reduce update processing",
        "Staffing strategy: Adjust recruitment/training cycles to anticipate mid-year demand surge",
        "Campaign timing optimization: Avoid scheduling major initiatives during naturally low-activity months"
      ]
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="rounded-lg p-5 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-2">📊 Univariate Analysis</h1>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Statistical analysis of individual variables - distributions, trends, and temporal patterns
        </p>
      </div>

      {/* Summary Stats */}
      <div className="rounded-lg shadow-lg p-5 mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h2 className="text-lg font-bold mb-4" style={{ color: '#d1d5db' }}>📈 Analysis Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded border border-gray-800">
            <h3 className="font-semibold text-base text-gray-300 mb-2">Distribution Analysis</h3>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Histograms reveal right-skewed distributions for both child and adult updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Box plots identify extensive outliers in high-volume pincodes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Most areas process low volumes; few urban centers dominate</span>
              </li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: '#d1d5db' }}>Temporal Patterns</h3>
            <ul className="space-y-1.5 text-sm" style={{ color: '#9ca3af' }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-600">•</span>
                <span>Monthly volatility with significant month-to-month fluctuations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600">•</span>
                <span>Moderate seasonal variation with mid-year activity spikes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600">•</span>
                <span>High month-to-month volatility in growth rates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Findings Banner */}
      <div className="bg-gray-800 rounded-lg p-4 text-white mb-6 shadow-lg border border-gray-800">
        <h3 className="text-base font-bold mb-3">🔍 Key Univariate Findings</h3>
        <div className="grid md:grid-cols-3 gap-3 text-xs">
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <div className="font-semibold mb-1">Urban Concentration</div>
            <div className="text-gray-500">Few pincodes account for majority of updates</div>
          </div>
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <div className="font-semibold mb-1">Stable Age Ratio</div>
            <div className="text-gray-500">Child updates consistently ~9% of total</div>
          </div>
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <div className="font-semibold mb-1">Seasonal Patterns</div>
            <div className="text-gray-500">Mid-year peaks and year-end slowdowns</div>
          </div>
        </div>
      </div>

      {/* Graph Cards */}
      <div className="space-y-8">
        {graphs.map((graph, index) => (
          <GraphCard
            key={index}
            title={graph.title}
            imagePath={graph.imagePath}
            description={graph.description}
            conclusions={graph.conclusions}
            insights={graph.insights}
          />
        ))}
      </div>

      {/* Methodology Note */}
      <div className="bg-gray-800 rounded-lg p-6 text-gray-400 mt-6 border border-gray-800">
        <h3 className="text-lg font-bold mb-3 text-gray-200">📝 Methodology Notes</h3>
        <div className="space-y-2 text-xs">
          <p>
            <strong className="text-gray-300">Statistical Methods:</strong> Descriptive statistics (mean, median, std, quartiles), 
            distribution analysis (histograms with KDE), outlier detection (IQR method via box plots), 
            time series visualization (daily and monthly aggregations), growth rate calculation (month-over-month percentage change).
          </p>
          <p>
            <strong className="text-white">Visualization Tools:</strong> Matplotlib and Seaborn for publication-quality plots (300 DPI), 
            consistent color schemes (blue for child, green for adult), clear axis labels and titles for interpretability.
          </p>
          <p>
            <strong className="text-white">Data Quality:</strong> All visualizations based on cleaned, validated data with no missing values. 
            Aggregations performed at pincode-date level, ensuring geographic and temporal accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnivariateAnalysis;

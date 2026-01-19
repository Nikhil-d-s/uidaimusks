import React from 'react';
import GraphCard from '../GraphCard';
import { 
  HiChartBar, 
  HiTrendingUp, 
  HiClock, 
  HiSearch, 
  HiChevronRight 
} from 'react-icons/hi';

const BivariateAnalysis = () => {
  // Complete analysis graphs with detailed insights
  const analysisGraphs = [
    {
      number: 1,
      title: "Child vs Adult Updates - Scatter Plot Analysis",
      image: "/bivariate_child_vs_adult_scatter.png",
      description: "Two complementary scatter plots: daily-level data showing all 2.4M records, and district-aggregated view reducing noise to reveal geographic patterns.",
      conclusion: {
        sections: [
          {
            heading: "Graph 1: Child vs Adult Updates (Daily Data)",
            content: "The raw daily scatter plot reveals a strong positive correlation (r=0.8507) with a clear linear trend y=0.1003x-0.01. Each point represents a single day's updates for a specific pincode. The dense cloud of points along the diagonal demonstrates that for every 10 adult updates, approximately 1 child update occurs. Natural variation creates scatter, but the dominant upward trend is unmistakable. Most points cluster in the lower-left (0-100 range), with a sparse tail extending to high values (400+ adults, 40+ children), indicating that while most records show low activity, the proportional relationship holds across all scales."
          },
          {
            heading: "Graph 2: Child vs Adult Updates (District Aggregated)",
            content: "When aggregated by district (967 total), the correlation becomes even clearer with reduced noise. Each point represents cumulative updates for an entire district. The tighter clustering along the trend line shows that geographic aggregation smooths out daily fluctuations. Districts range from thousands to hundreds of thousands of updates, with larger districts (Pune, Bengaluru) maintaining the 1:10 ratio. Some districts fall below the trend line (lower child documentation than expected), while others exceed it (better proportional child coverage)."
          }
        ],
        combined: "Both views confirm systematic documentation practices where infrastructure improvements benefit both age groups proportionally. The consistency across daily and district scales validates that this is a fundamental relationship, not an artifact of aggregation. Areas below the trend line represent opportunities for targeted child documentation campaigns."
      }
    },
    {
      number: 2,
      title: "Child vs Adult Updates - Joint Distribution (Hexbin)",
      image: "/bivariate_child_vs_adult_jointplot.png",
      description: "Hexagonal binning density plot showing the concentration patterns of child vs adult updates across the complete 2.4M records dataset.",
      conclusion: {
        sections: [
          {
            heading: "Hexbin Density Plot",
            content: "This visualization addresses the overplotting problem of scatter plots by aggregating nearby points into hexagonal bins, with color intensity representing point density. The darkest hexagons (highest density) cluster tightly in the lower-left corner (0-50 range for both variables), indicating that the vast majority of daily records show low update counts. A clear diagonal band of moderately dark hexagons extends from origin toward upper-right, tracing the correlation trend line. This band gradually fades (lighter colors) as values increase, showing decreasing frequency of high-activity records. The upper-right region is nearly empty (white/light hexagons), confirming that very few records show high updates for both age groups simultaneously."
          }
        ],
        combined: "Extreme concentration at low values shows most documentation activity is small-scale. The diagonal density band confirms the proportional relationship persists across all activity levels. The sparse high-value region indicates that high-volume documentation is rare and concentrated in specific locations. The smooth gradient from dense to sparse regions suggests a continuous spectrum rather than discrete clusters, indicating diverse operational scales across the country. This pattern reflects the urban-rural divide and infrastructure inequality - urban centers create the sparse high-density tail while rural areas dominate the dense low-activity cluster."
      }
    },
    {
      number: 3,
      title: "District-wise Comparative Analysis",
      image: "/bivariate_district_comparison.png",
      description: "Two complementary rankings: top 15 districts by absolute update volume (scale), and top 15 by child-to-adult ratio (proportional child documentation quality).",
      conclusion: {
        sections: [
          {
            heading: "Graph 1: Top 15 Districts by Total Updates",
            content: "Pune leads with 447,263 total updates, followed by Bengaluru Urban (384K) and Thane (369K). The stacked bars (blue=adult, orange=child) visually demonstrate that adult updates dominate in all districts - the blue sections are 8-10x larger than orange. Urban/metro districts dominate this ranking: Maharashtra (Pune, Thane, Mumbai Suburban, Nashik), Karnataka (Bengaluru Urban, Mysuru), Tamil Nadu (Chennai), Telangana (Hyderabad, Rangareddy). The clear gradient from 447K down to ~250K shows hierarchical concentration of documentation activity. These districts have superior infrastructure, more enrollment centers, and higher population density. However, high volume alone doesn't indicate equitable age coverage - note the consistently small orange sections."
          },
          {
            heading: "Graph 2: Top 15 Districts by Age Ratio (High Child Proportion)",
            content: "Tiruvarur tops with 1.08 ratio (MORE child than adult updates - unusual and noteworthy), followed by The Nilgiris (0.77) and Ariyalur (0.54). Tamil Nadu dominates with 8 of top 15 districts, suggesting effective state-level child documentation policies. Notably, NONE of these high-ratio districts appear in the volume chart - they are smaller districts punching above their weight in proportional child coverage. Ratios decline from 1.08 to ~0.45, showing a spectrum of child documentation effectiveness. Districts with ratios >0.5 indicate nearly equal or better child coverage compared to adults - a remarkable achievement."
          }
        ],
        combined: "This reveals a critical dichotomy: Volume ≠ Ratio. Large urban districts excel in absolute numbers but maintain standard ~0.10-0.12 ratios. Smaller districts achieve superior ratios (0.5-1.08) through focused interventions despite lower absolute volumes. Policy Implication: Scaling up operations alone won't fix proportional gaps. Smaller high-ratio districts demonstrate that targeted, child-focused programs work - their strategies should be studied and replicated in high-volume urban centers to achieve both scale AND equity."
      }
    },
    {
      number: 4,
      title: "Age Ratio Distribution Patterns",
      image: "/bivariate_age_ratio_distribution.png",
      description: "Four complementary views of child-to-adult ratio distribution: linear histogram, box plot, log-scale histogram, and state-level mean comparisons.",
      conclusion: {
        sections: [
          {
            heading: "Graph 1: Distribution of Age Update Ratio (Linear Scale)",
            content: "The histogram shows extreme positive skew with a massive spike at 0.0 (over 600,000 records with ZERO child updates despite adult activity). Mean = 0.1161, Median = 0.0000, Std = 0.2442. The mean-median gap indicates the distribution is pulled rightward by outliers. After the zero spike, frequency drops exponentially - ratios 0.0-0.2 are common, 0.2-0.4 uncommon, >0.4 rare. The long tail extends to 1.0+, showing some records achieve parity or better. This zero-heavy pattern reveals systematic neglect: many areas document adults but ignore children entirely."
          },
          {
            heading: "Graph 2: Age Ratio Box Plot",
            content: "Five-number summary shows: Min ≈ 0.00, Q1 = 0.0000, Median = 0.0000 (50th percentile), Q3 = 0.1429, Max extends to ~1.08. Mean (orange triangle) = 0.1161 sits above median, confirming positive skew. The compressed box (Q1=Q2=0.00) means at least 50% of records have exactly zero child updates. The whisker extends to Q3 at 0.14, showing the next 25% range from 0-0.14. Beyond Q3, numerous outliers dot the upper range, representing exceptional child documentation. This visualization starkly illustrates the inequality: half the data is zero, while top performers reach 1.08 - a 100%+ difference."
          },
          {
            heading: "Graph 3: Age Ratio Distribution (Log Scale)",
            content: "With logarithmic Y-axis, the zero-dominated linear view transforms to reveal hidden structure. The distribution follows a power-law decay pattern - frequency decreases exponentially as ratio increases. Distinct groups emerge: Zero cluster (majority), Very low ratios 0.0-0.1 (common, ~10^4 frequency), Low ratios 0.1-0.2 (less common, ~10^3), Moderate ratios 0.2-0.4 (uncommon, ~10^2), High ratios 0.4+ (rare, ~10^1). The smooth decay curve suggests continuous variation rather than discrete categories. This log view confirms that while zeros dominate, there IS activity across the entire ratio spectrum - child updates do occur, but with exponentially decreasing frequency."
          },
          {
            heading: "Graph 4: Age Ratio Distribution - Top 10 States",
            content: "State-level mean ratios show: Maharashtra (0.1289), Karnataka (0.1282), Tamil Nadu (0.1206) lead with consistent ~0.12-0.13 ratios. Other major states (Uttar Pradesh, West Bengal, Rajasthan, Gujarat, Andhra Pradesh, Telangana, Madhya Pradesh) cluster in 0.10-0.12 range. The relatively narrow spread (0.10-0.13) suggests similar state-level policies nationwide, but all fall far below parity (1.0). Even top performers document 8-10 adults per child. This reveals a national pattern: child documentation lags across ALL states, though some do slightly better through potentially superior infrastructure or awareness campaigns."
          }
        ],
        combined: "All four views converge on a critical finding: child documentation is systematically neglected nationwide. The zero-heavy distribution, compressed box plot, power-law decay, and uniformly low state ratios all point to structural gaps in child-focused outreach. However, the existence of high-ratio outliers (districts reaching 1.08) proves better performance is achievable. Policy interventions must: (1) Address the zero-heavy mass through targeted awareness campaigns, (2) Study and replicate strategies from high-ratio districts, (3) Set state-level targets above current 0.10-0.13 baseline toward 0.5+ (parity-approaching) ratios."
      }
    },
    {
      number: 5,
      title: "Pincode Concentration and Inequality Analysis",
      image: "/bivariate_pincode_concentration.png",
      description: "Four-panel analysis examining geographic inequality: Lorenz curve, volume vs frequency scatter, top 20 pincodes ranking, and pincode-level child-adult correlation.",
      conclusion: {
        sections: [
          {
            heading: "Graph 1: Pincode Concentration Curve (Lorenz Curve)",
            content: "The Lorenz curve dramatically departs from the perfect equality diagonal (dashed line), revealing severe geographic concentration. The curve hugs the X-axis for the first 50-60% of pincodes (ranked by volume), indicating these contribute almost nothing to total updates. It then rises steeply in the 70-100% range, showing most activity concentrates in the top 20-30% of pincodes. Quantitative breakdown: Top 1% (198 pincodes) = 12.53% of updates (12.5x overrepresentation), Top 10% (1,977 pincodes) = 46.74% of updates (4.7x, nearly HALF), Top 20% = ~68% of updates, Bottom 50% (9,886 pincodes) = <10% of updates combined. This extreme inequality reflects the urban-rural divide."
          },
          {
            heading: "Graph 2: Update Volume vs Frequency (Days with Updates)",
            content: "Scatter plot showing positive correlation between consistency (days active) and total volume. Pincodes cluster into distinct groups: High-frequency/High-volume (80-90 days, 15,000-20,000 updates) representing sustained urban documentation centers with daily operations. Moderate-frequency/Moderate-volume (30-60 days, 5,000-10,000 updates) for semi-urban areas with regular but not daily activity. Low-frequency/Low-volume (1-20 days, 0-5,000 updates) for rural/sporadic activity - one-time drives or irregular documentation. The overall positive trend indicates that sustained engagement (more active days) correlates with higher total documentation - consistency matters."
          },
          {
            heading: "Graph 3: Top 20 Pincodes by Total Updates",
            content: "Ranked bar chart showing the top 20 pincodes with highest update volumes. Clear gradient from highest (~18,000-20,000 updates) down to 20th position (~12,000 updates). These 20 pincodes alone represent a disproportionate share of total documentation. They likely correspond to major metro centers (Mumbai, Delhi, Bangalore, etc.), state capitals, and Tier-1 cities with multiple enrollment centers, high population density and superior infrastructure. The steep drop-off after top 20 visually demonstrates concentration. These high-performers should be studied as model implementations for replication in lower-activity regions."
          },
          {
            heading: "Graph 4: Child vs Adult Updates (Top 500 Pincodes)",
            content: "Scatter plot focusing on the top 500 pincodes by volume, examining whether the child-adult correlation holds at pincode level. Clear positive correlation persists even in this subset - pincodes with higher adult updates show proportionally higher child updates. The trend line shows similar ~1:10 slope as seen in daily/district aggregations. Some scatter exists: pincodes above trend line have better child documentation, pincodes below have child documentation gaps. The correlation's persistence at pincode level confirms this is a fundamental relationship, not an aggregation artifact."
          }
        ],
        combined: "These four views paint a comprehensive picture of geographic inequality: (1) Lorenz curve quantifies extreme concentration (top 10% = 47% of activity), (2) Volume vs frequency shows that sustained engagement drives higher totals - one-time drives aren't enough, (3) Top 20 ranking identifies model pincodes for replication, (4) Pincode-level scatter confirms proportional child-adult relationship holds everywhere. Policy Implications: The bottom 50% of pincodes (9,886 areas contributing <10% of updates) represent the primary opportunity. Strategies should include: Establish permanent enrollment centers in low-activity pincodes, Increase frequency from sporadic 1-20 days to consistent 50+ days, Study and replicate practices from top 20 pincodes, Target child-specific campaigns in pincodes below the child-adult trend line."
      }
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="rounded-lg p-5 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2"><HiChartBar className="text-2xl" /> Bivariate Analysis</h1>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Exploring relationships between two variables to understand correlations, ratios, and distributions 
          across child and adult demographic updates at daily, district, and pincode levels.
        </p>
      </div>

      {/* Analysis Summary */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Correlation Analysis */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiTrendingUp /> Correlation Analysis</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Strong correlation:</span> 0.8507 between child and adult updates
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Linear trend:</span> y = 0.1003x - 0.01 (1 child per 10 adults)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Proportional growth:</span> Higher adult activity = higher child documentation
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Concentration */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiClock /> Geographic Concentration</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>High concentration:</span> Top 1% pincodes = 12.53% of updates
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Top 10% dominance:</span> 46.74% of all updates (19,772 pincodes total)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>District leaders:</span> Pune (447K), Tiruvarur highest ratio (1.08)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Findings Banner */}
      <div className="rounded-lg p-5 mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiSearch /> Key Findings</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-base font-bold mb-2" style={{ color: '#d1d5db' }}>Age Ratio Patterns</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Mean age ratio 0.1161 vs median 0.0000 (heavily zero-skewed)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Child documentation 1/10th of adult (significant gap identified)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>967 districts analyzed with wide variation (0.00 to 1.08 ratio)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-2" style={{ color: '#d1d5db' }}>Policy Implications</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Improving infrastructure benefits both age groups proportionally</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Top performers can serve as models for underperforming areas</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Geographic inequality requires targeted outreach programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analysis Graphs - Using Original Jupyter Notebook Plots */}
      {analysisGraphs.map((graph) => (
        <GraphCard
          key={graph.number}
          number={graph.number}
          title={graph.title}
          description={graph.description}
          conclusion={graph.conclusion}
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src={graph.image} 
                alt={graph.title}
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
        />
      ))}

      {/* Summary Section */}
      <div className="rounded-lg p-5 mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: '#d1d5db' }}>Summary: Key Bivariate Findings</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h4 className="text-base font-bold mb-3" style={{ color: '#d1d5db' }}>1. Child vs Adult Correlation</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Correlation: <strong style={{ color: '#d1d5db' }}>0.8507</strong> (strong positive)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Linear trend: <strong style={{ color: '#d1d5db' }}>y = 0.1003x - 0.01</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Documentation affects both age groups proportionally</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h4 className="text-base font-bold mb-3" style={{ color: '#d1d5db' }}>2. Age Ratio Distribution</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Mean: <strong style={{ color: '#d1d5db' }}>0.1161</strong>, Median: <strong style={{ color: '#d1d5db' }}>0.0000</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Std deviation: <strong style={{ color: '#d1d5db' }}>0.2442</strong> (high variability)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Child updates significantly less frequent than adult</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h4 className="text-base font-bold mb-3" style={{ color: '#d1d5db' }}>3. District-Level Insights</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Total districts: <strong style={{ color: '#d1d5db' }}>967</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Highest ratio: <strong style={{ color: '#d1d5db' }}>Tiruvarur (1.0833)</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Top by volume: <strong style={{ color: '#d1d5db' }}>Pune (447,263)</strong></span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <h4 className="text-base font-bold mb-3" style={{ color: '#d1d5db' }}>4. Pincode Concentration</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Total pincodes: <strong style={{ color: '#d1d5db' }}>19,772</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Top 1%: <strong style={{ color: '#d1d5db' }}>12.53%</strong> of updates</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Top 10%: <strong style={{ color: '#d1d5db' }}>46.74%</strong> of updates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg p-4" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
          <h4 className="text-base font-bold mb-3" style={{ color: '#d1d5db' }}>Key Takeaways for Policy & Action:</h4>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>Proportional Documentation:</strong> The strong correlation (0.85) suggests improving overall infrastructure benefits both groups
            </li>
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>Child Documentation Gap:</strong> Mean ratio of 0.1161 indicates child updates are ~1/10th of adult updates
            </li>
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>Geographic Inequality:</strong> Top 10% pincodes account for nearly half of updates—expand services to underserved areas
            </li>
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>Learn from Leaders:</strong> Tiruvarur (high ratio) and Pune (high volume) can serve as models
            </li>
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>Sustained Engagement:</strong> Pincodes with consistent activity (80-90 days) show higher documentation rates
            </li>
            <li className="text-sm" style={{ color: '#9ca3af' }}>
              <strong style={{ color: '#d1d5db' }}>State-Level Patterns:</strong> Maharashtra, Karnataka, Tamil Nadu demonstrate effective policies worth replicating
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BivariateAnalysis;

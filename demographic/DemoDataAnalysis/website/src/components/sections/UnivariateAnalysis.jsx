import GraphCard from '../GraphCard';
import { 
  HiChartBar, 
  HiTrendingUp, 
  HiClock, 
  HiSearch, 
  HiDocumentText,
  HiChevronRight 
} from 'react-icons/hi';

const UnivariateAnalysis = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="rounded-lg p-5 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2"><HiChartBar className="text-2xl" /> Univariate Analysis</h1>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Statistical analysis and visualization of Aadhaar demographic update patterns
        </p>
      </div>

      {/* Analysis Summary */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Distribution Analysis */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiTrendingUp /> Distribution Analysis</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Extreme right-skew:</span> Child median=0, adult median=5 (44% child records are zero)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Adult dominance:</span> 10-15× higher volumes (mean 19.1 vs 1.9 per record)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Massive outliers:</span> Max child=2,690, adult=16,166 indicating urban service centers
              </p>
            </div>
          </div>
        </div>

        {/* Temporal Patterns */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiClock /> Temporal Patterns</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Extreme volatility:</span> Growth swings from -94.5% to +294% month-over-month
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>18× seasonal variation:</span> Peak (Dec 10.51M) to lowest (Jan 583K) shows batch patterns
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Campaign spikes:</span> September (+294%), November (+118%) indicate enrollment drives
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
            <h4 className="text-base font-bold mb-2" style={{ color: '#d1d5db' }}>Demographics</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Adult updates 10-15× higher than child (91-93% adult share monthly)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>44% of records have zero child updates (median=0) vs adult median=5</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Urban centers show outliers up to 16,166 adult updates per record</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-2" style={{ color: '#d1d5db' }}>Temporal Trends</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>18.02× seasonal variation: Dec peak (10.51M) vs Jan low (583K)</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Volatile growth: -94.5% to +294% swings indicate batch upload patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
                <span className="text-sm" style={{ color: '#9ca3af' }}>Data gaps (Feb, Aug) suggest project-specific collection period</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visualizations */}
      <div className="space-y-6">
        <GraphCard
          number="01"
          title="Child Updates Distribution"
          description="Histogram showing the frequency distribution of daily child Aadhaar updates across different volume ranges"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/01_child_updates_histogram.png" 
                alt="Child Updates Distribution"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                loading="eager"
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Distribution Pattern",
                content: "The histogram reveals an extreme right-skewed distribution with a massive concentration at the zero bin. Nearly 44% of all geographic areas recorded zero child updates during the study period, represented by the towering first bar dominating the chart. After this zero peak, frequency drops exponentially - most non-zero areas cluster in the 1-10 updates range, with progressively fewer areas showing higher counts. The distribution exhibits a long tail extending toward rare high-volume cases."
              },
              {
                heading: "Statistical Summary",
                content: "Key statistics paint a stark picture: Mean = 1.9 updates per area, but Median = 0.0 (meaning more than half of all areas had zero child updates). Standard deviation is high relative to the mean, confirming extreme variability. Q1 (25th percentile) = 0, Q2 (50th) = 0, Q3 (75th) = 2.0, showing that even the 75th percentile area only had 2 child updates. Maximum recorded was 2,690 updates in exceptional locations."
              },
              {
                heading: "Real-World Interpretation",
                content: "This pattern makes practical sense: children (ages 5-17) update Aadhaar far less frequently than adults. Updates typically occur at initial enrollment around age 5, then sporadically for school verifications or address changes. Many neighborhoods, especially those with fewer children or rural areas with limited enrollment infrastructure, naturally show zero activity. The extreme outliers (up to 2,690 updates) likely represent areas with schools, specialized enrollment centers, or targeted child documentation drives."
              }
            ],
            combined: "The zero-heavy, right-skewed distribution indicates that child Aadhaar updates are highly concentrated in specific locations rather than spread evenly. The 44% zero rate suggests significant geographic gaps in child documentation, presenting opportunities for targeted outreach programs in underserved areas."
          }}
        />

        <GraphCard
          number="02"
          title="Child Updates Box Plot"
          description="Box plot analysis showing the statistical distribution and outliers in child Aadhaar updates"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/02_child_updates_boxplot.png" 
                alt="Child Updates Box Plot"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Box Plot Interpretation",
                content: "The box plot provides a visual five-number summary of the child updates distribution. The 'box' portion (Q1 to Q3) is extremely compressed near zero, indicating minimal variation in typical values. The median line sits at 0.0, coinciding with Q1, meaning at least 50% of areas have exactly zero updates. The whisker extends from 0 to approximately 5-7 updates (typical range). The mean marker (often shown as a diamond or circle) appears at 1.9, pulled rightward by outliers."
              },
              {
                heading: "Outlier Analysis",
                content: "Beyond the whisker, numerous outlier points dot the upper region, extending dramatically upward to the maximum of 2,690 updates. These outliers represent areas with exceptional child documentation activity - likely major enrollment centers near schools, targeted child registration campaigns, or urban centers with concentrated child populations. The sheer number and spread of outliers suggests that high-volume child documentation is rare but significant when it occurs."
              },
              {
                heading: "Comparison Context",
                content: "The compressed box and extensive outlier spread create a distinctive 'pin-like' appearance characteristic of zero-inflated distributions. This visual immediately communicates that child updates are not normally distributed but rather follow a pattern where most areas have little to no activity, while a small fraction of specialized locations handle the bulk of updates. This concentration pattern has important policy implications for resource allocation."
              }
            ],
            combined: "The box plot confirms extreme concentration in child updates. With Q1, Q2 (median), and most of the box at or near zero, typical areas show minimal child documentation activity. The extensive outlier region demonstrates that when child updates do occur in volume, they concentrate in specific high-capacity locations, suggesting a hub-and-spoke service delivery model rather than distributed access."
          }}
        />

        <GraphCard
          number="03"
          title="Adult Updates Distribution"
          description="Histogram showing the frequency distribution of daily adult Aadhaar updates across different volume ranges"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/03_adult_updates_histogram.png" 
                alt="Adult Updates Distribution"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Distribution Characteristics",
                content: "Unlike the child distribution, the adult histogram shows a more distributed right-skewed pattern without the extreme zero-concentration. The distribution peaks in the 3-10 updates range, with substantial frequency extending through 20-50 updates. While still right-skewed (long tail toward high values), the distribution is much more spread out, indicating consistent adult Aadhaar activity across geographic areas. The zero bin, while present, is not dominant - most areas show at least some adult update activity."
              },
              {
                heading: "Statistical Profile",
                content: "Adult updates show markedly different statistics: Mean = 19.1 updates per area (10x higher than children's 1.9), Median = 5.0 (compared to children's 0.0), demonstrating that a typical area has regular adult activity. Q1 = 2.0 (bottom 25% still have at least 2 updates), Q3 = 14.0 (top 25% exceed 14 updates). Standard deviation is higher in absolute terms but lower relative to mean, indicating more predictable patterns. Maximum recorded was 16,166 updates in major urban service centers."
              },
              {
                heading: "Usage Context",
                content: "The robust distribution reflects adults' frequent Aadhaar usage in daily life: employment verification, banking KYC processes, mobile SIM registration, government welfare enrollment, address updates, and service applications. Adults interact with Aadhaar infrastructure continuously across multiple use cases, creating steady baseline activity even in quieter areas. The long tail (extending to 16,166 updates) represents urban centers with dedicated Aadhaar service offices, banks, mobile shops, and government welfare centers processing high volumes daily."
              }
            ],
            combined: "Adult updates show a healthy, distributed pattern indicating widespread infrastructure access and consistent usage. The 10-15x higher volume compared to children, combined with near-universal geographic coverage (median=5), suggests that adult Aadhaar services are mature and deeply integrated into administrative processes, while child services remain concentrated and occasional."
          }}
        />

        <GraphCard
          number="04"
          title="Adult Updates Box Plot"
          description="Box plot analysis showing the statistical distribution and outliers in adult Aadhaar updates"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/04_adult_updates_boxplot.png" 
                alt="Adult Updates Box Plot"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Box Structure Analysis",
                content: "The adult box plot shows a more substantial box (Q1 to Q3) compared to the compressed child box. Q1 = 2.0, Median = 5.0, Q3 = 14.0, creating a visible box that spans 12 units. This indicates meaningful variation in typical adult update volumes across areas. The median line sits comfortably within the box (not at an edge), suggesting a relatively balanced distribution within the interquartile range. The mean at 19.1 appears above Q3, pulled rightward by high-value outliers."
              },
              {
                heading: "Whisker and Outlier Pattern",
                content: "The whiskers extend from Q1 (2) down toward minimum values and from Q3 (14) upward to approximately 40-50 updates, capturing the range of typical variation. Beyond the upper whisker, a substantial cloud of outlier points extends dramatically upward to the maximum of 16,166 updates. These outliers represent major urban Aadhaar processing centers - banks handling bulk KYC verifications, government offices enrolling welfare beneficiaries, mobile phone shops registering customers, and dedicated Aadhaar seva kendras."
              },
              {
                heading: "Comparative Insights",
                content: "Comparing to the child box plot reveals stark differences: Adult Q1 (2) > Child Q3 (2) - even quiet adult areas match busy child areas. Adult median (5) is meaningful while child median is 0. Adult box is 12 units wide vs child box compressed near zero. Adult mean (19.1) is 10x child mean (1.9). These differences reflect fundamentally different usage patterns: adults use Aadhaar constantly for employment, banking, and services, while children use it occasionally for enrollment and school verification."
              }
            ],
            combined: "The adult box plot demonstrates mature, widespread Aadhaar infrastructure with consistent baseline activity across all areas and high-volume processing centers in urban locations. The substantial box, meaningful median, and distributed outliers indicate that adult Aadhaar services are well-integrated into daily administrative processes nationwide, in sharp contrast to the concentrated, occasional nature of child updates."
          }}
        />

        <GraphCard
          number="05"
          title="Child vs Adult Updates Comparison"
          description="Side-by-side comparison of child and adult Aadhaar update statistical measures"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/05_child_vs_adult_comparison.png" 
                alt="Child vs Adult Comparison"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Magnitude Differences",
                content: "The comparison chart starkly visualizes the child-adult gap across all statistical measures. Mean: Adults (19.1) vs Children (1.9) = 10.1x difference. Median: Adults (5.0) vs Children (0.0) = infinite ratio (children's median is zero). Q1: Adults (2.0) vs Children (0.0) - even the quietest adult areas exceed quietest child areas. Q3: Adults (14.0) vs Children (2.0) = 7x difference. Maximum: Adults (16,166) vs Children (2,690) = 6x difference. Every single metric shows adults dramatically dominating update volumes."
              },
              {
                heading: "Distribution Shape Contrast",
                content: "Beyond raw numbers, the comparison reveals fundamentally different distribution shapes. Children show zero-inflation (44% at zero, median=0) with a compressed box and extreme outliers - a hub-and-spoke pattern. Adults show distributed activity (median=5, Q1=2) with a substantial interquartile range - widespread service delivery. The visual difference between purple bars (children, barely visible) and blue bars (adults, prominent) immediately communicates this disparity, making the gap accessible even to non-technical audiences."
              },
              {
                heading: "Policy Implications",
                content: "The 10-15x gap reveals systemic underinvestment in child-specific Aadhaar services. While adults enjoy widespread, frequent access (median=5, meaning half of all areas have 5+ updates), children face concentrated, infrequent service (median=0, meaning half of areas have NO child updates). This isn't explained by demographics alone - India's age pyramid has substantial child population. Instead, it suggests: (1) Child enrollment campaigns are periodic rather than continuous, (2) Infrastructure prioritizes adult services, (3) Geographic access gaps are severe for children."
              }
            ],
            combined: "The comparison exposes a stark service delivery gap: adult Aadhaar infrastructure is mature, distributed, and constantly utilized (10-15x higher volumes, widespread geographic coverage), while child infrastructure is concentrated, periodic, and inaccessible to many areas (44% zero-activity rate). Closing this gap requires dedicated child enrollment campaigns, distributed enrollment centers near schools, and continuous service availability rather than periodic drives."
          }}
        />

        <GraphCard
          number="06"
          title="Monthly Trends Time Series"
          description="Multi-panel time series showing total updates, child vs adult patterns, and child share percentage over time"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/06_monthly_trends_timeseries.png" 
                alt="Monthly Trends"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Top Panel: Total Updates Over Time",
                content: "The total updates line shows extreme volatility, not smooth seasonal trends. March 2025 starts high at 9.76M updates. April-July shows a dramatic crash to 1.5-2.0M per month (84% drop from March). August shows zero (data gap). September surges to 7.4M (294% jump). October drops to 4.8M (-35%). November spikes to 10.47M (+118%). December peaks at 10.51M (+0.4%). January 2026 crashes to 583K (-94.5%). This rollercoaster pattern suggests batch uploads, targeted campaigns, or administrative data collection cycles rather than organic daily usage."
              },
              {
                heading: "Middle Panel: Child vs Adult Lines",
                content: "Purple line (children) and blue line (adults) move in parallel, maintaining proportional relationship throughout. Adults consistently dominate at 10-15x higher volumes. During the April-July low period, both groups drop together. The September and November spikes affect both age groups simultaneously, confirming these are system-wide phenomena (campaigns or batch uploads) rather than age-specific trends. The parallel movement validates that child and adult updates are coupled - when overall activity increases, both groups benefit proportionally."
              },
              {
                heading: "Bottom Panel: Child Share Percentage",
                content: "Child share oscillates between 7-13% across months, averaging 8.6%. Interestingly, during the low-activity April-July period, child share peaks at 12-13% (purple bars taller), suggesting these quiet months may have focused on school enrollment campaigns. During high-activity months (Nov-Dec), child share drops to 7-8%, indicating adult-driven year-end documentation pushes. February and August show gaps (no data). This percentage view reveals that children's relative share varies inversely with total volume - they gain share during targeted campaigns but lose share during mass adult-focused drives."
              }
            ],
            combined: "The time series reveals project-like data collection rather than steady-state operations. The extreme volatility (294% spikes, 94% crashes), data gaps (Feb, Aug), and year-end concentration (Nov-Dec peaks) suggest this represents a specific data gathering initiative from March 2025 to January 2026, possibly pilot project data or campaign-specific records. Child-adult parallelism confirms infrastructure improvements benefit both groups, but children gain relative share only during targeted campaigns."
          }}
        />

        <GraphCard
          number="07"
          title="Monthly Growth Rates"
          description="Month-over-month percentage change in update volumes for children, adults, and total"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/07_monthly_growth_rates.png" 
                alt="Monthly Growth Rates"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Extreme Volatility Patterns",
                content: "The growth rate chart reveals unprecedented swings that far exceed normal business variation. April 2025: -84.6% (massive crash from March). May-June: Near flat (±5%). July: +27.4% uptick. September: +294.4% (nearly quadrupled!). October: -35.6% drop. November: +118.4% (more than doubled). December: +0.4% (essentially flat). January 2026: -94.5% (lost 95% of volume). These swings range from -95% to +294% - a 389 percentage point spread. Normal operational data might vary ±10-20% month-to-month; variations of 100%+ indicate non-operational patterns."
              },
              {
                heading: "Three-Line Synchronization",
                content: "Purple line (children), blue line (adults), and gray line (total) move together almost perfectly, with minimal divergence. All three crash in April, surge in September, spike in November, and crash in January. This tight correlation confirms these are system-wide phenomena affecting all demographics simultaneously. If these were organic usage patterns, we'd expect children and adults to show different seasonal behaviors (e.g., child spikes during school enrollment season, adult spikes during tax season). Instead, perfect synchronization suggests external factors: batch data uploads, campaign timing, or administrative data collection schedules."
              },
              {
                heading: "Interpretation: Not Organic Usage",
                content: "Real-world Aadhaar usage doesn't behave this way. If people were updating Aadhaar for daily needs (banking, employment, mobile connections), we'd see: (1) Relatively stable month-to-month volumes (±10-30%), (2) Gradual seasonal patterns (e.g., year-end increases), (3) Demographic-specific patterns (children during school season, adults during employment season). Instead, we observe: (1) Wild swings (±300%), (2) Abrupt spikes and crashes, (3) Perfect child-adult synchronization. This strongly suggests the data represents administrative batch processing, targeted enrollment campaigns conducted at specific times, or a data collection project with periodic data dumps rather than continuous organic usage."
              }
            ],
            combined: "The growth rate analysis confirms this is campaign/batch data, not steady-state operations. The ±300% swings, perfect demographic synchronization, and abrupt transitions indicate discrete data collection events rather than continuous service delivery. This has important implications for interpretation: statistics like 'mean updates per area' may reflect campaign intensity rather than baseline infrastructure capacity."
          }}
        />

        <GraphCard
          number="08"
          title="Seasonal Patterns by Month"
          description="Reorganized data by calendar month showing update volumes and child-adult breakdown"
          chartComponent={
            <div className="rounded overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <img 
                src="/08_seasonal_patterns.png" 
                alt="Seasonal Patterns"
                className="w-full h-auto"
                style={{ background: '#ffffff' }}
                decoding="async"
              />
            </div>
          }
          conclusion={{
            sections: [
              {
                heading: "Top Panel: Total by Calendar Month",
                content: "Reorganizing data by calendar month (Jan-Dec) reveals which months naturally have higher activity. December leads with 10.51M updates, November close behind at 10.47M, March at 9.76M. July and September show moderate activity (1.9M and 7.4M). January, April, May, June show low activity (583K to 1.9M). February and August show zero - these are DATA GAPS, not months with no activity. October has 4.76M. This pattern suggests year-end concentration (Nov-Dec peak) possibly for fiscal year-end documentation, with quieter mid-year periods."
              },
              {
                heading: "Bottom Panel: Child vs Adult by Month",
                content: "For every month with data, blue bars (adults) tower over purple bars (children), maintaining the 10-15x dominance. The year-end months (Nov-Dec) show the tallest bars for both groups. Interestingly, during July (low-activity month), the purple bar is proportionally taller relative to blue, suggesting child-focused campaigns occurred then. The consistent stacked pattern across months confirms that child-adult proportions remain relatively stable (7-13% child share) regardless of total volume, though children gain slight share during targeted campaigns."
              },
              {
                heading: "Data Coverage Analysis",
                content: "Critically, this isn't a complete year of data. February 2025 and August 2025 show zero (missing months). The data spans March 2025 through January 2026, skipping two months. This irregular coverage confirms this is a specific data collection project, not continuous monitoring. The year-end concentration (Nov-Dec peaks comprising 20M of the ~45M total updates, or 44% of volume in just 2 months) suggests an administrative push to update records before fiscal year-end, possibly for compliance reporting or funding justification."
              }
            ],
            combined: "The seasonal view reveals incomplete data coverage (Feb, Aug missing) and extreme concentration (44% of volume in Nov-Dec alone). This isn't natural seasonality but rather project-specific timing: quiet summer collection (Apr-Jul), ramping up in fall (Sep-Oct), massive year-end push (Nov-Dec), then abrupt end (Jan crash). The pattern suggests a time-bound data collection initiative, possibly a pilot project or campaign with specific start/end dates, rather than ongoing operational monitoring."
          }}
        />
      </div>

      {/* Methodology Notes */}
      <div className="mt-8 rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiDocumentText /> Methodology Notes</h3>
        <div className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
          <div className="flex items-start gap-2">
            <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
            <p>
              <span style={{ color: '#d1d5db' }}>Data Source:</span> 69 CSV files spanning March 2025 - January 2026 (2.4M records)
            </p>
          </div>
          <div className="flex items-start gap-2">
            <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
            <p>
              <span style={{ color: '#d1d5db' }}>Tools:</span> Python (Pandas, NumPy), Matplotlib, Seaborn, Plotly for visualization
            </p>
          </div>
          <div className="flex items-start gap-2">
            <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
            <p>
              <span style={{ color: '#d1d5db' }}>Statistical Tests:</span> Normality tests (Shapiro-Wilk), seasonal decomposition (statsmodels)
            </p>
          </div>
          <div className="flex items-start gap-2">
            <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
            <p>
              <span style={{ color: '#d1d5db' }}>Aggregation Levels:</span> Daily, monthly, pincode, district, and state-level analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnivariateAnalysis;

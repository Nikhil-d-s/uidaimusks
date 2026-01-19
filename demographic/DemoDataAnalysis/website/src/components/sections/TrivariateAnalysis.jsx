import React from 'react';
import GraphCard from '../GraphCard';
import { 
  HiChartBar, 
  HiTrendingUp, 
  HiClock, 
  HiSearch, 
  HiChevronRight 
} from 'react-icons/hi';

const TrivariateAnalysis = () => {
  const graphs = [
    {
      number: 1,
      title: "Time × District × Age Group: Temporal Patterns",
      image: "/trivariate_time_district_age.png",
      description: "Faceted time-series visualization showing how child and adult updates evolve over time across the top 12 districts. Each panel represents a different district, with dual lines tracking both age groups simultaneously to reveal temporal patterns and cross-district variations.",
      conclusion: {
        sections: [
          {
            heading: "District-Level Temporal Dynamics",
            content: "The 4×3 grid reveals distinct temporal patterns across India's busiest districts. Some districts show parallel movement between child and adult updates (synchronized demographic activity), while others display divergent trends where adult updates surge independently. This variability suggests different underlying drivers of demographic activity - some districts experience coordinated family updates, while others see adult-dominated migration patterns."
          },
          {
            heading: "Volume Disparities Across Geography",
            content: "Adult updates (17+) consistently dominate across all 12 districts, often exceeding child updates by 5-10x margins. The magnitude differences between districts are striking - top districts process 50K-100K+ monthly updates while smaller districts handle just a few thousand. This concentration pattern highlights urbanization hotspots and economically active regions where demographic churn is highest."
          },
          {
            heading: "Synchronization vs Independence",
            content: "Key insight: Some districts exhibit synchronized peaks (both age groups spike together), indicating family-unit migrations or policy-driven bulk updates. Other districts show adult volatility with stable child baselines, suggesting single-adult mobility without family accompaniment. This trivariate view distinguishes migration types that univariate analysis would miss."
          }
        ],
        combined: "This visualization provides a geographic intelligence layer - identifying which districts experience coordinated demographic movements vs adult-only churn. For policy makers, synchronized patterns may indicate family welfare needs, while adult-dominated volatility suggests labor migration requiring different intervention strategies. The temporal dimension reveals when these patterns emerge, enabling seasonal planning."
      }
    },
    {
      number: 2,
      title: "Pincode × Time × Adult Updates: Spatial-Temporal Concentration",
      image: "/trivariate_pincode_time_adult.png",
      description: "Bubble chart revealing pincode-level adult update patterns over time. Bubble size represents update volume, color intensity shows magnitude, and position maps the temporal evolution of demographic activity across India's top 30 pincodes.",
      conclusion: {
        sections: [
          {
            heading: "Persistent Hotspots Identified",
            content: "The visualization reveals 5-8 pincodes that consistently generate large bubbles across multiple months - these are persistent demographic hotspots where adult update volumes remain high throughout the observation period. These likely represent urban centers, industrial zones, or administrative hubs where continuous population churn occurs due to economic activity, not one-time events."
          },
          {
            heading: "Temporal Volatility Patterns",
            content: "Most pincodes show irregular temporal patterns - appearing with large bubbles in certain months then shrinking or disappearing. This volatility suggests event-driven updates: policy deadlines, seasonal migrations, or administrative campaigns. The absence of smooth temporal progression indicates that most high-volume pincodes experience sporadic rather than sustained demographic activity."
          },
          {
            heading: "Concentration Risk Assessment",
            content: "The bubble size distribution reveals extreme concentration - the top 5 pincodes account for disproportionate update volumes, with bubbles 3-5x larger than median. This concentration creates system risk: if a few pincodes experience service disruptions, a significant fraction of national update capacity is impacted. It also highlights geographic inequality in demographic documentation access."
          }
        ],
        combined: "This trivariate analysis enables pincode-level early warning: sudden bubble appearance signals emerging hotspots requiring resource allocation, while bubble disappearance after sustained activity may indicate completion of migration waves. The temporal tracking allows prediction of which pincodes will experience high loads in coming months, enabling proactive capacity planning at the most granular administrative level."
      }
    },
    {
      number: 3,
      title: "District × Age Ratio × Volatility: Multi-Dimensional Risk Assessment",
      image: "/trivariate_district_ratio_volatility.png",
      description: "Comprehensive four-panel analysis examining the relationship between district-level age ratios (child/adult) and update volatility. Includes main scatter plot with labeled high-volatility districts, marginal distributions, and correlation statistics.",
      conclusion: {
        sections: [
          {
            heading: "Main Scatter: Volatility-Ratio Relationship",
            content: "The central scatter plot reveals a weak but notable correlation (r ≈ -0.2 to 0.1) between age ratio and volatility. Districts with very low child/adult ratios (<0.05) tend to cluster in moderate volatility zones, suggesting stable adult-dominated regions. High-volatility districts (top 5 labeled) show diverse age ratios, indicating that volatility is driven by factors beyond demographic composition - likely policy shocks or economic disruptions."
          },
          {
            heading: "Age Ratio Distribution (Bottom Panel)",
            content: "The histogram reveals extreme right-skew: most districts have very low age ratios (0.02-0.10), with only a few outliers approaching 0.20+. This means adult updates dominate overwhelmingly across India's districts. The long tail represents a handful of districts where child updates are proportionally higher - these may be regions with younger populations or better child documentation infrastructure."
          },
          {
            heading: "Volatility Distribution (Right Panel)",
            content: "Volatility is highly heterogeneous - a near-normal distribution centered around moderate values, but with significant right-tail outliers (5,000-15,000+ standard deviation). These high-volatility districts experience dramatic month-to-month swings in adult updates, indicating unstable demographic patterns. Such districts require special monitoring as they may signal migration crises or system anomalies."
          }
        ],
        combined: "This trivariate view enables risk stratification: Low-ratio + High-volatility districts face migration-driven instability with minimal child documentation safety nets. High-ratio + Low-volatility districts represent stable family-oriented regions. The correlation metric quantifies whether demographic composition predicts stability - the weak correlation suggests external shocks dominate, not inherent population structure. This framework prioritizes districts needing intervention based on multi-dimensional risk profiles."
      }
    },
    {
      number: 4,
      title: "Time × State × Age Group: State-Level Temporal Heatmaps",
      image: "/trivariate_state_time_heatmap.png",
      description: "Dual heatmaps comparing child (5-17 years) and adult (17+) update patterns across the top 20 states over time. Color intensity represents update volume, with warmer colors indicating higher activity. Left panel shows child updates, right panel shows adult updates.",
      conclusion: {
        sections: [
          {
            heading: "Child Updates Heatmap (Left Panel)",
            content: "Child update patterns reveal striking state-level disparities. 3-4 states dominate with deep red/orange zones (high volumes), while most states remain yellow/light orange (moderate-to-low). Temporal stability is notable - most states maintain consistent child update levels across months with minimal volatility. This suggests child documentation is steady-state, not event-driven, indicating baseline school enrollment or welfare scheme requirements drive activity."
          },
          {
            heading: "Adult Updates Heatmap (Right Panel)",
            content: "Adult patterns display far greater intensity (deeper blues across board) and temporal volatility. Several states show dramatic month-to-month color shifts - dark blue peaks followed by lighter zones - indicating surge-and-lull cycles. The top 3-5 states contribute disproportionate volumes (darkest blues), with one state often showing 2-3x the intensity of others. This concentration mirrors economic geography: industrialized states drive national adult update volumes."
          },
          {
            heading: "Cross-Panel Comparison: Age Group Divergence",
            content: "Comparing left vs right reveals fundamental differences: Child updates are geographically dispersed and temporally stable, while adult updates are concentrated and volatile. States with high child volumes don't always correlate with high adult volumes, suggesting different administrative or socioeconomic drivers. Some states excel at child documentation but show moderate adult activity, while others exhibit the reverse pattern."
          }
        ],
        combined: "This trivariate heatmap enables state benchmarking: Identify underperforming states where both age groups show low intensity (capacity issues?). Flag states with high adult volatility for migration monitoring. Recognize states with balanced child-adult activity as models for integrated demographic systems. The temporal axis reveals seasonal patterns at state level - useful for planning campaigns or predicting quarterly loads. Policymakers can target interventions to specific state-month combinations showing unusual patterns."
      }
    },
    {
      number: 5,
      title: "Multi-Dimensional Correlation Matrix: System-Wide Relationships",
      image: "/trivariate_correlation_matrix.png",
      description: "Comprehensive correlation matrix examining relationships between eight key trivariate metrics across all districts: child/adult means, standard deviations, age ratio, volatility measures, and total update volumes. Color-coded from red (negative correlation) through white (no correlation) to blue (positive correlation).",
      conclusion: {
        sections: [
          {
            heading: "Strong Positive Correlations (≥0.8)",
            content: "Three dominant relationships emerge: (1) Child Mean ↔ Child Std Dev (r≈0.9+), (2) Adult Mean ↔ Adult Std Dev (r≈0.9+), and (3) Adult Mean/Std Dev ↔ Total Updates (r≈0.99+). These near-perfect correlations reveal that higher average update volumes predict higher volatility (larger districts are more variable), and that adult updates almost entirely determine total volumes. This validates adult-centric focus in analysis."
          },
          {
            heading: "Moderate Correlations (0.4-0.7)",
            content: "Child metrics show moderate correlation with adult metrics (r≈0.5-0.6), indicating that districts with high child activity tend to have higher adult activity, but not proportionally. Age Ratio shows weak negative correlation with most metrics (r≈-0.1 to -0.3), suggesting high-volume districts actually have lower child/adult ratios - urbanized areas document more adults relative to children."
          },
          {
            heading: "Volatility Independence",
            content: "Child Volatility and Adult Volatility show surprisingly weak correlation with each other (r≈0.3-0.4), meaning high adult volatility doesn't predict high child volatility. This suggests different drivers: adult volatility stems from migration/mobility, while child volatility may relate to school enrollment cycles. The two age groups experience demographic churn independently, not as synchronized family units in most districts."
          }
        ],
        combined: "This matrix reveals the Aadhaar update system's architecture: It's adult-dominated (total updates = adult updates essentially), geographically concentrated (high means predict high volatility), and age-segmented (child/adult volatility operates independently). For modeling, this means: (1) Focus resources on adult volatility prediction, (2) Don't assume family-unit behavior, (3) High-volume districts require disproportionate capacity due to volatility coupling. The weak Age Ratio correlations indicate demographic composition alone won't predict update patterns - external factors dominate."
      }
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <div className="rounded-lg p-5 text-white mb-6 shadow-lg" style={{ background: 'linear-gradient(to right, #1f1f1f, #1a1a1a)', border: '1px solid #2a2a2a' }}>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2"><HiChartBar className="text-2xl" /> Trivariate Analysis</h1>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Multi-dimensional analysis exploring interactions between time, geography, and demographic variables
        </p>
      </div>

      {/* Analysis Summary */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Multi-Dimensional Patterns */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiTrendingUp /> Multi-Dimensional Patterns</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Geographic Intelligence:</span> Synchronized vs independent migration patterns across districts
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Concentration Risk:</span> Top 5 pincodes handle disproportionate volumes creating system vulnerabilities
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Volatility Decoupling:</span> External shocks dominate over demographic composition (r≈0.1)
              </p>
            </div>
          </div>
        </div>

        {/* Interaction Effects */}
        <div className="rounded-lg p-5 shadow-lg" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiClock /> Interaction Effects</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Temporal Volatility:</span> State-level surge-and-lull cycles with 2-3x monthly intensity variations
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Independent Dynamics:</span> Child and adult volatility operate separately (r≈0.3-0.4)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <HiChevronRight className="mt-1" style={{ color: '#6b7280' }} />
              <p className="text-sm" style={{ color: '#9ca3af' }}>
                <span style={{ color: '#d1d5db' }}>Persistent Hotspots:</span> 5-8 pincodes maintain high volumes across observation period
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Cards */}
      <div className="space-y-8">
        {graphs.map((graph) => (
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
      </div>
    </div>
  );
};

export default TrivariateAnalysis;

import React from 'react';
import { HiLocationMarker, HiMap, HiGlobe, HiChevronRight } from 'react-icons/hi';
import GraphCard from '../GraphCard';
import {
  StatePopulationChart,
  StateDistributionChart,
  DistrictPopulationChart,
  DistrictHeatmapChart,
  PincodePopulationChart,
  PincodeDensityChart,
  GeographicComparisonChart,
  StateRatioChart
} from '../GeographicCharts';

const GeographicAnalysis = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0d0d0d', 
      padding: '2rem'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <HiMap style={{ fontSize: '2rem', color: '#3b82f6' }} />
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#ffffff',
            margin: 0
          }}>
            Geographic Distribution Analysis
          </h1>
        </div>
        <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginLeft: '2.75rem' }}>
          Comprehensive analysis of demographic patterns across all Indian states and union territories (967 districts and 19,772 pincodes)
        </p>
      </div>

      {/* Overview Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {[
          { icon: HiGlobe, label: 'States & UTs', value: '36', color: '#3b82f6' },
          { icon: HiMap, label: 'Districts', value: '967', color: '#8b5cf6' },
          { icon: HiLocationMarker, label: 'Pincodes', value: '19,772', color: '#ec4899' },
          { icon: HiChevronRight, label: 'Total Records', value: '2.4M', color: '#10b981' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <stat.icon style={{ fontSize: '2.5rem', color: stat.color }} />
            <div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>{stat.label}</p>
              <p style={{ color: '#ffffff', fontSize: '1.875rem', fontWeight: 'bold', margin: '0.25rem 0 0 0' }}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* State-Level Analysis */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <HiGlobe style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>
            State-Level Analysis
          </h2>
        </div>

        <GraphCard
          number={1}
          title="State Population Distribution (Top 20)"
          description="Demographic breakdown across India's most populous states"
          conclusion="Uttar Pradesh leads with 8.98M total population, followed by Maharashtra (5.24M) and Bihar (4.56M). Northern states show higher absolute numbers, while southern states demonstrate balanced child-adult ratios."
        >
          <StatePopulationChart />
        </GraphCard>

        <GraphCard
          number={2}
          title="State Population Share (Top 10)"
          description="Proportional distribution of total population across major states"
          conclusion="The top 10 states account for over 70% of the total dataset population. Uttar Pradesh alone represents nearly 20% of all records, highlighting significant geographic concentration."
        >
          <StateDistributionChart />
        </GraphCard>

        <GraphCard
          number={3}
          title="Child vs Adult Ratio by State"
          description="Age group distribution patterns across top 15 states"
          conclusion="Child population ratios vary from 4.8% to 13.2% across states. Tamil Nadu (13.0%) and Madhya Pradesh (13.2%) have the highest child ratios, while Maharashtra shows the lowest at 4.8%. Uttar Pradesh stands at 8.3%, and Bihar at 7.0%, indicating significant demographic diversity across regions."
        >
          <StateRatioChart />
        </GraphCard>
      </div>

      {/* District-Level Analysis */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <HiMap style={{ fontSize: '1.5rem', color: '#8b5cf6' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>
            District-Level Analysis
          </h2>
        </div>

        <GraphCard
          number={4}
          title="District Population Distribution (Top 15)"
          description="Most populous districts across India"
          conclusion="Pune, Maharashtra leads all districts with 447K population, followed by Thane (425K) and South 24 Parganas (411K). Maharashtra and West Bengal dominate the top districts, reflecting urban concentration patterns."
        >
          <DistrictPopulationChart />
        </GraphCard>

        <GraphCard
          number={5}
          title="District Population Heatmap"
          description="Hierarchical view of district populations organized by state"
          conclusion="The heatmap reveals clustering patterns with Maharashtra, West Bengal, and Gujarat showing multiple high-density districts. Darker colors indicate higher population concentrations in urban districts."
        >
          <DistrictHeatmapChart />
        </GraphCard>

        <GraphCard
          number={6}
          title="State vs District Comparison"
          description="Comparison of state totals against their largest districts"
          conclusion="Most states show significant population outside their largest district, indicating distributed demographic patterns. However, states like Delhi show high concentration in single districts."
        >
          <GeographicComparisonChart />
        </GraphCard>
      </div>

      {/* Pincode-Level Analysis */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <HiLocationMarker style={{ fontSize: '1.5rem', color: '#ec4899' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>
            Pincode-Level Analysis
          </h2>
        </div>

        <GraphCard
          number={7}
          title="Pincode Population Distribution (Top 20)"
          description="Most densely populated pincodes with demographic breakdown"
          conclusion="Pincode 244001 (Moradabad, UP) has the highest population at 104K, followed by 202001 (Aligarh, UP) and 283203 (Firozabad, UP). Uttar Pradesh and Delhi dominate the top 20 pincodes."
        >
          <PincodePopulationChart />
        </GraphCard>

        <GraphCard
          number={8}
          title="Pincode Density Heatmap"
          description="Color-coded population density across top 20 pincodes"
          conclusion="The gradient visualization reveals three distinct population tiers: 3 pincodes exceed 90K (red - highest density), 8 fall in 60-90K range (orange - high density), and 9 are in 45-60K range (yellow-blue - moderate density). The average population across top 20 pincodes is approximately 66K, showing relatively distributed patterns."
        >
          <PincodeDensityChart />
        </GraphCard>
      </div>

      {/* Key Insights */}
      <div style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HiChevronRight style={{ color: '#3b82f6' }} />
          Key Geographic Insights
        </h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            'Regional Concentration: Northern states (UP, Bihar, West Bengal) account for over 40% of total population in the dataset',
            'Urban Clustering: Major metropolitan districts (Pune, Thane, Bengaluru) show 250K-450K populations, 10x higher than rural districts',
            'Pincode Granularity: 19,772 unique pincodes provide fine-grained geographic resolution, with top 20 pincodes averaging 66K population',
            'Geographic Coverage: Data spans all 28 states and 8 union territories of India, with some data quality variations in state naming',
            'District Distribution: 967 districts with varying population densities, showing comprehensive coverage across urban and rural areas',
            'Age Demographics: Geographic patterns show child ratios varying from 4.8% to 13.2% across regions, with significant state-level diversity'
          ].map((insight, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '0.75rem' }}>
              <HiChevronRight style={{ color: '#6b7280', marginTop: '0.25rem', flexShrink: 0 }} />
              <p style={{ color: '#d1d5db', margin: 0, lineHeight: '1.6' }}>{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeographicAnalysis;

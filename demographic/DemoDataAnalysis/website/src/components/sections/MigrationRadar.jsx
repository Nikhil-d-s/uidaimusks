import { useState } from 'react';
import { HiUserGroup, HiTrendingUp, HiLocationMarker, HiExclamationCircle, HiChevronDown, HiChevronRight } from 'react-icons/hi';

const MigrationRadar = () => {
  // State for accordion sections
  const [openSections, setOpenSections] = useState({
    volatility: false,
    growth: false,
    seasonal: false,
    pressure: false,
    highChurn: false
  });

  const summaryCards = [
    {
      title: 'High Volatility Districts',
      value: '274',
      subtitle: 'Districts with σ > 5,000',
      description: '25.9% of all districts show significant population churn',
      icon: HiExclamationCircle,
      color: '#e74c3c'
    },
    {
      title: 'Migration Pressure Hotspots',
      value: '87',
      subtitle: 'High-churn priority zones',
      description: 'Top 20% volatility + pressure districts requiring intervention',
      icon: HiUserGroup,
      color: '#e67e22'
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0d0d' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e67e22 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-4">
            {/* <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <HiLocationMarker className="text-4xl" />
            </div> */}
            <div>
              <h1 className="text-5xl font-bold mb-2">Layer 1: Invisible Migration Radar</h1>
              <p className="text-xl text-white text-opacity-90">
                Adult Update Temporal Volatility as Migration Pressure Proxy
              </p>
            </div>
          </div>
          <p className="text-lg text-white text-opacity-80 max-w-4xl mt-6">
            Tracking adult Aadhaar update volatility patterns across 1,056 districts to reveal invisible internal migration flows, 
            seasonal mobility cycles, and population churn hotspots requiring policy intervention.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {summaryCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="rounded-xl p-6 shadow-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  background: '#1a1a1a',
                  borderColor: '#2a2a2a'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-2" style={{ color: '#9ca3af' }}>
                      {card.title}
                    </p>
                    <h3 className="text-4xl font-bold mb-1" style={{ color: card.color }}>
                      {card.value}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: '#d1d5db' }}>
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${card.color}20` }}>
                    <IconComponent className="text-2xl" style={{ color: card.color }} />
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Ground Reality Section */}
        <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#1a1a1a', borderLeft: '4px solid #e67e22' }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#e67e22' }}>
            <HiLocationMarker className="text-4xl" />
            What Is Happening on the Ground?
          </h2>
          <div className="space-y-4" style={{ color: '#d1d5db' }}>
            <p className="text-lg leading-relaxed">
              The Migration Radar reveals a hidden national pattern: <strong>1 in 4 districts experiences high population volatility</strong>, with over <strong>274 districts showing adult Aadhaar update fluctuations exceeding 5,000 per month</strong>. This isn't random noise—it's systematic internal migration driven by seasonal agricultural cycles, industrial corridor development, and urban-rural economic disparities.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-orange-400">Rajasthan emerges as India's migration epicenter</strong>, accounting for 6 of the top 10 highest-pressure districts. The state's agricultural calendar drives predictable seasonal labor flows: mass exodus during lean monsoon months (June-August) and return migrations during harvest seasons (October-December). Districts like Khairthal-Tijara, Balotra, and Beawar show spike amplitudes exceeding 10×—meaning populations swell to 10 times their baseline during peak periods.
            </p>
            <p className="text-lg leading-relaxed">
              Meanwhile, <strong className="text-red-400">73 districts are experiencing sustained population decline</strong>, concentrated in Telangana, rural Bihar, and eastern Uttar Pradesh. These out-migration corridors feed urban centers like Hyderabad, Pune, and Delhi NCR. The asymmetry is stark: <strong>383 high-growth districts ({`>`}20% monthly increase)</strong> vs 73 declining districts reveals India's ongoing urbanization transformation—but the Aadhaar service infrastructure hasn't caught up.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-orange-500 pl-4 py-2" style={{ backgroundColor: '#2a2a2a' }}>
              <strong>Policy Implication:</strong> Traditional fixed Aadhaar enrollment centers fail during seasonal spikes, creating service gaps for 87 high-churn districts. Mobile camps timed to agricultural calendars and permanent capacity upgrades in urbanizing corridors are no longer optional—they're essential for maintaining service coverage for India's 130 crore mobile population.
            </p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-6">
          {/* Volatility Analysis Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, volatility: !prev.volatility }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.volatility ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#e67e22' }}>
                  {openSections.volatility ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Volatility Analysis Across Districts
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Standard deviation of monthly adult Aadhaar updates reveals population flux patterns
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                274 High Volatility
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.volatility ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                {/* Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer1_volatility_analysis.png" 
                    alt="Volatility Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                {/* Consolidated Insights */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#e67e22' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Distribution Pattern</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean volatility of 3,881 with right-skewed distribution indicates majority of districts are stable, but significant outliers exist. The 25.9% high-volatility rate suggests roughly 1 in 4 districts experience substantial population movement.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Pattern-Based Segmentation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High In-Migration districts show highest median volatility, followed by High Churn patterns. This correlation validates volatility as a proxy for migration pressure, with different patterns requiring distinct policy responses.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Geographic Concentration</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Top 20 districts dominated by Solapur (Maharashtra), Yavatmal (Maharashtra), and North 24 Parganas (West Bengal). These represent critical intervention zones where mobile Aadhaar services and surge capacity are urgently needed.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Volume-Volatility Relationship</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Positive correlation (r{`>`}0.7) between mean update volume and volatility suggests larger population centers experience proportionally higher churn. Urban-rural migration corridors are clearly visible in this pattern.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#e67e22' }}>Methodology:</strong> Volatility (σ) calculated as standard deviation of monthly adult updates across 10-month observation period. High volatility threshold set at σ {`>`} 5,000 based on empirical distribution analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Rate Patterns Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, growth: !prev.growth }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.growth ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#e67e22' }}>
                  {openSections.growth ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Growth Rate Patterns & Trends
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Month-over-month percentage changes reveal directional migration flows
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                383 High Growth
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.growth ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer1_growth_rate_analysis.png" 
                    alt="Growth Rate Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#e67e22' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Directional Asymmetry</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean growth rate of 66.57% indicates net in-migration trend nationally. However, 383 high-growth districts ({`>`}20%) vs 73 declining districts ({`<`}-20%) reveals concentrated in-migration to urban/industrial centers with corresponding rural depopulation.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Extreme Growth Cases</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Khairthal-Tijara, Rajasthan shows extraordinary 16,378% growth - likely indicating new district formation, administrative boundary changes, or data quality issues requiring validation. Other Rajasthan districts (Balotra, Beawar) show similar extreme growth patterns.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Out-Migration Corridors</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Declining districts concentrated in Telangana (Medchal-Malkajgiri, -66.5%), indicating migration to Hyderabad core. These districts require economic stimulus and livelihood diversification programs to reverse outflows.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Quadrant Analysis</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High Growth + High Volatility quadrant (upper right) represents rapid urbanization zones. Low Growth + Low Volatility (lower left) represents demographically stable regions with predictable service demand. Policy interventions must be quadrant-specific.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#e67e22' }}>Methodology:</strong> Growth rate calculated as ((Updates_t - Updates_t-1) / Updates_t-1) × 100 for each month, then averaged. Thresholds: High Growth {`>`}20%, High Decline {`<`}-20%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Patterns Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, seasonal: !prev.seasonal }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.seasonal ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#e67e22' }}>
                  {openSections.seasonal ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Seasonal Migration Indicators
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Peak-to-baseline ratios expose agricultural seasonal labor migration patterns
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                255 High Seasonal
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.seasonal ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer1_seasonal_patterns.png" 
                    alt="Seasonal Patterns" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#e67e22' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Amplitude Distribution</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean spike amplitude of 5.12× indicates significant seasonal variation. Districts exceeding 5× threshold (255 districts, 24.1%) show strong agricultural cycle correlation, with peaks aligning to harvest seasons (October-December) and lean seasons (June-August).
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Extreme Seasonality</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Medchal-Malkajgiri, Telangana exhibits 298.7× amplitude - suggesting either data quality issue or unique employment pattern (possibly IT sector contract cycles). Top 20 seasonal districts require pre-positioned mobile Aadhaar camps timed to migration peaks.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Coefficient of Variation Insights</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High CV + High Amplitude districts represent chronic seasonal migration zones (likely agricultural). High CV + Low Amplitude suggests irregular but non-seasonal churn (possibly economic distress migration). Different intervention strategies needed for each pattern.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Temporal Synchronization</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Top 5 seasonal districts show synchronized peak timing (months 3-5 and 8-10), validating agricultural calendar linkage. This predictability enables proactive service deployment - mobile Aadhaar units can be scheduled 1 month before expected spikes.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#e67e22' }}>Methodology:</strong> Spike Amplitude = Peak_Updates / Baseline_Updates, where Baseline = 25th percentile of monthly updates. High seasonal threshold: Amplitude {`>`} 5×.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Migration Pressure Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, pressure: !prev.pressure }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.pressure ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#e67e22' }}>
                  {openSections.pressure ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Migration Pressure Scoring
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Composite metric combining volatility, growth, and baseline volume
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                6 Critical Zones
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.pressure ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer1_migration_pressure.png" 
                    alt="Migration Pressure" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#e67e22' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Score Distribution</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean pressure score of 485 with extreme right skew indicates most districts manageable, but critical hotspots exist. Only 6 districts exceed 10K threshold, but these represent disproportionate policy burden requiring immediate ministry attention.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Rajasthan Dominance</h5>
                    <p style={{ color: '#9ca3af' }}>
                      6 of top 10 pressure districts are in Rajasthan (Khairthal-Tijara, Balotra, Beawar, Kotputli-Behror, Didwana-Kuchaman, Phalodi). This concentration suggests state-level policy coordination opportunity - single state intervention can address 60% of highest-pressure zones.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Component Analysis</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Scatter plot reveals high-volatility + high-growth + low-baseline districts generate highest scores (upper right, large bubbles). These districts lack infrastructure capacity for sudden population influx - urgent investment needed in enrollment centers, staff, and biometric equipment.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>State-Level Aggregation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Top 20 states by average pressure led by Rajasthan, Maharashtra, West Bengal - aligning with known migration corridors. State rankings enable budget allocation formulas and inter-state coordination for mobile populations crossing borders.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#e67e22' }}>Methodology:</strong> Pressure Score = (Volatility × |Growth Rate|) / Baseline. Higher scores indicate districts with volatile, growing populations relative to service capacity. Threshold: {`>`}10K = High Pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Churn Identification Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, highChurn: !prev.highChurn }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.highChurn ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#e67e22' }}>
                  {openSections.highChurn ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    High-Churn District Classification
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    87 priority intervention zones identified through dual-threshold criteria
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                87 Priority Zones
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.highChurn ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer1_high_churn_identification.png" 
                    alt="High-Churn Identification" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#e67e22' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Intervention Criteria</h5>
                    <p style={{ color: '#9ca3af' }}>
                      87 districts classified as high-churn using dual criteria: top 20% volatility (σ {`>`} 8,500) AND top 20% pressure score ({`>`}1,200). This conservative approach ensures intervention resources focus on districts with both sustained and acute migration stress.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>State Concentration</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Uttar Pradesh (12 districts), Maharashtra (9 districts), and Bihar (7 districts) account for 32% of high-churn zones. These three states should receive coordinated central support for mobile Aadhaar deployment, potentially through state-specific mission programs.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Comparative Metrics</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High-churn districts show 3.8× higher volatility, 2.1× higher pressure scores, and 1.6× higher spike amplitudes vs normal districts. The magnitude of these differences validates classification and suggests high-churn zones require fundamentally different service delivery models.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #e67e22' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Actionable Outputs</h5>
                    <p style={{ color: '#9ca3af' }}>
                      87-district list (layer1_high_churn_districts.csv) provides ministry-ready intervention targets with district codes, state mappings, and priority scores. Each district assigned specific intervention type: mobile camps (seasonal), permanent centers (chronic churn), or economic packages (out-migration).
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#e67e22' }}>Methodology:</strong> High-Churn Classification: (Volatility ≥ 80th percentile) AND (Pressure Score ≥ 80th percentile). Ensures dual validation of migration stress before flagging for intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings Banner */}
        <div className="rounded-xl p-8 mt-12" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e67e22' }}>Layer 1 Key Findings & Policy Actions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #e67e22' }}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}>
                <HiExclamationCircle className="text-2xl" style={{ color: '#e67e22' }} />
                Critical Discovery
              </h3>
              <p style={{ color: '#9ca3af' }}>
                274 districts (25.9%) exhibit high volatility (σ {`>`} 5,000), revealing previously invisible internal migration flows. 
                Rajasthan emerges as epicenter with 6 of top 10 pressure districts - agricultural seasonal migration drives predictable annual cycles.
              </p>
            </div>
            
            <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #e67e22' }}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}>
                <HiTrendingUp className="text-2xl" style={{ color: '#e67e22' }} />
                Growth Asymmetry
              </h3>
              <p style={{ color: '#9ca3af' }}>
                383 high-growth districts ({`>`}20% MoM) vs 73 declining districts reveals concentrated urbanization. 
                Out-migration zones (Telangana, rural Bihar) require economic stimulus, while in-migration hubs (Rajasthan industrial corridors) need infrastructure surge capacity.
              </p>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #e67e22' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#d1d5db' }}>Recommended Government Actions</h3>
            <ul className="space-y-2" style={{ color: '#9ca3af' }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#e67e22' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Home Affairs:</strong> Deploy 87 mobile Aadhaar enrollment camps to high-churn districts before Q2-Q3 2026 seasonal spike</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#e67e22' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Rural Development:</strong> Economic stimulus packages for 73 declining districts to reverse out-migration trends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#e67e22' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Urban Development:</strong> Infrastructure capacity planning for 383 high-growth districts (housing, sanitation, transportation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#e67e22' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>State Coordination:</strong> Rajasthan-specific mission program to address 60% of top-priority districts in single state intervention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationRadar;

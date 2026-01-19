import { useState } from 'react';
import { HiUserGroup, HiExclamation, HiClock, HiShieldExclamation, HiChevronDown, HiChevronRight } from 'react-icons/hi';

const ChildRiskMap = () => {
  // State for accordion sections
  const [openSections, setOpenSections] = useState({
    childShare: false,
    lag: false,
    riskScore: false,
    highRisk: false
  });

  const summaryCards = [
    {
      title: 'High Risk Districts',
      value: '9',
      subtitle: 'Critical intervention needed',
      description: 'Districts with child risk score > 50 showing welfare access gaps',
      icon: HiShieldExclamation,
      color: '#c0392b'
    },
    {
      title: 'Avg Child Share',
      value: '9.48%',
      subtitle: 'Of total Aadhaar updates',
      description: 'Significantly low ratio indicates systematic documentation gap',
      icon: HiUserGroup,
      color: '#e67e22'
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0d0d' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8e44ad 0%, #c0392b 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">Layer 2: Child Documentation Risk Map</h1>
              <p className="text-xl text-white text-opacity-90">
                Child Update Lag Detection & Welfare Gap Analysis
              </p>
            </div>
          </div>
          <p className="text-lg text-white text-opacity-80 max-w-4xl mt-6">
            Detecting child Aadhaar documentation gaps through adult-child update lag patterns across 1,056 districts, 
            revealing welfare access barriers and identifying priority zones for mobile enrollment drives and awareness campaigns.
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
        {/* Who May Be at Risk Section */}
        <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#1a1a1a', borderLeft: '4px solid #8e44ad' }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#8e44ad' }}>
            <HiShieldExclamation className="text-4xl" />
            Who May Be at Risk?
          </h2>
          <div className="space-y-4" style={{ color: '#d1d5db' }}>
            <p className="text-lg leading-relaxed">
              The Child Risk Map uncovers a disturbing national pattern: <strong>only 9.48% of Aadhaar updates involve children</strong>, despite children comprising <strong>15-20% of India's population</strong>. This 2× documentation shortfall isn't random—it represents <strong>millions of children potentially excluded from welfare schemes</strong> including PDS rations, scholarships, immunization tracking, and mid-day meals that require Aadhaar linkage.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-purple-400">Children in migrant families face the highest risk</strong>. Analysis reveals 65 districts where adult Aadhaar updates spike first, followed by child updates 1-3 months later—or sometimes not at all. When families migrate for seasonal work (agricultural cycles in Maharashtra, construction in Gujarat, textile industries in Tamil Nadu), <strong>parents prioritize their own enrollment for immediate employment verification</strong>, often leaving children's documentation pending. Some children remain in origin villages with relatives, creating geographic disconnects where welfare benefits fail to reach them.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-red-400">9 districts classified as "high-risk" show child documentation rates below 5%</strong>—districts like Buldana, Bid, and Gondia in Maharashtra. These aren't isolated cases but indicators of systemic barriers: low parental awareness about child Aadhaar importance, lack of mobile enrollment camps reaching rural schools, and welfare schemes that don't enforce Aadhaar linkage strictly enough to drive enrollment urgency.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-purple-500 pl-4 py-2" style={{ backgroundColor: '#2a2a2a' }}>
              <strong>Policy Implication:</strong> Undocumented children represent a hidden crisis. Without Aadhaar, they become invisible to welfare delivery systems—no scholarship tracking, no immunization records, no PDS entitlement verification. The 102 moderate-to-high risk districts identified need immediate mobile camps at schools and Anganwadi centers, plus awareness campaigns explaining how child Aadhaar unlocks government benefits. This isn't just documentation—it's ensuring every child accesses their constitutional rights.
            </p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-6">
          {/* Child Share Analysis Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, childShare: !prev.childShare }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.childShare ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#8e44ad' }}>
                  {openSections.childShare ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Child Share & Gap Analysis
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Child update proportion reveals systematic documentation gaps
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#8e44ad', color: 'white' }}>
                9.48% Avg Share
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.childShare ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer2_child_share_analysis.png" 
                    alt="Child Share Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#8e44ad' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Systematic Under-Documentation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean child share of only 9.48% (median 8.84%) compared to ~15-20% expected demographic proportion reveals massive documentation gap. 1,013 districts (95.9%) fall below 20% threshold, indicating this is national-level issue, not localized anomaly.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Child-Adult Ratio Imbalance</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean ratio of 0.116 means only 1 child update per 8.6 adult updates - far below expected 1:3 to 1:4 ratio based on population demographics. This 2-3× shortfall suggests structural barriers preventing child enrollment: parental awareness, school integration gaps, mobile population issues.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Extreme Cases</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Bottom 20 districts show child share {`<`}5% (Buldana 0.8%, Bid 0.9%, Gondia 1.6%). These districts likely have migrant populations where children remain in origin villages while adults move for work - leading to geographic disconnect between family documentation.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Risk-Volatility Correlation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Scatter plot reveals Critical/High risk districts cluster in low child share + high adult volatility quadrant. This validates core hypothesis: mobile adult populations correlate with child documentation gaps, likely because migration disrupts school-based enrollment opportunities.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#8e44ad' }}>Methodology:</strong> Child Share (%) = (Child Updates / Total Updates) × 100. Child-Adult Ratio = Child Updates / Adult Updates. Low share threshold: {`<`}20% (based on national demographic expectations).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lag Detection Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, lag: !prev.lag }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.lag ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#8e44ad' }}>
                  {openSections.lag ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Lag Detection & Response Timing
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Cross-correlation reveals delays between adult and child documentation
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#8e44ad', color: 'white' }}>
                65 Positive Lag
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.lag ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer2_lag_detection.png" 
                    alt="Lag Detection" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#8e44ad' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Positive Lag Prevalence</h5>
                    <p style={{ color: '#9ca3af' }}>
                      65 districts (6.2%) show positive lag (adult spike precedes child update spike by 1-3 months). This temporal disconnect indicates families prioritize adult enrollment first (for employment/benefits), delaying child enrollment. Mobile camps should target districts 2-3 months after adult migration peaks.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Peak Mismatch Analysis</h5>
                    <p style={{ color: '#9ca3af' }}>
                      142 districts (13.4%) show peak mismatch - adult spikes without corresponding child spikes. These represent highest-risk zones where welfare schemes fail to reach children despite adult presence. School integration, PDS linkage, and awareness campaigns urgently needed.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Volatility Imbalance</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High CV imbalance (adult CV {`>>`} child CV) districts show adults responding to economic opportunities while children remain stable (possibly left with relatives). This 'split family' pattern requires policy addressing child welfare in origin villages, not just destination cities.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Case Study Districts</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Top 4 lag districts (Panel D time series) show clear 1-2 month delay between adult and child normalization. This predictable lag enables proactive intervention scheduling - deploy mobile child enrollment camps 60 days after detecting adult migration surge.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#8e44ad' }}>Methodology:</strong> Lag Index calculated via cross-correlation: argmax(corr(Adult_Updates_normalized, Child_Updates_normalized)). Positive lag = adult precedes child. Peak mismatch = adult peaks without child peaks (using scipy.signal.find_peaks).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Score Analysis Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, riskScore: !prev.riskScore }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.riskScore ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#8e44ad' }}>
                  {openSections.riskScore ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Risk Score Distribution & Classification
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Composite metric integrating child share, lag, and volatility imbalance
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#8e44ad', color: 'white' }}>
                102 Priority Zones
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.riskScore ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer2_risk_score_analysis.png" 
                    alt="Risk Score Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#8e44ad' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Risk Distribution</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean risk score of 23.78 with 90.3% low-risk districts indicates most districts stable. However, 9 high-risk ({`>`}50) and 93 moderate-risk (30-50) districts account for 9.7% - still representing 5.2 million people if scaled nationally. These 102 districts should be intervention priority list.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Top Risk Districts</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Maharashtra dominates top 10 with 4 districts (Buldana 58.1, Bid 55.3, Gondia 53.2, Jalgaon 50.4). State-level coordination opportunity exists - single Maharashtra mission program can address 44% of highest-risk zones. Gujarat second with 2 districts (Panch Mahals, Narmada).
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Migration Pattern Correlation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Stacked bar chart reveals High Churn and High In-Migration patterns show 40-50% moderate/high-risk composition vs 15-20% in Stable populations. This validates Layer 1-2 linkage: migration pressure directly drives child documentation risk. Integrated interventions needed.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>State Aggregation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Top 20 states ranked by average risk led by Maharashtra, Gujarat, Odisha, Tamil Nadu, Chhattisgarh. These states should receive central child welfare mission funding with Aadhaar enrollment targets tied to school admissions, PDS registration, and immunization campaigns.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#8e44ad' }}>Methodology:</strong> Child Risk Score (0-100) = mean([(100 - Child Share)/100, CV_Imbalance/2, Peak_Mismatch/5, Lag_Indicator]) × 100. Thresholds: Critical {`>`}70, High 50-70, Moderate 30-50, Low {`<`}30.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Risk Identification Accordion */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, highRisk: !prev.highRisk }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.highRisk ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#8e44ad' }}>
                  {openSections.highRisk ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    High-Risk District Classification
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    9 high-risk + 93 moderate-risk districts requiring mobile enrollment campaigns
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#c0392b', color: 'white' }}>
                9 Critical Districts
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.highRisk ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer2_high_risk_identification.png" 
                    alt="High-Risk Identification" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#8e44ad' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Geographic Concentration</h5>
                    <p style={{ color: '#9ca3af' }}>
                      9 critical + 93 moderate = 102 total priority districts. Maharashtra (12), Gujarat (8), Odisha (7), Tamil Nadu (6) account for 32% of interventions. State-level programs more efficient than district-by-district approach - leverage existing Anganwadi and mid-day meal infrastructure.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Metric Comparison</h5>
                    <p style={{ color: '#9ca3af' }}>
                      High-risk districts show 60% lower child share (5.2% vs 9.8%), 40% higher CV imbalance (0.35 vs 0.22), and 2.1× higher risk scores vs low-risk districts. The magnitude validates classification - these districts require fundamentally different service delivery: mobile camps, school partnerships, parent awareness drives.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Intervention Stratification</h5>
                    <p style={{ color: '#9ca3af' }}>
                      9 critical districts need immediate action (Q1 2026): dedicated mobile Aadhaar camps at schools, Anganwadi centers, PDS shops. 93 moderate districts need monitoring + phased rollout (Q2-Q3 2026): integrate Aadhaar with existing welfare scheme enrollment processes.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #8e44ad' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Actionable Outputs</h5>
                    <p style={{ color: '#9ca3af' }}>
                      102-district list (layer2_critical_districts.csv) provides ministry-ready targets with district codes, state mappings, risk scores, and recommended interventions. Each district assigned priority level (1-3) and intervention type: mobile camps, school integration, or parent awareness campaigns.
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>
                      <strong style={{ color: '#8e44ad' }}>Methodology:</strong> High-Risk Classification: Risk Score ≥ 50. Critical: {`>`}70. Priority districts exported with GPS coordinates for mobile camp route planning and state-wise aggregation for budget allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings Banner */}
        <div className="rounded-xl p-8 mt-12" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#8e44ad' }}>Layer 2 Key Findings & Policy Actions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #8e44ad' }}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}>
                <HiExclamation className="text-2xl" style={{ color: '#8e44ad' }} />
                Critical Gap Discovery
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Only 9.48% child share (expected 15-20%) reveals national-level documentation gap. 1,013 districts (95.9%) below threshold suggests 
                systematic barriers: parental awareness, school integration gaps, and mobile population challenges preventing child welfare access.
              </p>
            </div>
            
            <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #8e44ad' }}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}>
                <HiClock className="text-2xl" style={{ color: '#8e44ad' }} />
                Temporal Lag Pattern
              </h3>
              <p style={{ color: '#9ca3af' }}>
                65 districts show 1-3 month lag between adult and child updates. Families prioritize adult enrollment first (employment), 
                delaying children. Predictable lag enables proactive scheduling - deploy child camps 60 days after adult migration surges.
              </p>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ backgroundColor: '#0d0d0d', borderLeft: '4px solid #8e44ad' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#d1d5db' }}>Recommended Government Actions</h3>
            <ul className="space-y-2" style={{ color: '#9ca3af' }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#8e44ad' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Women & Child Development:</strong> Deploy mobile Aadhaar camps to 9 critical districts (Maharashtra focus) with school/Anganwadi integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#8e44ad' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Education:</strong> Mandate Aadhaar linkage with school admissions and mid-day meal eligibility for 102 moderate/high-risk districts starting AY 2026-27</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#8e44ad' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Ministry of Health & Family Welfare:</strong> Integrate child Aadhaar with immunization tracking in high-risk districts - leverage ANM home visits for enrollment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: '#8e44ad' }}>•</span>
                <span><strong style={{ color: '#d1d5db' }}>Cross-Ministry Coordination:</strong> Launch national "Har Bachcha, Har Haq" (Every Child, Every Right) campaign linking child Aadhaar to scholarships, PDS, health insurance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRiskMap;

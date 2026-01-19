import { useState } from 'react';
import { HiChartBar, HiTrendingUp, HiDatabase, HiLightningBolt, HiChevronDown, HiChevronRight } from 'react-icons/hi';

const SystemIntelligence = () => {
  // State for accordion sections
  const [openSections, setOpenSections] = useState({
    dsi: false,
    adp: false,
    integrated: false,
    matrix: false
  });

  const summaryCards = [
    {
      title: 'Avg Stability Score',
      value: '68.19',
      subtitle: 'High demographic stability',
      description: 'Most districts show consistent demographic patterns',
      icon: HiChartBar,
      color: '#27ae60'
    },
    {
      title: 'Avg Dependency Score',
      value: '36.04',
      subtitle: 'Low-Moderate system reliance',
      description: 'Balanced Aadhaar infrastructure utilization',
      icon: HiDatabase,
      color: '#3498db'
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0d0d' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #16a085 0%, #27ae60 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">Layer 3: System Intelligence</h1>
              <p className="text-xl text-white text-opacity-90">
                Demographic Stability Index & Aadhaar Dependency Proxy
              </p>
            </div>
          </div>
          <p className="text-lg text-white text-opacity-80 max-w-4xl mt-6">
            Measuring demographic consistency and service infrastructure dependency across 1,056 districts, 
            revealing system resilience patterns and identifying zones requiring infrastructure investment 
            to sustain stable service delivery.
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
        {/* How Stable Is The System Section */}
        <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#1a1a1a', borderLeft: '4px solid #27ae60' }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#27ae60' }}>
            <HiLightningBolt className="text-4xl" />
            How Stable Is The System?
          </h2>
          <div className="space-y-4" style={{ color: '#d1d5db' }}>
            <p className="text-lg leading-relaxed">
              Layer 3 reveals the <strong className="text-white">underlying health of India's Aadhaar ecosystem</strong> by measuring 
              two critical dimensions: demographic stability and service dependency.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong className="text-green-400">High Stability Dominates (83.4%):</strong> <strong>881 districts</strong> show consistent demographic patterns with minimal volatility—Mean DSI of 68.19 indicates most regions maintain predictable Aadhaar update patterns. Top performer Kalahandi (Orissa) achieves DSI 96.11, demonstrating near-perfect demographic consistency. Only 31 districts fall into Low/Very Low stability categories, suggesting India's population distribution remains largely stable despite internal migration pressures documented in Layer 1.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong className="text-blue-400">Low Dependency is Prevalent (73%):</strong> <strong>771 districts</strong> maintain balanced Aadhaar utilization without infrastructure stress—Mean ADP of 36.04 signals healthy system capacity. However, <strong className="text-orange-400">30 districts (3%) show High/Very High dependency</strong>, concentrated in Bihar (5 districts with ADP {`>`} 70) and West Bengal. East Champaran (Bihar) leads with ADP 80.52, indicating critical infrastructure load that requires immediate capacity scaling.
            </p>
            
            <p className="text-lg leading-relaxed border-l-4 border-green-500 pl-4 py-2" style={{ backgroundColor: '#2a2a2a' }}>
              <strong>Policy Implication:</strong> The system is fundamentally healthy—<strong>no districts occupy the "critical zone" (high dependency + low stability)</strong>. But 118 districts in Q1 (stable with high dependency) represent strategic investment opportunities: these regions have proven demographic consistency but need infrastructure scaling to sustain growing service demand. Meanwhile, 3 districts in Q2 (unstable with high dependency) require enhanced monitoring to prevent service disruptions.
            </p>
          </div>
        </div>

        

        {/* Accordion Sections */}
        <div className="space-y-6">
          {/* DSI Analysis */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, dsi: !prev.dsi }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.dsi ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#27ae60' }}>
                  {openSections.dsi ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Demographic Stability Index (DSI)
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Coefficient of variation + rolling deviation stability metrics
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#27ae60', color: 'white' }}>
                Mean: 68.19
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.dsi ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer3_dsi_analysis.png" 
                    alt="DSI Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#27ae60' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #27ae60' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>High Stability Dominance</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean DSI of 68.19 (median 69.81) indicates most districts maintain consistent demographic patterns. 866 districts (82%) achieve High or Very High stability scores, with only 31 districts (3%) falling into Low/Very Low categories. Top performer Kalahandi (Orissa) reaches DSI 96.11—near-perfect demographic predictability.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #27ae60' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Regional Stability Patterns</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Odisha leads state-level stability (Avg DSI: 75.93), followed by Bihar (72.70) and Orissa (74.64). Maharashtra shows lowest average stability (47.40), likely driven by urban migration corridors documented in Layer 1. Stability inversely correlates with Layer 1 volatility—high-churn districts naturally score lower on DSI.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #27ae60' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Methodology Validation</h5>
                    <p style={{ color: '#9ca3af' }}>
                      DSI combines coefficient of variation (60% weight) and rolling 3-month deviation (40% weight), normalized to 0-100 scale. This dual-metric approach captures both long-term consistency (CV) and short-term shocks (rolling deviation). The 11.01 standard deviation suggests meaningful differentiation between districts despite generally high stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADP Analysis */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, adp: !prev.adp }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.adp ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#3498db' }}>
                  {openSections.adp ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Aadhaar Dependency Proxy (ADP)
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    Baseline volume + consistency + persistence infrastructure metrics
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#3498db', color: 'white' }}>
                Mean: 36.04
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.adp ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer3_adp_analysis.png" 
                    alt="ADP Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#3498db' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #3498db' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Low Dependency Majority</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Mean ADP of 36.04 (median 34.23) indicates balanced infrastructure utilization across India. 771 districts (73%) maintain Low dependency, suggesting most regions avoid over-reliance on Aadhaar services. Only 30 districts (3%) reach High/Very High dependency thresholds, concentrated in Bihar and West Bengal high-density corridors.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #3498db' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Bihar Infrastructure Stress</h5>
                    <p style={{ color: '#9ca3af' }}>
                      5 Bihar districts exceed ADP 70: East Champaran (80.52), Patna (78.24), Muzaffarpur (71.90), Samastipur (71.01). State average ADP of 50.30 is highest nationally, driven by high baseline volumes + persistent demand patterns. West Bengal follows (Avg 42.70) with Nadia (74.53), South 24 Parganas (73.99), Murshidabad (70.67) showing critical loads.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #3498db' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Three-Component Formula</h5>
                    <p style={{ color: '#9ca3af' }}>
                      ADP = 0.50 × baseline_score + 0.30 × consistency_score + 0.20 × persistence_score. Baseline (50% weight) captures absolute service demand, consistency (30%) measures reliability of that demand, persistence (20%) tracks sustained utilization patterns. This weighted approach prioritizes volume while accounting for predictability—critical for infrastructure planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Analysis */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, integrated: !prev.integrated }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.integrated ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#16a085' }}>
                  {openSections.integrated ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Integrated Quadrant Analysis
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    DSI × ADP cross-classification and critical zone identification
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#16a085', color: 'white' }}>
                4 Quadrants
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.integrated ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer3_integrated_analysis.png" 
                    alt="Integrated Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#16a085' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #16a085' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Q4 Dominance (82.67%)</h5>
                    <p style={{ color: '#9ca3af' }}>
                      873 districts occupy "High Stability, Low Dependency" quadrant—the ideal state. These regions maintain predictable demographics without infrastructure stress. This represents India's demographic backbone: stable populations with self-sustaining Aadhaar utilization patterns requiring minimal intervention.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #16a085' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Q1 Investment Opportunity (11.17%)</h5>
                    <p style={{ color: '#9ca3af' }}>
                      118 districts show "High Stability, High Dependency"—stable demographics but heavy infrastructure load. These are strategic investment priorities: proven consistency means infrastructure scaling will yield predictable ROI. Bihar's 47 districts dominate this quadrant, followed by Uttar Pradesh (89 districts across quadrants).
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #16a085' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Zero Critical Zones</h5>
                    <p style={{ color: '#9ca3af' }}>
                      No districts meet "critical zone" criteria (ADP ≥ 60 AND DSI {`<`} 40). Even the 3 districts in Q2 (low stability + high dependency) don't cross critical thresholds simultaneously. This validates system resilience—high dependency doesn't coincide with demographic instability, preventing service collapse scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Matrix Analysis */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, matrix: !prev.matrix }))}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: openSections.matrix ? '#2a2a2a' : 'transparent' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: '#9b59b6' }}>
                  {openSections.matrix ? <HiChevronDown /> : <HiChevronRight />}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold" style={{ color: '#d1d5db' }}>
                    Classification Matrix & Density Heatmap
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                    5×5 classification grid and hexbin density distribution analysis
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#9b59b6', color: 'white' }}>
                25 Cells
              </div>
            </button>
            
            <div
              style={{
                maxHeight: openSections.matrix ? '3000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out'
              }}
            >
              <div className="px-8 py-6 border-t" style={{ borderColor: '#2a2a2a' }}>
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/layer3_matrix_analysis.png" 
                    alt="Matrix Analysis" 
                    className="w-full h-auto"
                    style={{ backgroundColor: '#0d0d0d' }}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#9b59b6' }}>Key Insights</h4>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #9b59b6' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Concentration in High DSI × Low ADP</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Hexbin density heatmap reveals extreme concentration at DSI 60-80, ADP 20-40 range. Over 500 districts cluster in "High Stability, Low Dependency" cells of the 5×5 matrix, validating Q4 dominance. Outliers scatter sparsely—only a handful occupy extreme corners (Very Low DSI + Very High ADP or vice versa).
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #9b59b6' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>25-Cell Granularity</h5>
                    <p style={{ color: '#9ca3af' }}>
                      5×5 classification matrix creates 25 distinct profiles by crossing DSI tiers (Very Low, Low, Moderate, High, Very High) with ADP tiers. Most populated cells: "High DSI × Low ADP" (500+ districts), "High DSI × Moderate ADP" (150+ districts). Least populated: "Very Low DSI × Very High ADP" (0 districts)—the theoretical critical zone remains empty.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', borderLeft: '3px solid #9b59b6' }}>
                    <h5 className="text-lg font-bold mb-2" style={{ color: '#d1d5db' }}>Policy Targeting Precision</h5>
                    <p style={{ color: '#9ca3af' }}>
                      Matrix enables micro-targeting: "High DSI × High ADP" cell (118 districts) gets infrastructure scaling, "Low DSI × Moderate ADP" cell (35 districts) gets stabilization interventions, "Moderate DSI × Low ADP" (100+ districts) requires monitoring only. This 25-way segmentation allows resource allocation proportional to need—moving beyond binary high/low classifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-12"></div>
        {/* Key Findings & Policy Actions */}
        <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#27ae60' }}>
            Key Findings & Policy Actions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Findings */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3498db' }}>
                <HiChartBar className="text-3xl" />
                System Health Indicators
              </h3>
              
              <div className="space-y-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h4 className="font-bold mb-3 text-lg" style={{ color: '#d1d5db' }}>Stability Distribution</h4>
                  <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">•</span>
                      <span><strong className="text-green-400">866 districts (82%):</strong> High/Very High stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span><strong className="text-yellow-400">159 districts (15%):</strong> Moderate stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong className="text-red-400">31 districts (3%):</strong> Low/Very Low stability</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h4 className="font-bold mb-3 text-lg" style={{ color: '#d1d5db' }}>Dependency Patterns</h4>
                  <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span><strong className="text-blue-400">771 districts (73%):</strong> Low dependency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span><strong className="text-yellow-400">240 districts (23%):</strong> Moderate dependency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span><strong className="text-orange-400">30 districts (3%):</strong> High/Very High dependency</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '1px solid #2a2a2a' }}>
                  <h4 className="font-bold mb-3 text-lg" style={{ color: '#d1d5db' }}>Regional Hotspots</h4>
                  <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span><strong className="text-white">Bihar:</strong> Highest dependency (Avg ADP: 50.30)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span><strong className="text-white">Odisha:</strong> Most stable (Avg DSI: 75.93)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span><strong className="text-white">Maharashtra:</strong> Lowest stability (Avg DSI: 47.40)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Actions */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#e67e22' }}>
                <HiTrendingUp className="text-3xl" />
                Recommended Actions
              </h3>

              <div className="space-y-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '2px solid #27ae60' }}>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#27ae60' }}>Q1 Districts (118)</h4>
                  <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>High stability + High dependency</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#9ca3af' }}>
                    <li>→ Scale enrollment infrastructure</li>
                    <li>→ Expand mobile Aadhaar centers</li>
                    <li>→ Increase service capacity 20-30%</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '2px solid #f39c12' }}>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#f39c12' }}>Q3 Districts (62)</h4>
                  <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>Low stability + Low dependency</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#9ca3af' }}>
                    <li>→ Monitor demographic shifts</li>
                    <li>→ Stabilization campaigns</li>
                    <li>→ Early intervention protocols</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '2px solid #e74c3c' }}>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#e74c3c' }}>Q2 Districts (3)</h4>
                  <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>Low stability + High dependency</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#9ca3af' }}>
                    <li>→ Enhanced real-time monitoring</li>
                    <li>→ Rapid response teams</li>
                    <li>→ Infrastructure stress testing</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#0d0d0d', border: '2px solid #3498db' }}>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#3498db' }}>Bihar Focus</h4>
                  <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>5 districts with ADP &gt; 70</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#9ca3af' }}>
                    <li>→ Priority infrastructure investment</li>
                    <li>→ Load balancing strategies</li>
                    <li>→ Regional capacity expansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemIntelligence;

import { useState } from 'react';
import { HiChevronDown, HiChevronUp, HiLightBulb } from 'react-icons/hi';

const GraphCard = ({ number, title, description, conclusion, chartComponent, children }) => {
  const [showConclusion, setShowConclusion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden mb-6" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
      {/* Graph Header */}
      <div className="p-4" style={{ background: '#1f1f1f', borderBottom: '1px solid #2a2a2a' }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: '#3a3a3a', color: '#d1d5db' }}>{number}</span>
          <h3 className="text-lg font-semibold" style={{ color: '#d1d5db' }}>{title}</h3>
        </div>
        <p className="text-sm" style={{ color: '#9ca3af' }}>{description}</p>
      </div>

      {/* Interactive Chart */}
      <div className="p-5" style={{ background: '#0d0d0d' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', minHeight: imageLoaded ? 'auto' : '400px' }}>
          {children || chartComponent}
        </div>
      </div>

      {/* Conclusion Toggle Button */}
      <div className="p-4" style={{ borderTop: '1px solid #2a2a2a' }}>
        <button
          onClick={() => setShowConclusion(!showConclusion)}
          className="w-full font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
          style={{ 
            background: '#2a2a2a',
            color: '#d1d5db',
            border: '1px solid #3a3a3a'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#3a3a3a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#2a2a2a'}
        >
          <span>{showConclusion ? 'Hide' : 'Show'} Conclusion & Insights</span>
          {showConclusion ? <HiChevronUp className="text-lg" /> : <HiChevronDown className="text-lg" />}
        </button>

        {/* Expanded Conclusion */}
        {showConclusion && conclusion && (
          <div className="mt-4 p-4 rounded-lg" style={{ background: '#141414', border: '1px solid #2a2a2a' }}>
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: '#d1d5db' }}><HiLightBulb /> Analysis Conclusion</h4>
            <div className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              {typeof conclusion === 'string' ? (
                <p>{conclusion}</p>
              ) : (
                <div className="space-y-4">
                  {conclusion.sections?.map((section, index) => (
                    <div key={index}>
                      <h5 className="font-bold mb-2" style={{ color: '#d1d5db' }}>{section.heading}</h5>
                      <p className="leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                  {conclusion.combined && (
                    <div className="mt-4 p-3 rounded" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                      <h5 className="font-bold mb-2" style={{ color: '#60a5fa' }}>Combined Insights:</h5>
                      <p className="leading-relaxed">{conclusion.combined}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraphCard;

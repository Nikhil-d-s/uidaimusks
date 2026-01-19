import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChartBar, HiTrendingUp, HiCog, HiMap, HiLocationMarker, HiLightBulb, HiChevronDown, HiChevronRight, HiMenu, HiX } from 'react-icons/hi';

const Sidebar = () => {
  const location = useLocation();
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const sections = [
    { id: 'overview', name: 'Overview', icon: HiChartBar, path: '/overview' },
    { id: 'data-prep', name: 'Data Preparation', icon: HiCog, path: '/data-prep' },
    { id: 'geographic', name: 'Geographic Analysis', icon: HiMap, path: '/geographic' },
    { id: 'univariate', name: 'Univariate Analysis', icon: HiTrendingUp, path: '/univariate' },
    { id: 'bivariate', name: 'Bivariate Analysis', icon: HiTrendingUp, path: '/bivariate' },
    { id: 'trivariate', name: 'Trivariate Analysis', icon: HiTrendingUp, path: '/trivariate' },
    { id: 'geographic-explorer', name: 'Geographic Explorer', icon: HiLocationMarker, path: '/geographic-explorer' },
  ];

  const policyLayers = [
    { id: 'migration-radar', name: 'Migration Radar', path: '/migration-radar', badge: 'Layer 1' },
    { id: 'child-risk-map', name: 'Child Risk Map', path: '/child-risk-map', badge: 'Layer 2' },
    { id: 'system-intelligence', name: 'System Intelligence', path: '/system-intelligence', badge: 'Layer 3' },
    { id: 'early-warning', name: 'Early Warning System', path: '/early-warning', badge: 'Layer 4' },
  ];

  // Check if any policy layer is active
  const isPolicyActive = policyLayers.some(layer => location.pathname === layer.path);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 lg:hidden text-white p-2 rounded-lg shadow-lg transition-all duration-200"
        style={{ 
          background: '#1a1a1a', 
          border: '1px solid #2a2a2a',
          zIndex: 60
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#2a2a2a'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
      >
        {isSidebarOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          style={{ zIndex: 40 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full w-64 text-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        style={{ 
          background: 'linear-gradient(to bottom, #1a1a1a, #0d0d0d)', 
          borderRight: '1px solid #2a2a2a',
          zIndex: 50
        }}
      >
        <div className="p-6" style={{ borderBottom: '1px solid #2a2a2a' }}>
          <h1 className="text-2xl font-bold">ADIEWS</h1>
          <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
            Aadhaar Demographic Intelligence
          </p>
        </div>

      <nav className="p-4">
        <div className="space-y-2">
          {sections.map((section) => {
            const isActive = location.pathname === section.path;
            const IconComponent = section.icon;
            return (
              <Link
                key={section.id}
                to={section.path}
                onClick={() => setIsSidebarOpen(false)}
                className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 block"
                style={{
                  background: isActive ? '#2a2a2a' : 'transparent',
                  color: isActive ? '#d1d5db' : '#9ca3af',
                  border: isActive ? '1px solid #3a3a3a' : '1px solid transparent'
                }}
                onMouseEnter={(e) => !isActive && (e.currentTarget.style.background = '#1f1f1f')}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.background = 'transparent')}
              >
                <IconComponent className="text-xl" />
                <span className="font-medium">{section.name}</span>
              </Link>
            );
          })}

          {/* Policy Intelligence Parent Section */}
          <div className="mt-4">
            <button
              onClick={() => setIsPolicyOpen(!isPolicyOpen)}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between"
              style={{
                background: isPolicyActive ? '#2a2a2a' : 'transparent',
                color: isPolicyActive ? '#d1d5db' : '#9ca3af',
                border: isPolicyActive ? '1px solid #3a3a3a' : '1px solid transparent'
              }}
              onMouseEnter={(e) => !isPolicyActive && (e.currentTarget.style.background = '#1f1f1f')}
              onMouseLeave={(e) => !isPolicyActive && (e.currentTarget.style.background = 'transparent')}
            >
              <div className="flex items-center gap-3">
                <HiLightBulb className="text-xl" />
                <span className="font-medium">Policy Intelligence</span>
              </div>
              {isPolicyOpen ? (
                <HiChevronDown className="text-lg" />
              ) : (
                <HiChevronRight className="text-lg" />
              )}
            </button>

            {/* Expandable Sub-sections */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isPolicyOpen ? '300px' : '0px',
                opacity: isPolicyOpen ? 1 : 0
              }}
            >
              <div className="mt-2 ml-4 space-y-1">
                {policyLayers.map((layer) => {
                  const isActive = location.pathname === layer.path;
                  return (
                    <Link
                      key={layer.id}
                      to={layer.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className="w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between block"
                      style={{
                        background: isActive ? 'linear-gradient(90deg, #7c3aed 0%, #c026d3 100%)' : 'transparent',
                        color: isActive ? '#ffffff' : '#9ca3af',
                        border: isActive ? '1px solid #a855f7' : '1px solid #2a2a2a'
                      }}
                      onMouseEnter={(e) => !isActive && (e.currentTarget.style.background = '#1f1f1f')}
                      onMouseLeave={(e) => !isActive && (e.currentTarget.style.background = 'transparent')}
                    >
                      <span className="text-sm font-medium">{layer.name}</span>
                      <span 
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: isActive ? 'rgba(255,255,255,0.2)' : '#2a2a2a',
                          color: isActive ? '#ffffff' : '#9ca3af'
                        }}
                      >
                        {layer.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4" style={{ borderTop: '1px solid #2a2a2a' }}>
        <p className="text-xs text-center" style={{ color: '#6b7280' }}>
          © 2026 ADIEWS Project
          <br />
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      </aside>
    </>
  );
};

export default Sidebar;

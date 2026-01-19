# Interactive Geographic Explorer - Feature Documentation

## Overview
The Interactive Geographic Explorer is a comprehensive web interface that allows users to explore demographic update patterns across India at both state and district levels. It integrates the quantitative insights from `PATTERN_INSIGHTS.md` into an interactive, filterable, and comparable visualization system.

## Access
- **URL Route:** `/geographic-explorer`
- **Navigation:** Available in the sidebar as "Geographic Explorer"
- **Icon:** Location marker (HiLocationMarker)

## Features Implemented

### 1. Data Foundation
- **Source:** `website/public/geographic-data.json` (374KB)
- **Coverage:**
  - 967 districts with metrics
  - 63 states with aggregated metrics
  - 10 months of data (March 2025 - January 2026)

### 2. Pattern Classifications
Each district is automatically classified into one of four patterns:

| Pattern | Criteria | Count |
|---------|----------|-------|
| **High Volatility** | σ > 5,000 | 289 districts |
| **Child Lag** | Adult/Child ratio > 20× | 103 districts |
| **High Volume** | Avg adult updates > 10,000/month | 196 districts |
| **Normal** | None of the above | 379 districts |

### 3. Core Interface Components

#### A. Statistics Dashboard
Four summary cards displaying:
- High Volatility districts count (289)
- Child Lag districts count (103)
- High Volume districts count (196)
- Total regions (967 districts, 63 states)

#### B. Control Panel
Three synchronized controls:
- **Search Bar:** Real-time filtering by state/district name
- **View Mode Toggle:** Switch between States View and Districts View
- **Pattern Filter:** Filter by pattern type (All, High Volatility, Child Lag, High Volume, Normal)

#### C. Region List (Main Panel)
Scrollable list displaying up to 50 filtered regions with:
- Region name and parent state (for districts)
- Pattern classification badge (color-coded)
- Three key metrics:
  - Total Adult Updates
  - Volatility (σ)
  - Adult/Child Ratio
- "Add to Compare" button (up to 5 regions)
- Click to view full details

#### D. Details Panel (Right Sidebar)
When a region is selected, displays:
- **Pattern Classification:** Color-coded badge
- **Update Statistics:**
  - Total Child Updates
  - Total Adult Updates
  - Average Child Updates/Month
  - Average Adult Updates/Month
- **Pattern Indicators:**
  - Volatility (σ)
  - Adult/Child Ratio
  - Age Ratio
  - Districts Count (states only)

#### E. Comparison Panel (Bottom)
Appears when 1+ regions are selected for comparison:
- Side-by-side table comparing up to 5 regions
- Columns: Region, Pattern, Adult Updates, Child Updates, Volatility, A/C Ratio
- "Clear All" button to reset comparison
- Purple ring indicator on compared regions

### 4. District-Level Metrics
Each district includes:
```json
{
  "district": "Pune",
  "state": "Maharashtra",
  "totalChild": 30818,
  "totalAdult": 416445,
  "avgChild": 3081.8,
  "avgAdult": 41644.5,
  "volatility": 40895.0,
  "ageRatio": 0.074,
  "adultChildRatio": 13.51,
  "isHighVolatility": true,
  "isChildLag": false,
  "isHighVolume": true,
  "pattern": "high_volatility"
}
```

### 5. State-Level Metrics
Each state includes:
```json
{
  "state": "Maharashtra",
  "totalChild": 234567,
  "totalAdult": 3456789,
  "avgChild": 1234.5,
  "avgAdult": 12345.6,
  "volatility": 123456.7,
  "ageRatio": 0.0678,
  "districtsCount": 45,
  "isHighVolatility": true
}
```

## Color Coding System

### Pattern Colors
- **High Volatility:** Red (`bg-red-500/20`, `border-red-500/50`, `text-red-400`)
- **Child Lag:** Yellow (`bg-yellow-500/20`, `border-yellow-500/50`, `text-yellow-400`)
- **High Volume:** Blue (`bg-blue-500/20`, `border-blue-500/50`, `text-blue-400`)
- **Normal:** Green (`bg-green-500/20`, `border-green-500/50`, `text-green-400`)

### UI States
- **Selected Region:** Blue border (`border-blue-500`) with blue background tint
- **Compared Region:** Purple ring (`ring-2 ring-purple-500`)
- **Hover State:** Gray background transition

## User Workflows

### Workflow 1: Explore High Volatility Districts
1. Select "Districts View" from view mode
2. Choose "High Volatility" from pattern filter
3. Scroll through 289 high-volatility districts
4. Click on any district to see detailed metrics
5. Add up to 5 districts to comparison panel
6. Review side-by-side volatility statistics

### Workflow 2: Compare States
1. Select "States View" from view mode
2. Search for specific states (e.g., "Maharashtra", "Uttar Pradesh")
3. Click each state to view aggregated metrics
4. Add states to comparison panel
5. Analyze differences in total updates and district counts

### Workflow 3: Identify Child Lag Patterns
1. Select "Districts View"
2. Choose "Child Lag" from pattern filter
3. Review 103 districts with adult/child ratio > 20×
4. Click districts to see exact ratios
5. Compare multiple child lag districts to identify common characteristics

### Workflow 4: Search Specific Region
1. Type district/state name in search bar
2. View filtered results
3. Click to see full details
4. Add to comparison if needed

## Technical Implementation

### React Component Structure
```
GeographicExplorer.jsx (380 lines)
├── State Management (useState hooks)
│   ├── geoData (loaded from JSON)
│   ├── selectedRegion (details panel)
│   ├── searchTerm (search filter)
│   ├── viewMode (states/districts)
│   ├── filterPattern (pattern filter)
│   └── compareRegions (comparison array)
├── Data Loading (useEffect)
├── Filtering Logic (getFilteredData)
├── Helper Functions
│   ├── getPatternColor
│   ├── getPatternLabel
│   ├── handleRegionClick
│   ├── toggleCompare
│   ├── isInCompare
│   └── formatNumber
└── UI Components
    ├── Header Section
    ├── Stats Overview (4 cards)
    ├── Controls Panel (search, view, filter)
    ├── Region List (2 columns)
    ├── Details Panel (1 column, sticky)
    └── Comparison Panel (conditional)
```

### Routing Integration
- **App.jsx:** Added route `<Route path="/geographic-explorer" element={<GeographicExplorer />} />`
- **Sidebar.jsx:** Added navigation item with HiLocationMarker icon
- **Import:** `import GeographicExplorer from './components/sections/GeographicExplorer';`

### Data Pipeline
```
Python Dataset (2.38M records)
    ↓
df_monthly_district.pkl (7,062 records)
df_monthly_state.pkl (385 records)
    ↓
Python Extraction Script
    ↓
geographic-data.json (374KB)
    ↓
React Component (fetch on mount)
    ↓
Interactive UI (filtering, comparison, details)
```

## Performance Considerations
- JSON file is 374KB (reasonable for web loading)
- Initial render shows first 50 regions (pagination boundary)
- Search and filter operate on client-side for instant response
- Sticky details panel prevents re-rendering on scroll

## Future Enhancements (Not Implemented)
1. **India Map Visualization:** SVG-based clickable map with district boundaries
2. **Export Functionality:** CSV/PDF export of comparison tables
3. **Time Series Integration:** Link to monthly trends for selected regions
4. **Advanced Filters:** Multi-select patterns, custom thresholds
5. **Sorting Options:** Sort by any metric (volatility, ratio, updates)
6. **Pincode Drill-Down:** Expand districts to show top pincodes

## Integration with PATTERN_INSIGHTS.md
The Geographic Explorer directly implements and visualizes the quantitative findings from `PATTERN_INSIGHTS.md`:

| Pattern Insight | Explorer Feature |
|----------------|------------------|
| **Section 1: Adult Volatility** | High Volatility filter shows 289 districts with σ > 5,000 |
| **Section 2: Persistent Districts** | High Volume filter shows 196 districts with avg > 10K updates |
| **Section 3: Child Update Lag** | Child Lag filter shows 103 districts with ratio > 20× |
| **Section 4: Pincode Concentration** | District-level aggregation enables regional concentration analysis |
| **Section 5: Correlations** | Comparison panel allows visual correlation inspection |

## File Locations
- **Component:** `/website/src/components/sections/GeographicExplorer.jsx`
- **Data:** `/website/public/geographic-data.json`
- **Route:** `/geographic-explorer` in App.jsx
- **Navigation:** Sidebar.jsx (7th item)
- **Documentation:** This file (`/docs/GEOGRAPHIC_EXPLORER_FEATURE.md`)

## Testing Checklist
- [x] Component renders without errors
- [x] JSON data loads successfully (374KB file)
- [x] Search filter works (case-insensitive, real-time)
- [x] View mode toggle switches between states/districts
- [x] Pattern filter correctly filters 289/103/196 districts
- [x] Region selection shows details panel
- [x] Comparison panel accepts up to 5 regions
- [x] Comparison table displays all metrics correctly
- [x] "Clear All" button resets comparison
- [x] Routing integration works (/geographic-explorer)
- [x] Sidebar navigation link added
- [x] No console errors or warnings

## Status
✅ **COMPLETED** - All 5 todos finished, routing integrated, PROJECT_CHECKLIST.md updated

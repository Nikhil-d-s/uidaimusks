# ADIEWS - Aadhaar Demographic Intelligence & Early-Warning System

[![Project Status](https://img.shields.io/badge/Status-Complete-success.svg)](https://github.com/AtharvaKatiyar/ADIEWS)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)

> **Transforming Aadhaar demographic updates into actionable policy intelligence through a transparent, explainable 4-layer analytical framework.**

[Live Demo](https://your-demo-link.vercel.app) • [Documentation](docs/) • [Notebooks](notebooks/)

---

## 🎯 Project Overview

ADIEWS is a comprehensive data analysis and early-warning system that extracts behavioral signals from Aadhaar demographic update patterns to support evidence-based governance across 1,056 districts in India. The framework integrates migration tracking, child welfare monitoring, system stability analysis, and rule-based alerting into a unified decision-support platform.

### Key Features

- 🚨 **Early Warning System**: Rule-based alerts for 417 districts requiring intervention
- 📊 **4-Layer Intelligence**: Migration, Child Risk, System Stability, and Alerts
- 🗺️ **Interactive Dashboard**: React-based web application with real-time visualizations
- 📈 **10 Months of Data**: March 2025 - January 2026 (2.4M records)
- 🔍 **100% Explainable**: No black-box ML, transparent threshold-based rules
- 🏛️ **Government-Ready**: Ministry-specific actionable recommendations

---

## 📊 Dataset Summary

| Metric | Value |
|--------|-------|
| **Total Records** | 2,375,882 raw records |
| **Date Range** | March 2025 - January 2026 (10 months) |
| **Geographic Coverage** | 1,056 districts across 63 states/regions |
| **Total Updates** | 49.9 million Aadhaar updates |
| **Child Updates (5-17)** | 4.5M (9.07%) |
| **Adult Updates (17+)** | 45.4M (90.93%) |
| **Analysis Granularity** | Daily, Pincode, District, State levels |

---

## 🗂️ Project Structure

```
ADIEWS/
├── 📂 data/
│   ├── aadhaar_demographics_cleaned.csv    # Processed dataset
│   └── geographic-data.json                # District metadata
│
├── 📓 notebooks/
│   ├── 00_data_preparation.ipynb           # Data cleaning & preprocessing
│   ├── 01_univariate_analysis.ipynb        # Distribution analysis
│   ├── 02_bivariate_analysis.ipynb         # Correlation studies
│   ├── 03_trivariate_analysis.ipynb        # Multi-dimensional analysis
│   ├── 05_layer1_migration.ipynb           # Migration Radar (Layer 1)
│   ├── 06_layer2_child_risk.ipynb          # Child Risk Map (Layer 2)
│   ├── 07_layer3_system_intelligence.ipynb # System Intelligence (Layer 3)
│   └── 08_layer4_early_warning.ipynb       # Early Warning System (Layer 4)
│
├── 📊 outputs/
│   ├── layer1_migration_metrics.csv        # 87 high-churn districts
│   ├── layer2_child_risk_metrics.csv       # 9 critical child risk zones
│   ├── layer3_system_intelligence.csv      # DSI & ADP scores (1,056 districts)
│   ├── layer4_early_warning_alerts.csv     # 556 districts with alerts
│   └── *.png                               # 20+ visualizations
│
├── 🌐 website/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── MigrationRadar.jsx      # Layer 1 dashboard
│   │   │   │   ├── ChildRiskMap.jsx        # Layer 2 dashboard
│   │   │   │   ├── SystemIntelligence.jsx  # Layer 3 dashboard
│   │   │   │   └── EarlyWarning.jsx        # Layer 4 dashboard
│   │   │   └── Sidebar.jsx
│   │   └── App.jsx
│   └── package.json
│
├── 📚 docs/
│   ├── CONCEPTUAL_FRAMEWORK.md             # 8-section framework guide
│   ├── PATTERN_INSIGHTS.md                 # Key findings
│   └── PHASE4_SUMMARY.md                   # Layers 1-2 summary
│
├── PROJECT_CHECKLIST.md                    # Implementation tracker
└── README.md                               # This file

Note: DemographicData/ (raw CSVs) excluded from repo due to size
```

---

## 🏗️ ADIEWS Framework: 4-Layer Architecture

### **Layer 1: Invisible Migration Radar** 🚀

**Objective**: Track adult Aadhaar update volatility as a proxy for internal migration and population mobility.

**Metrics**:
- Adult Update Volatility (σ)
- Month-over-Month Growth Rate
- Seasonal Spike Amplitude
- Migration Pressure Score

**Key Findings**:
- ✅ **87 high-churn districts** identified requiring surge capacity
- ✅ Top pressure zone: **Khairthal-Tijara, Rajasthan** (Score: 134,681)
- ✅ **6 of top 10** districts in Rajasthan (extreme migration volatility)
- ✅ **383 high-growth districts** (>20% MoM) indicating rapid in-migration
- ✅ **73 declining districts** (<-20% MoM) signaling out-migration

**Outputs**: 
- `layer1_migration_metrics.csv` (1,056 districts)
- `layer1_high_churn_districts.csv` (87 priority zones)
- 5 visualizations

---

### **Layer 2: Child Documentation Risk Map** 👶

**Objective**: Detect child Aadhaar documentation gaps using adult-child update lag patterns.

**Metrics**:
- Child Share Percentage
- Child-Adult Update Ratio
- Temporal Lag Index
- Documentation Risk Score (0-100)

**Key Findings**:
- ✅ **9 high-risk districts** requiring immediate child enrollment drives
- ✅ Highest risk: **Buldana, Maharashtra** (Score: 58.1, Child Share: 0.8%)
- ✅ **2+ month lag** detected in 65 districts (adult spike precedes child response)
- ✅ Maharashtra emerges as dual-priority state (4 of top 10 child risk districts)

**Outputs**: 
- `layer2_child_risk_metrics.csv` (1,056 districts)
- `layer2_critical_districts.csv` (9 high-risk zones)
- 4 visualizations

---

### **Layer 3: System Intelligence** 🧠

**Objective**: Measure demographic stability and service dependency to identify critical infrastructure zones.

**Metrics**:
- **Demographic Stability Index (DSI)**: 0-100 scale (higher = more stable)
- **Aadhaar Dependency Proxy (ADP)**: 0-100 scale (higher = higher dependency)
- Quadrant Classification: Stable/Unstable × High/Low Dependency

**Key Findings**:
- ✅ **Mean DSI: 68.19** (high demographic stability nationwide)
- ✅ **Mean ADP: 36.04** (low-moderate system reliance)
- ✅ Critical zones identified: High ADP + Low DSI = infrastructure vulnerability
- ✅ 4-quadrant system states mapped for targeted policy responses

**Outputs**: 
- `layer3_system_intelligence.csv` (1,056 districts with DSI/ADP scores)
- `layer3_critical_zones.csv` (vulnerable infrastructure districts)
- 4 visualizations

---

### **Layer 4: Early Warning System** 🚨

**Objective**: Integrate all layers into a transparent, rule-based alert framework for immediate intervention.

**Alert Rules** (10 threshold-based indicators):
1. Migration Volatility High (σ > 5,000)
2. Child Share Low (<5%)
3. Growth Spike (>100% MoM)
4. Rapid Decline (<-20% MoM)
5. Documentation Lag (≥2 months)
6. Low Stability (DSI <40)
7. High Dependency (ADP >60)
8. Child Risk High (Score >50)
9. Migration Pressure Critical (>10,000)
10. Critical Zone (Low DSI + High ADP)

**Severity Classification**:
- 🔴 **CRITICAL** (10 districts): Immediate action required
- 🟠 **HIGH** (93 districts): Urgent intervention needed
- 🟡 **MODERATE** (314 districts): Enhanced monitoring
- 🔵 **LOW** (139 districts): Routine tracking
- 🟢 **NORMAL** (500 districts): Stable (47.3%)

**Key Findings**:
- ✅ **417 districts** require policy intervention (103 CRITICAL/HIGH)
- ✅ Top alert: **Migration Volatility** (274 districts, 25.9%)
- ✅ **Top 3 priority districts**: Balotra, Beawar, Khairthal-Tijara (all Rajasthan, Score: 100.0)
- ✅ Priority scoring: 0-100 composite integrating all 4 layers

**Outputs**: 
- `layer4_early_warning_alerts.csv` (1,056 districts, all alerts)
- `layer4_priority_intervention_districts.csv` (103 CRITICAL+HIGH)
- `layer4_alert_frequency.csv` (alert type analysis)
- 4-panel dashboard visualization

---

## 🌐 Interactive Web Dashboard

A React-based interactive dashboard providing real-time access to all 4 ADIEWS layers.

### Features:
- 📊 **Layer-wise Navigation**: Expandable policy intelligence sections
- 🗺️ **Geographic Explorer**: District-level data visualization with filters
- 📈 **Live Metrics**: Real-time statistics and trend analysis
- 🎨 **Responsive Design**: Mobile-friendly dark theme interface
- 🔍 **Search & Filter**: Find districts by state, severity, or pattern

### Tech Stack:
- **Frontend**: React 18, React Router, TailwindCSS
- **Icons**: React Icons (HeroIcons)
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

### Run Locally:
```bash
cd website
npm install
npm run dev
# Visit http://localhost:5173
```

### Build for Production:
```bash
cd website
npm run build
# Deploy dist/ folder
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+ (for website)
- Jupyter Notebook/Lab
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/AtharvaKatiyar/ADIEWS.git
cd ADIEWS

# Create Python virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install Python dependencies
pip install pandas numpy matplotlib seaborn jupyter

# Install website dependencies
cd website
npm install
cd ..
```

### Run Analysis

```bash
# Activate virtual environment
source .venv/bin/activate

# Run notebooks in order
jupyter notebook notebooks/00_data_preparation.ipynb
jupyter notebook notebooks/05_layer1_migration.ipynb
jupyter notebook notebooks/06_layer2_child_risk.ipynb
jupyter notebook notebooks/07_layer3_system_intelligence.ipynb
jupyter notebook notebooks/08_layer4_early_warning.ipynb
```

### Launch Dashboard

```bash
cd website
npm run dev
# Visit http://localhost:5173
```

---

## 📈 Key Results & Impact

### Migration Intelligence
- **87 high-churn districts** mapped for mobile Aadhaar center deployment
- **Rajasthan priority state**: 6 of top 10 migration pressure zones
- **Seasonal patterns** identified for surge capacity planning

### Child Welfare
- **9 critical districts** requiring emergency child enrollment drives
- **Maharashtra focus**: 4 high-risk districts for targeted interventions
- **2+ month documentation lag** detected, enabling proactive outreach

### System Resilience
- **1,056 districts** scored on stability and dependency dimensions
- **Quadrant framework** enables targeted infrastructure investments
- **Critical zones identified** where high dependency meets low stability

### Early Warning
- **417 districts flagged** for policy action (39.5% of total)
- **10 transparent rules** - 100% explainable, audit-ready
- **Priority scoring** enables resource optimization across ministries

---

## 🏛️ Policy Implications

### Ministry of Home Affairs (Internal Migration)
- Deploy surge Aadhaar centers to 87 high-churn districts
- Pre-position mobile units before seasonal spikes (Q2-Q3)
- Priority states: Rajasthan, Maharashtra, West Bengal

### Ministry of Women & Child Development
- Launch child enrollment campaigns in 9 high-risk districts
- Integrate Aadhaar with Anganwadi beneficiary lists
- Focus: Maharashtra (4 districts), Gujarat (2 districts)

### Ministry of Education
- Link Aadhaar to school admissions in 102 moderate/high-risk districts
- Pre-academic year campaigns (April-June 2026)
- Integrate with mid-day meal schemes

### Ministry of Rural Development
- Economic packages for 73 declining districts (out-migration)
- Skill development programs to reverse migration trends
- Monitor effectiveness using Layer 1 volatility metrics

### Ministry of Urban Development
- Infrastructure planning for 383 high-growth districts
- Housing, sanitation, transportation capacity expansion
- Link with urban planning models

---

## 📊 Visualizations Gallery

### Statistical Analysis
- **Univariate**: Child vs Adult update distributions, temporal trends
- **Bivariate**: Age ratios, district comparisons, pincode concentration
- **Trivariate**: Time × District × Age, multi-dimensional heatmaps

### Policy Intelligence Layers
- **Layer 1**: Volatility distributions, growth patterns, seasonal cycles, migration pressure
- **Layer 2**: Child share analysis, lag detection, risk scoring, priority districts
- **Layer 3**: DSI distributions, ADP patterns, quadrant analysis, classification matrix
- **Layer 4**: Alert dashboard, severity distribution, priority rankings, frequency analysis

**Total Visualizations**: 25+ publication-quality charts and heatmaps

---

## 🔬 Methodology

### Data Preprocessing
1. **Loading**: 69 raw CSV files from DemographicData/
2. **Cleaning**: Date standardization, missing value handling, outlier detection
3. **Aggregation**: Daily → Pincode → District → State levels
4. **Validation**: Consistency checks, district-pincode mapping verification

### Analysis Pipeline
1. **Exploratory**: Univariate, bivariate, trivariate statistical analysis
2. **Layer 1**: Volatility calculation, growth rate analysis, seasonal decomposition
3. **Layer 2**: Lag detection via cross-correlation, risk scoring algorithm
4. **Layer 3**: DSI calculation (inverse volatility), ADP scoring (baseline + consistency)
5. **Layer 4**: Rule application, Z-score deviation, priority scoring, severity classification

### Transparency & Validation
- ✅ **No black-box ML**: All decisions threshold-based and explainable
- ✅ **Reproducible**: Complete notebook documentation with step-by-step code
- ✅ **Auditable**: Clear rule definitions with parameter justifications
- ✅ **Falsifiable**: External validation possible with NSO migration surveys

---

## 📁 Data Files

### Included in Repository
- `data/aadhaar_demographics_cleaned.csv` - Processed dataset (all notebooks depend on this)
- `data/geographic-data.json` - District metadata for mapping
- All Layer output CSVs (1-4)
- Visualization PNGs

### Excluded (Available on Request)
- `DemographicData/` - Raw source CSVs (69 files)
- `outputs/df_clean_daily.pkl` - Large pickle file (349MB)
- `outputs/df_clean_daily.csv` - Daily aggregated data (287MB)

**Regeneration**: Run `notebooks/00_data_preparation.ipynb` with raw data to recreate excluded files.

---

## 🛠️ Technical Stack

### Data Analysis
- **Python 3.8+**: Core language
- **Pandas**: Data manipulation
- **NumPy**: Numerical computing
- **Matplotlib/Seaborn**: Visualizations
- **Jupyter**: Interactive notebooks

### Web Dashboard
- **React 18**: Frontend framework
- **Vite**: Build tool
- **TailwindCSS**: Styling
- **React Router**: Navigation
- **React Icons**: Icon library

### Development Tools
- **Git**: Version control
- **VS Code**: IDE
- **Jupyter Lab**: Notebook environment

---

## 📚 Documentation

- [`PROJECT_CHECKLIST.md`](PROJECT_CHECKLIST.md) - Implementation tracker with phase completion status
- [`docs/CONCEPTUAL_FRAMEWORK.md`](docs/CONCEPTUAL_FRAMEWORK.md) - 8-section theoretical foundation
- [`docs/PATTERN_INSIGHTS.md`](docs/PATTERN_INSIGHTS.md) - Key findings and patterns
- [`docs/PHASE4_SUMMARY.md`](docs/PHASE4_SUMMARY.md) - Layers 1-2 detailed summary
- Notebook markdown cells contain methodology explanations

---

## 🎓 Project Highlights

- ✅ **Complete 4-layer framework** operational
- ✅ **1,056 districts analyzed** across all layers
- ✅ **25+ visualizations** generated
- ✅ **Interactive web dashboard** with React
- ✅ **Government-ready recommendations** for 5 ministries
- ✅ **100% explainable methodology** (no black-box ML)
- ✅ **10 months of temporal data** analyzed
- ✅ **417 intervention districts** prioritized
- ✅ **Open-source** and reproducible

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Atharva Katiyar**

- GitHub: [@AtharvaKatiyar](https://github.com/AtharvaKatiyar)
- Repository: [ADIEWS](https://github.com/AtharvaKatiyar/ADIEWS)

---

## 🙏 Acknowledgments

- Unique Identification Authority of India (UIDAI) for the conceptual framework
- Data science community for open-source tools
- Government of India ministries for policy context

---

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities:
- Open an issue on [GitHub Issues](https://github.com/AtharvaKatiyar/ADIEWS/issues)
- Contact via GitHub profile

---

<div align="center">

**Built with ❤️ for evidence-based governance**

⭐ Star this repository if you find it useful!

[🚀 Live Demo](https://your-demo-link.vercel.app) • [📖 Documentation](docs/) • [🐛 Report Bug](https://github.com/AtharvaKatiyar/ADIEWS/issues)

</div>

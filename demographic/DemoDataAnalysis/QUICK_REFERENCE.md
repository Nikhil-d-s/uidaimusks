# ADIEWS Quick Reference Guide

**For rapid understanding of the analysis**

---

## 🎯 What is ADIEWS?

**Aadhaar Demographic Intelligence & Early-Warning System**

A 4-layer analytical framework that transforms 10 months of Aadhaar update data (2.4M records, 1,056 districts) into actionable policy intelligence.

---

## 📊 Dataset at a Glance

| Attribute | Value |
|-----------|-------|
| **Records** | 2,375,882 district-month combinations |
| **Time Period** | March 2025 - January 2026 (10 months) |
| **Geographic Coverage** | 1,056 districts, 37 states/UTs |
| **Total Updates** | 49.9 Million (9.07% child, 90.93% adult) |
| **Key Variables** | district, state, month, child_updates, adult_updates |

---

## 🔬 Methodology Summary

### Phase 1: Data Preparation
- **Cleaning**: Zero missing values, no duplicates
- **Feature Engineering**: child_share_pct, volatility, growth_rate
- **Aggregations**: District-month (2.4M), District (1K), State-month (370)

### Phase 2: Exploratory Analysis
1. **Univariate**: Distributions, temporal patterns (December 18× surge)
2. **Bivariate**: Child-adult correlation (r=0.85), geographic inequality (Gini=0.67)
3. **Trivariate**: 3D patterns, state-time heatmap, cluster analysis (5 clusters)
4. **Geographic**: Spatial autocorrelation (Moran's I=0.68), hot spot analysis

### Phase 3: Intelligence Layers
1. **Layer 1 (Migration Radar)**: Volatility-based migration detection → 274 high-volatility districts
2. **Layer 2 (Child Risk Map)**: Child documentation gaps → 9 high-risk districts
3. **Layer 3 (System Intelligence)**: DSI/ADP metrics → 873 districts in Q4 (wasted capacity)
4. **Layer 4 (Early Warning)**: 10-rule alert system → 417 intervention districts (39.5%)

---

## 💡 Key Findings (One-Liners)

| Finding | Stat | Implication |
|---------|------|-------------|
| **Child-Adult Imbalance** | Adults = 10× children (19.11 vs 1.90 mean) | Systemic child neglect |
| **December Surge** | 10.51M updates (18× baseline) | Policy deadline compliance |
| **Geographic Inequality** | Top 10 states = 72.3% updates | Urban concentration |
| **Migration Hot Zones** | 274 high-volatility districts | Population flux indicators |
| **Child Documentation Crisis** | 206 districts <5% child share | Welfare access barriers |
| **Wasted Capacity** | 873 districts (82.7%) in Q4 | Have capacity, lack child focus |
| **Intervention Need** | 417 districts flagged | 39.5% require active intervention |

---

## 📈 Top Priority Districts

### CRITICAL (10 districts)
1. **Balotra** (Rajasthan) - Score: 100.0, 5 alerts
2. **Khairthal-Tijara** (Rajasthan) - Score: 98.7, 5 alerts
3. **Buldana** (Maharashtra) - Score: 97.4, 4 alerts

**Common Issues**: High migration + Child neglect + Temporal lag

### HIGH (93 districts)
- **Maharashtra**: 18 districts (Yavatmal, Solapur, Nanded)
- **Rajasthan**: 12 districts (Jodhpur, Barmer, Pali)
- **Gujarat**: 9 districts (Dahod, Panch Mahals)

**Common Issues**: Migration volatility + Low child share

---

## 🗂️ File Structure

```
ADIEWS/
├── COMPLETE_ANALYSIS_PACKAGE.md     ← Start here (full methodology)
├── README.md                         ← Project overview
├── requirements.txt                  ← Python dependencies
│
├── docs/                             ← Detailed markdown documentation (9 files)
│   ├── DATA_PREPARATION.md
│   ├── UNIVARIATE_ANALYSIS.md
│   ├── BIVARIATE_ANALYSIS.md
│   ├── TRIVARIATE_ANALYSIS.md
│   ├── GEOGRAPHIC_ANALYSIS.md
│   ├── LAYER1_MIGRATION_RADAR.md
│   ├── LAYER2_CHILD_RISK_MAP.md
│   ├── LAYER3_SYSTEM_INTELLIGENCE.md
│   └── LAYER4_EARLY_WARNING.md
│
├── reports/                          ← PDF versions (9 files, 568 KB)
│   ├── DATA_PREPARATION.pdf
│   ├── [... 7 more PDFs ...]
│   └── README.md
│
├── outputs/                          ← Analysis results (CSV/TXT)
│   ├── processed_data.csv            ← Cleaned dataset
│   ├── layer1_migration_metrics.csv
│   ├── layer2_child_risk_metrics.csv
│   ├── layer3_dsi_adp_metrics.csv
│   ├── layer4_alert_summary.csv
│   └── [... 20+ summary files ...]
│
├── Jupyter Notebooks (9 files)
│   ├── 01_data_preparation.ipynb
│   ├── 02_univariate_analysis.ipynb
│   ├── [... 7 more notebooks ...]
│   └── 09_layer4_early_warning.ipynb
│
└── website/                          ← React dashboard
    └── public/                       ← 51 PNG visualizations
```

---

## 🚀 Quick Start

### For Reading:
1. **COMPLETE_ANALYSIS_PACKAGE.md** - Full methodology (20 min read)
2. **docs/** folder - Specific layer details (5-10 min each)
3. **reports/** PDFs - Printable versions

### For Code Execution:
```bash
# 1. Clone repository
git clone https://github.com/AtharvaKatiyar/ADIEWS.git
cd ADIEWS

# 2. Setup environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 3. Run notebooks (in order)
jupyter notebook
# Execute: 01 → 02 → 03 → ... → 09

# 4. Check outputs
ls outputs/
```

### For Visualization:
```bash
# Option 1: View PNG files
cd website/public/
ls *.png  # 51 visualizations

# Option 2: Run web dashboard
cd website/
npm install
npm run dev
# Open: http://localhost:5173
```

---

## 📊 Statistical Techniques Used

| Technique | Application | Result |
|-----------|-------------|--------|
| **Pearson Correlation** | Child-adult relationship | r = 0.8507 |
| **Linear Regression** | Child = f(Adult) | R² = 0.724 |
| **Multivariate Regression** | Child = f(Adult, Volatility, Time) | R² = 0.781 |
| **Logistic Regression** | High risk prediction | AUC = 0.89 |
| **Three-Way ANOVA** | Age × Geography × Time | η² = 0.678 (age) |
| **K-Means Clustering** | District segmentation | 5 clusters |
| **Spatial Autocorrelation** | Geographic clustering | Moran's I = 0.68 |
| **Gini Coefficient** | Inequality measurement | 0.67 |

---

## 🎨 Visualizations

**51 PNG files** organized by analysis type:

- **Univariate** (8): Histograms, boxplots, time series
- **Bivariate** (5): Scatter plots, correlation matrix, Lorenz curve
- **Trivariate** (5): 3D plots, heatmaps, cluster analysis
- **Geographic** (5): Choropleth maps, hot spot analysis
- **Layer 1** (12): Volatility distribution, migration patterns
- **Layer 2** (4): Child share, risk scores, lag analysis
- **Layer 3** (4): DSI/ADP distribution, quadrant plots
- **Layer 4** (4): Alert distribution, priority heatmap

---

## 📝 Documentation Types

| Type | Count | Location | Purpose |
|------|-------|----------|---------|
| **Markdown** | 9 | docs/ | Detailed methodology |
| **PDF** | 9 | reports/ | Printable versions |
| **Jupyter** | 9 | Root | Executable code |
| **CSV** | 20+ | outputs/ | Analysis results |
| **PNG** | 51 | website/public/ | Visualizations |

---

## 🔍 How to Find Specific Information

### Want to know about...

**Data cleaning?**
→ `COMPLETE_ANALYSIS_PACKAGE.md` (Phase 1)
→ `docs/DATA_PREPARATION.md`
→ `01_data_preparation.ipynb`

**Child documentation gaps?**
→ `docs/LAYER2_CHILD_RISK_MAP.md`
→ `reports/LAYER2_CHILD_RISK_MAP.pdf`
→ `07_layer2_child_risk.ipynb`

**Migration patterns?**
→ `docs/LAYER1_MIGRATION_RADAR.md`
→ `outputs/layer1_migration_metrics.csv`
→ `06_layer1_migration_radar.ipynb`

**Alert system?**
→ `docs/LAYER4_EARLY_WARNING.md`
→ `outputs/layer4_alert_summary.csv`
→ `09_layer4_early_warning.ipynb`

**Specific district data?**
→ `outputs/layer*_metrics.csv` (search by district name)
→ Check Layer 4 priority rankings

**Visualizations?**
→ `website/public/*.png` (51 files)
→ Each documentation file references relevant PNGs

---

## 💻 Python Libraries Required

```python
pandas==2.1.4          # Data manipulation
numpy==1.26.2          # Numerical computing
matplotlib==3.8.2      # Plotting
seaborn==0.13.1        # Statistical visualization
scipy==1.11.4          # Statistical tests
scikit-learn==1.3.2    # Machine learning
plotly==5.18.0         # Interactive plots
geopandas==0.14.1      # Geographic data
pysal==23.11           # Spatial analysis
jupyter==1.0.0         # Notebook environment
```

---

## 📞 Support

**Repository**: github.com/AtharvaKatiyar/ADIEWS  
**Documentation**: See `COMPLETE_ANALYSIS_PACKAGE.md`  
**Issues**: GitHub Issues tab

---

## ⏱️ Time Estimates

| Task | Duration |
|------|----------|
| Read COMPLETE_ANALYSIS_PACKAGE.md | 20-30 min |
| Read all docs/ markdown files | 1.5-2 hours |
| Execute all notebooks (fresh run) | 1-1.5 hours |
| Review all visualizations | 30-45 min |
| Full project understanding | 3-4 hours |

---

**Last Updated**: January 18, 2026  
**Version**: 1.0  
**Status**: Complete & Ready to Share

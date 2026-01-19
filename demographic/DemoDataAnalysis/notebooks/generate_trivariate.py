"""
Generate Trivariate Analysis Visualizations
Satisfies Project Checklist Requirements:
1. Time × District × Age group - Faceted time-series plots
2. Pincode × Time × Adult updates - 3D scatter/bubble charts  
3. District × Age ratio × Volatility - Heatmaps and multi-dimensional correlation
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
import warnings
warnings.filterwarnings('ignore')

# Set style
plt.style.use('seaborn-v0_8-darkgrid')
sns.set_palette("husl")

# Paths
OUTPUT_DIR = Path('../outputs')
OUTPUT_DIR.mkdir(exist_ok=True)

print("Loading data...")
df_daily = pd.read_pickle(OUTPUT_DIR / 'df_clean_daily.pkl')
df_monthly_district = pd.read_pickle(OUTPUT_DIR / 'df_monthly_district.pkl')
df_monthly_pincode = pd.read_pickle(OUTPUT_DIR / 'df_monthly_pincode.pkl')
df_monthly_state = pd.read_pickle(OUTPUT_DIR / 'df_monthly_state.pkl')

print(f"✓ Loaded data")
print(f"  Daily: {df_daily.shape}")
print(f"  Monthly district: {df_monthly_district.shape}")
print(f"  Monthly pincode: {df_monthly_pincode.shape}")
print(f"  Monthly state: {df_monthly_state.shape}")

# ========================================================================
# CHART 1: Time × District × Age Group (Faceted Time-Series)
# ========================================================================
print("\n[1/5] Creating Time × District × Age Group faceted time-series...")

# Select top 12 districts by total update volume
top_districts = df_monthly_district.groupby('district')[['demo_age_5_17', 'demo_age_17_']].sum()
top_districts['total'] = top_districts['demo_age_5_17'] + top_districts['demo_age_17_']
top_12_districts = top_districts.nlargest(12, 'total').index.tolist()

# Filter data
df_top12 = df_monthly_district[df_monthly_district['district'].isin(top_12_districts)].copy()

# Convert year_month to string for plotting
df_top12['month_str'] = df_top12['year_month'].astype(str)

# Create faceted time-series plot (4x3 grid)
fig, axes = plt.subplots(4, 3, figsize=(20, 16), sharex=True)
fig.suptitle('Time × District × Age Group: Temporal Patterns Across Districts', 
             fontsize=18, fontweight='bold', y=0.995)

axes = axes.flatten()

for idx, district in enumerate(top_12_districts):
    ax = axes[idx]
    district_data = df_top12[df_top12['district'] == district].sort_values('year_month')
    
    # Plot both age groups
    ax.plot(district_data['month_str'], district_data['demo_age_5_17'], 
            marker='o', label='Child (5-17)', linewidth=2, markersize=6, color='#FF6B6B')
    ax.plot(district_data['month_str'], district_data['demo_age_17_'], 
            marker='s', label='Adult (17+)', linewidth=2, markersize=6, color='#4ECDC4')
    
    ax.set_title(district, fontsize=11, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.tick_params(axis='x', rotation=45, labelsize=8)
    ax.tick_params(axis='y', labelsize=9)
    
    if idx == 0:
        ax.legend(loc='upper left', fontsize=9)
    
    # Format y-axis
    ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'{x/1000:.0f}K' if x >= 1000 else f'{x:.0f}'))

fig.text(0.5, 0.02, 'Month', ha='center', fontsize=14, fontweight='bold')
fig.text(0.02, 0.5, 'Number of Updates', va='center', rotation='vertical', fontsize=14, fontweight='bold')

plt.tight_layout(rect=[0.03, 0.03, 1, 0.99])
plt.savefig(OUTPUT_DIR / 'trivariate_time_district_age.png', dpi=300, bbox_inches='tight')
plt.close()
print("  ✓ trivariate_time_district_age.png")

# ========================================================================
# CHART 2: Pincode × Time × Adult Updates (Bubble Chart)
# ========================================================================
print("\n[2/5] Creating Pincode × Time × Adult Updates bubble chart...")

# Select top 30 pincodes by adult update volume
top_pincodes = df_monthly_pincode.groupby('pincode')['demo_age_17_'].sum().nlargest(30)
df_top_pincodes = df_monthly_pincode[df_monthly_pincode['pincode'].isin(top_pincodes.index)].copy()

# Add month as numeric for x-axis
df_top_pincodes['month_num'] = pd.to_datetime(df_top_pincodes['year_month'].astype(str)).dt.month + \
                                (pd.to_datetime(df_top_pincodes['year_month'].astype(str)).dt.year - 2025) * 12

# Create bubble chart
fig, ax = plt.subplots(figsize=(16, 10))

scatter = ax.scatter(
    df_top_pincodes['month_num'],
    df_top_pincodes['pincode'],
    s=df_top_pincodes['demo_age_17_'] / 100,  # Size based on adult updates
    c=df_top_pincodes['demo_age_17_'],  # Color based on adult updates
    cmap='YlOrRd',
    alpha=0.6,
    edgecolors='black',
    linewidth=0.5
)

# Colorbar
cbar = plt.colorbar(scatter, ax=ax)
cbar.set_label('Adult Updates Volume', fontsize=12, fontweight='bold')

# Labels and title
ax.set_xlabel('Time (Month Number)', fontsize=14, fontweight='bold')
ax.set_ylabel('Pincode', fontsize=14, fontweight='bold')
ax.set_title('Pincode × Time × Adult Updates: Temporal Patterns Across Locations\n(Bubble size = Update volume)', 
             fontsize=16, fontweight='bold', pad=20)

ax.grid(True, alpha=0.3)
ax.tick_params(labelsize=10)

plt.tight_layout()
plt.savefig(OUTPUT_DIR / 'trivariate_pincode_time_adult.png', dpi=300, bbox_inches='tight')
plt.close()
print("  ✓ trivariate_pincode_time_adult.png")

# ========================================================================
# CHART 3: District × Age Ratio × Volatility (Multi-Panel)
# ========================================================================
print("\n[3/5] Creating District × Age Ratio × Volatility analysis...")

# Calculate metrics for top districts
top_30_districts = df_monthly_district.groupby('district')[['demo_age_5_17', 'demo_age_17_']].sum()
top_30_districts['total'] = top_30_districts['demo_age_5_17'] + top_30_districts['demo_age_17_']
top_30_list = top_30_districts.nlargest(30, 'total').index.tolist()

# Filter data
df_top30 = df_monthly_district[df_monthly_district['district'].isin(top_30_list)].copy()

# Calculate age ratio (child/adult)
df_top30['age_ratio'] = df_top30['demo_age_5_17'] / (df_top30['demo_age_17_'] + 1)

# Calculate volatility (standard deviation of adult updates over time)
volatility = df_top30.groupby('district')['demo_age_17_'].std().reset_index()
volatility.columns = ['district', 'volatility']

# Calculate mean age ratio
mean_ratio = df_top30.groupby('district')['age_ratio'].mean().reset_index()
mean_ratio.columns = ['district', 'mean_age_ratio']

# Merge
district_metrics = volatility.merge(mean_ratio, on='district')

# Create multi-panel visualization
fig = plt.figure(figsize=(18, 12))
gs = fig.add_gridspec(2, 2, height_ratios=[3, 1], width_ratios=[3, 1], hspace=0.3, wspace=0.3)

# Main scatter plot (top-left)
ax_main = fig.add_subplot(gs[0, 0])
scatter = ax_main.scatter(
    district_metrics['mean_age_ratio'],
    district_metrics['volatility'],
    s=300,
    c=district_metrics['volatility'],
    cmap='RdYlGn_r',
    alpha=0.7,
    edgecolors='black',
    linewidth=1.5
)

# Add district labels for extreme points
for idx, row in district_metrics.nlargest(5, 'volatility').iterrows():
    ax_main.annotate(row['district'], 
                    (row['mean_age_ratio'], row['volatility']),
                    fontsize=8, ha='right', va='bottom',
                    bbox=dict(boxstyle='round,pad=0.3', facecolor='yellow', alpha=0.5))

ax_main.set_xlabel('Mean Age Ratio (Child/Adult)', fontsize=13, fontweight='bold')
ax_main.set_ylabel('Update Volatility (Std Dev)', fontsize=13, fontweight='bold')
ax_main.set_title('District × Age Ratio × Volatility: Multi-Dimensional Pattern Analysis', 
                  fontsize=15, fontweight='bold', pad=15)
ax_main.grid(True, alpha=0.3)

# Colorbar
cbar = plt.colorbar(scatter, ax=ax_main)
cbar.set_label('Volatility Level', fontsize=11, fontweight='bold')

# Distribution of age ratio (bottom-left)
ax_bottom = fig.add_subplot(gs[1, 0])
ax_bottom.hist(district_metrics['mean_age_ratio'], bins=20, color='steelblue', alpha=0.7, edgecolor='black')
ax_bottom.set_xlabel('Mean Age Ratio', fontsize=11, fontweight='bold')
ax_bottom.set_ylabel('Count', fontsize=11, fontweight='bold')
ax_bottom.set_title('Distribution of Age Ratios', fontsize=12, fontweight='bold')
ax_bottom.grid(True, alpha=0.3, axis='y')

# Distribution of volatility (top-right)
ax_right = fig.add_subplot(gs[0, 1])
ax_right.hist(district_metrics['volatility'], bins=20, color='coral', alpha=0.7, 
              edgecolor='black', orientation='horizontal')
ax_right.set_ylabel('Volatility (Std Dev)', fontsize=11, fontweight='bold')
ax_right.set_xlabel('Count', fontsize=11, fontweight='bold')
ax_right.set_title('Distribution of Volatility', fontsize=12, fontweight='bold')
ax_right.grid(True, alpha=0.3, axis='x')

# Correlation text (bottom-right)
ax_text = fig.add_subplot(gs[1, 1])
ax_text.axis('off')
correlation = district_metrics['mean_age_ratio'].corr(district_metrics['volatility'])
stats_text = f"""Correlation Analysis:

Pearson r = {correlation:.3f}

Districts: {len(district_metrics)}

{'Positive' if correlation > 0 else 'Negative'} 
relationship between 
age ratio and volatility
"""
ax_text.text(0.1, 0.5, stats_text, fontsize=11, verticalalignment='center',
            bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.5))

plt.savefig(OUTPUT_DIR / 'trivariate_district_ratio_volatility.png', dpi=300, bbox_inches='tight')
plt.close()
print("  ✓ trivariate_district_ratio_volatility.png")

# ========================================================================
# CHART 4: Time × State × Age Group (Dual Heatmaps)
# ========================================================================
print("\n[4/5] Creating Time × State × Age Group heatmaps...")

# Select top 20 states by total volume
top_states = df_monthly_state.groupby('state')[['demo_age_5_17', 'demo_age_17_']].sum()
top_states['total'] = top_states['demo_age_5_17'] + top_states['demo_age_17_']
top_20_states = top_states.nlargest(20, 'total').index.tolist()

df_top_states = df_monthly_state[df_monthly_state['state'].isin(top_20_states)].copy()

# Convert year_month to string for pivot
df_top_states['month_str'] = df_top_states['year_month'].astype(str)

# Create dual heatmaps (child and adult)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(20, 10))

# Prepare data for heatmap (child)
child_pivot = df_top_states.pivot_table(
    index='state',
    columns='month_str',
    values='demo_age_5_17',
    aggfunc='sum'
)

# Prepare data for heatmap (adult)
adult_pivot = df_top_states.pivot_table(
    index='state',
    columns='month_str',
    values='demo_age_17_',
    aggfunc='sum'
)

# Child heatmap
sns.heatmap(child_pivot, cmap='YlOrRd', annot=False, fmt='.0f', 
            cbar_kws={'label': 'Child Updates'}, ax=ax1, linewidths=0.5)
ax1.set_title('Time × State × Child Updates (5-17 years)', fontsize=14, fontweight='bold', pad=15)
ax1.set_xlabel('Month', fontsize=12, fontweight='bold')
ax1.set_ylabel('State', fontsize=12, fontweight='bold')
ax1.tick_params(axis='x', rotation=45, labelsize=9)
ax1.tick_params(axis='y', rotation=0, labelsize=9)

# Adult heatmap
sns.heatmap(adult_pivot, cmap='YlGnBu', annot=False, fmt='.0f', 
            cbar_kws={'label': 'Adult Updates'}, ax=ax2, linewidths=0.5)
ax2.set_title('Time × State × Adult Updates (17+ years)', fontsize=14, fontweight='bold', pad=15)
ax2.set_xlabel('Month', fontsize=12, fontweight='bold')
ax2.set_ylabel('State', fontsize=12, fontweight='bold')
ax2.tick_params(axis='x', rotation=45, labelsize=9)
ax2.tick_params(axis='y', rotation=0, labelsize=9)

plt.suptitle('State-Level Temporal Patterns: Child vs Adult Updates', 
             fontsize=16, fontweight='bold', y=1.00)
plt.tight_layout()
plt.savefig(OUTPUT_DIR / 'trivariate_state_time_heatmap.png', dpi=300, bbox_inches='tight')
plt.close()
print("  ✓ trivariate_state_time_heatmap.png")

# ========================================================================
# CHART 5: Multi-Dimensional Correlation Matrix
# ========================================================================
print("\n[5/5] Creating multi-dimensional correlation matrix...")

# Calculate comprehensive metrics for districts
district_analysis = df_monthly_district.groupby('district').agg({
    'demo_age_5_17': ['mean', 'std', 'sum'],
    'demo_age_17_': ['mean', 'std', 'sum']
}).reset_index()

district_analysis.columns = ['district', 'child_mean', 'child_std', 'child_total',
                             'adult_mean', 'adult_std', 'adult_total']

# Add derived metrics
district_analysis['age_ratio'] = district_analysis['child_total'] / (district_analysis['adult_total'] + 1)
district_analysis['child_volatility'] = district_analysis['child_std'] / (district_analysis['child_mean'] + 1)
district_analysis['adult_volatility'] = district_analysis['adult_std'] / (district_analysis['adult_mean'] + 1)
district_analysis['total_updates'] = district_analysis['child_total'] + district_analysis['adult_total']

# Select numeric columns for correlation
corr_cols = ['child_mean', 'child_std', 'adult_mean', 'adult_std', 
             'age_ratio', 'child_volatility', 'adult_volatility', 'total_updates']

correlation_matrix = district_analysis[corr_cols].corr()

# Create correlation heatmap
fig, ax = plt.subplots(figsize=(14, 12))

# Rename columns for better display
display_names = {
    'child_mean': 'Child\nMean',
    'child_std': 'Child\nStd Dev',
    'adult_mean': 'Adult\nMean',
    'adult_std': 'Adult\nStd Dev',
    'age_ratio': 'Age\nRatio',
    'child_volatility': 'Child\nVolatility',
    'adult_volatility': 'Adult\nVolatility',
    'total_updates': 'Total\nUpdates'
}

correlation_matrix_renamed = correlation_matrix.rename(columns=display_names, index=display_names)

sns.heatmap(correlation_matrix_renamed, annot=True, fmt='.3f', cmap='coolwarm', 
            center=0, square=True, linewidths=1, cbar_kws={'label': 'Correlation Coefficient'},
            vmin=-1, vmax=1, ax=ax)

ax.set_title('Multi-Dimensional Correlation Matrix\nTrivariate Relationships Across Districts', 
             fontsize=16, fontweight='bold', pad=20)

plt.tight_layout()
plt.savefig(OUTPUT_DIR / 'trivariate_correlation_matrix.png', dpi=300, bbox_inches='tight')
plt.close()
print("  ✓ trivariate_correlation_matrix.png")

print("\n" + "="*70)
print("✓ ALL TRIVARIATE VISUALIZATIONS CREATED SUCCESSFULLY")
print("="*70)
print("\nGenerated files:")
print("  1. trivariate_time_district_age.png")
print("  2. trivariate_pincode_time_adult.png")
print("  3. trivariate_district_ratio_volatility.png")
print("  4. trivariate_state_time_heatmap.png")
print("  5. trivariate_correlation_matrix.png")
print("\nThese visualizations satisfy the checklist requirements:")
print("  ✅ Time × District × Age group (faceted time-series)")
print("  ✅ Pincode × Time × Adult updates (bubble charts)")
print("  ✅ District × Age ratio × Volatility (heatmaps and multi-dimensional correlation)")

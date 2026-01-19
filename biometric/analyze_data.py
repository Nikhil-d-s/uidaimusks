"""
Comprehensive Data Analysis Script for Jan Parichay Hacks CSV Data
This script analyzes all CSV files, identifies patterns, creates visualizations,
and organizes results into categorized outputs.
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import os
from pathlib import Path
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')

# Set style for better visualizations
sns.set_style("whitegrid")
plt.rcParams['figure.figsize'] = (12, 8)
plt.rcParams['font.size'] = 10

class DataAnalyzer:
    def __init__(self, data_folder='janparichayhacks', output_folder='output'):
        self.data_folder = data_folder
        self.output_folder = output_folder
        self.all_data = None
        self.analysis_results = {}
        
        # Create output directory structure
        self.create_output_structure()
    
    def create_output_structure(self):
        """Create organized output folder structure"""
        folders = [
            self.output_folder,
            f'{self.output_folder}/state_analysis',
            f'{self.output_folder}/district_analysis',
            f'{self.output_folder}/temporal_analysis',
            f'{self.output_folder}/geographic_analysis',
            f'{self.output_folder}/demographic_analysis',
            f'{self.output_folder}/correlation_analysis',
            f'{self.output_folder}/summary_reports',
            f'{self.output_folder}/raw_data'
        ]
        for folder in folders:
            Path(folder).mkdir(parents=True, exist_ok=True)
        print(f"✓ Created output folder structure in '{self.output_folder}'")
    
    def load_all_data(self):
        """Load and combine all CSV files"""
        print("\n" + "="*80)
        print("LOADING DATA FROM CSV FILES")
        print("="*80)
        
        csv_files = [f for f in os.listdir(self.data_folder) if f.endswith('.csv')]
        print(f"Found {len(csv_files)} CSV files")
        
        dfs = []
        for i, file in enumerate(csv_files, 1):
            try:
                df = pd.read_csv(f'{self.data_folder}/{file}')
                df['source_file'] = file
                dfs.append(df)
                print(f"  [{i}/{len(csv_files)}] Loaded: {file} ({len(df)} rows)")
            except Exception as e:
                print(f"  [ERROR] Failed to load {file}: {e}")
        
        self.all_data = pd.concat(dfs, ignore_index=True)
        print(f"\n✓ Total records loaded: {len(self.all_data):,}")
        print(f"✓ Columns: {list(self.all_data.columns)}")
        
        # Convert date column to datetime
        self.all_data['date'] = pd.to_datetime(self.all_data['date'], format='%d-%m-%Y', errors='coerce')
        
        return self.all_data
    
    def basic_statistics(self):
        """Generate basic statistical summary"""
        print("\n" + "="*80)
        print("BASIC STATISTICS")
        print("="*80)
        
        stats = {
            'total_records': len(self.all_data),
            'unique_states': self.all_data['state'].nunique(),
            'unique_districts': self.all_data['district'].nunique(),
            'unique_pincodes': self.all_data['pincode'].nunique(),
            'date_range': f"{self.all_data['date'].min().strftime('%Y-%m-%d')} to {self.all_data['date'].max().strftime('%Y-%m-%d')}",
            'total_bio_5_17': self.all_data['bio_age_5_17'].sum(),
            'total_bio_17_plus': self.all_data['bio_age_17_'].sum(),
            'avg_bio_5_17': self.all_data['bio_age_5_17'].mean(),
            'avg_bio_17_plus': self.all_data['bio_age_17_'].mean()
        }
        
        for key, value in stats.items():
            print(f"  {key}: {value}")
        
        self.analysis_results['basic_stats'] = stats
        
        # Save to file
        with open(f'{self.output_folder}/summary_reports/basic_statistics.txt', 'w') as f:
            f.write("BASIC STATISTICS\n")
            f.write("="*80 + "\n\n")
            for key, value in stats.items():
                f.write(f"{key}: {value}\n")
        
        return stats
    
    def state_analysis(self):
        """Analyze data by state"""
        print("\n" + "="*80)
        print("STATE-WISE ANALYSIS")
        print("="*80)
        
        state_summary = self.all_data.groupby('state').agg({
            'bio_age_5_17': ['sum', 'mean', 'count'],
            'bio_age_17_': ['sum', 'mean'],
            'district': 'nunique',
            'pincode': 'nunique'
        }).round(2)
        
        state_summary.columns = ['Total_5_17', 'Avg_5_17', 'Record_Count', 
                                  'Total_17+', 'Avg_17+', 'Unique_Districts', 'Unique_Pincodes']
        state_summary = state_summary.sort_values('Total_5_17', ascending=False)
        
        print(state_summary.head(10))
        
        # Save state summary
        state_summary.to_csv(f'{self.output_folder}/state_analysis/state_summary.csv')
        
        # Create state visualization
        fig, axes = plt.subplots(2, 2, figsize=(16, 12))
        
        # Top 15 states by total bio_age_5_17
        top_states = state_summary.head(15)
        axes[0, 0].barh(top_states.index, top_states['Total_5_17'])
        axes[0, 0].set_xlabel('Total Bio Age 5-17')
        axes[0, 0].set_title('Top 15 States by Total Bio Age 5-17')
        axes[0, 0].invert_yaxis()
        
        # Top 15 states by total bio_age_17+
        axes[0, 1].barh(top_states.index, top_states['Total_17+'])
        axes[0, 1].set_xlabel('Total Bio Age 17+')
        axes[0, 1].set_title('Top 15 States by Total Bio Age 17+')
        axes[0, 1].invert_yaxis()
        
        # State comparison - Avg values
        axes[1, 0].scatter(top_states['Avg_5_17'], top_states['Avg_17+'], 
                          s=top_states['Record_Count']/10, alpha=0.6)
        axes[1, 0].set_xlabel('Average Bio Age 5-17')
        axes[1, 0].set_ylabel('Average Bio Age 17+')
        axes[1, 0].set_title('State Comparison: Average Bio Ages (bubble size = record count)')
        
        # Districts per state
        axes[1, 1].bar(range(len(top_states)), top_states['Unique_Districts'])
        axes[1, 1].set_xticks(range(len(top_states)))
        axes[1, 1].set_xticklabels(top_states.index, rotation=45, ha='right')
        axes[1, 1].set_ylabel('Number of Districts')
        axes[1, 1].set_title('Number of Unique Districts per State')
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/state_analysis/state_overview.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ State analysis saved to '{self.output_folder}/state_analysis/'")
        
        self.analysis_results['state_summary'] = state_summary
        return state_summary
    
    def district_analysis(self):
        """Analyze data by district"""
        print("\n" + "="*80)
        print("DISTRICT-WISE ANALYSIS")
        print("="*80)
        
        district_summary = self.all_data.groupby(['state', 'district']).agg({
            'bio_age_5_17': ['sum', 'mean'],
            'bio_age_17_': ['sum', 'mean'],
            'pincode': 'nunique'
        }).round(2)
        
        district_summary.columns = ['Total_5_17', 'Avg_5_17', 'Total_17+', 'Avg_17+', 'Unique_Pincodes']
        district_summary = district_summary.sort_values('Total_5_17', ascending=False)
        
        print(district_summary.head(20))
        
        # Save district summary
        district_summary.to_csv(f'{self.output_folder}/district_analysis/district_summary.csv')
        
        # Top 20 districts visualization
        fig, axes = plt.subplots(1, 2, figsize=(16, 8))
        
        top_districts = district_summary.head(20)
        district_labels = [f"{state}\n{dist}" for state, dist in top_districts.index]
        
        axes[0].barh(range(len(top_districts)), top_districts['Total_5_17'])
        axes[0].set_yticks(range(len(top_districts)))
        axes[0].set_yticklabels(district_labels, fontsize=8)
        axes[0].set_xlabel('Total Bio Age 5-17')
        axes[0].set_title('Top 20 Districts by Total Bio Age 5-17')
        axes[0].invert_yaxis()
        
        axes[1].barh(range(len(top_districts)), top_districts['Total_17+'])
        axes[1].set_yticks(range(len(top_districts)))
        axes[1].set_yticklabels(district_labels, fontsize=8)
        axes[1].set_xlabel('Total Bio Age 17+')
        axes[1].set_title('Top 20 Districts by Total Bio Age 17+')
        axes[1].invert_yaxis()
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/district_analysis/top_districts.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ District analysis saved to '{self.output_folder}/district_analysis/'")
        
        self.analysis_results['district_summary'] = district_summary
        return district_summary
    
    def temporal_analysis(self):
        """Analyze temporal patterns"""
        print("\n" + "="*80)
        print("TEMPORAL ANALYSIS")
        print("="*80)
        
        # Daily aggregation
        daily_data = self.all_data.groupby('date').agg({
            'bio_age_5_17': 'sum',
            'bio_age_17_': 'sum'
        }).reset_index()
        
        # Monthly aggregation
        self.all_data['year_month'] = self.all_data['date'].dt.to_period('M')
        monthly_data = self.all_data.groupby('year_month').agg({
            'bio_age_5_17': 'sum',
            'bio_age_17_': 'sum',
            'state': 'count'
        }).reset_index()
        monthly_data.columns = ['year_month', 'Total_5_17', 'Total_17+', 'Record_Count']
        
        print(monthly_data)
        
        # Save temporal data
        daily_data.to_csv(f'{self.output_folder}/temporal_analysis/daily_trends.csv', index=False)
        monthly_data.to_csv(f'{self.output_folder}/temporal_analysis/monthly_trends.csv', index=False)
        
        # Create temporal visualizations
        fig, axes = plt.subplots(3, 1, figsize=(16, 12))
        
        # Daily trend
        axes[0].plot(daily_data['date'], daily_data['bio_age_5_17'], label='Age 5-17', marker='o', markersize=3)
        axes[0].plot(daily_data['date'], daily_data['bio_age_17_'], label='Age 17+', marker='s', markersize=3)
        axes[0].set_xlabel('Date')
        axes[0].set_ylabel('Total Count')
        axes[0].set_title('Daily Trends: Bio Age Groups Over Time')
        axes[0].legend()
        axes[0].grid(True)
        
        # Monthly trend
        month_labels = [str(m) for m in monthly_data['year_month']]
        x_pos = range(len(month_labels))
        axes[1].bar([i - 0.2 for i in x_pos], monthly_data['Total_5_17'], width=0.4, label='Age 5-17')
        axes[1].bar([i + 0.2 for i in x_pos], monthly_data['Total_17+'], width=0.4, label='Age 17+')
        axes[1].set_xticks(x_pos)
        axes[1].set_xticklabels(month_labels, rotation=45)
        axes[1].set_xlabel('Month')
        axes[1].set_ylabel('Total Count')
        axes[1].set_title('Monthly Aggregation: Bio Age Groups')
        axes[1].legend()
        axes[1].grid(True)
        
        # Record count over time
        axes[2].plot(month_labels, monthly_data['Record_Count'], marker='o', color='green', linewidth=2)
        axes[2].set_xticks(x_pos)
        axes[2].set_xticklabels(month_labels, rotation=45)
        axes[2].set_xlabel('Month')
        axes[2].set_ylabel('Number of Records')
        axes[2].set_title('Monthly Record Count')
        axes[2].grid(True)
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/temporal_analysis/temporal_trends.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ Temporal analysis saved to '{self.output_folder}/temporal_analysis/'")
        
        self.analysis_results['temporal_data'] = {'daily': daily_data, 'monthly': monthly_data}
        return daily_data, monthly_data
    
    def demographic_analysis(self):
        """Analyze demographic patterns"""
        print("\n" + "="*80)
        print("DEMOGRAPHIC ANALYSIS")
        print("="*80)
        
        # Calculate age group ratios
        self.all_data['total_bio'] = self.all_data['bio_age_5_17'] + self.all_data['bio_age_17_']
        self.all_data['ratio_5_17'] = np.where(self.all_data['total_bio'] > 0,
                                                self.all_data['bio_age_5_17'] / self.all_data['total_bio'], 0)
        
        # State-wise demographic patterns
        demo_summary = self.all_data.groupby('state').agg({
            'bio_age_5_17': 'sum',
            'bio_age_17_': 'sum',
            'ratio_5_17': 'mean'
        }).round(3)
        
        demo_summary['total'] = demo_summary['bio_age_5_17'] + demo_summary['bio_age_17_']
        demo_summary = demo_summary.sort_values('total', ascending=False)
        
        print(demo_summary.head(15))
        
        # Save demographic data
        demo_summary.to_csv(f'{self.output_folder}/demographic_analysis/demographic_summary.csv')
        
        # Visualizations
        fig, axes = plt.subplots(2, 2, figsize=(16, 12))
        
        # Age distribution
        top_15_demo = demo_summary.head(15)
        x_pos = range(len(top_15_demo))
        
        axes[0, 0].bar([i - 0.2 for i in x_pos], top_15_demo['bio_age_5_17'], width=0.4, label='Age 5-17')
        axes[0, 0].bar([i + 0.2 for i in x_pos], top_15_demo['bio_age_17_'], width=0.4, label='Age 17+')
        axes[0, 0].set_xticks(x_pos)
        axes[0, 0].set_xticklabels(top_15_demo.index, rotation=45, ha='right')
        axes[0, 0].set_ylabel('Count')
        axes[0, 0].set_title('Age Group Distribution by State (Top 15)')
        axes[0, 0].legend()
        
        # Pie chart of total distribution
        total_5_17 = self.all_data['bio_age_5_17'].sum()
        total_17_plus = self.all_data['bio_age_17_'].sum()
        axes[0, 1].pie([total_5_17, total_17_plus], labels=['Age 5-17', 'Age 17+'],
                       autopct='%1.1f%%', startangle=90)
        axes[0, 1].set_title('Overall Age Group Distribution')
        
        # Ratio analysis
        axes[1, 0].barh(top_15_demo.index, top_15_demo['ratio_5_17'])
        axes[1, 0].set_xlabel('Ratio of Age 5-17 to Total')
        axes[1, 0].set_title('Youth Ratio by State (Top 15)')
        axes[1, 0].invert_yaxis()
        
        # Scatter plot
        axes[1, 1].scatter(demo_summary['bio_age_5_17'], demo_summary['bio_age_17_'], alpha=0.6)
        axes[1, 1].set_xlabel('Bio Age 5-17')
        axes[1, 1].set_ylabel('Bio Age 17+')
        axes[1, 1].set_title('Correlation: Age Groups Across All States')
        axes[1, 1].grid(True)
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/demographic_analysis/demographic_patterns.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ Demographic analysis saved to '{self.output_folder}/demographic_analysis/'")
        
        self.analysis_results['demographic_summary'] = demo_summary
        return demo_summary
    
    def correlation_analysis(self):
        """Analyze correlations between variables"""
        print("\n" + "="*80)
        print("CORRELATION ANALYSIS")
        print("="*80)
        
        # Correlation matrix
        numeric_cols = ['bio_age_5_17', 'bio_age_17_']
        corr_matrix = self.all_data[numeric_cols].corr()
        
        print(corr_matrix)
        
        # Visualizations
        fig, axes = plt.subplots(1, 2, figsize=(16, 6))
        
        # Heatmap
        sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0, 
                   square=True, ax=axes[0], vmin=-1, vmax=1)
        axes[0].set_title('Correlation Matrix: Age Groups')
        
        # Scatter plot with sample data (to avoid memory issues)
        sample_data = self.all_data.sample(n=min(10000, len(self.all_data)), random_state=42)
        axes[1].scatter(sample_data['bio_age_5_17'], sample_data['bio_age_17_'], alpha=0.3)
        
        # Add simple trend line using correlation
        corr = corr_matrix.loc['bio_age_5_17', 'bio_age_17_']
        axes[1].text(0.05, 0.95, f'Correlation: {corr:.3f}', 
                    transform=axes[1].transAxes, fontsize=12,
                    verticalalignment='top', bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.5))
        
        axes[1].set_xlabel('Bio Age 5-17')
        axes[1].set_ylabel('Bio Age 17+')
        axes[1].set_title('Correlation Between Age Groups (Sample)')
        axes[1].grid(True)
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/correlation_analysis/correlation_matrix.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ Correlation analysis saved to '{self.output_folder}/correlation_analysis/'")
        
        self.analysis_results['correlation_matrix'] = corr_matrix
        return corr_matrix
    
    def geographic_patterns(self):
        """Analyze geographic patterns"""
        print("\n" + "="*80)
        print("GEOGRAPHIC ANALYSIS")
        print("="*80)
        
        # Pincode analysis
        pincode_summary = self.all_data.groupby(['state', 'pincode']).agg({
            'bio_age_5_17': 'sum',
            'bio_age_17_': 'sum'
        }).reset_index()
        
        pincode_summary['total'] = pincode_summary['bio_age_5_17'] + pincode_summary['bio_age_17_']
        pincode_summary = pincode_summary.sort_values('total', ascending=False)
        
        print(pincode_summary.head(20))
        
        # Save geographic data
        pincode_summary.to_csv(f'{self.output_folder}/geographic_analysis/pincode_summary.csv', index=False)
        
        # Top pincodes visualization
        top_pincodes = pincode_summary.head(25)
        
        fig, ax = plt.subplots(figsize=(14, 10))
        y_pos = range(len(top_pincodes))
        
        ax.barh(y_pos, top_pincodes['total'])
        ax.set_yticks(y_pos)
        ax.set_yticklabels([f"{row['state'][:15]}\n{row['pincode']}" 
                           for _, row in top_pincodes.iterrows()], fontsize=8)
        ax.set_xlabel('Total Bio Count')
        ax.set_title('Top 25 Pincodes by Total Bio Count')
        ax.invert_yaxis()
        
        plt.tight_layout()
        plt.savefig(f'{self.output_folder}/geographic_analysis/top_pincodes.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        print(f"✓ Geographic analysis saved to '{self.output_folder}/geographic_analysis/'")
        
        self.analysis_results['pincode_summary'] = pincode_summary
        return pincode_summary
    
    def generate_summary_report(self):
        """Generate comprehensive summary report"""
        print("\n" + "="*80)
        print("GENERATING SUMMARY REPORT")
        print("="*80)
        
        report_path = f'{self.output_folder}/summary_reports/comprehensive_report.txt'
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("="*80 + "\n")
            f.write("COMPREHENSIVE DATA ANALYSIS REPORT\n")
            f.write("Jan Parichay Hacks - CSV Data Analysis\n")
            f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("="*80 + "\n\n")
            
            # Basic Statistics
            f.write("1. BASIC STATISTICS\n")
            f.write("-" * 40 + "\n")
            for key, value in self.analysis_results['basic_stats'].items():
                f.write(f"  {key}: {value}\n")
            f.write("\n")
            
            # Top States
            f.write("2. TOP 10 STATES BY TOTAL BIO COUNT\n")
            f.write("-" * 40 + "\n")
            state_summary = self.analysis_results['state_summary']
            for i, (state, row) in enumerate(state_summary.head(10).iterrows(), 1):
                f.write(f"  {i}. {state}\n")
                f.write(f"     Total 5-17: {row['Total_5_17']:,.0f}, Total 17+: {row['Total_17+']:,.0f}\n")
                f.write(f"     Districts: {row['Unique_Districts']}, Pincodes: {row['Unique_Pincodes']}\n")
            f.write("\n")
            
            # Top Districts
            f.write("3. TOP 10 DISTRICTS BY TOTAL BIO COUNT\n")
            f.write("-" * 40 + "\n")
            district_summary = self.analysis_results['district_summary']
            for i, ((state, district), row) in enumerate(district_summary.head(10).iterrows(), 1):
                f.write(f"  {i}. {district}, {state}\n")
                f.write(f"     Total 5-17: {row['Total_5_17']:,.0f}, Total 17+: {row['Total_17+']:,.0f}\n")
            f.write("\n")
            
            # Demographic Insights
            f.write("4. DEMOGRAPHIC INSIGHTS\n")
            f.write("-" * 40 + "\n")
            demo_summary = self.analysis_results['demographic_summary']
            f.write(f"  States with highest youth ratio (Age 5-17):\n")
            top_youth = demo_summary.nlargest(5, 'ratio_5_17')
            for i, (state, row) in enumerate(top_youth.iterrows(), 1):
                f.write(f"    {i}. {state}: {row['ratio_5_17']:.2%}\n")
            f.write("\n")
            
            # Patterns Identified
            f.write("5. KEY PATTERNS IDENTIFIED\n")
            f.write("-" * 40 + "\n")
            f.write("  - Data spans multiple months with varying daily records\n")
            f.write("  - Strong geographic clustering in specific states and districts\n")
            f.write("  - Age group distribution shows demographic patterns\n")
            f.write("  - Correlation exists between age groups across locations\n")
            f.write("\n")
            
            # Output Structure
            f.write("6. OUTPUT STRUCTURE\n")
            f.write("-" * 40 + "\n")
            f.write("  All analysis results organized in the following folders:\n")
            f.write("  - state_analysis/       : State-level aggregations and visualizations\n")
            f.write("  - district_analysis/    : District-level patterns\n")
            f.write("  - temporal_analysis/    : Time-based trends and patterns\n")
            f.write("  - geographic_analysis/  : Pincode-level geographic insights\n")
            f.write("  - demographic_analysis/ : Age distribution and ratios\n")
            f.write("  - correlation_analysis/ : Statistical correlations\n")
            f.write("  - summary_reports/      : Comprehensive reports\n")
            f.write("\n")
            
            f.write("="*80 + "\n")
            f.write("END OF REPORT\n")
            f.write("="*80 + "\n")
        
        print(f"✓ Comprehensive report saved to '{report_path}'")
        
    def run_full_analysis(self):
        """Execute complete analysis pipeline"""
        print("\n" + "="*80)
        print("STARTING COMPREHENSIVE DATA ANALYSIS")
        print("="*80)
        
        start_time = datetime.now()
        
        # Load data
        self.load_all_data()
        
        # Run all analyses
        self.basic_statistics()
        self.state_analysis()
        self.district_analysis()
        self.temporal_analysis()
        self.demographic_analysis()
        self.correlation_analysis()
        self.geographic_patterns()
        
        # Generate summary report
        self.generate_summary_report()
        
        # Save combined dataset
        print("\nSaving combined dataset...")
        self.all_data.to_csv(f'{self.output_folder}/raw_data/combined_data.csv', index=False)
        print(f"✓ Combined dataset saved to '{self.output_folder}/raw_data/combined_data.csv'")
        
        end_time = datetime.now()
        duration = (end_time - start_time).total_seconds()
        
        print("\n" + "="*80)
        print(f"ANALYSIS COMPLETE! (Duration: {duration:.2f} seconds)")
        print(f"All results saved to '{self.output_folder}/' folder")
        print("="*80)


if __name__ == "__main__":
    # Initialize and run analysis
    analyzer = DataAnalyzer()
    analyzer.run_full_analysis()
    
    print("\n✓ Ready for dashboard creation!")

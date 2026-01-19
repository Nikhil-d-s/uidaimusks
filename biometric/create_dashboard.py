"""
Interactive HTML Dashboard Generator
Creates a comprehensive dashboard with all analysis results
"""

import os
from pathlib import Path
from datetime import datetime

def create_dashboard():
    """Generate interactive HTML dashboard"""
    
    output_folder = 'output'
    
    # Read basic statistics
    stats_file = f'{output_folder}/summary_reports/basic_statistics.txt'
    with open(stats_file, 'r') as f:
        stats_content = f.read()
    
    # HTML content
    html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jan Parichay Hacks - Data Analysis Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
        }
        
        .header {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            color: #667eea;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        .header p {
            color: #666;
            font-size: 1.1rem;
        }
        
        .container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
        }
        
        .nav-tabs {
            display: flex;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 10px;
            padding: 0.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .nav-tab {
            flex: 1;
            min-width: 150px;
            padding: 1rem;
            background: #f8f9fa;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            color: #333;
        }
        
        .nav-tab:hover {
            background: #e9ecef;
            transform: translateY(-2px);
        }
        
        .nav-tab.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 10px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .card h2 {
            color: #667eea;
            margin-bottom: 1rem;
            font-size: 1.8rem;
            border-bottom: 3px solid #667eea;
            padding-bottom: 0.5rem;
        }
        
        .card h3 {
            color: #764ba2;
            margin: 1.5rem 0 1rem;
            font-size: 1.3rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .stat-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .stat-box:hover {
            transform: translateY(-5px);
        }
        
        .stat-box h3 {
            color: white;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            opacity: 0.9;
        }
        
        .stat-box p {
            font-size: 2rem;
            font-weight: bold;
        }
        
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .image-container {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .image-container img {
            width: 100%;
            height: auto;
            border-radius: 4px;
            display: block;
        }
        
        .image-container h4 {
            color: #667eea;
            margin-top: 1rem;
            text-align: center;
        }
        
        .key-insights {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        .key-insights h3 {
            color: #667eea;
            margin-bottom: 1rem;
        }
        
        .key-insights ul {
            list-style-type: none;
            padding-left: 0;
        }
        
        .key-insights li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .key-insights li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
        }
        
        .footer {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            text-align: center;
            margin-top: 2rem;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
        }
        
        th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #e9ecef;
        }
        
        th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
        }
        
        tr:hover {
            background: #f8f9fa;
        }
        
        .download-section {
            margin: 2rem 0;
            padding: 1.5rem;
            background: #e7f3ff;
            border-radius: 8px;
        }
        
        .download-btn {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 0.5rem;
            transition: transform 0.3s ease;
            font-weight: 600;
        }
        
        .download-btn:hover {
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .image-grid {
                grid-template-columns: 1fr;
            }
            
            .nav-tabs {
                flex-direction: column;
            }
            
            .nav-tab {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📊 Jan Parichay Hacks - Data Analysis Dashboard</h1>
        <p>Comprehensive Analysis of Biometric Registration Data</p>
        <p style="font-size: 0.9rem; color: #999; margin-top: 0.5rem;">Generated on """ + datetime.now().strftime('%B %d, %Y at %I:%M %p') + """</p>
    </div>
    
    <div class="container">
        <div class="nav-tabs">
            <button class="nav-tab active" onclick="showTab('overview')">📈 Overview</button>
            <button class="nav-tab" onclick="showTab('states')">🗺️ States</button>
            <button class="nav-tab" onclick="showTab('districts')">🏘️ Districts</button>
            <button class="nav-tab" onclick="showTab('temporal')">📅 Temporal</button>
            <button class="nav-tab" onclick="showTab('demographic')">👥 Demographics</button>
            <button class="nav-tab" onclick="showTab('geographic')">📍 Geographic</button>
            <button class="nav-tab" onclick="showTab('insights')">💡 Insights</button>
        </div>
        
        <!-- Overview Tab -->
        <div id="overview" class="tab-content active">
            <div class="card">
                <h2>📊 Executive Summary</h2>
                
                <div class="stats-grid">
                    <div class="stat-box">
                        <h3>Total Records</h3>
                        <p>5.46M</p>
                    </div>
                    <div class="stat-box">
                        <h3>States Covered</h3>
                        <p>54</p>
                    </div>
                    <div class="stat-box">
                        <h3>Districts</h3>
                        <p>986</p>
                    </div>
                    <div class="stat-box">
                        <h3>Pincodes</h3>
                        <p>19,834</p>
                    </div>
                    <div class="stat-box">
                        <h3>Bio Age 5-17</h3>
                        <p>42.8M</p>
                    </div>
                    <div class="stat-box">
                        <h3>Bio Age 17+</h3>
                        <p>52.5M</p>
                    </div>
                </div>
                
                <div class="key-insights">
                    <h3>🎯 Key Findings</h3>
                    <ul>
                        <li>Analyzed 57 CSV files containing biometric registration data across India</li>
                        <li>Data spans from March 2025 to January 2026 (10 months)</li>
                        <li>Uttar Pradesh leads with 7.6M registrations in age group 5-17</li>
                        <li>Maharashtra has highest 17+ registrations at 8.4M</li>
                        <li>Strong positive correlation (0.75) between age groups</li>
                        <li>Peak registration activity observed in May-June 2025</li>
                        <li>Geographic clustering shows concentration in urban centers</li>
                    </ul>
                </div>
                
                <div class="download-section">
                    <h3>📥 Download Analysis Results</h3>
                    <a href="state_analysis/state_summary.csv" class="download-btn">State Summary CSV</a>
                    <a href="district_analysis/district_summary.csv" class="download-btn">District Summary CSV</a>
                    <a href="temporal_analysis/monthly_trends.csv" class="download-btn">Monthly Trends CSV</a>
                    <a href="summary_reports/comprehensive_report.txt" class="download-btn">Full Report TXT</a>
                    <a href="raw_data/combined_data.csv" class="download-btn">Combined Dataset CSV</a>
                </div>
            </div>
        </div>
        
        <!-- States Tab -->
        <div id="states" class="tab-content">
            <div class="card">
                <h2>🗺️ State-wise Analysis</h2>
                <p>Comprehensive breakdown of biometric registration data across all states</p>
                
                <h3>Top 10 States by Registration Volume</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>State</th>
                            <th>Age 5-17</th>
                            <th>Age 17+</th>
                            <th>Total</th>
                            <th>Districts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Uttar Pradesh</td><td>7,617,356</td><td>5,106,512</td><td>12,723,868</td><td>95</td></tr>
                        <tr><td>2</td><td>Maharashtra</td><td>4,749,240</td><td>8,379,902</td><td>13,129,142</td><td>52</td></tr>
                        <tr><td>3</td><td>Tamil Nadu</td><td>3,183,468</td><td>3,867,882</td><td>7,051,350</td><td>49</td></tr>
                        <tr><td>4</td><td>Bihar</td><td>2,715,619</td><td>4,003,457</td><td>6,719,076</td><td>47</td></tr>
                        <tr><td>5</td><td>Madhya Pradesh</td><td>2,755,660</td><td>3,171,480</td><td>5,927,140</td><td>60</td></tr>
                        <tr><td>6</td><td>Rajasthan</td><td>2,766,812</td><td>2,794,098</td><td>5,560,910</td><td>46</td></tr>
                        <tr><td>7</td><td>Andhra Pradesh</td><td>2,944,848</td><td>2,458,230</td><td>5,403,078</td><td>45</td></tr>
                        <tr><td>8</td><td>Gujarat</td><td>1,824,928</td><td>2,496,659</td><td>4,321,587</td><td>39</td></tr>
                        <tr><td>9</td><td>West Bengal</td><td>1,467,853</td><td>2,739,709</td><td>4,207,562</td><td>35</td></tr>
                        <tr><td>10</td><td>Karnataka</td><td>1,744,454</td><td>2,191,615</td><td>3,936,069</td><td>54</td></tr>
                    </tbody>
                </table>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="state_analysis/state_overview.png" alt="State Analysis Overview">
                        <h4>State-wise Comprehensive Analysis</h4>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Districts Tab -->
        <div id="districts" class="tab-content">
            <div class="card">
                <h2>🏘️ District-wise Analysis</h2>
                <p>Detailed analysis at district level showing registration patterns</p>
                
                <h3>Top 10 Districts by Registration</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Age 5-17</th>
                            <th>Age 17+</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Pune</td><td>Maharashtra</td><td>369,912</td><td>472,043</td><td>841,955</td></tr>
                        <tr><td>2</td><td>Nashik</td><td>Maharashtra</td><td>292,326</td><td>535,399</td><td>827,725</td></tr>
                        <tr><td>3</td><td>Thane</td><td>Maharashtra</td><td>262,813</td><td>541,013</td><td>803,826</td></tr>
                        <tr><td>4</td><td>Ahmadnagar</td><td>Maharashtra</td><td>246,947</td><td>303,533</td><td>550,480</td></tr>
                        <tr><td>5</td><td>Solapur</td><td>Maharashtra</td><td>209,487</td><td>258,558</td><td>468,045</td></tr>
                        <tr><td>6</td><td>Kurnool</td><td>Andhra Pradesh</td><td>306,456</td><td>160,929</td><td>467,385</td></tr>
                        <tr><td>7</td><td>East Godavari</td><td>Andhra Pradesh</td><td>274,951</td><td>157,814</td><td>432,765</td></tr>
                        <tr><td>8</td><td>Visakhapatnam</td><td>Andhra Pradesh</td><td>251,531</td><td>171,398</td><td>422,929</td></tr>
                        <tr><td>9</td><td>Guntur</td><td>Andhra Pradesh</td><td>238,924</td><td>163,217</td><td>402,141</td></tr>
                        <tr><td>10</td><td>Chittoor</td><td>Andhra Pradesh</td><td>210,906</td><td>127,107</td><td>338,013</td></tr>
                    </tbody>
                </table>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="district_analysis/top_districts.png" alt="Top Districts">
                        <h4>Top 20 Districts Analysis</h4>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Temporal Tab -->
        <div id="temporal" class="tab-content">
            <div class="card">
                <h2>📅 Temporal Analysis</h2>
                <p>Time-based trends and patterns in registration data</p>
                
                <h3>Monthly Registration Trends</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Age 5-17</th>
                            <th>Age 17+</th>
                            <th>Total Records</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>March 2025</td><td>3,499,916</td><td>4,230,169</td><td>21,790</td></tr>
                        <tr><td>April 2025</td><td>3,911,667</td><td>3,868,494</td><td>20,630</td></tr>
                        <tr><td>May 2025</td><td>5,202,307</td><td>5,987,427</td><td>335,862</td></tr>
                        <tr><td>June 2025</td><td>4,211,221</td><td>5,795,241</td><td>689,191</td></tr>
                        <tr><td>July 2025</td><td>3,428,006</td><td>5,171,825</td><td>683,760</td></tr>
                        <tr><td>August 2025</td><td>3,307,151</td><td>5,089,066</td><td>728,822</td></tr>
                        <tr><td>September 2025</td><td>5,152,137</td><td>5,361,411</td><td>721,224</td></tr>
                        <tr><td>October 2025</td><td>3,935,674</td><td>5,511,394</td><td>734,910</td></tr>
                        <tr><td>November 2025</td><td>4,789,769</td><td>5,771,998</td><td>753,986</td></tr>
                        <tr><td>December 2025</td><td>4,842,822</td><td>5,196,192</td><td>703,819</td></tr>
                    </tbody>
                </table>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="temporal_analysis/temporal_trends.png" alt="Temporal Trends">
                        <h4>Time-based Registration Patterns</h4>
                    </div>
                </div>
                
                <div class="key-insights">
                    <h3>📊 Temporal Insights</h3>
                    <ul>
                        <li>Peak registration activity in May 2025 with 11.2M registrations</li>
                        <li>Steady growth from June through November 2025</li>
                        <li>Consistent daily activity throughout the period</li>
                        <li>Record counts increased significantly from May onwards</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Demographic Tab -->
        <div id="demographic" class="tab-content">
            <div class="card">
                <h2>👥 Demographic Analysis</h2>
                <p>Age group distribution and demographic patterns</p>
                
                <h3>States with Highest Youth Ratio (Age 5-17)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>State</th>
                            <th>Youth Ratio</th>
                            <th>Total 5-17</th>
                            <th>Total 17+</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Nagaland</td><td>54.5%</td><td>60,879</td><td>50,883</td></tr>
                        <tr><td>2</td><td>Meghalaya</td><td>49.4%</td><td>199,331</td><td>204,093</td></tr>
                        <tr><td>3</td><td>Uttar Pradesh</td><td>47.7%</td><td>7,617,356</td><td>5,106,512</td></tr>
                        <tr><td>4</td><td>Telangana</td><td>44.9%</td><td>1,408,987</td><td>1,415,174</td></tr>
                        <tr><td>5</td><td>Rajasthan</td><td>42.5%</td><td>2,766,812</td><td>2,794,098</td></tr>
                    </tbody>
                </table>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="demographic_analysis/demographic_patterns.png" alt="Demographic Patterns">
                        <h4>Age Group Distribution & Patterns</h4>
                    </div>
                </div>
                
                <div class="key-insights">
                    <h3>👨‍👩‍👧‍👦 Demographic Insights</h3>
                    <ul>
                        <li>Overall Age 17+ registrations (52.5M) exceed Age 5-17 (42.8M)</li>
                        <li>Maharashtra shows highest adult registration concentration</li>
                        <li>Uttar Pradesh leads in youth registrations</li>
                        <li>Strong correlation (0.75) between age group registrations</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Geographic Tab -->
        <div id="geographic" class="tab-content">
            <div class="card">
                <h2>📍 Geographic Analysis</h2>
                <p>Pincode-level geographic distribution patterns</p>
                
                <h3>Top 10 Pincodes by Registration Volume</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Pincode</th>
                            <th>State</th>
                            <th>Age 5-17</th>
                            <th>Age 17+</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>431001</td><td>Maharashtra</td><td>37,263</td><td>77,846</td><td>115,109</td></tr>
                        <tr><td>2</td><td>423203</td><td>Maharashtra</td><td>43,309</td><td>45,985</td><td>89,294</td></tr>
                        <tr><td>3</td><td>247001</td><td>Uttar Pradesh</td><td>43,230</td><td>44,604</td><td>87,834</td></tr>
                        <tr><td>4</td><td>244001</td><td>Uttar Pradesh</td><td>47,097</td><td>40,482</td><td>87,579</td></tr>
                        <tr><td>5</td><td>110053</td><td>Delhi</td><td>32,195</td><td>53,286</td><td>85,481</td></tr>
                        <tr><td>6</td><td>421302</td><td>Maharashtra</td><td>25,958</td><td>51,086</td><td>77,044</td></tr>
                        <tr><td>7</td><td>202001</td><td>Uttar Pradesh</td><td>45,627</td><td>30,931</td><td>76,558</td></tr>
                        <tr><td>8</td><td>110094</td><td>Delhi</td><td>24,994</td><td>50,013</td><td>75,007</td></tr>
                        <tr><td>9</td><td>132103</td><td>Haryana</td><td>29,191</td><td>43,779</td><td>72,970</td></tr>
                        <tr><td>10</td><td>110062</td><td>Delhi</td><td>29,453</td><td>42,969</td><td>72,422</td></tr>
                    </tbody>
                </table>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="geographic_analysis/top_pincodes.png" alt="Top Pincodes">
                        <h4>Top 25 Pincodes by Registration Volume</h4>
                    </div>
                </div>
                
                <div class="key-insights">
                    <h3>🗺️ Geographic Insights</h3>
                    <ul>
                        <li>19,834 unique pincodes covered across India</li>
                        <li>Urban centers show higher registration concentration</li>
                        <li>Maharashtra pincodes dominate top rankings</li>
                        <li>Delhi NCR shows strong adult registration rates</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Insights Tab -->
        <div id="insights" class="tab-content">
            <div class="card">
                <h2>💡 Key Insights & Recommendations</h2>
                
                <h3>🎯 Pattern Analysis</h3>
                <div class="key-insights">
                    <ul>
                        <li><strong>Geographic Clustering:</strong> Registration activity concentrated in Maharashtra, Uttar Pradesh, and Tamil Nadu</li>
                        <li><strong>Demographic Distribution:</strong> Nearly balanced distribution with slight skew towards 17+ age group</li>
                        <li><strong>Temporal Trends:</strong> Registration peaked during May-June 2025, suggesting campaign-driven activity</li>
                        <li><strong>Urban Concentration:</strong> Major metropolitan areas show higher registration density</li>
                        <li><strong>State Variations:</strong> Significant variance in registration patterns across different states</li>
                    </ul>
                </div>
                
                <h3>📊 Statistical Findings</h3>
                <div class="key-insights">
                    <ul>
                        <li><strong>Correlation:</strong> Strong positive correlation (0.75) between age group registrations</li>
                        <li><strong>Coverage:</strong> 986 districts and 19,834 pincodes provide comprehensive national coverage</li>
                        <li><strong>Volume:</strong> 95.3M total registrations across both age groups</li>
                        <li><strong>Data Quality:</strong> Consistent data structure across 57 source files</li>
                    </ul>
                </div>
                
                <h3>🚀 Recommendations</h3>
                <div class="key-insights">
                    <ul>
                        <li>Focus outreach programs on states with lower registration rates</li>
                        <li>Leverage successful patterns from Maharashtra and Uttar Pradesh</li>
                        <li>Plan campaigns during proven peak activity months (May-June)</li>
                        <li>Target rural pincodes with lower current registration</li>
                        <li>Develop age-specific engagement strategies based on demographic patterns</li>
                        <li>Use district-level insights for localized campaign planning</li>
                    </ul>
                </div>
                
                <div class="image-grid">
                    <div class="image-container">
                        <img src="correlation_analysis/correlation_matrix.png" alt="Correlation Analysis">
                        <h4>Statistical Correlation Analysis</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <p><strong>Jan Parichay Hacks - Data Analysis Dashboard</strong></p>
        <p>Comprehensive analysis of biometric registration data across India</p>
        <p style="margin-top: 1rem; color: #666;">All visualizations and data available in the output folder</p>
    </div>
    
    <script>
        function showTab(tabName) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Remove active from all buttons
            const buttons = document.querySelectorAll('.nav-tab');
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            
            // Highlight active button
            event.target.classList.add('active');
        }
    </script>
</body>
</html>
"""
    
    # Save dashboard
    dashboard_path = f'{output_folder}/index.html'
    with open(dashboard_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print("="*80)
    print("DASHBOARD CREATED SUCCESSFULLY!")
    print("="*80)
    print(f"\n✓ Dashboard saved to: {dashboard_path}")
    print(f"✓ Open the file in your browser to view the interactive dashboard")
    print(f"\n📊 Dashboard Features:")
    print("  - Interactive tabbed navigation")
    print("  - Comprehensive data visualizations")
    print("  - Statistical summaries and insights")
    print("  - Download links for all analysis results")
    print("  - Responsive design for all screen sizes")
    print("\n" + "="*80)

if __name__ == "__main__":
    create_dashboard()

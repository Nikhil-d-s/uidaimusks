import React, { useState } from 'react';
import * as _ from 'lodash';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CircularProgress,
  useTheme,
  Stack
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { processCSVFiles, calculateStats, exportToCSV } from '../utils/csvProcessor';
import type { ProcessedRecord, DashboardStats } from '../utils/csvProcessor';

// Colors for visualizations
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function Dashboard() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProcessedRecord[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <Paper sx={{ p: 1.5, border: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>{label}</Typography>
                <Box sx={{ mb: 1, pb: 1, borderBottom: `1px dashed ${theme.palette.divider}` }}>
                     <Typography variant="body2" color="text.secondary">
                        Records: <b>{data.recordsCount?.toLocaleString()}</b>
                    </Typography>
                </Box>
                {payload.map((entry: any, index: number) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Box sx={{ width: 10, height: 10, bgcolor: entry.color, mr: 1, borderRadius: '50%' }} />
                        <Typography variant="body2">
                            {entry.name}: {entry.value.toLocaleString()}
                        </Typography>
                    </Box>
                ))}
            </Paper>
        );
    }
    return null;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setLoading(true);
      try {
        const files = Array.from(event.target.files);
        const processedData = await processCSVFiles(files);
        setData(processedData);
        setStats(calculateStats(processedData));
      } catch (error) {
        console.error("Error processing files:", error);
        alert("Error processing CSV files. Check console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  const SummaryCard = ({ title, value, icon, color }: { title: string, value: string | number, icon: React.ReactNode, color: string }) => (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ 
            position: 'absolute', 
            top: -10, 
            right: -10, 
            opacity: 0.1, 
            transform: 'rotate(-15deg) scale(2.5)',
            color: color
        }}>
            {icon}
        </Box>
        <CardContent>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: color }}>
                {value}
            </Typography>
        </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f8', pb: 4 }}>
      {/* Header */}
      <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 0, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                    Demographic Analytics Dashboard
                </Typography>
                <Typography variant="subtitle1">
                    Insight-driven visualization for population data
                </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={() => exportToCSV(data)}
                    disabled={data.length === 0}
                    sx={{ 
                        color: 'white', 
                        borderColor: 'white',
                        '&:hover': { borderColor: 'grey.100', bgcolor: 'rgba(255,255,255,0.1)' },
                        px: 3,
                        py: 1.5
                    }}
                >
                    Export Data
                </Button>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
                    sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        '&:hover': { bgcolor: 'grey.100' },
                        px: 3,
                        py: 1.5
                    }}
                >
                    {loading ? 'Processing...' : 'Upload CSV Data'}
                    <input type="file" hidden multiple accept=".csv" onChange={handleFileUpload} />
                </Button>
            </Stack>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="xl">
        {!stats ? (
             <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '400px',
                textAlign: 'center',
                opacity: 0.7
            }}>
                <AnalyticsIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    No Data Available
                </Typography>
                <Typography color="text.disabled">
                    Upload CSV files containing demographic data to generate insights
                </Typography>
            </Box>
        ) : (
            <Grid container spacing={3} justifyContent="center">
                {/* Summary Cards */}
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <SummaryCard 
                        title="Total Population" 
                        value={stats.totalPopulation.toLocaleString()} 
                        icon={<GroupIcon />}
                        color={theme.palette.primary.main} 
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <SummaryCard 
                        title="Total Records" 
                        value={stats.totalRecords.toLocaleString()} 
                        icon={<AnalyticsIcon />}
                        color={theme.palette.secondary.main} 
                    />
                </Grid>
                 <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <SummaryCard 
                        title="Districts Covered" 
                        value={_.uniqBy(data, 'district').length} 
                        icon={<LocationOnIcon />}
                        color={theme.palette.success.main} 
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <SummaryCard 
                        title="Avg Population/District" 
                        value={Math.round(stats.avgPerDistrict).toLocaleString()} 
                        icon={<GroupIcon />} // Reuse icon
                        color={theme.palette.warning.main} 
                    />
                </Grid>

                {/* Main Charts Row 1 */}
                <Grid size={{ xs: 12 }}>
                    <Card sx={{ height: 500 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>State-wise Population Breakdown</Typography>
                             <ResponsiveContainer width="100%" height={420}>
                                <BarChart
                                    data={stats.stateData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="state" angle={-45} textAnchor="end" interval={0} />
                                    <YAxis tickFormatter={(val) => `${val / 1000}k`} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '20px' }} />
                                    <Bar dataKey="age0_5" name="0-5 Years" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="age5_17" name="5-17 Years" stackId="a" fill="#82ca9d" />
                                    <Bar dataKey="age18Plus" name="18+ Years" stackId="a" fill="#ffc658" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: 450 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Age Distribution</Typography>
                             <ResponsiveContainer width="100%" height={350}>
                                <PieChart>
                                    <Pie
                                        data={stats.ageDistribution}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="count"
                                    >
                                        {stats.ageDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value: number) => value.toLocaleString()} />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Monthly Trends */}
                <Grid size={{ xs: 12 }}>
                     <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Monthly Enrollment Trends</Typography>
                             <ResponsiveContainer width="100%" height={300}>
                                <AreaChart
                                    data={stats.monthlyTrends}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <Tooltip />
                                    <Area 
                                        type="monotone" 
                                        dataKey="total" 
                                        stroke="#8884d8" 
                                        fillOpacity={1} 
                                        fill="url(#colorTotal)" 
                                        name="Total Enrollments"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Top 10 Districts */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: 450 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Top 10 Districts</Typography>
                             <ResponsiveContainer width="100%" height={380}>
                                <BarChart
                                    layout="vertical"
                                    data={stats.topDistricts}
                                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" tickFormatter={(val) => `${val / 1000}k`} />
                                    <YAxis type="category" dataKey="district" width={100} fontSize={12} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" name="Total Enrollment" fill="#0088FE" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                 {/* Age Group Composition (Top 5 States) */}
                <Grid size={{ xs: 12, md: 6 }}>
                     <Card sx={{ height: 450 }}>
                        <CardContent>
                             <Typography variant="h6" gutterBottom>Demographic Composition (Top 5 States)</Typography>
                             <ResponsiveContainer width="100%" height={380}>
                                <BarChart
                                    data={stats.stateData.slice(0, 5)}
                                    stackOffset="expand"
                                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="state" />
                                    <YAxis tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} />
                                    <Tooltip formatter={(value: number) => `${(value * 100).toFixed(1)}%`} />
                                    <Legend />
                                    <Bar dataKey="age0_5" name="0-5 Years" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="age5_17" name="5-17 Years" stackId="a" fill="#82ca9d" />
                                    <Bar dataKey="age18Plus" name="18+ Years" stackId="a" fill="#ffc658" />
                                </BarChart>
                             </ResponsiveContainer>
                        </CardContent>
                     </Card>
                </Grid>
            </Grid>
        )}
      </Container>
    </Box>
  );
}


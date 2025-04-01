import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  useTheme
} from '@mui/material';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { fetchDashboardData } from '../services/apiService';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  // Chart colors
  const CHART_COLORS = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    '#4fc3f7',
    '#4db6ac',
    '#81c784',
    '#ffb74d'
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    const interval = setInterval(loadData, 30000);

    return () => clearInterval(interval);
  }, []);

  // New dimensions
  const chartHeight = 500;
  const cardMargin = { top: 25, right: 30, left: 20, bottom: 25 };

  if (loading) return <LinearProgress />;
  if (!data) return <Typography>No data available</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ 
        mb: 5, 
        fontWeight: 700,
        color: theme.palette.text.primary
      }}>
        API PERFORMANCE DASHBOARD
      </Typography>

      <Grid container spacing={4}>
        {/* Response Times Chart */}
        <Grid item xs={12} lg={8}>
          <Card sx={{ 
            height: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ 
                mb: 3,
                color: theme.palette.primary.main,
                fontWeight: 600
              }}>
                RESPONSE TIMES (MS)
              </Typography>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <LineChart 
                  data={data.responseTimes}
                  margin={cardMargin}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={theme.palette.divider} 
                  />
                  <XAxis 
                    dataKey="name" 
                    tick={{ 
                      fill: theme.palette.text.secondary,
                      fontSize: '0.95rem'
                    }}
                  />
                  <YAxis 
                    tick={{ 
                      fill: theme.palette.text.secondary,
                      fontSize: '0.95rem'
                    }}
                    label={{
                      value: 'Milliseconds',
                      angle: -90,
                      position: 'insideLeft',
                      fill: theme.palette.text.primary,
                      fontSize: '1.1rem'
                    }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                      color: theme.palette.text.primary,
                      fontSize: '1.1rem',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '40px' }} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={CHART_COLORS[0]} 
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Status Code Distribution */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ 
            height: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ 
                mb: 3,
                color: theme.palette.secondary.main,
                fontWeight: 600
              }}>
                STATUS CODES
              </Typography>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <PieChart>
                  <Pie
                    data={data.statusCodes}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    innerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name}\n${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {data.statusCodes.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={CHART_COLORS[index % CHART_COLORS.length]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                      color: theme.palette.text.primary,
                      fontSize: '1.1rem',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend 
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    wrapperStyle={{
                      paddingLeft: '40px',
                      fontSize: '1rem'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Endpoint Traffic */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ 
                mb: 3,
                color: theme.palette.primary.light,
                fontWeight: 600
              }}>
                ENDPOINT TRAFFIC
              </Typography>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart 
                  data={data.endpointTraffic}
                  margin={cardMargin}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={theme.palette.divider} 
                  />
                  <XAxis 
                    dataKey="name" 
                    tick={{ 
                      fill: theme.palette.text.secondary,
                      fontSize: '0.95rem'
                    }}
                  />
                  <YAxis 
                    tick={{ 
                      fill: theme.palette.text.secondary,
                      fontSize: '0.95rem'
                    }}
                    label={{
                      value: 'Requests',
                      angle: -90,
                      position: 'insideLeft',
                      fill: theme.palette.text.primary,
                      fontSize: '1.1rem'
                    }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                      color: theme.palette.text.primary,
                      fontSize: '1.1rem',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '40px' }} />
                  <Bar 
                    dataKey="requests" 
                    fill={CHART_COLORS[1]} 
                    radius={[6, 6, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
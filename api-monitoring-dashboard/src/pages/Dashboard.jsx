import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  useTheme,
  useMediaQuery
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

// Color palette for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    const interval = setInterval(loadData, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) return <LinearProgress />;
  if (!data) return <Typography>No data available</Typography>;

  // Calculate dynamic height for charts based on screen size
  const chartHeight = isMobile ? 300 : 400;
  const pieChartOuterRadius = isMobile ? 80 : 120;

  return (
    <Box sx={{ 
      p: isMobile ? 2 : 3,
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      <Typography variant="h4" gutterBottom sx={{ 
        mb: 3,
        fontSize: isMobile ? '1.5rem' : '2rem',
        fontWeight: 600
      }}>
        API Monitoring Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {/* Response Times Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            boxShadow: 3
          }}>
            <CardContent sx={{ 
              flexGrow: 1,
              '&:last-child': { 
                paddingBottom: 2 
              }
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Response Times (ms)
              </Typography>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <LineChart 
                  data={data.responseTimes}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: theme.palette.text.secondary }}
                  />
                  <YAxis 
                    tick={{ fill: theme.palette.text.secondary }}
                    label={{ 
                      value: 'ms', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: theme.palette.text.primary
                    }}
                  />
                  <Tooltip 
                    contentStyle={{
                      background: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                      borderRadius: 4
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={theme.palette.primary.main} 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Status Code Distribution */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            height: '100%',
            borderRadius: 2,
            boxShadow: 3
          }}>
            <CardContent sx={{ 
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Status Codes
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <ResponsiveContainer width="100%" height={chartHeight}>
                  <PieChart>
                    <Pie
                      data={data.statusCodes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={pieChartOuterRadius}
                      innerRadius={pieChartOuterRadius - 30}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.statusCodes.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        background: theme.palette.background.paper,
                        borderColor: theme.palette.divider,
                        borderRadius: 4
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Endpoint Traffic */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 2,
            boxShadow: 3
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Endpoint Traffic
              </Typography>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart 
                  data={data.endpointTraffic}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: theme.palette.text.secondary }}
                  />
                  <YAxis 
                    tick={{ fill: theme.palette.text.secondary }}
                    label={{ 
                      value: 'Requests', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: theme.palette.text.primary
                    }}
                  />
                  <Tooltip 
                    contentStyle={{
                      background: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                      borderRadius: 4
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="requests" 
                    fill={theme.palette.secondary.main} 
                    radius={[4, 4, 0, 0]}
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
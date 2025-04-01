import { 
    Box, 
    Typography, 
    Avatar, 
    Card, 
    CardContent, 
    Grid,
    Button
  } from '@mui/material';
  import { PersonSearch, Search, Fingerprint } from '@mui/icons-material';
  import { useTheme } from '@mui/material/styles';
  
  const Sherlock = () => {
    const theme = useTheme();
  
    const tools = [
      {
        name: "Request Tracer",
        icon: <Search sx={{ fontSize: 40 }} />,
        description: "Track individual API requests through your system"
      },
      {
        name: "Anomaly Detector",
        icon: <Fingerprint sx={{ fontSize: 40 }} />,
        description: "Identify unusual patterns in API behavior"
      },
      {
        name: "Dependency Mapper",
        icon: <PersonSearch sx={{ fontSize: 40 }} />,
        description: "Visualize relationships between API endpoints"
      }
    ];
  
    return (
      <Box sx={{ p: 4, mt: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4,
          gap: 3
        }}>
          <Avatar sx={{ 
            bgcolor: theme.palette.primary.main,
            width: 80, 
            height: 80,
            boxShadow: `0 0 0 4px ${theme.palette.background.paper}, 0 0 24px ${theme.palette.primary.main}`
          }}>
            <PersonSearch sx={{ fontSize: 48 }} />
          </Avatar>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Sherlock
            </Typography>
            <Typography variant="h5" sx={{ color: theme.palette.text.secondary }}>
              API Investigation Toolkit
            </Typography>
          </Box>
        </Box>
  
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {tools.map((tool, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 8px 24px ${theme.palette.primary.dark}`
                }
              }}>
                <CardContent sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4,
                  gap: 2
                }}>
                  <Box sx={{
                    p: 2,
                    bgcolor: theme.palette.background.default,
                    borderRadius: '50%',
                    color: theme.palette.primary.main
                  }}>
                    {tool.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {tool.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {tool.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ mt: 'auto' }}
                  >
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Sherlock;
import { List, ListItem, ListItemIcon, ListItemText, Box, Stack } from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Warning as AlertsIcon,
  Settings as SettingsIcon,
  PersonSearch as SherlockBaseIcon,
  Search as MagnifyingGlassIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Custom Sherlock icon component
const SherlockIcon = () => {
  const theme = useTheme();
  return (
    <Stack position="relative" width={24} height={24}>
      <SherlockBaseIcon 
        sx={{ 
          position: 'absolute',
          color: '#64b5f6', // Using the secondary blue color
          fontSize: '1.8rem'
        }} 
      />
      <MagnifyingGlassIcon
        sx={{
          position: 'absolute',
          bottom: -4,
          right: -4,
          color: '#1976d2', // Using the primary blue color
          fontSize: '1.2rem',
          bgcolor: '#1e1e1e', // Matching the paper color
          borderRadius: '50%',
          p: 0.2
        }}
      />
    </Stack>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();

  // Using the same color scheme as the Sherlock component
  const colors = {
    primary: '#1976d2',        // Blue primary color
    secondary: '#64b5f6',      // Lighter blue for secondary
    accent: '#4fc3f7',         // Bright blue for accent
    background: '#121212',     // Dark background
    paper: '#1e1e1e',          // Slightly lighter dark for paper
    textPrimary: '#ffffff',    // White text
    textSecondary: '#bbbbbb',  // Light gray text
    border: '#424242'          // Dark gray border
  };

  const navItems = [
    { path: '/', name: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/analytics', name: 'Analytics', icon: <AnalyticsIcon /> },
    { path: '/alerts', name: 'Alerts', icon: <AlertsIcon /> },
    { path: '/settings', name: 'Settings', icon: <SettingsIcon /> },
    { 
      path: '/sherlock', 
      name: 'Sherlock', 
      icon: <SherlockIcon />,
      sx: {
        '& .MuiListItemIcon-root': {
          minWidth: '46px'
        }
      }
    }
  ];

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        position: 'fixed',
        height: '100vh',
        bgcolor: colors.paper,
        borderRight: `1px solid ${colors.border}`,
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Box sx={{ overflow: 'auto', height: '100%' }}>
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                color: colors.textPrimary,
                '&:hover': {
                  backgroundColor: 'rgba(100, 181, 246, 0.08)', // Using secondary blue with opacity
                  '& .MuiListItemIcon-root': {
                    color: colors.secondary
                  }
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100, 181, 246, 0.16)', // Using secondary blue with opacity
                  '& .MuiListItemIcon-root': {
                    color: colors.secondary
                  },
                  '& .MuiListItemText-primary': {
                    fontWeight: 700
                  }
                },
                ...item.sx
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: '40px',
                color: colors.textSecondary 
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
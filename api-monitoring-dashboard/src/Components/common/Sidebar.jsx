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
          color: theme.palette.secondary.main,
          fontSize: '1.8rem'
        }} 
      />
      <MagnifyingGlassIcon
        sx={{
          position: 'absolute',
          bottom: -4,
          right: -4,
          color: theme.palette.primary.main,
          fontSize: '1.2rem',
          bgcolor: theme.palette.background.paper,
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
        bgcolor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
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
                '&:hover': {
                  backgroundColor: 'rgba(144, 202, 249, 0.08)',
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main
                  }
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(144, 202, 249, 0.16)',
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main
                  }
                },
                ...item.sx
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px' }}>
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
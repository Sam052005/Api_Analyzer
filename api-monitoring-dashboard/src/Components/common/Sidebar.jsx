import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material'
import { 
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Warning as AlertsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

const Sidebar = () => {
  const location = useLocation()
  const theme = useTheme()

  const navItems = [
    { path: '/', name: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/analytics', name: 'Analytics', icon: <AnalyticsIcon /> },
    { path: '/alerts', name: 'Alerts', icon: <AlertsIcon /> },
    { path: '/settings', name: 'Settings', icon: <SettingsIcon /> }
  ]

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
                '&.Mui-selected': {
                  bgcolor: 'rgba(144, 202, 249, 0.16)',
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main
                  }
                },
                '&:hover': {
                  bgcolor: 'rgba(144, 202, 249, 0.08)'
                }
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  color: theme.palette.text.primary
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
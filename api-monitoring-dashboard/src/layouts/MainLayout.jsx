import { Outlet } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Header from '../components/common/Header'
import Sidebar from '../components/common/Sidebar'
import { useTheme } from '@mui/material/styles'

const MainLayout = () => {
  const theme = useTheme()

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      bgcolor: theme.palette.background.default
    }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: { sm: '240px' },
          width: { sm: 'calc(100% - 240px)' },
          marginTop: '64px',
          bgcolor: theme.palette.background.default
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
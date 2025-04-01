import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          marginLeft: '240px', // Match sidebar width
          width: 'calc(100% - 240px)'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
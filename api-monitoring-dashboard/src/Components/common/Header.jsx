import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">API Monitoring Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
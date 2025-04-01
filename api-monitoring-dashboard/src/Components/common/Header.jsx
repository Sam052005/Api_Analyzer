import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: `240px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          API Monitoring Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
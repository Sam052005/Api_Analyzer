import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      dark: '#42a5f5',
      light: '#e3f2fd'
    },
    secondary: {
      main: '#ce93d8',
      dark: '#ab47bc',
      light: '#f3e5f5'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '& .Sherlock-icon': {
            color: '#ff9800',
            transform: 'scale(1.3)',
            marginRight: '8px'
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          '&.Sherlock-avatar': {
            boxShadow: `0 0 0 4px #1e1e1e, 0 0 20px #90caf9`
          }
        }
      }
    }
  }
});

export default darkTheme;
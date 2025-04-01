import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      contrastText: '#000'
    },
    secondary: {
      main: '#ce93d8',
      contrastText: '#000'
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
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem'
    },
    h6: {
      fontWeight: 500
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212',
          '&::-webkit-scrollbar': {
            width: '10px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#1e1e1e'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#555',
            borderRadius: '5px'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.4)'
          }
        }
      }
    }
  }
});

export default darkTheme;
import { createTheme } from '@mui/material/styles';

const sherlockTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B4513', // Sherlock's deerstalker brown
      contrastText: '#fff'
    },
    secondary: {
      main: '#E6C229', // Victorian gold
      contrastText: '#000'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cinzel", serif',
    },
    h2: {
      fontFamily: '"Cinzel", serif',
    },
    h3: {
      fontFamily: '"Cinzel", serif',
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          '&.Sherlock-tool': {
            border: '1px solid #8B4513',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(139, 69, 19, 0.5)'
            }
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&.Sherlock-button': {
            borderColor: '#E6C229',
            color: '#E6C229',
            fontFamily: '"Cinzel", serif',
            letterSpacing: '1px',
            '&:hover': {
              borderColor: '#FFD700'
            }
          }
        },
        contained: {
          '&.Sherlock-float': {
            boxShadow: '0 4px 12px rgba(139, 69, 19, 0.5)'
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          '&.Sherlock-avatar': {
            boxShadow: '0 0 10px #8B4513'
          }
        }
      }
    }
  }
});

export default sherlockTheme;
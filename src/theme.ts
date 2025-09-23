import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0'
    },
    secondary: {
      main: '#14b8a6',
      light: '#5eead4',
      dark: '#0f766e'
    },
    background: {
      default: '#f6f7fb',
      paper: '#ffffff'
    },
    success: {
      main: '#2e7d32'
    },
    error: {
      main: '#d32f2f'
    },
    warning: {
      main: '#ed6c02'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '1.15rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '0.95rem'
    },
    button: {
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #f6f7fb 0%, #eef3ff 100%)',
          minHeight: '100vh'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow:
            '0 20px 50px rgba(25, 118, 210, 0.08), 0 6px 16px rgba(20, 184, 166, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow:
              '0 24px 60px rgba(25, 118, 210, 0.12), 0 10px 22px rgba(20, 184, 166, 0.12)'
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 12,
          paddingBottom: 12
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          fontWeight: 500
        }
      }
    }
  }
})

export default theme

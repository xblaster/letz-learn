import { createTheme } from '@mui/material/styles'

// Dark theme vibrant avec palette colorée moderne pour l'engagement utilisateur
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff', // Cyan électrique vibrant
      light: '#5dffff',
      dark: '#00a3cc',
      contrastText: '#0a0a0a'
    },
    secondary: {
      main: '#ff6b35', // Orange énergique
      light: '#ff9d6c',
      dark: '#c73e00',
      contrastText: '#ffffff'
    },
    tertiary: {
      main: '#c877ff', // Violet moderne
      light: '#ffaaff',
      dark: '#9544cc'
    },
    background: {
      default: '#0a0a0f', // Noir profond avec légère teinte bleue
      paper: '#16161f', // Gris anthracite foncé
    },
    surface: {
      main: '#1a1a24', // Surface principale
      variant: '#212130' // Surface variante plus claire
    },
    success: {
      main: '#00ff88', // Vert néon vibrant
      light: '#5affb0',
      dark: '#00cc6a'
    },
    error: {
      main: '#ff4757', // Rouge corail moderne
      light: '#ff7675',
      dark: '#d63031'
    },
    warning: {
      main: '#ffa726', // Orange amber
      light: '#ffcc80',
      dark: '#ff8f00'
    },
    info: {
      main: '#42a5f5', // Bleu info moderne
      light: '#80d6ff',
      dark: '#1976d2'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    // Couleurs engageantes pour gamification
    accent: {
      neon: '#00ff9f', // Vert néon
      electric: '#00d4ff', // Bleu électrique
      magenta: '#ff0080', // Magenta vibrant
      gold: '#ffd700', // Or brillant
      cosmic: '#7c3aed', // Violet cosmique
    },
    gradient: {
      primary: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
      secondary: 'linear-gradient(135deg, #ff6b35 0%, #f093fb 100%)',
      success: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
      cosmic: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      neon: 'linear-gradient(135deg, #00ff9f 0%, #00d4ff 100%)'
    }
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #00d4ff 0%, #c877ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#ffffff'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#ffffff'
    },
    h5: {
      fontSize: '1.15rem',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.9)'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.9)'
    },
    body1: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.87)',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.95rem',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1.5
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em'
    }
  },
  shape: {
    borderRadius: 20
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0a0a0f 0%, #16161f 50%, #1a1a24 100%)',
          minHeight: '100vh',
          overflowX: 'hidden', // Éliminer scroll horizontal
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.05)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #00d4ff, #c877ff)',
            borderRadius: '10px'
          }
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#00d4ff rgba(255, 255, 255, 0.05)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundColor: 'rgba(22, 22, 31, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0 20px 50px rgba(0, 212, 255, 0.15),
            0 6px 16px rgba(200, 119, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: `
              0 32px 80px rgba(0, 212, 255, 0.25),
              0 12px 24px rgba(200, 119, 255, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `,
            border: '1px solid rgba(0, 212, 255, 0.3)'
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
          borderRadius: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 14,
          paddingBottom: 14,
          minHeight: 48, // Touch-friendly height
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            transform: 'translateY(-2px)',
            filter: 'brightness(1.1)'
          },
          '&:active': {
            transform: 'translateY(0px)',
            transition: 'all 0.1s'
          }
        },
        contained: {
          background: 'linear-gradient(135deg, #00d4ff 0%, #c877ff 100%)',
          color: '#0a0a0f',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #5dffff 0%, #ffaaff 100%)',
            boxShadow: '0 8px 32px rgba(0, 212, 255, 0.4)'
          }
        },
        outlined: {
          borderColor: 'rgba(0, 212, 255, 0.5)',
          color: '#00d4ff',
          borderWidth: 2,
          '&:hover': {
            borderColor: '#00d4ff',
            backgroundColor: 'rgba(0, 212, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: 'rgba(22, 22, 31, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          fontWeight: 500,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(0, 212, 255, 0.15)',
          color: '#00d4ff',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'rgba(0, 212, 255, 0.25)',
            transform: 'scale(1.05)'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
        }
      }
    },
    // Mobile-optimized Typography
    MuiTypography: {
      styleOverrides: {
        root: {
          '@media (max-width: 768px)': {
            fontSize: '0.9em' // Légèrement plus petit sur mobile
          }
        }
      }
    }
  },
  // Breakpoints optimisés pour mobile-first
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  // Custom spacing pour touch-friendly design
  spacing: 8
})

// Extend theme with custom properties
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    surface: Palette['primary']
    accent: {
      neon: string
      electric: string
      magenta: string
      gold: string
      cosmic: string
    }
    gradient: {
      primary: string
      secondary: string
      success: string
      cosmic: string
      neon: string
    }
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
    surface?: PaletteOptions['primary']
    accent?: {
      neon: string
      electric: string
      magenta: string
      gold: string
      cosmic: string
    }
    gradient?: {
      primary: string
      secondary: string
      success: string
      cosmic: string
      neon: string
    }
  }
}

export default darkTheme
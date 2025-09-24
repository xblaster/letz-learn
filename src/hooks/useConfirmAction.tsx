import React, { useState, useCallback, ReactNode } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  Slide,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

// Animation de transition fluide pour mobile
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface ConfirmationConfig {
  title: string
  message: string | ReactNode
  confirmText?: string
  cancelText?: string
  type?: 'warning' | 'info' | 'success' | 'danger'
  icon?: ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullScreen?: boolean
}

interface ConfirmActionHookReturn {
  confirm: (config: ConfirmationConfig) => Promise<boolean>
  ConfirmationDialog: React.FC
  isOpen: boolean
}

const useConfirmAction = (): ConfirmActionHookReturn => {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState<ConfirmationConfig | null>(null)
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const confirm = useCallback((confirmConfig: ConfirmationConfig): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfig({
        confirmText: 'Confirmer',
        cancelText: 'Annuler',
        type: 'info',
        maxWidth: 'sm',
        fullScreen: isMobile, // Full screen sur mobile pour meilleure UX
        ...confirmConfig
      })
      setResolver(() => resolve)
      setIsOpen(true)
    })
  }, [isMobile])

  const handleConfirm = useCallback(() => {
    if (resolver) {
      resolver(true)
      setResolver(null)
    }
    setIsOpen(false)
    setConfig(null)
  }, [resolver])

  const handleCancel = useCallback(() => {
    if (resolver) {
      resolver(false)
      setResolver(null)
    }
    setIsOpen(false)
    setConfig(null)
  }, [resolver])

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'warning':
        return <WarningAmberRoundedIcon sx={{ color: theme.palette.warning.main, fontSize: 40 }} />
      case 'danger':
        return <WarningAmberRoundedIcon sx={{ color: theme.palette.error.main, fontSize: 40 }} />
      case 'success':
        return <CheckCircleOutlineIcon sx={{ color: theme.palette.success.main, fontSize: 40 }} />
      default:
        return <InfoOutlinedIcon sx={{ color: theme.palette.info.main, fontSize: 40 }} />
    }
  }

  const getButtonColor = (type?: string) => {
    switch (type) {
      case 'warning':
        return 'warning'
      case 'danger':
        return 'error'
      case 'success':
        return 'success'
      default:
        return 'primary'
    }
  }

  const ConfirmationDialog: React.FC = () => {
    if (!config) return null

    return (
      <Dialog
        open={isOpen}
        onClose={handleCancel}
        TransitionComponent={Transition}
        maxWidth={config.maxWidth}
        fullWidth
        fullScreen={config.fullScreen}
        PaperProps={{
          sx: {
            borderRadius: config.fullScreen ? 0 : 24,
            background: theme.palette.mode === 'dark'
              ? 'rgba(22, 22, 31, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 20px 50px rgba(0, 212, 255, 0.15), 0 6px 16px rgba(200, 119, 255, 0.1)'
              : '0 20px 50px rgba(25, 118, 210, 0.08), 0 6px 16px rgba(20, 184, 166, 0.06)',
            // Mobile-optimized padding
            padding: isMobile ? theme.spacing(2) : theme.spacing(3)
          }
        }}
        // Touch-friendly props pour mobile
        disableEscapeKeyDown={false}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        {config.fullScreen && (
          <IconButton
            aria-label="fermer"
            onClick={handleCancel}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.text.secondary,
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>
        )}

        <DialogTitle
          id="confirmation-dialog-title"
          sx={{
            textAlign: 'center',
            pb: 2,
            pt: config.fullScreen ? 6 : 3
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}>
            {config.icon || getTypeIcon(config.type)}
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                textAlign: 'center'
              }}
            >
              {config.title}
            </Typography>
          </Box>
        </DialogTitle>

        <DialogContent
          id="confirmation-dialog-description"
          sx={{
            textAlign: 'center',
            px: isMobile ? 2 : 4,
            pb: 3
          }}
        >
          {typeof config.message === 'string' ? (
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: isMobile ? '1rem' : '1.1rem'
              }}
            >
              {config.message}
            </Typography>
          ) : (
            config.message
          )}
        </DialogContent>

        <DialogActions
          sx={{
            px: isMobile ? 2 : 4,
            pb: isMobile ? 3 : 4,
            gap: 2,
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center'
          }}
        >
          <Button
            onClick={handleCancel}
            variant="outlined"
            size={isMobile ? "large" : "medium"}
            sx={{
              minWidth: isMobile ? '100%' : 120,
              minHeight: 48, // Touch-friendly
              borderRadius: 16,
              fontWeight: 600,
              textTransform: 'none',
              order: isMobile ? 2 : 1
            }}
          >
            {config.cancelText}
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color={getButtonColor(config.type) as any}
            size={isMobile ? "large" : "medium"}
            autoFocus
            sx={{
              minWidth: isMobile ? '100%' : 120,
              minHeight: 48, // Touch-friendly
              borderRadius: 16,
              fontWeight: 700,
              textTransform: 'none',
              order: isMobile ? 1 : 2,
              background: theme.palette.mode === 'dark' && config.type !== 'danger'
                ? 'linear-gradient(135deg, #00d4ff 0%, #c877ff 100%)'
                : undefined,
              color: theme.palette.mode === 'dark' && config.type !== 'danger'
                ? '#0a0a0f'
                : undefined,
              '&:hover': {
                background: theme.palette.mode === 'dark' && config.type !== 'danger'
                  ? 'linear-gradient(135deg, #5dffff 0%, #ffaaff 100%)'
                  : undefined,
                transform: 'translateY(-2px)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(0, 212, 255, 0.4)'
                  : undefined
              }
            }}
          >
            {config.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return { confirm, ConfirmationDialog, isOpen }
}

// Hook simplifié pour confirmations rapides
export const useQuickConfirm = () => {
  const { confirm } = useConfirmAction()

  const confirmNavigation = useCallback((destination: string) => {
    return confirm({
      title: 'Changer de section',
      message: `Voulez-vous vraiment naviguer vers "${destination}" ? Vos progrès actuels seront sauvegardés.`,
      type: 'info',
      confirmText: 'Continuer',
      cancelText: 'Rester ici'
    })
  }, [confirm])

  const confirmUnitStart = useCallback((unitName: string) => {
    return confirm({
      title: 'Commencer une nouvelle unité',
      message: `Vous allez commencer l'unité "${unitName}". Êtes-vous prêt(e) à relever ce défi ?`,
      type: 'success',
      confirmText: 'C\'est parti !',
      cancelText: 'Pas maintenant'
    })
  }, [confirm])

  const confirmQuizReset = useCallback(() => {
    return confirm({
      title: 'Recommencer le quiz',
      message: 'Attention ! Cela effacera vos réponses actuelles. Voulez-vous vraiment recommencer ?',
      type: 'warning',
      confirmText: 'Recommencer',
      cancelText: 'Continuer le quiz'
    })
  }, [confirm])

  const confirmDataReset = useCallback(() => {
    return confirm({
      title: 'Réinitialiser les données',
      message: 'ATTENTION : Cette action supprimera définitivement tous vos progrès. Cette action est irréversible.',
      type: 'danger',
      confirmText: 'Supprimer tout',
      cancelText: 'Annuler'
    })
  }, [confirm])

  return {
    confirmNavigation,
    confirmUnitStart,
    confirmQuizReset,
    confirmDataReset
  }
}

export default useConfirmAction
import { useCallback } from 'react'
import { useAudioInteraction } from './useAudioInteraction'
import {
  playCompletionFanfare,
  playDebugTone,
  playErrorTone,
  playSuccessChime,
  playTransitionTone
} from '../utils/soundEffects'

export const useSoundEffects = () => {
  const { playAudioSafely } = useAudioInteraction()

  const playSuccessSound = useCallback(() => playAudioSafely(() => playSuccessChime()), [playAudioSafely])

  const playErrorSound = useCallback(() => playAudioSafely(() => playErrorTone()), [playAudioSafely])

  const playTransitionSound = useCallback(() => playAudioSafely(() => playTransitionTone()), [playAudioSafely])

  const playCompletionSound = useCallback(() => playAudioSafely(() => playCompletionFanfare()), [playAudioSafely])

  const playTestTone = useCallback(() => playAudioSafely(() => playDebugTone()), [playAudioSafely])

  return {
    playSuccessSound,
    playErrorSound,
    playTransitionSound,
    playCompletionSound,
    playTestTone
  }
}

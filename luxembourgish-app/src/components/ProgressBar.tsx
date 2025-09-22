import React from 'react'

interface ProgressBarProps {
  progress: number // 0-100
  currentStep: number
  totalSteps: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentStep,
  totalSteps
}) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-info">
        <span className="progress-text">
          {currentStep} / {totalSteps}
        </span>
        <span className="progress-percentage">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        >
          <div className="progress-bar-glow"></div>
        </div>
      </div>

      {/* Indicateurs de steps */}
      <div className="progress-steps">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`progress-step ${
              index < currentStep - 1 ? 'completed' :
              index === currentStep - 1 ? 'current' : 'pending'
            }`}
          >
            {index < currentStep - 1 ? '✓' : index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
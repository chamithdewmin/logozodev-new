import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Stepper.css';

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  disableStepIndicators = false,
  renderStepIndicator,
  validateStep = () => true,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = newStep => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      // Validate current step before moving forward
      if (validateStep(currentStep)) {
        const nextStep = currentStep + 1;
        setDirection(1);
        updateStep(nextStep);
      }
    }
  };

  const handleComplete = () => {
    // Validate final step before completing
    if (validateStep(currentStep)) {
      setDirection(1);
      updateStep(totalSteps + 1);
    }
  };

  const handleStepClick = (clickedStep) => {
    // Only allow clicking on completed steps or going back
    if (clickedStep < currentStep) {
      setDirection(-1);
      updateStep(clickedStep);
    } else if (clickedStep === currentStep + 1) {
      // If clicking next step, validate current step first
      if (validateStep(currentStep)) {
        setDirection(1);
        updateStep(clickedStep);
      }
    }
  };

  return (
    <div className="stepper-outer-container" {...rest}>
      <div className={`stepper-circle-container ${stepCircleContainerClassName}`}>
        <div className={`stepper-indicator-row ${stepContainerClassName}`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;

            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: handleStepClick
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={handleStepClick}
                  />
                )}

                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`stepper-content-default ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={`stepper-footer-container ${footerClassName}`}>
            <div className={`stepper-footer-nav ${currentStep !== 1 ? 'spread' : 'end'}`}>
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={`stepper-back-button ${currentStep === 1 ? 'inactive' : ''}`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button 
                onClick={isLastStep ? handleComplete : handleNext} 
                className="stepper-next-button" 
                {...nextButtonProps}
              >
                {isLastStep ? 'Complete' : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  const [parentHeight, setParentHeight] = useState(0);
  const wrapperRef = useRef(null);
  const [isReviewStep, setIsReviewStep] = useState(false);

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      const hasReview = wrapperRef.current.querySelector('.application-summary');
      setIsReviewStep(!!hasReview);
    }
  }, [currentStep, children]);

  return (
    <motion.div
      ref={wrapperRef}
      className={className}
      style={{ 
        position: 'relative', 
        overflow: isReviewStep ? 'visible' : 'hidden',
        height: isReviewStep ? '100%' : 'auto'
      }}
      animate={{ height: isCompleted ? 0 : (isReviewStep ? '100%' : parentHeight) }}
      transition={{ type: 'spring', duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={h => {
            if (!isReviewStep) {
              setParentHeight(h);
            }
          }}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);
  const [isReviewStep, setIsReviewStep] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current) {
      // Check if this is the review step (step 5)
      const hasReview = containerRef.current.querySelector('.application-summary');
      setIsReviewStep(!!hasReview);
      
      if (hasReview) {
        onHeightReady('100%');
      } else {
        onHeightReady(containerRef.current.offsetHeight);
      }
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ 
        position: isReviewStep ? 'relative' : 'absolute', 
        left: 0, 
        right: 0, 
        top: 0, 
        width: '100%',
        height: isReviewStep ? '100%' : 'auto'
      }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: dir => ({
    x: dir >= 0 ? '-100%' : '100%',
    opacity: 0
  }),
  center: {
    x: '0%',
    opacity: 1
  },
  exit: dir => ({
    x: dir >= 0 ? '50%' : '-50%',
    opacity: 0
  })
};

export function Step({ children }) {
  return <div className="stepper-step-default">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div onClick={handleClick} className="stepper-indicator" animate={status} initial={false}>
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: '#262626', color: '#B3B3B3' },
          active: { scale: 1, backgroundColor: '#CAFF33', color: '#000000' },
          complete: { scale: 1, backgroundColor: '#27ff4b', color: '#FFFFFF' }
        }}
        transition={{ duration: 0.3 }}
        className="stepper-indicator-inner"
      >
        {status === 'complete' ? (
          <CheckIcon className="stepper-check-icon" />
        ) : status === 'active' ? (
          <div className="stepper-active-dot" />
        ) : (
          <span className="stepper-step-number">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: '#262626' },
    complete: { width: '100%', backgroundColor: '#CAFF33' }
  };

  return (
    <div className="stepper-connector">
      <motion.div
        className="stepper-connector-inner"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? 'complete' : 'incomplete'}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}


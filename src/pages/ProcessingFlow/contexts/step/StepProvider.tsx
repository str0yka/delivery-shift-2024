import { useState } from 'react';

import { StepContext } from './StepContext';
import type { StepState } from './StepContext';
import { useStep } from './useStep';

interface StepProviderProps {
  defaultStep?: number;
  children: React.ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({ defaultStep, children }) => {
  const [step, setStep] = useState<StepState['step']>(defaultStep || 0);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <StepContext.Provider value={{ step, setStep }}>{children}</StepContext.Provider>;
};

interface StepItemProps {
  step: number;
  children: React.ReactNode;
}

export const StepItem: React.FC<StepItemProps> = ({ step, children }) => {
  const { step: stepState } = useStep();

  return step === stepState ? children : null;
};

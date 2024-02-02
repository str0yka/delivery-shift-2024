import { createContext } from 'react';

export interface StepState {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const StepContext = createContext<StepState>({} as StepState);

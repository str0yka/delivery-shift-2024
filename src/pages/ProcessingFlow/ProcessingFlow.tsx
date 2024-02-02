import { STEP } from './constants';
import { OrderProvider, StepProvider, StepItem } from './contexts';
import { CalculationPage, DeliveryMethodPage } from './steps';

export const ProcessingFlow = () => (
  <OrderProvider>
    <StepProvider defaultStep={STEP.CALCULATION}>
      <StepItem step={STEP.CALCULATION}>
        <CalculationPage />
      </StepItem>
      <StepItem step={STEP.DELIVERY_METHOD}>
        <DeliveryMethodPage />
      </StepItem>
    </StepProvider>
  </OrderProvider>
);

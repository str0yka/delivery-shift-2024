import { STEP } from './constants';
import { OrderProvider, StepProvider, StepItem } from './contexts';
import {
  CalculationPage,
  CheckOrderPage,
  DeliveryMethodPage,
  PayerFormPage,
  ReceiverAddressFormPage,
  ReceiverFormPage,
  SendOrderPage,
  SenderAddressFormPage,
  SenderFormPage,
} from './steps';

export const ProcessingFlow = () => (
  <OrderProvider>
    <StepProvider defaultStep={STEP.CALCULATION}>
      <StepItem step={STEP.CALCULATION}>
        <CalculationPage />
      </StepItem>
      <StepItem step={STEP.DELIVERY_METHOD}>
        <DeliveryMethodPage />
      </StepItem>
      <StepItem step={STEP.RECEIVER}>
        <ReceiverFormPage />
      </StepItem>
      <StepItem step={STEP.SENDER}>
        <SenderFormPage />
      </StepItem>
      <StepItem step={STEP.SENDER_ADDRESS}>
        <SenderAddressFormPage />
      </StepItem>
      <StepItem step={STEP.RECEIVER_ADDRESS}>
        <ReceiverAddressFormPage />
      </StepItem>
      <StepItem step={STEP.PAYER}>
        <PayerFormPage />
      </StepItem>
      <StepItem step={STEP.CHECK_ORDER}>
        <CheckOrderPage />
      </StepItem>
      <StepItem step={STEP.SEND_ORDER}>
        <SendOrderPage />
      </StepItem>
    </StepProvider>
  </OrderProvider>
);

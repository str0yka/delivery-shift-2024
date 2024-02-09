import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDeliveryPackageTypesQuery, useDeliveryPointsQuery } from '~/utils/api';

import { STEP } from '../../../constants';
import { useStep, useOrder } from '../../../contexts';

const TAB_VALUE = {
  SELECTED_PACKAGE: 'SELECTED_PACKAGE',
  EXACT_PACKAGE: 'EXACT_PACKAGE',
} as const;

export type TabsValues = (typeof TAB_VALUE)[keyof typeof TAB_VALUE];

interface CalculationFormValues {
  package?: {
    id?: string;
    name?: string;
    length?: number;
    width?: number;
    weight?: number;
    height?: number;
  };
  senderPoint?: DeliveryPoint;
  receiverPoint?: DeliveryPoint;
}

const isDeliveryPackageValuesValid = (
  deliveryPackage: CalculationFormValues['package'],
): deliveryPackage is WithRequiredFields<
  NonNullable<CalculationFormValues['package']>,
  'height' | 'length' | 'weight' | 'width'
> =>
  !!deliveryPackage?.height &&
  !!deliveryPackage?.length &&
  !!deliveryPackage?.weight &&
  !!deliveryPackage?.width;

const generateDeliveryPackageString = (deliveryPackage: CalculationFormValues['package']) =>
  isDeliveryPackageValuesValid(deliveryPackage)
    ? `${deliveryPackage.name ? `${deliveryPackage.name}, ` : ''}${deliveryPackage.length}x${deliveryPackage.width}x${deliveryPackage.height} см`
    : 'Не выбрано';

export const useCalculationPage = () => {
  const { setStep } = useStep();
  const { setOrder } = useOrder();

  const [tabValue, setTabValue] = useState<TabsValues>(TAB_VALUE.SELECTED_PACKAGE);

  const deliveryPointsQuery = useDeliveryPointsQuery();
  const deliveryPackageTypesQuery = useDeliveryPackageTypesQuery();

  const calculationForm = useForm<CalculationFormValues>();
  const calculationFormWatchFields = calculationForm.watch();

  const onSubmit = calculationForm.handleSubmit(
    ({ package: deliveryPackage, receiverPoint, senderPoint }) => {
      if (isDeliveryPackageValuesValid(deliveryPackage) && receiverPoint && senderPoint) {
        setOrder((prevOrder) => ({
          ...prevOrder,
          receiverPoint,
          senderPoint,
          package: deliveryPackage,
        }));
        setStep(STEP.DELIVERY_METHOD);
      }
    },
  );

  const onSenderPointValueChange = (value: string) => {
    const senderPoint = deliveryPointsQuery.data?.points.find((point) => point.id === value);

    if (senderPoint) {
      calculationForm.setValue('senderPoint', senderPoint);
    }
  };

  const onReceiverPointValueChange = (value: string) => {
    const receiverPoint = deliveryPointsQuery.data?.points.find((point) => point.id === value);

    if (receiverPoint) {
      calculationForm.setValue('receiverPoint', receiverPoint);
    }
  };

  const onDeliveryPackageTypeValueChange = (value: string) => {
    const deliveryPackageType = deliveryPackageTypesQuery.data?.packages.find(
      (packageType) => packageType.id === value,
    );

    if (deliveryPackageType) {
      calculationForm.setValue('package', deliveryPackageType);
    }
  };

  const onTabsValueChange = (value: string) => {
    calculationForm.setValue('package', undefined);
    setTabValue(value as TabsValues);
  };

  return {
    state: {
      TAB_VALUE,
      tabValue,
      deliveryPointsQuery,
      deliveryPackageTypesQuery,
      calculationForm,
      calculationFormWatchFields,
    },
    functions: {
      setStep,
      setOrder,
      setTabValue,
      onSubmit,
      onSenderPointValueChange,
      onReceiverPointValueChange,
      onDeliveryPackageTypeValueChange,
      onTabsValueChange,
      isDeliveryPackageValuesValid,
      generateDeliveryPackageString,
    },
  };
};

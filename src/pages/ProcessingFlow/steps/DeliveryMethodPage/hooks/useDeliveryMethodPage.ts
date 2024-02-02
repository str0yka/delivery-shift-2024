import { useEffect } from 'react';

import { useDeliveryCalcMutation } from '~/utils/api';

import { STEP } from '../../../constants';
import { useOrder, useStep } from '../../../contexts';

export const useDeliveryMethodPage = () => {
  const { setStep } = useStep();
  const { order, setOrder } = useOrder();

  const deliveryCalcMutation = useDeliveryCalcMutation();

  useEffect(() => {
    if (order.receiverPoint && order.senderPoint && order.package) {
      deliveryCalcMutation.mutateAsync({
        data: {
          package: order.package,
          receiverPoint: order.receiverPoint,
          senderPoint: order.senderPoint,
        },
      });
    } else {
      setStep(STEP.CALCULATION);
    }
  }, [order]);

  const onClickDeliveryOption = (deliveryOption: DeliveryOption) => {
    setOrder((prevOrder) => ({ ...prevOrder, option: deliveryOption }));
    setStep(STEP.RECEIVER);
  };

  return {
    state: {
      order,
      deliveryCalcMutation,
    },
    functions: {
      setStep,
      onClickDeliveryOption,
    },
  };
};

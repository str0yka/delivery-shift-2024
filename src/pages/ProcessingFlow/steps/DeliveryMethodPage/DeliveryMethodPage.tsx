import { useEffect } from 'react';

import { IconBus, IconPlane } from '~/components/ui/icons';
import { useDeliveryCalcMutation } from '~/utils/api';
import { cn } from '~/utils/helpers';

import { STEP } from '../../constants';
import { useOrder, useStep } from '../../contexts';

export const DeliveryMethodPage = () => {
  const { setStep } = useStep();
  const { order } = useOrder();

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

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Профиль</h1>
      <div className="mt-6 flex gap-6">
        {deliveryCalcMutation.data?.options.map((deliveryOption) => (
          <button
            key={deliveryOption.id}
            type="button"
            className={cn(
              'group flex grow flex-col gap-6 rounded-3xl border border-extralight p-4 text-xs text-tertiary',
              'hover:bg-brand hover:text-invert',
            )}
          >
            <div className="flex gap-4">
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-quartenery',
                  'group-hover:bg-primary group-hover:text-primary',
                )}
              >
                {deliveryOption.type === 'EXPRESS' && <IconPlane />}
                {deliveryOption.type === 'DEFAULT' && <IconBus />}
              </div>
              <div className="flex grow flex-col items-start gap-2">
                {deliveryOption.name}
                <span
                  className={cn('text-xl font-semibold text-primary', 'group-hover:text-invert')}
                >
                  {deliveryOption.price} ₽
                </span>
              </div>
            </div>
            {deliveryOption.days} раб. дней
          </button>
        ))}
      </div>
    </main>
  );
};

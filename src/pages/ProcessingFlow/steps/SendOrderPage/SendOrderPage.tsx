import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '~/components/ui';
import { IconCheck } from '~/components/ui/icons';
import { LoadingPage } from '~/pages';
import { PostDeliveryOrderRequestBody, useDeliveryOrderMutation } from '~/utils/api';
import { ROUTE } from '~/utils/constants';

import { STEP } from '../../constants';
import { OrderState, useOrder, useStep } from '../../contexts';

const checkIsOrderValid = (order: OrderState['order']): order is PostDeliveryOrderRequestBody =>
  !!order.senderPoint &&
  !!order.senderAddress &&
  !!order.sender &&
  !!order.receiverPoint &&
  !!order.receiverAddress &&
  !!order.receiver &&
  !!order.payer &&
  !!order.option;

export const SendOrderPage = () => {
  const { setStep } = useStep();
  const { order, setOrder } = useOrder();

  const deliveryOrderMutation = useDeliveryOrderMutation();

  useEffect(() => {
    if (checkIsOrderValid(order)) {
      deliveryOrderMutation.mutateAsync({ data: order });
    }
  }, [order]);

  useEffect(() => {
    if (!deliveryOrderMutation.isLoading) {
      setOrder({});
    }
  }, [deliveryOrderMutation.isLoading]);

  if (deliveryOrderMutation.isLoading) return <LoadingPage />;

  return (
    <main className="flex grow items-center justify-center">
      <div className="flex max-w-[328px] flex-col gap-10">
        {deliveryOrderMutation.isSuccess && (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full  bg-green-400 text-invert">
                <IconCheck className="h-8 w-8" />
              </div>
              <span className="text-xl font-semibold">Заявка отправлена</span>
              <span className="text-lg text-secondary">
                Вы можете оплатить ваш заказ в разделе «Профиль»
              </span>
            </div>
            <Link
              className="w-full"
              to={ROUTE.HISTORY}
            >
              <Button className="w-full">Посмотреть статус</Button>
            </Link>
          </>
        )}
        {deliveryOrderMutation.isError && (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xl font-semibold">Что-то пошло не так</span>
              <span className="text-lg text-secondary">
                Вы можете попробовать заполнить заявку ещё раз
              </span>
            </div>
            <Button
              className="w-full"
              onClick={() => setStep(STEP.CALCULATION)}
            >
              На главную
            </Button>
          </>
        )}
      </div>
    </main>
  );
};

import { Button } from '~/components/ui';

import { STEP } from '../../constants';
import { useOrder, useStep } from '../../contexts';

export const CheckOrderPage = () => {
  const { order } = useOrder();
  const { setStep } = useStep();

  return (
    <main className="container mt-12 pb-8">
      <h1 className="text-2xl font-bold">Куда доставлять</h1>
      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-3xl bg-secondary px-8 py-6">
          <span className="font-medium">Получатель</span>
          <div className="flex gap-4">
            <div className="flex w-[296px] flex-col gap-0.5">
              <span className="text-tertiary">ФИО</span>
              {order.receiver?.lastname} {order.receiver?.firstname} {order.receiver?.middlename}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-tertiary">Телефон</span>
              {order.receiver?.phone}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl bg-secondary px-8 py-6">
          <span className="font-medium">Отправитель</span>
          <div className="flex gap-4">
            <div className="flex w-[296px] flex-col gap-0.5">
              <span className="text-tertiary">ФИО</span>
              {order.sender?.lastname} {order.sender?.firstname} {order.sender?.middlename}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-tertiary">Телефон</span>
              {order.sender?.phone}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl bg-secondary px-8 py-6">
          <span className="font-medium">Откуда забирать</span>
          <div className="flex gap-4">
            <div className="flex w-[296px] flex-col gap-0.5">
              <span className="text-tertiary">Адрес</span>
              ул. {order.senderAddress?.street}, д. {order.senderAddress?.house}
            </div>
            {order.senderAddress?.comment && (
              <div className="flex flex-col gap-0.5">
                <span className="text-tertiary">Заметка</span>
                {order.senderAddress.comment}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl bg-secondary px-8 py-6">
          <span className="font-medium">Куда доставить</span>
          <div className="flex gap-4">
            <div className="flex w-[296px] flex-col gap-0.5">
              <span className="text-tertiary">Адрес</span>
              ул. {order.receiverAddress?.street}, д. {order.receiverAddress?.house}
            </div>
            {order.receiverAddress?.comment && (
              <div className="flex flex-col gap-0.5">
                <span className="text-tertiary">Заметка</span>
                {order.receiverAddress.comment}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end py-3 text-tertiary">
          <span className="text-xl font-semibold text-primary">Итого: {order.option?.price} ₽</span>
          <span className="mt-4">Тариф: {order.option?.name}</span>
          <span className="mt-1">Срок: {order.option?.days} раб. дней</span>
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="w-[328px]"
            colour="secondary"
            variant="outline"
            onClick={() => setStep(STEP.RECEIVER_ADDRESS)}
          >
            Назад
          </Button>
          <Button
            className="w-[328px]"
            type="submit"
          >
            Продолжить
          </Button>
        </div>
      </div>
    </main>
  );
};

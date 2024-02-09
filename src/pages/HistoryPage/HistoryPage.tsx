import { Fragment } from 'react';

import { Divider } from '~/components/ui';
import { useDeliveryOrdersQuery } from '~/utils/api';

export const HistoryPage = () => {
  const deliveryOrdersQuery = useDeliveryOrdersQuery();

  return (
    <main className="container mt-6 flex flex-col gap-6">
      <div className="grid grid-cols-7 text-sm text-tertiary">
        <span>Номер заказа</span>
        <span className="col-span-2">Статус</span>
        <span className="col-span-2">Адрес доставки</span>
        <span className="col-span-2">Тип доставки</span>
      </div>
      {deliveryOrdersQuery.data?.orders.map((deliveryOrder, index) => (
        <Fragment key={index}>
          <Divider />
          <div className="grid grid-cols-7">
            <span>{index + 1}</span>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                {/* <div className="aspect-square h-2 w-2 rounded-full bg-green-400" /> */}
                Статус доставки: {deliveryOrder.status}
              </div>
            </div>
            <span className="col-span-2">
              {deliveryOrder.receiverPoint.name}, ул. {deliveryOrder.receiverAddress.street}, д.{' '}
              {deliveryOrder.receiverAddress.house}
            </span>
            <span className="col-span-2">Тип доставки</span>
          </div>
        </Fragment>
      ))}
    </main>
  );
};

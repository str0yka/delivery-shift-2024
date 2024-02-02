import { Divider } from '~/components/ui';

export const HistoryPage = () => (
  <main className="container mt-6 flex flex-col gap-6">
    <div className="grid grid-cols-7 text-sm text-tertiary">
      <span>Номер заказа</span>
      <span className="col-span-2">Статус</span>
      <span className="col-span-2">Адрес доставки</span>
      <span className="col-span-2">Тип доставки</span>
    </div>
    <Divider />
    <div className="grid grid-cols-7">
      <span>1</span>
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <div className="aspect-square h-2 w-2 rounded-full bg-green-400" />
          Заказ доставлен
        </div>
      </div>
      <span className="col-span-2">Россия, г. Новосибирск, ул. Кирова, д. 86</span>
      <span className="col-span-2">Экспресс доставка</span>
    </div>
    <Divider />
    <div className="grid grid-cols-7">
      <span>2</span>
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <div className="aspect-square h-2 w-2 rounded-full bg-red-400" />
          Заказ отменен
        </div>
      </div>
      <span className="col-span-2">Россия, г. Новосибирск, ул. Кирова, д. 86</span>
      <span className="col-span-2">Экспресс доставка</span>
    </div>
  </main>
);

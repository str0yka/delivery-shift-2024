import { Button, Input } from '~/components/ui';

export const AuthorizationPage = () => (
  <main className="container mt-12">
    <h1 className="text-2xl font-bold">Вход</h1>
    <form className="mt-6 flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex grow flex-col gap-6">
          <span>Введите проверочный код для входа в личный кабинет</span>
          <Input placeholder="Номер телефона" />
          <Input placeholder="Проверочный код" />
        </div>
      </div>
      <Button className="w-80 self-start">Обновить данные</Button>
      <span className="text-quartenery">Запросить код повторно можно через 39 секунд</span>
      <Button
        variant="text"
        colour="secondary"
        className="w-80 self-start"
      >
        Запросить код ещё раз
      </Button>
    </form>
  </main>
);

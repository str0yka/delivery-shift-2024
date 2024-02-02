import { Button, Input } from '~/components/ui';

export const ProfilePage = () => (
  <main className="container mt-12">
    <h1 className="text-2xl font-bold">Профиль</h1>
    <form className="mt-6 flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex grow flex-col gap-6">
          <Input
            label="Фамилия"
            placeholder="Фамилия"
          />
          <Input
            label="Имя"
            placeholder="Имя"
          />
          <Input
            label="Отчество"
            placeholder="Отчество"
          />
        </div>
        <div className="flex grow flex-col gap-6">
          <Input
            label="Номер телефона"
            placeholder="Номер телефона"
            disabled
          />
          <Input
            label="Email"
            placeholder="Email"
          />
        </div>
      </div>
      <Button className="self-start">Обновить данные</Button>
    </form>
  </main>
);

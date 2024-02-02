import { Button, Input } from '~/components/ui';

export const ReceiverFormPage = () => (
  <main className="container mt-12">
    <h1 className="text-2xl font-bold">Профиль</h1>
    <form className="mt-6 flex max-w-[464px] flex-col gap-6">
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
        placeholder="Отчество (при наличии)"
      />
      <Input
        label="Номер телефона"
        placeholder="Телефон"
      />
      <div className="grid grid-cols-2 gap-6">
        <Button
          colour="secondary"
          variant="outline"
        >
          Назад
        </Button>
        <Button>Продолжить</Button>
      </div>
    </form>
  </main>
);

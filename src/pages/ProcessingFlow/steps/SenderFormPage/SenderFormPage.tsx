import { useForm } from 'react-hook-form';

import { Button, Input } from '~/components/ui';
import { useUser } from '~/utils/contexts';

import { STEP } from '../../constants';
import { OrderState, useOrder, useStep } from '../../contexts';

type SenderFormValues = NonNullable<OrderState['order']['sender']>;

export const SenderFormPage = () => {
  const { user } = useUser();

  const { order, setOrder } = useOrder();
  const { setStep } = useStep();

  const senderForm = useForm<SenderFormValues>({
    defaultValues: {
      ...order.sender,
      phone: user!.phone,
    },
  });

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Отправитель</h1>
      <form
        className="mt-6 flex max-w-[464px] flex-col gap-6"
        onSubmit={senderForm.handleSubmit((values) => {
          setOrder((prevOrder) => ({ ...prevOrder, sender: { ...values, phone: user!.phone } }));
          setStep(STEP.SENDER_ADDRESS);
        })}
      >
        <Input
          label="Фамилия"
          placeholder="Фамилия"
          {...senderForm.register('lastname', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\s`‘-]/g,
              message: 'Некорректный формат',
            },
            required: {
              value: true,
              message: 'Поле является обязательным',
            },
            maxLength: 100,
            validate: (value) => {
              if (
                value !== value.replace(/[a-zA-Z]/g, '') &&
                value !== value.replace(/[а-яА-Я]/g, '')
              ) {
                return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
              }
              if (
                value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
              ) {
                return 'Некорректный формат';
              }

              return true;
            },
          })}
          {...(senderForm.formState.errors.lastname?.message && {
            error: true,
            helperText: senderForm.formState.errors.lastname.message,
          })}
        />
        <Input
          label="Имя"
          placeholder="Имя"
          {...senderForm.register('firstname', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\s`‘-]/g,
              message: 'Некорректный формат',
            },
            required: {
              value: true,
              message: 'Поле является обязательным',
            },
            maxLength: 100,
            validate: (value) => {
              if (
                value !== value.replace(/[a-zA-Z]/g, '') &&
                value !== value.replace(/[а-яА-Я]/g, '')
              ) {
                return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
              }
              if (
                value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
              ) {
                return 'Некорректный формат';
              }

              return true;
            },
          })}
          {...(senderForm.formState.errors.firstname?.message && {
            error: true,
            helperText: senderForm.formState.errors.firstname.message,
          })}
        />
        <Input
          label="Отчество"
          placeholder="Отчество (при наличии)"
          {...senderForm.register('middlename', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\s`‘-]/g,
              message: 'Некорректный формат',
            },
            maxLength: 100,
            validate: (value) => {
              if (!value) return true;

              if (
                value !== value.replace(/[a-zA-Z]/g, '') &&
                value !== value.replace(/[а-яА-Я]/g, '')
              ) {
                return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
              }
              if (
                value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
              ) {
                return 'Некорректный формат';
              }

              return true;
            },
          })}
          {...(senderForm.formState.errors.middlename?.message && {
            error: true,
            helperText: senderForm.formState.errors.middlename.message,
          })}
        />
        <Input
          type="number"
          label="Номер телефона"
          placeholder="Телефон"
          disabled
          value={user?.phone}
        />
        <div className="grid grid-cols-2 gap-6">
          <Button
            colour="secondary"
            variant="outline"
            onClick={() => setStep(STEP.RECEIVER)}
          >
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </form>
    </main>
  );
};

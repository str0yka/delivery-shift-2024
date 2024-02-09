import { useForm } from 'react-hook-form';

import { Button, Input } from '~/components/ui';

import { STEP } from '../../constants';
import { OrderState, useOrder, useStep } from '../../contexts';

type ReceiverFormValues = NonNullable<OrderState['order']['receiver']>;

export const ReceiverFormPage = () => {
  const { order, setOrder } = useOrder();
  const { setStep } = useStep();

  const receiverForm = useForm<ReceiverFormValues>({
    defaultValues: order.receiver,
  });

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Получатель</h1>
      <form
        className="mt-6 flex max-w-[464px] flex-col gap-6"
        onSubmit={receiverForm.handleSubmit((values) => {
          setOrder((prevOrder) => ({ ...prevOrder, receiver: values }));
          setStep(STEP.SENDER);
        })}
      >
        <Input
          label="Фамилия"
          placeholder="Фамилия"
          {...receiverForm.register('lastname', {
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
          {...(receiverForm.formState.errors.lastname?.message && {
            error: true,
            helperText: receiverForm.formState.errors.lastname.message,
          })}
        />
        <Input
          label="Имя"
          placeholder="Имя"
          {...receiverForm.register('firstname', {
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
          {...(receiverForm.formState.errors.firstname?.message && {
            error: true,
            helperText: receiverForm.formState.errors.firstname.message,
          })}
        />
        <Input
          label="Отчество"
          placeholder="Отчество (при наличии)"
          {...receiverForm.register('middlename', {
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
          {...(receiverForm.formState.errors.middlename?.message && {
            error: true,
            helperText: receiverForm.formState.errors.middlename.message,
          })}
        />
        <Input
          type="number"
          label="Номер телефона"
          placeholder="Телефон"
          {...receiverForm.register('phone', {
            required: {
              value: true,
              message: 'Поле является обязательным',
            },
          })}
          {...(receiverForm.formState.errors.phone && {
            error: !!receiverForm.formState.errors.phone.message,
            helperText: receiverForm.formState.errors.phone.message,
          })}
        />
        <div className="grid grid-cols-2 gap-6">
          <Button
            colour="secondary"
            variant="outline"
            onClick={() => setStep(STEP.DELIVERY_METHOD)}
          >
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </form>
    </main>
  );
};

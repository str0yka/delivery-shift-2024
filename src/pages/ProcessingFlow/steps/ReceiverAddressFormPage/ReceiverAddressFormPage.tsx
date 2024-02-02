import { useForm } from 'react-hook-form';

import { Button, Input } from '~/components/ui';

import { STEP } from '../../constants';
import { OrderState, useOrder, useStep } from '../../contexts';

type ReceiverAddressFormValues = NonNullable<OrderState['order']['receiverAddress']>;

export const ReceiverAddressFormPage = () => {
  const { order, setOrder } = useOrder();
  const { setStep } = useStep();

  const receiverAddressForm = useForm<ReceiverAddressFormValues>({
    defaultValues: order.receiverAddress,
  });

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Куда доставлять</h1>
      <form
        className="mt-6 flex max-w-[464px] flex-col gap-6"
        onSubmit={receiverAddressForm.handleSubmit((values) => {
          setOrder((prevOrder) => ({ ...prevOrder, receiverAddress: values }));
          setStep(STEP.PAYER);
        })}
      >
        <Input
          label="Улица"
          placeholder="Улица"
          {...receiverAddressForm.register('street', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\s“,/`‘:;-_.,#]/g,
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
          {...(receiverAddressForm.formState.errors.street?.message && {
            error: true,
            helperText: receiverAddressForm.formState.errors.street.message,
          })}
        />
        <Input
          label="Номер дома"
          placeholder="Дом"
          {...receiverAddressForm.register('house', {
            required: {
              value: true,
              message: 'Поле является обязательным',
            },
            pattern: {
              value: /[a-zA-Zа-яА-Я\d\s“,/`‘:;-_.,#]/g,
              message: 'Некорректный формат',
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
                value.at(0)?.replace(/[a-zA-Zа-яА-Я\d]/g, '') ||
                value.at(-1)?.replace(/[a-zA-Zа-яА-Я\d]/g, '')
              ) {
                return 'Некорректный формат';
              }

              return true;
            },
          })}
          {...(receiverAddressForm.formState.errors.house?.message && {
            error: true,
            helperText: receiverAddressForm.formState.errors.house.message,
          })}
        />
        <Input
          label="Номер квартиры"
          placeholder="Квартира"
          {...receiverAddressForm.register('appartament', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\d\s“,/`‘:;-_.,#]/g,
              message: 'Некорректный формат',
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
                value.at(0)?.replace(/[a-zA-Zа-яА-Я\d]/g, '') ||
                value.at(-1)?.replace(/[a-zA-Zа-яА-Я\d]/g, '')
              ) {
                return 'Некорректный формат';
              }

              return true;
            },
          })}
          {...(receiverAddressForm.formState.errors.appartament?.message && {
            error: true,
            helperText: receiverAddressForm.formState.errors.appartament.message,
          })}
        />
        <Input
          label="Заметка"
          placeholder="Заметка для курьера"
          {...receiverAddressForm.register('comment', {
            pattern: {
              value: /[a-zA-Zа-яА-Я\s“,/`‘:;-_.,#]/g,
              message: 'Некорректный формат',
            },
            maxLength: 300,
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
          {...(receiverAddressForm.formState.errors.comment?.message && {
            error: true,
            helperText: receiverAddressForm.formState.errors.comment.message,
          })}
        />
        <div className="grid grid-cols-2 gap-6">
          <Button
            colour="secondary"
            variant="outline"
            onClick={() => setStep(STEP.SENDER_ADDRESS)}
          >
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </form>
    </main>
  );
};

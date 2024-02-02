import { useForm } from 'react-hook-form';

import { Button, RadioGroup } from '~/components/ui';
import { PAYER } from '~/utils/constants';

import { STEP } from '../../constants';
import { OrderState, useOrder, useStep } from '../../contexts';

interface PayerFormValues {
  payer: NonNullable<OrderState['order']['payer']>;
}

export const PayerFormPage = () => {
  const { order, setOrder } = useOrder();
  const { setStep } = useStep();

  const payerForm = useForm<PayerFormValues>({
    defaultValues: {
      payer: order.payer,
    },
  });
  const payerFormWatchFields = payerForm.watch();

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Оплата доставки</h1>
      <form
        className="mt-6 flex max-w-[464px] flex-col gap-6"
        onSubmit={payerForm.handleSubmit((values) => {
          setOrder((prevOrder) => ({ ...prevOrder, payer: values.payer }));
          setStep(STEP.CHECK_ORDER);
        })}
      >
        <RadioGroup.Root
          value={payerFormWatchFields.payer}
          onValueChange={(value) => payerForm.setValue('payer', value as PayerFormValues['payer'])}
        >
          <RadioGroup.Item value={PAYER.RECEIVER}>Получатель</RadioGroup.Item>
          <RadioGroup.Item value={PAYER.SENDER}>Отправитель</RadioGroup.Item>
        </RadioGroup.Root>
        <div className="grid grid-cols-2 gap-6">
          <Button
            colour="secondary"
            variant="outline"
            onClick={() => setStep(STEP.RECEIVER_ADDRESS)}
          >
            Назад
          </Button>
          <Button type="submit">Продолжить</Button>
        </div>
      </form>
    </main>
  );
};

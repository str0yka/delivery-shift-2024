import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input, Select, Tabs } from '~/components/ui';
import { useDeliveryPackageTypesQuery, useDeliveryPointsQuery } from '~/utils/api';

import { STEP } from '../../constants';
import { useOrder, useStep } from '../../contexts';

const TAB_VALUE = {
  SELECTED_PACKAGE: 'SELECTED_PACKAGE',
  EXACT_PACKAGE: 'EXACT_PACKAGE',
} as const;

type TabsValues = (typeof TAB_VALUE)[keyof typeof TAB_VALUE];

interface CalculationFormValues {
  package?: {
    id?: string;
    name?: string;
    length?: number;
    width?: number;
    weight?: number;
    height?: number;
  };
  senderPoint?: DeliveryPoint;
  receiverPoint?: DeliveryPoint;
}

const isDeliveryPackageValuesValid = (
  deliveryPackage: CalculationFormValues['package'],
): deliveryPackage is WithRequiredFields<
  NonNullable<CalculationFormValues['package']>,
  'height' | 'length' | 'weight' | 'width'
> =>
  !!deliveryPackage?.height &&
  !!deliveryPackage?.length &&
  !!deliveryPackage?.weight &&
  !!deliveryPackage?.width;

const generateDeliveryPackageString = (deliveryPackage: CalculationFormValues['package']) =>
  isDeliveryPackageValuesValid(deliveryPackage)
    ? `${deliveryPackage.name ? `${deliveryPackage.name}, ` : ''}${deliveryPackage.length}x${deliveryPackage.width}x${deliveryPackage.height} см`
    : 'Не выбрано';

export const CalculationPage = () => {
  const { setStep } = useStep();
  const { setOrder } = useOrder();

  const [tabValue, setTabValue] = useState<TabsValues>(TAB_VALUE.SELECTED_PACKAGE);

  const deliveryPointsQuery = useDeliveryPointsQuery();
  const deliveryPackageTypesQuery = useDeliveryPackageTypesQuery();

  const calculationForm = useForm<CalculationFormValues>();
  const calculationFormWatchFields = calculationForm.watch();

  return (
    <main className="flex grow items-center justify-center bg-home-texture bg-cover">
      <form
        className="flex w-[500px] flex-col gap-6 rounded-3xl bg-primary px-[4.5rem] py-8"
        onSubmit={calculationForm.handleSubmit(
          ({ package: deliveryPackage, receiverPoint, senderPoint }) => {
            if (isDeliveryPackageValuesValid(deliveryPackage) && receiverPoint && senderPoint) {
              setOrder((order) => ({
                ...order,
                receiverPoint,
                senderPoint,
                package: deliveryPackage,
              }));
              setStep(STEP.DELIVERY_METHOD);
            }
          },
        )}
      >
        <h1 className="text-2xl font-bold text-primary">Рассчитать доставку</h1>
        <div>
          <Select.Root
            value={calculationFormWatchFields.senderPoint?.id ?? ''}
            onValueChange={(value) => {
              const senderPoint = deliveryPointsQuery.data?.points.find(
                (point) => point.id === value,
              );

              if (senderPoint) {
                calculationForm.setValue('senderPoint', senderPoint);
              }
            }}
          >
            <Select.Label>Город отправки</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={deliveryPointsQuery.isLoading}
            >
              <Select.Value placeholder="Город отправки" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {deliveryPointsQuery.data?.points.map((point) => (
                  <Select.Item
                    key={point.id}
                    value={point.id}
                  >
                    {point.name}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div>
          <Select.Root
            value={calculationFormWatchFields.receiverPoint?.id ?? ''}
            onValueChange={(value) => {
              const receiverPoint = deliveryPointsQuery.data?.points.find(
                (point) => point.id === value,
              );

              if (receiverPoint) {
                calculationForm.setValue('receiverPoint', receiverPoint);
              }
            }}
          >
            <Select.Label>Город назначения</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={!deliveryPointsQuery.isSuccess}
            >
              <Select.Value placeholder="Город назначения" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {deliveryPointsQuery.data?.points.map((point) => (
                  <Select.Item
                    key={point.id}
                    value={point.id}
                  >
                    {point.name}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div>
          <Select.Root
            value={calculationFormWatchFields.package?.id ?? ''}
            onValueChange={(value) => {
              const deliveryPackageType = deliveryPackageTypesQuery.data?.packages.find(
                (packageType) => packageType.id === value,
              );

              if (deliveryPackageType) {
                calculationForm.setValue('package', deliveryPackageType);
              }
            }}
          >
            <Select.Label>Размер посылки</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={deliveryPackageTypesQuery.isLoading}
            >
              {generateDeliveryPackageString(calculationFormWatchFields.package)}
            </Select.Trigger>
            <Select.Content>
              <Tabs.Root
                value={tabValue}
                onValueChange={(value) => {
                  calculationForm.setValue('package', undefined);
                  setTabValue(value as TabsValues);
                }}
              >
                <Tabs.List className="w-full">
                  <Tabs.Trigger value={TAB_VALUE.SELECTED_PACKAGE}>Примерные</Tabs.Trigger>
                  <Tabs.Trigger value={TAB_VALUE.EXACT_PACKAGE}>Точные</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  value={TAB_VALUE.SELECTED_PACKAGE}
                  className="mt-2 flex flex-col gap-1"
                >
                  {deliveryPackageTypesQuery.data?.packages.map((packageType) => (
                    <Select.Item
                      key={packageType.id}
                      value={packageType.id}
                    >
                      {packageType.name}, {packageType.length}x{packageType.width}x
                      {packageType.height} см
                    </Select.Item>
                  ))}
                </Tabs.Content>
                <Tabs.Content
                  className="mt-2 flex flex-col gap-4"
                  value={TAB_VALUE.EXACT_PACKAGE}
                >
                  <div className="flex items-center justify-between gap-4">
                    Длина
                    <Input
                      placeholder="см"
                      {...calculationForm.register('package.length', {
                        required: {
                          value: true,
                          message: 'Поле является обязательным',
                        },
                      })}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    Ширина
                    <Input
                      placeholder="см"
                      {...calculationForm.register('package.width', {
                        required: {
                          value: true,
                          message: 'Поле является обязательным',
                        },
                      })}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    Высота
                    <Input
                      placeholder="см"
                      {...calculationForm.register('package.height', {
                        required: {
                          value: true,
                          message: 'Поле является обязательным',
                        },
                      })}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    Вес
                    <Input
                      placeholder="кг"
                      {...calculationForm.register('package.weight', {
                        required: {
                          value: true,
                          message: 'Поле является обязательным',
                        },
                      })}
                    />
                  </div>
                </Tabs.Content>
              </Tabs.Root>
            </Select.Content>
          </Select.Root>
        </div>
        <Button type="submit">Рассчитать</Button>
      </form>
    </main>
  );
};

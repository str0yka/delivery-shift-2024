import { Button, Input, Select, Tabs } from '~/components/ui';

import { useCalculationPage } from './hooks';

export const CalculationPage = () => {
  const { state, functions } = useCalculationPage();

  return (
    <main className="flex grow items-center justify-center bg-home-texture bg-cover">
      <form
        className="flex w-[500px] flex-col gap-6 rounded-3xl bg-primary px-[4.5rem] py-8"
        onSubmit={functions.onSubmit}
      >
        <h1 className="text-2xl font-bold text-primary">Рассчитать доставку</h1>
        <div>
          <Select.Root
            value={state.calculationFormWatchFields.senderPoint?.id ?? ''}
            onValueChange={functions.onSenderPointValueChange}
          >
            <Select.Label>Город отправки</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={state.deliveryPointsQuery.isLoading}
            >
              <Select.Value placeholder="Город отправки" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {state.deliveryPointsQuery.data?.points.map((point) => (
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
            value={state.calculationFormWatchFields.receiverPoint?.id ?? ''}
            onValueChange={functions.onReceiverPointValueChange}
          >
            <Select.Label>Город назначения</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={!state.deliveryPointsQuery.isSuccess}
            >
              <Select.Value placeholder="Город назначения" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {state.deliveryPointsQuery.data?.points.map((point) => (
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
            value={state.calculationFormWatchFields.package?.id ?? ''}
            onValueChange={functions.onDeliveryPackageTypeValueChange}
          >
            <Select.Label>Размер посылки</Select.Label>
            <Select.Trigger
              className="mt-1.5"
              disabled={state.deliveryPackageTypesQuery.isLoading}
            >
              {functions.generateDeliveryPackageString(state.calculationFormWatchFields.package)}
            </Select.Trigger>
            <Select.Content>
              <Tabs.Root
                value={state.tabValue}
                onValueChange={functions.onTabsValueChange}
              >
                <Tabs.List className="w-full">
                  <Tabs.Trigger value={state.TAB_VALUE.SELECTED_PACKAGE}>Примерные</Tabs.Trigger>
                  <Tabs.Trigger value={state.TAB_VALUE.EXACT_PACKAGE}>Точные</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  value={state.TAB_VALUE.SELECTED_PACKAGE}
                  className="mt-2 flex flex-col gap-1"
                >
                  {state.deliveryPackageTypesQuery.data?.packages.map((packageType) => (
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
                  value={state.TAB_VALUE.EXACT_PACKAGE}
                >
                  <div className="flex items-center justify-between gap-4">
                    Длина
                    <Input
                      placeholder="см"
                      {...state.calculationForm.register('package.length', {
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
                      {...state.calculationForm.register('package.width', {
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
                      {...state.calculationForm.register('package.height', {
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
                      {...state.calculationForm.register('package.weight', {
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

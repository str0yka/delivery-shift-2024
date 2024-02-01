import { Button, Input, Select, Tabs } from '~/components/ui';
import { useDeliveryPointsQuery } from '~/utils/api';

export const HomePage = () => {
  const {} = useDeliveryPointsQuery();
  return (
    <main className="flex grow items-center justify-center bg-home-texture bg-cover">
      <form className="flex w-[500px] flex-col gap-6 rounded-3xl bg-primary px-[4.5rem] py-8">
        <h1 className="text-2xl font-bold text-primary">Рассчитать доставку</h1>
        <div>
          <Select.Root>
            <Select.Label>Город отправки</Select.Label>
            <Select.Trigger className="mt-1.5">
              <Select.Value />
            </Select.Trigger>
          </Select.Root>
        </div>
        <div>
          <Select.Root>
            <Select.Label>Город назначения</Select.Label>
            <Select.Trigger className="mt-1.5">
              <Select.Value />
            </Select.Trigger>
          </Select.Root>
        </div>
        <div>
          <Select.Root>
            <Select.Label>Размер посылки</Select.Label>
            <Select.Trigger className="mt-1.5">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Tabs.Root>
                  <Tabs.List className="w-full">
                    <Tabs.Trigger value="1">Примерные</Tabs.Trigger>
                    <Tabs.Trigger value="2">Точные</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="1">
                    <Select.Item value="1">Конверт, 42х36х5 см</Select.Item>
                    <Select.Item value="2">Конверт, 42х36х5 см</Select.Item>
                    <Select.Item value="3">Конверт, 42х36х5 см</Select.Item>
                    <Select.Item value="4">Конверт, 42х36х5 см</Select.Item>
                    <Select.Item value="5">Конверт, 42х36х5 см</Select.Item>
                    <Select.Item value="6">Конверт, 42х36х5 см</Select.Item>
                  </Tabs.Content>
                  <Tabs.Content
                    value="2"
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      Длина
                      <Input />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      Ширина
                      <Input />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      Высота
                      <Input />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      Вес
                      <Input />
                    </div>
                  </Tabs.Content>
                </Tabs.Root>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <Button>Рассчитать</Button>
      </form>
    </main>
  );
};

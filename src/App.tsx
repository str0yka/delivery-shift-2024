import { Tabs } from '~/components/ui';

export const App = () => (
  <>
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="1">Label</Tabs.Trigger>
        <Tabs.Trigger value="2">Label</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="1">test 1</Tabs.Content>
      <Tabs.Content value="2">test 2</Tabs.Content>
    </Tabs.Root>
    <button
      className="border border-light text-quartenery"
      type="button"
    >
      123
    </button>
  </>
);

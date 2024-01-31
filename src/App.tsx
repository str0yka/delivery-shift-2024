import { Select } from '~/components/ui';

export const App = () => (
  <>
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-96">
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
    <button
      className="border border-light text-quartenery"
      type="button"
    >
      123
    </button>
  </>
);

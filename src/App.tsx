import { Input } from '~/components/ui';

export const App = () => (
  <>
    <Input
      label="Label"
      placeholder="Input Default"
    />
    <Input
      placeholder="Input Default"
      disabled
    />
    <Input
      placeholder="Input Default"
      error
    />
    <Input
      label="Label"
      helperText="Error message goes here"
      placeholder="Input Default"
      error
      value="Input Default"
    />
    <button
      className="border-light text-quartenery border"
      type="button"
    >
      123
    </button>
  </>
);

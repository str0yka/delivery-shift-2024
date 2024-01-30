import { Button } from '~/components/ui';

export const App = () => (
  <>
    <Button>Button</Button>
    <Button disabled>Button</Button>
    <Button variant="text">Button</Button>
    <Button
      variant="text"
      disabled
    >
      Button
    </Button>
    <Button variant="link">Button</Button>
    <Button
      variant="link"
      disabled
    >
      Button
    </Button>
    <Button
      colour="secondary"
      variant="outline"
    >
      Button
    </Button>
    <Button
      colour="secondary"
      variant="outline"
      disabled
    >
      Button
    </Button>
    <Button
      colour="secondary"
      variant="text"
    >
      Button
    </Button>
    <Button
      colour="secondary"
      variant="text"
      disabled
    >
      Button
    </Button>
    <button
      className="border-light border"
      type="button"
    >
      123
    </button>
  </>
);

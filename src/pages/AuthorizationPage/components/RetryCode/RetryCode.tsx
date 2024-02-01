import { Button } from '~/components/ui';

export const RetryCode = () => (
  <>
    <span className="text-quartenery">Запросить код повторно можно через 39 секунд</span>
    <Button
      variant="text"
      colour="secondary"
      className="w-80 self-start"
    >
      Запросить код ещё раз
    </Button>
  </>
);

import { useEffect, useState } from 'react';

import { Button } from '~/components/ui';
import { convertMilliseconds } from '~/utils/helpers';

interface RetryCodeProps {
  retryDelay: number | null;
  onRetry: () => void;
}

export const RetryCode: React.FC<RetryCodeProps> = ({ retryDelay }) => {
  const [remainingMilliseconds, setRemainingMilliseconds] = useState(retryDelay || 0);

  useEffect(() => {
    setRemainingMilliseconds(retryDelay || 0);
  }, [retryDelay]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingMilliseconds((prevValue) => {
        const seconds = Math.floor(prevValue / 1000);
        if (seconds === 1) clearInterval(timer);
        return (seconds - 1) * 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingMilliseconds]);

  const { formattedMinutes, formattedSeconds } = convertMilliseconds(remainingMilliseconds);

  return (
    <>
      {!!remainingMilliseconds && (
        <span className="text-quartenery">
          Запросить код повторно можно через {formattedMinutes}:{formattedSeconds} секунд
        </span>
      )}
      {!remainingMilliseconds && (
        <Button
          variant="text"
          colour="secondary"
          className="w-80 self-start"
        >
          Запросить код ещё раз
        </Button>
      )}
    </>
  );
};

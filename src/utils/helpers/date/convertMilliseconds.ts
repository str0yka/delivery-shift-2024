export const convertMilliseconds = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(minutes / 60) % 24;

  const format = (number: number) => `${number > 9 ? '' : '0'}${number}`;

  return {
    seconds,
    minutes,
    hours,
    formattedSeconds: format(seconds),
    formattedMinutes: format(minutes),
    formattedHours: format(hours),
  };
};

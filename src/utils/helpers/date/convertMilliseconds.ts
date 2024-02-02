export const convertMilliseconds = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

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

export const apiResolver = <TOutput>(
  op: TOutput,
  delay?: number
): Promise<TOutput> => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const wait = (delay || 1000) * randomNumber;
  return new Promise((res) => setTimeout(() => res(op), wait));
};

export const apiResolver = <TOutput>(op: TOutput): Promise<TOutput> => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const delay = randomNumber * 1000;
  return new Promise((res) => setTimeout(() => res(op), delay));
};

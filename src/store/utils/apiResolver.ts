export const apiResolver = <TOutput>(
  op: TOutput,
  cb?: (inps: TOutput) => TOutput
): Promise<TOutput> => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const delay = randomNumber * 1000;
  return new Promise((res) => setTimeout(() => res(cb ? cb(op) : op), delay));
};

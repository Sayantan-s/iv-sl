import { delay } from "es-toolkit/compat";

export const apiResolver = <TOutput>(
  op: TOutput,
  cb?: (inps: TOutput) => TOutput
): Promise<TOutput> => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const wait = randomNumber * 1000;
  return new Promise((res) => delay(() => res(cb ? cb(op) : op), wait));
};

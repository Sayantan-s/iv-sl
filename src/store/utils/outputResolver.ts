export const outputResolver = <TInput, TArgs, TOutput>(
  db: TInput,
  exec: (db: TInput, ...args: TArgs[]) => TOutput,
  ...args: TArgs[]
) => exec(db, ...args);

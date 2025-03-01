import { useLayoutEffect, useRef, useState } from "react";

export function useGetRefHeight(): [
  React.RefObject<HTMLDivElement | null>,
  number
] {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, []);

  return [ref, height];
}

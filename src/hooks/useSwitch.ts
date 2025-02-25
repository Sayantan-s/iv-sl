import { useState } from "react";

type TReturnType = [
  boolean,
  {
    toggle: () => void;
    on: () => void;
    off: () => void;
  },
  React.Dispatch<React.SetStateAction<boolean>>
];

export const useSwitch = (initialState?: boolean): TReturnType => {
  const [isOn, setIsOn] = useState(initialState || false);

  const toggle = () => setIsOn((prevState) => !prevState);
  const on = () => setIsOn(true);
  const off = () => setIsOn(false);

  return [
    isOn,
    {
      toggle,
      on,
      off,
    },
    setIsOn,
  ];
};

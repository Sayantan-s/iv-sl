import { ComponentType } from "react";

export function withDataStatus<T>(Component: ComponentType): ComponentType {
  return (props) => {
    return <Component {...props} />;
  };
}

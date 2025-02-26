import { useSelector } from "..";

export const useGetControllers = () =>
  useSelector((state) => state.musicInsights.controllers);

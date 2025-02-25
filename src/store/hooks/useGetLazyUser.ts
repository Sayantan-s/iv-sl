import { useSelector } from "..";

export const useGetLazUser = () => {
  const users = useSelector((state) => state.musicInsights.users.entities);
  return (userId: string) => users[userId];
};

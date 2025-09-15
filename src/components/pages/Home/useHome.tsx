import { useQuery } from "@tanstack/react-query";
import { getUsersData } from "../../../services/users.service";

const useHome = () => {
  const { data: dataUser, isLoading } = useQuery({
    queryFn: () => getUsersData(),
    queryKey: ["users"],
  });
  return { dataUser, isLoading };
};

export default useHome;

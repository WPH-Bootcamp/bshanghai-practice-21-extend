import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getUserById } from "../../../services/users.service";

const useUserDetail = () => {
  const { userId } = useParams();
  // extra knowledge
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("page"));
  console.log(searchParams.get("limit"));

  const { data, isLoading } = useQuery({
    queryFn: () => getUserById(userId as string),
    queryKey: ["user-detail", userId],
  });

  return { data, isLoading };
};

export default useUserDetail;

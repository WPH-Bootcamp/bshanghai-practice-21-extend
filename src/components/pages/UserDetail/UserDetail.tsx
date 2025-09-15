import { Link } from "react-router-dom";
import Loader from "../../ui/loader";
import useUserDetail from "./useUserDetail";

const UserDetail = () => {
  const { data, isLoading } = useUserDetail();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>user detail</h1>
      <p>name: {data.name}</p>
      <p>username: {data.username}</p>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default UserDetail;

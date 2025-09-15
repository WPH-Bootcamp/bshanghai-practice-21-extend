import { Link } from "react-router-dom";
import type { UserDataInterface } from "../../../interfaces/User.interface";
import Loader from "../../ui/loader";
import useHome from "./useHome";

const Users = () => {
  const { dataUser, isLoading } = useHome();

  if (isLoading) return <Loader />;

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((user: UserDataInterface, index: number) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Link to={`/detail/${user.id}`}>see detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

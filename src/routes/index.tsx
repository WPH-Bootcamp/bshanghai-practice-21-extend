import Users from "../components/pages/Home";
import UserDetail from "../components/pages/UserDetail";

export const _routes = [
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/detail/:userId",
    element: <UserDetail />,
  },
];

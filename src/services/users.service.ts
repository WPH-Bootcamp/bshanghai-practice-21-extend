import { apiInstance } from "../api";

export const getUsersData = async () => {
  const userData = await apiInstance.get(
    `${import.meta.env.VITE_PUBLIC_API_URL}/users`
  );
  return userData.data;
};

export const getUserById = async (id: string | number) => {
  const user = await apiInstance.get(
    `${import.meta.env.VITE_PUBLIC_API_URL}/users/${id}`
  );
  return user.data;
};

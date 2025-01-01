import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const Users = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data[0]);
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-center font-bold text-3xl m-3">Users</h3>
      <div>
        <p>{user.name}</p>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

import "./Users.css";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response?.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  if (isLoading) return <h1>Loading....</h1>;

  if (isError) return <h1>Something went wrong!</h1>;

  return (
    <div>
      {users?.map((user) => {
        return (
          <Card key={`user-${user?.id}`}>
            <h2>Username: {user?.username}</h2>
            <h1>ID: {user?.id}</h1>
            <h2>Email: {user?.email}</h2>
          </Card>
        );
      })}
    </div>
  );
}


export default Users;

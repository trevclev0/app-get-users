import "./UserList.css";
import { useEffect } from "react";
import User from "../User/User";
import { UserProps } from "../../types/UserProps";
import useGetUsers from "../../hooks/useGetUsers";

export default function UserList() {
  const { users, getUsers, hasMoreUsers } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Engineering Team</h1>
      <ul className="UserList">
        {users?.map((user: UserProps) => {
          return (
            <User
              key={user.id}
              id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
              email={user.email}
            />
          );
        })}
      </ul>
      {hasMoreUsers && (
        <button type="button" onClick={getUsers}>
          Load Users
        </button>
      )}
    </>
  );
}

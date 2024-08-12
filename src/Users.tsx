import { useEffect } from "react";
import { User } from "./User";
import { UserProps } from "./UserProps";
import useGetUsers from "./useGetUsers";

export default function Users() {
  const { users, getUsers, hasMoreUsers } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Dev Team</h1>
      <ul className="Users">
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

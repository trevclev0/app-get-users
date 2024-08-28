import { useState } from "react";
import { UserProps } from "../types/UserProps";

const url = new URL("/api/users", "https://reqres.in");

export default function useGetUsers() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const getUsers = async () => {
    url.searchParams.set("page", page.toString());
    const resp = await fetch(url);
    const json = await resp.json();
    setTotalPages(json.total_pages);
    setUsers([...users, ...json.data]);
    setPage(page + 1);
    setHasMoreUsers(page < totalPages);
  };

  return { users, getUsers, hasMoreUsers };
}

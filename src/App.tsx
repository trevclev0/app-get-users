import { useState } from "react";
import "./styles.css";
import Users from "./Users";

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch("https://reqres.in/api/users");
    const json = await resp.json();
    setUsers(json.data);
  };

  return (
    <div className="App">
      <button onClick={getUsers}>load users</button>
      <Users users={users} />
    </div>
  );
}

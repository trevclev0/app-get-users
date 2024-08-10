export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return <li>{user.first_name + " " + user.last_name}</li>;
      })}
    </ul>
  );
}

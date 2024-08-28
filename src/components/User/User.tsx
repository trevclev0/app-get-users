import "./User.css";
import { UserProps } from "../../types/UserProps";

export default function User({
  id,
  first_name,
  last_name,
  avatar,
  email,
}: UserProps) {
  const fullName = `${first_name} ${last_name}`;
  return (
    <li className="User" key={id}>
      <img alt={`${fullName}Avatar`} src={avatar} />
      <h3>{fullName}</h3>
      <address>
        <a href={`mailto:${email}`}>{email}</a>
      </address>
    </li>
  );
}

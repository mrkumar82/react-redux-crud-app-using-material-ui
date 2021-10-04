import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/actions";
import { Link } from "react-router-dom";
function Users({ user }) {
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.contact}</td>
      <td>{user.address}</td>
      <td>
        <button className="btn red" onClick={() => deleteUser(user.id)}>
          Delete
        </button>
        &nbsp;&nbsp;
        <Link className="btn green" to={`/edit-user/${user.id}`}>
          Edit
        </Link>
      </td>
    </tr>
  );
}

export default Users;

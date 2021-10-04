import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../redux/actions";
import Users from "./Users";
import { Link } from "react-router-dom";

function UserList() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="container">
      <h2>User list</h2>
      <div className="right-align">
        <Link to="/add-user" className="btn blue">
          Add Users
        </Link>
      </div>

      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users && users.map((user) => <Users user={user} key={user.id} />)}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

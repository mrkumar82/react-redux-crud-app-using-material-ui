import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";

function AddUsers(props) {
  const dispatch = useDispatch();
  const history = props.history;

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState(false);
  const { name, email, contact, address } = state;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      alert("Please input all fields");
      setError(true);
    } else {
      dispatch(addUser(state));
      history.push("/");
    }
  };

  return (
    <div className="container">
      <h2>Add Users</h2>
      <div className="row">
        {error && <h2>Please correct the errors</h2>}
        <form className="col s6" onSubmit={submitHandler}>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Name"
                id="first_name"
                type="text"
                className="validate"
                value={name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              <label htmlFor="first_name"></label>
            </div>
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="validate"
                value={email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              <label htmlFor="email"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="Contact"
                type="text"
                placeholder="Contact"
                className="validate"
                value={contact}
                onChange={(e) =>
                  setState({ ...state, contact: e.target.value })
                }
              />
              <label htmlFor="Contact"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="address"
                type="text"
                className="validate"
                placeholder="address"
                value={address}
                onChange={(e) =>
                  setState({ ...state, address: e.target.value })
                }
              />
              <label htmlFor="address"></label>
            </div>
          </div>

          <div className="row left-align">
            <button type="submit" className="btn green">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;

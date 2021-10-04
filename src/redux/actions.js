import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const deleteUser = () => ({
  type: types.DELETE_USER,
});

const postUser = (user) => ({
  type: types.ADD_USER,
  payload: user,
});
const getUser = (user) => ({
  type: types.GET_USER,
  payload: user,
});

const modifyUser = () => ({
  type: types.UPDATE_USER,
});
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const removeUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(postUser(resp.data));
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(deleteUser());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUser = (id, user) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        dispatch(modifyUser());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

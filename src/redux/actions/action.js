import axios from 'axios';

export const Type = {
  GET_PIC: 'GET_PIC',
}

export const addLastname = lastname => ({
  type: "ADDLASTNAME",
  payload: {
    lastname
  }
});

// without Thunk //
export const getUsersNormal = () => ({
  type: "GETUSERS"
});

// with Thunk //
export const getUsers = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(users => {
      dispatch({
        type: 'GETUSERS',
        payload: users.data
      });
    })
  };
};


export const getPosts = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
      dispatch({
        type: 'GETPOSTS',
        payload: posts.data
      });
    })
  };
};

export const getPics = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/photos').then(pics => {
      dispatch({
        type: Type.GET_PIC,
        payload: pics.data
      });
    })
  };
};
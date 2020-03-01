import { Type } from "../actions/action";

export const todos = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADDLASTNAME":
      return {
        ...state,
        users: state.users.map(user => ({
          ...user,
          lastname: action.payload.lastname
        }))
      };
    case "GETUSERS":
      return {
        ...state,
        users: action.payload
      };
    case "GETPOSTS":
      return {
        ...state,
        posts: action.payload
      };
    case Type.GET_PIC:
      return {
        ...state,
        pics: action.payload
      };
    default:
      return state;
  }
};

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todos } from "./reducers/reducer";

export const store = createStore(
  todos,
  {
    users: [],
    posts: [],
    pics: [],
    courses: [
      { id: 0, name: "Text1", length: 32 },
      { id: 0, name: "Text1", length: 32 },
      { id: 0, name: "Text1", length: 32 }
    ]
  },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

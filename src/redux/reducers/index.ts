import { combineReducers } from "redux";
import usersReducer from "../../modules/users/store/reducer";
import commentsReducer from "../../modules/comments/store/reducer";
const rootReducer = combineReducers({
  users: usersReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

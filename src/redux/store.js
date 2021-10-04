import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

// const middlewares = [reduxThunk, logger];

// if (process.env.Node_ENV === "development") {
//   middlewares.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));

export default store;

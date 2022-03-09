import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
// Extension
import { composeWithDevTools } from "redux-devtools-extension";
// Thunk
import thunk from "redux-thunk";

// Store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

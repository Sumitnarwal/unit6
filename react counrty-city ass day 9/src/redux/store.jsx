import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { countryReducer } from "./reducer";



const rootReducer=combineReducers({
 country:countryReducer    
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));
console.log(store.getState())
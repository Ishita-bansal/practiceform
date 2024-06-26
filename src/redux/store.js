import {createStore} from "redux";
import rootReducer from "./reducers/index";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig={
    key: 'persistConfig',
    storage
}

const persistedReducer = persistReducer(persitConfig,rootReducer);
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
export default store;

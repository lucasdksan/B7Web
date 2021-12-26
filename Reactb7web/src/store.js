import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducers from "./reducers/index";

const persistConfigs = {
    key: "root",
    storage,
    whitelist: [ "user" ]
};

const pReducer = persistReducer( persistConfigs, Reducers );
const store = createStore(pReducer);
const persistor = persistStore(store);

export { store, persistor };
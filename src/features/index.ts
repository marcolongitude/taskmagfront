import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { useDispatch } from "react-redux";
import authReduce from "./slices/auth/authSlice";
import userReduce from "./slices/user/DataUser";
import errorReduce from "./slices/error/errorSlice";

const persistConfig = {
	key: "state",
	whitelist: ["auth", "userData"],
	blacklist: ["error"],
	storage,
};

const rootReducer = combineReducers({
	auth: authReduce,
	userData: userReduce,
	error: errorReduce,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Exportando os tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

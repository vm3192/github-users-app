import reposSlice from "./slices/repos.slice";
import usersSlice from "./slices/users.slice";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import searchSlice from "./slices/search.slice";

export const store = configureStore({
	reducer: {
		users: usersSlice,
		repos: reposSlice,
		search: searchSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

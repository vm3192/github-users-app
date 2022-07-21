import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Axios from "axios";

type SearchState = {
	value: string;
};

const initialState: SearchState = {
	value: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setValue(state, action: PayloadAction<string>) {
			state.value = action.payload
		},
	},
});

export const {setValue} = searchSlice.actions;
export default searchSlice.reducer;

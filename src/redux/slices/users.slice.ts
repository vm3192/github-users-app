import Axios from "axios";
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
	"users/fetchUsersStatus",
	async (params: {search: string}) => {
		const {search} = params;
		if (search) {
			const {data} = await Axios.get(
				`https://api.github.com/search/users?q=${search}&per_page=10`,
			);
			console.log(data.items)
			return data.items;
		}
	},
);

export const fetchUserCard = createAsyncThunk(
	"userCard/fetchUserCardStatus",
	async (params: {login: string}) => {
		const {login} = params;
		const {data} = await Axios.get(`https://api.github.com/users/${login}`);
		return data;
	},
);

export type User = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
};

export type UserCard = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company?: any;
	blog: string;
	location: string;
	email?: any;
	hireable?: any;
	bio?: any;
	twitter_username?: any;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: Date;
};

type Users = {
	users: User[];
	userCards: UserCard[];
	status: "" | "pending" | "success" | "error";
};

const initialState: Users = {
	users: [],
	userCards: [],
	status: "",
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.status = "pending";
			state.users = [];
			state.userCards = []
		});
		builder.addCase(
			fetchUsers.fulfilled,
			(state, action: PayloadAction<User[]>) => {
				state.status = "success";
				state.users = action.payload;
			},
		);
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.status = "error";
			state.users = [];
		});
		builder.addCase(fetchUserCard.fulfilled, (state, action: PayloadAction<UserCard>) => {
			state.userCards.push(action.payload)
		})
	},
});


export default usersSlice.reducer;

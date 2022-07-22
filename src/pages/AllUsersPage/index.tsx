import {FC, useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import debounce from "lodash.debounce";
import {Search} from "../../components/Search";
import {UserItem} from "../../components/UserItem";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchUsers} from "../../redux/slices/users.slice";
import {setValue} from "../../redux/slices/search.slice";

export const AllUsersPage: FC = () => {
	const dispatch = useAppDispatch();
	const users = useSelector((state: RootState) => state.users.users);
	const search = useSelector((state: RootState) => state.search.value);
	const [localSearch, setLocalSearch] = useState("");

	const initDebounce = useCallback(
		debounce((value: string) => {
			dispatch(setValue(value));
		}, 1000),
		[],
	);

	function setSearchValue(value: string) {
		setLocalSearch(value);
		initDebounce(value);
	}

	useEffect(() => {
		try {
			dispatch(fetchUsers({search}));
		} catch (error) {
			console.log(error);
		}
	}, [search, dispatch]);

	return (
		<>
			<Search
				value={localSearch}
				changeValue={setSearchValue}
				placeholder="Search for Users"
			/>
			{users?.map((user) => {
				return <UserItem key={user.id} {...user} />;
			})}
		</>
	);
};

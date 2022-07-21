import {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {Search} from "../../components/Search";
import {UserItem} from "../../components/UserItem";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchUsers} from "../../redux/slices/users.slice";
import { setValue } from "../../redux/slices/search.slice";

export const AllUsersPage: FC = () => {
	const dispatch = useAppDispatch();
	const users = useSelector((state: RootState) => state.users.users);
	const search = useSelector((state: RootState) => state.search.value);
	
	function setSearchValue(value: string) {
		dispatch(setValue(value))
	}

	useEffect(() => {
		try {
			dispatch(fetchUsers({search}));
		} catch (error) {
			console.log(error);
		}
	}, [search]);

	return (
		<>
			<Search
				value={search}
				changeValue={setSearchValue}
				placeholder="Search for Users"
			/>
			{users?.map((user) => {
				return <UserItem key={user.id} {...user} />;
			})}
		</>
	);
};

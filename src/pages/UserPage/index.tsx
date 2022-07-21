import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RepoItem} from "../../components/RepoItem";
import {Search} from "../../components/Search";
import {UserDisplay} from "../../components/UserDisplay";
import {fetchUserRepos} from "../../redux/slices/repos.slice";
import {RootState, useAppDispatch} from "../../redux/store";

export const UserPage: FC = () => {
	const {login} = useParams();
	const dispatch = useAppDispatch();
	const repos = useSelector((state: RootState) => state.repos.repoItems);
	const [search, setSearch] = useState("");

	useEffect(() => {
		try {
			dispatch(fetchUserRepos({login}));
		} catch (error) {
			console.log(error);
		}
	}, [login, dispatch]);

	return (
		<>
			<UserDisplay login={login} />
			<Search
				value={search}
				changeValue={setSearch}
				placeholder="Search for User's Repositories"
			/>
			{repos
				.filter((repo) =>
					repo.name.toLowerCase().includes(search.toLowerCase()),
				)
				.map((repo) => {
					return <RepoItem key={repo.id} {...repo} />;
				})}
		</>
	);
};

import {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import {fetchUserCard, User} from "../../redux/slices/users.slice";
import {RootState, useAppDispatch} from "../../redux/store";

export const UserItem: FC<User> = ({login, avatar_url}) => {
	const dispatch = useAppDispatch();
	const userCards = useSelector((state: RootState) => state.users.userCards)
	const userCard = userCards.filter(user => user.login === login)[0]
	const reposCount = userCard?.public_repos

	useEffect(() => {
		try {
			dispatch(fetchUserCard({login}))
		} catch (error) {
			console.log(error);
		}
	}, [dispatch, login]);

	return (
		<Link className="user_item" to={`/${login}`}>
			<div className="user_item__img">
				<img src={avatar_url} alt="avatar" />
			</div>
			<div className="user_item__name">{login}</div>
			<div className="user_item__repos">Repo: {reposCount}</div>
		</Link>
	);
};

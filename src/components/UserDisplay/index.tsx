import {FC} from "react";
import {useSelector} from "react-redux"
import { RootState } from "../../redux/store";

export const UserDisplay: FC<{login: string | undefined}> = ({login}) => {
	const users = useSelector((state: RootState) => state.users.userCards)
	const userInfo = users.filter(user => user.login === login)[0]


	return (
		<div className="user_display">
			<div className="user_display__top">
				<div className="user_display__img">
					<img src={userInfo?.avatar_url} alt="avatar" />
				</div>
				<ul className="user_display__list">
					<li className="user_display__list_item">{userInfo?.name}</li>
					<li className="user_display__list_item">{userInfo?.email}</li>
					<li className="user_display__list_item">{userInfo?.location}</li>
					<li className="user_display__list_item">{userInfo?.created_at}</li>
					<li className="user_display__list_item">{userInfo?.followers} Followers</li>
					<li className="user_display__list_item">Following {userInfo?.following}</li>
				</ul>
			</div>
			<div className="user_display__descr">{userInfo?.bio}</div>
		</div>
	);
};

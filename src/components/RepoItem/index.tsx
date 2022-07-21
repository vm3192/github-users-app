import {FC} from "react";
import {Repo} from "../../redux/slices/repos.slice";

export const RepoItem: FC<Repo> = ({html_url, name, forks_count, stargazers_count}) => {
	return (
		<a className="repo_item" href={html_url} target="_blank" rel="noreferrer">
			<div className="repo_item__name">{name}</div>
			<div className="repo_item__info">
				<div className="repo_item__forks">{forks_count} Forks</div>
				<div className="repo_item__stars">{stargazers_count} Stars</div>
			</div>
		</a>
	);
};

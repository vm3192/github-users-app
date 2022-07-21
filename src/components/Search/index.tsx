import {FC} from "react";

type SearchParams = {
	value: string;
	changeValue: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
	placeholder: string;
};

export const Search: FC<SearchParams> = ({value, changeValue, placeholder}) => {
	return (
		<input
			className="input_search"
			type="search"
			placeholder={placeholder}
			value={value}
			onChange={(e) => changeValue(e.target.value)}
		/>
	);
};

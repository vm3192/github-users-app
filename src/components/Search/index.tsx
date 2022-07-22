import {FC} from "react";

type SearchParams = {
	value: string;
	changeValue:
		| ((value: string) => void)
		| React.Dispatch<React.SetStateAction<string>>;
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

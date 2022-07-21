import {Routes, Route, Link} from "react-router-dom";
import {AllUsersPage} from "./pages/AllUsersPage";
import {UserPage} from "./pages/UserPage";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<Link to="/" className="app__title">GitHub Searcher</Link>
			<Routes>
				<Route path="/" element={<AllUsersPage />} />
				<Route path="/:login" element={<UserPage />} />
			</Routes>
		</div>
	);
}

export default App;

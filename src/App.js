import { useSelector } from "react-redux";
import "./App.css";

function App() {
	// creating a state so that we can access values easily
	// const state = useSelector((state) => state);
	const account = useSelector((state) => state.account);

	return <div className="App">Hello</div>;
}

export default App;

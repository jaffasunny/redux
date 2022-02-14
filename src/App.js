import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";
import "./App.css";
import { useEffect } from "react";
import { depositMoney } from "./store/action_creators";

function App() {
	// creating a state so that we can access values easily
	// const state = useSelector((state) => state);
	const account = useSelector((state) => state.account);

	// bind all action creators and give it to dispatch
	const dispatch = useDispatch();

	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);

	return (
		<div className="App">
			<h1>{account}</h1>
			<button
				onClick={() => {
					depositMoney(1000);
				}}>
				Deposit
			</button>
			<button
				onClick={() => {
					withdrawMoney(1000);
				}}>
				Withdraw
			</button>
		</div>
	);
}

export default App;

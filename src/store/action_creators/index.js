// we can have multiple action creators
// since we have limited actions so we'll just make one file

export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposit",
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};


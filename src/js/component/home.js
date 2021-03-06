import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

//create your first component
export function Home(props) {
	const [userNum, setUserNum] = useState(0);
	return (
		<div className="container d-flex">
			<button
				onClick={() => {
					props.myFunction(userNum);
					console.log(userNum);
				}}>
				set Number
			</button>
			<input
				type="number"
				placeholder="pick a 6 digit number"
				onChange={e => {
					setUserNum(e.target.value);
				}}
			/>
			<div>{props.number1}</div>
			<div>{props.number2}</div>
			<div>{props.number3}</div>
			<div>{props.number4}</div>
			<div>{props.number5}</div>
			<div>{props.number6}</div>
		</div>
	);
}

Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string,
	myFunction: PropTypes.func
};

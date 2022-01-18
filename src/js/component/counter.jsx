import propTypes from "prop-types";
import React from "react";

export function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i class="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.prototype = {
	digitOne: propTypes.number,
	digitTwo: propTypes.number,
	digitThree: propTypes.number,
	digitFour: propTypes.number,
	digitFive: propTypes.number,
	digitSix: propTypes.number,
};

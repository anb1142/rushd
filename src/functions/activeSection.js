import checkFifty from "./checkFifty";

export default function() {
	let view = [];
	for (let i = 1; i <= 3; i++)
		view.push(checkFifty(document.querySelector(`main>section:nth-of-type(${i})`)));
	return view;
};
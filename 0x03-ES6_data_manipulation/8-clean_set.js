export default (set, startString) => {
	if (!startString) {
		return '';
	}
	const stringLength = startString.length;
	const result = [...set.values()].filter((value) => value.startsWith(startString))
		.map((value) => value.slice(stringLength));
	return result.join('-');
};

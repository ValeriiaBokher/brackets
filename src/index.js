module.exports = function check(str, bracketsConfig) {
	var string = '';
	for (let i = 0; i < str.length; i++) {
		for (j = 0; j < bracketsConfig.length; j++) {
			if (
				bracketsConfig[j].indexOf(str[i]) == 1 &&
				string[string.length - 1] == str[i]
			) {
				string = string.slice(0, -1);
			} else if (
				bracketsConfig[j].indexOf(str[i]) == 0 &&
				string[string.length - 1] == str[i]
			) {
				string = string.slice(0, -1);
			} else if (
				bracketsConfig[j].indexOf(str[i]) == 0 ||
				bracketsConfig[j].indexOf(str[i]) == 1
			) {
				string += bracketsConfig[j][1];
			}
		}
	}
	if (string.length == 0) {
		return true;
	} else {
		return false;
	}
};

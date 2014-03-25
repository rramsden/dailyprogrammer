"use strict";

var left = {
	'{': '}',
	'[': ']',
	'(': ')'
};

var right = {
	'}':'{',
	']':'[',
	')':'('
};

function fill(x, y, string) {
	for (var i = x; i <= y; ++i) {
		string = string.substr(0, i) + ' ' + string.substr(i+1);
	}
	return string;
}

function parseString(string) {
	var leftIndex = [];
	var rightIndex = [];
	var sentence = [];

	for (var i = 0; i < string.length; ++i) {
		if (left[string[i]]) {
			leftIndex.push(i);
		}

		if (right[string[i]]) {
			rightIndex.unshift(i);
		}
	}

	for (var j = leftIndex.length - 1; j >= 0; --j) {
		sentence.push( string.substring(leftIndex[j] + 1, rightIndex[j]).trim() );
		string = fill(leftIndex[j], rightIndex[j], string);
	}

	return sentence.join(' ').replace(/\s+/g, " ");
}

module.exports = function(string) {
	return parseString(string);
};

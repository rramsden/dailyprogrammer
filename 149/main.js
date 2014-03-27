var VOWELS = ['a', 'e', 'i', 'o', 'u'];

function disemvowel(string) {
	var disemvoweled = [];
	var vowels = [];

	for(var i = 0; i < string.length; ++i) {
		if (string[i] == ' ') continue;
		if (VOWELS.indexOf(string[i]) !== -1) {
			vowels.push(string[i]);
		} else {
			disemvoweled.push(string[i]);
		}
	}

	return {
		disemvowel: disemvoweled.join(''),
		vowels: vowels.join('')
	};
}

console.log(disemvowel("did you hear about the excellent farmer who was outstanding in his field"));

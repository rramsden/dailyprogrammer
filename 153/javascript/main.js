var n = process.argv[2],
	alphabet = process.argv[3],
	input = [],
	rl = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

function gorellianSort(a, b) {
	return _sort(a, b, 0);
}

function _sort(a, b, i) {
	if (!(a[i] && b[i])) return 0;

	if (alphabet.indexOf(a[i]) > alphabet.indexOf(b[i])) {
		return 1;
	} else if (alphabet.indexOf(a[i]) < alphabet.indexOf(b[i])) {
		return -1;
	} else {
		return _sort(a, b, i + 1);
	}
}

rl.on('line', function (word) {
	input.push(word);
	if (--n === 0) {
		console.log('---');
		console.log( input.sort(gorellianSort).join("\n") );
		process.exit(1);
	}
});

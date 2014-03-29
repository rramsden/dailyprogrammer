var n = process.argv[2],
	base = process.argv[3],
	decoration = process.argv[4];

Array.prototype.fill = function(n,v) {
    n = n || this.length;
    for( var i = 0; i < n; i++ )  {
        this[i] = v === undefined ? i : v;
	}
    return this;
};

var leftPadding = Math.floor(n / 2);

for (var i = 1; i <= n; i = i + 2, leftPadding = leftPadding - 1) {
	console.log( [].fill(leftPadding, ' ').join('') + [].fill(i, decoration).join('') );
}

console.log( [].fill(Math.floor(n / 2) - 1, ' ').join('') + [].fill(3, base).join('') );

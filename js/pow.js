function pow(x, n) {
	var result = x;

	for (var i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

var x = prompt( 'Please, enter number', '' );
var n = prompt( 'Please, enter power', '' );

if ( x == null || n == null ) {
	alert ( 'Cansel' );
} else if (n < 0) {
	console.log( 'Result = ', (1 / pow(x, -n)) );
} else if ( n == 0 ) {
	console.log( 'Result = ', 1 );
} else {
	console.log( 'Result = ', pow(x, n) );
}
const deequal = require( "./deequal.js" );

let time = Date.now( );
console.log( deequal( {
	"hello": {
		"world": {
			"yeah": "hi"
		},
		"ugh": [
			1,2,3
		],
		"weee": false
	}
}, {
	"hello": {
		"world": {
			"yeah": "hi"
		},
		"ugh": [
			1,2,3
		],
		"weee": false
	}
} ) );
console.log( deequal( undefined, null ) );
console.log( Date.now( ) - time );

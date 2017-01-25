const deequal = require( "./deequal.js" );

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

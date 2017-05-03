const assert = require( "assert" );
const deequal = require( "./deequal.js" );

assert.equal( deequal( {
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
} ), true, "should be true" );

assert.equal( deequal( undefined, null ), false, "should be false" );
assert.equal( deequal( { }, { } ), true, "should be true" );

console.log( "ok" );

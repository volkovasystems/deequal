"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "deequal",
			"path": "deequal/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/deequal.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"deequal": "deequal"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const deequal = require( "./deequal.js" );
//: @end-server

//: @client:
const deequal = require( "./deequal.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "deequal", ( ) => {

	describe( "`deequal with object type source and object type target`", ( ) => {
		it( "should be equal to true", ( ) => {

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
			} ), true );

		} );
	} );

	describe( "`deequal( undefined, null )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( deequal( undefined, null ), false );
		} );
	} );

	describe( "`deequal( { }, { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( deequal( { }, { } ), true );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "deequal", ( ) => {

	describe( "`deequal with object type source and object type target`", ( ) => {
		it( "should be equal to true", ( ) => {

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
			} ), true );

		} );
	} );

	describe( "`deequal( undefined, null )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( deequal( undefined, null ), false );
		} );
	} );

	describe( "`deequal( { }, { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( deequal( { }, { } ), true );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "deequal", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`deequal with object type source and object type target`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let test = deequal( {
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
					} );

					return test;
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`deequal( undefined, null )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return deequal( undefined, null );
				}

			).value;

			assert.equal( result, false );
		} );
	} );

	describe( "`deequal( { }, { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return deequal( { }, { } );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

} );
//: @end-bridge

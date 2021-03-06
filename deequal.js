/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "deequal",
			"path": "deequal/deequal.js",
			"file": "deequal.js",
			"module": "deequal",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/deequal.git",
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
		Deep equal.

		If the source and target is not object, it will do a shallow comparison.
	@end-module-documentation

	@include:
		{
			"eqe": "eqe",
			"kount": "kount",
			"loosen": "loosen",
			"protype": "protype"
		}
	@end-include
*/

const eqe = require( "eqe" );
const kount = require( "kount" );
const loosen = require( "loosen" );
const protype = require( "protype" );

const deequal = function deequal( source, target ){
	/*;
		@meta-configuration:
			{
				"source:required": "*",
				"target:required": "*"
			}
		@end-meta-configuration
	*/

	if( !protype( source, OBJECT ) || !protype( target, OBJECT ) ){
		return eqe( source, target );
	}

	source = loosen( source, true );

	target = loosen( target, true );

	/*;
		@note:
			Checks for key count equality.
		@end-note
	*/
	if( kount( source ) != kount( target ) ){
		return false;
	}

	/*;
		@note:
			Checks for value equality.
		@end-note
	*/
	for( let property in source ){
		if( !( property in target ) ){
			return false;
		}

		if( source[ property ] !== target[ property ] ){
			return false;
		}
	}

	return true;
};

module.exports = deequal;

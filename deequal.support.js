"use strict"; /*;
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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/deequal.git",
              			"global": true,
              			"class": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Deep equal.
              	@end-module-documentation
              
              	@include:
              		{
              			"kount": "kount",
              			"loosen": "loosen",
              			"protype": "protype",
              			"stringe": "stringe",
              		}
              	@end-include
              */

var kount = require("kount");
var loosen = require("loosen");
var protype = require("protype");
var stringe = require("stringe");

var deequal = function deequal(source, target) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"source:required": [
                                                				"object",
                                                				Array
                                                			],
                                                			"target:required": [
                                                				"object",
                                                				Array
                                                			]
                                                		}
                                                	@end-meta-configuration
                                                */

	if (!protype(source, OBJECT) || !protype(target, OBJECT)) {
		try {
			if (protype(source, FUNCTION) && protype(target, FUNCTION)) {
				return source === target || stringe(source) == stringe(target);
			}

			return source === target;

		} catch (error) {
			return false;
		}
	}

	source = loosen(source);
	for (var property in source) {
		if (protype(source[property], OBJECT)) {
			delete source[property];
		}
	}

	target = loosen(target);
	for (var _property in target) {
		if (protype(target[_property], OBJECT)) {
			delete target[_property];
		}
	}

	/*;
   	@note:
   		Checks for value equality.
   	@end-note
   */
	for (var _property2 in source) {
		if (source[_property2] !== target[_property2]) {
			return false;
		}
	}

	/*;
   	@note:
   		Checks for key count equality.
   	@end-note
   */
	return kount(source) === kount(target);
};

module.exports = deequal;

//# sourceMappingURL=deequal.support.js.map
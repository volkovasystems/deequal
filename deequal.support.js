"use strict";var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                  			"loosen": "loosen"
                                                                                                                                                                                                                  		}
                                                                                                                                                                                                                  	@end-include
                                                                                                                                                                                                                  */

var eqe = require("eqe");
var kount = require("kount");
var loosen = require("loosen");

var deequal = function deequal(source, target) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"source:required": "*",
                                                			"target:required": "*"
                                                		}
                                                	@end-meta-configuration
                                                */

	if ((typeof source === "undefined" ? "undefined" : (0, _typeof3.default)(source)) != "object" || (typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) != "object") {
		return eqe(source, target);
	}

	source = loosen(source, true);

	target = loosen(target, true);

	/*;
                                	@note:
                                		Checks for key count equality.
                                	@end-note
                                */
	if (kount(source) != kount(target)) {
		return false;
	}

	/*;
   	@note:
   		Checks for value equality.
   	@end-note
   */
	for (var property in source) {
		if (!(property in target)) {
			return false;
		}

		if (source[property] !== target[property]) {
			return false;
		}
	}

	return true;
};

module.exports = deequal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZXF1YWwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJlcWUiLCJyZXF1aXJlIiwia291bnQiLCJsb29zZW4iLCJkZWVxdWFsIiwic291cmNlIiwidGFyZ2V0IiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoia05BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUcsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0M7QUFDakQ7Ozs7Ozs7OztBQVNBLEtBQUksUUFBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QixRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQWxELEVBQTREO0FBQzNELFNBQU9OLElBQUtLLE1BQUwsRUFBYUMsTUFBYixDQUFQO0FBQ0E7O0FBRURELFVBQVNGLE9BQVFFLE1BQVIsRUFBZ0IsSUFBaEIsQ0FBVDs7QUFFQUMsVUFBU0gsT0FBUUcsTUFBUixFQUFnQixJQUFoQixDQUFUOztBQUVBOzs7OztBQUtBLEtBQUlKLE1BQU9HLE1BQVAsS0FBbUJILE1BQU9JLE1BQVAsQ0FBdkIsRUFBd0M7QUFDdkMsU0FBTyxLQUFQO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsTUFBSyxJQUFJQyxRQUFULElBQXFCRixNQUFyQixFQUE2QjtBQUM1QixNQUFJLEVBQUdFLFlBQVlELE1BQWYsQ0FBSixFQUE2QjtBQUM1QixVQUFPLEtBQVA7QUFDQTs7QUFFRCxNQUFJRCxPQUFRRSxRQUFSLE1BQXVCRCxPQUFRQyxRQUFSLENBQTNCLEVBQStDO0FBQzlDLFVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBTyxJQUFQO0FBQ0EsQ0EzQ0Q7O0FBNkNBQyxPQUFPQyxPQUFQLEdBQWlCTCxPQUFqQiIsImZpbGUiOiJkZWVxdWFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVlcXVhbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGVlcXVhbC9kZWVxdWFsLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkZWVxdWFsLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRlZXF1YWxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlZXF1YWwuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERlZXAgZXF1YWwuXG5cblx0XHRJZiB0aGUgc291cmNlIGFuZCB0YXJnZXQgaXMgbm90IG9iamVjdCwgaXQgd2lsbCBkbyBhIHNoYWxsb3cgY29tcGFyaXNvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcImtvdW50XCI6IFwia291bnRcIixcblx0XHRcdFwibG9vc2VuXCI6IFwibG9vc2VuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xuY29uc3Qga291bnQgPSByZXF1aXJlKCBcImtvdW50XCIgKTtcbmNvbnN0IGxvb3NlbiA9IHJlcXVpcmUoIFwibG9vc2VuXCIgKTtcblxuY29uc3QgZGVlcXVhbCA9IGZ1bmN0aW9uIGRlZXF1YWwoIHNvdXJjZSwgdGFyZ2V0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInRhcmdldDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBzb3VyY2UgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ICE9IFwib2JqZWN0XCIgKXtcblx0XHRyZXR1cm4gZXFlKCBzb3VyY2UsIHRhcmdldCApO1xuXHR9XG5cblx0c291cmNlID0gbG9vc2VuKCBzb3VyY2UsIHRydWUgKTtcblxuXHR0YXJnZXQgPSBsb29zZW4oIHRhcmdldCwgdHJ1ZSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0Q2hlY2tzIGZvciBrZXkgY291bnQgZXF1YWxpdHkuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCBrb3VudCggc291cmNlICkgIT0ga291bnQoIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRDaGVja3MgZm9yIHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBzb3VyY2UgKXtcblx0XHRpZiggISggcHJvcGVydHkgaW4gdGFyZ2V0ICkgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggc291cmNlWyBwcm9wZXJ0eSBdICE9PSB0YXJnZXRbIHByb3BlcnR5IF0gKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVlcXVhbDtcbiJdfQ==
//# sourceMappingURL=deequal.support.js.map

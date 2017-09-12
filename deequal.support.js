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

var eqe = require("eqe");
var kount = require("kount");
var loosen = require("loosen");
var protype = require("protype");

var deequal = function deequal(source, target) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"source:required": "*",
                                                			"target:required": "*"
                                                		}
                                                	@end-meta-configuration
                                                */

	if (!protype(source, OBJECT) || !protype(target, OBJECT)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZXF1YWwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJlcWUiLCJyZXF1aXJlIiwia291bnQiLCJsb29zZW4iLCJwcm90eXBlIiwiZGVlcXVhbCIsInNvdXJjZSIsInRhcmdldCIsIk9CSkVDVCIsInByb3BlcnR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1JLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7QUFTQSxLQUFJLENBQUNILFFBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLENBQUQsSUFBOEIsQ0FBQ0osUUFBU0csTUFBVCxFQUFpQkMsTUFBakIsQ0FBbkMsRUFBOEQ7QUFDN0QsU0FBT1IsSUFBS00sTUFBTCxFQUFhQyxNQUFiLENBQVA7QUFDQTs7QUFFREQsVUFBU0gsT0FBUUcsTUFBUixFQUFnQixJQUFoQixDQUFUOztBQUVBQyxVQUFTSixPQUFRSSxNQUFSLEVBQWdCLElBQWhCLENBQVQ7O0FBRUE7Ozs7O0FBS0EsS0FBSUwsTUFBT0ksTUFBUCxLQUFtQkosTUFBT0ssTUFBUCxDQUF2QixFQUF3QztBQUN2QyxTQUFPLEtBQVA7QUFDQTs7QUFFRDs7Ozs7QUFLQSxNQUFLLElBQUlFLFFBQVQsSUFBcUJILE1BQXJCLEVBQTZCO0FBQzVCLE1BQUksRUFBR0csWUFBWUYsTUFBZixDQUFKLEVBQTZCO0FBQzVCLFVBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlELE9BQVFHLFFBQVIsTUFBdUJGLE9BQVFFLFFBQVIsQ0FBM0IsRUFBK0M7QUFDOUMsVUFBTyxLQUFQO0FBQ0E7QUFDRDs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQTNDRDs7QUE2Q0FDLE9BQU9DLE9BQVAsR0FBaUJOLE9BQWpCIiwiZmlsZSI6ImRlZXF1YWwuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVlcXVhbFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkZWVxdWFsL2RlZXF1YWwuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZGVlcXVhbC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRlZXF1YWxcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGVlcXVhbC5naXRcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZSxcclxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHREZWVwIGVxdWFsLlxyXG5cclxuXHRcdElmIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBpcyBub3Qgb2JqZWN0LCBpdCB3aWxsIGRvIGEgc2hhbGxvdyBjb21wYXJpc29uLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwia291bnRcIjogXCJrb3VudFwiLFxyXG5cdFx0XHRcImxvb3NlblwiOiBcImxvb3NlblwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcclxuY29uc3Qga291bnQgPSByZXF1aXJlKCBcImtvdW50XCIgKTtcclxuY29uc3QgbG9vc2VuID0gcmVxdWlyZSggXCJsb29zZW5cIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuXHJcbmNvbnN0IGRlZXF1YWwgPSBmdW5jdGlvbiBkZWVxdWFsKCBzb3VyY2UsIHRhcmdldCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiKlwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFwcm90eXBlKCBzb3VyY2UsIE9CSkVDVCApIHx8ICFwcm90eXBlKCB0YXJnZXQsIE9CSkVDVCApICl7XHJcblx0XHRyZXR1cm4gZXFlKCBzb3VyY2UsIHRhcmdldCApO1xyXG5cdH1cclxuXHJcblx0c291cmNlID0gbG9vc2VuKCBzb3VyY2UsIHRydWUgKTtcclxuXHJcblx0dGFyZ2V0ID0gbG9vc2VuKCB0YXJnZXQsIHRydWUgKTtcclxuXHJcblx0Lyo7XHJcblx0XHRAbm90ZTpcclxuXHRcdFx0Q2hlY2tzIGZvciBrZXkgY291bnQgZXF1YWxpdHkuXHJcblx0XHRAZW5kLW5vdGVcclxuXHQqL1xyXG5cdGlmKCBrb3VudCggc291cmNlICkgIT0ga291bnQoIHRhcmdldCApICl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKjtcclxuXHRcdEBub3RlOlxyXG5cdFx0XHRDaGVja3MgZm9yIHZhbHVlIGVxdWFsaXR5LlxyXG5cdFx0QGVuZC1ub3RlXHJcblx0Ki9cclxuXHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBzb3VyY2UgKXtcclxuXHRcdGlmKCAhKCBwcm9wZXJ0eSBpbiB0YXJnZXQgKSApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIHNvdXJjZVsgcHJvcGVydHkgXSAhPT0gdGFyZ2V0WyBwcm9wZXJ0eSBdICl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkZWVxdWFsO1xyXG4iXX0=
//# sourceMappingURL=deequal.support.js.map

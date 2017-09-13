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

var assert = require("should/as-function");



//: @client:
var deequal = require("./deequal.support.js");
//: @end-client







//: @client:
describe("deequal", function () {

	describe("`deequal with object type source and object type target`", function () {
		it("should be equal to true", function () {

			assert.equal(deequal({
				"hello": {
					"world": {
						"yeah": "hi" },

					"ugh": [
					1, 2, 3],

					"weee": false } },

			{
				"hello": {
					"world": {
						"yeah": "hi" },

					"ugh": [
					1, 2, 3],

					"weee": false } }),

			true);

		});
	});

	describe("`deequal( undefined, null )`", function () {
		it("should be equal to false", function () {
			assert.equal(deequal(undefined, null), false);
		});
	});

	describe("`deequal( { }, { } )`", function () {
		it("should be equal to true", function () {
			assert.equal(deequal({}, {}), true);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVlcXVhbCIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsMERBQVYsRUFBc0UsWUFBTztBQUM1RUMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTO0FBQ3RCLGFBQVM7QUFDUixjQUFTO0FBQ1IsY0FBUSxJQURBLEVBREQ7O0FBSVIsWUFBTztBQUNOLE1BRE0sRUFDSixDQURJLEVBQ0YsQ0FERSxDQUpDOztBQU9SLGFBQVEsS0FQQSxFQURhLEVBQVQ7O0FBVVg7QUFDRixhQUFTO0FBQ1IsY0FBUztBQUNSLGNBQVEsSUFEQSxFQUREOztBQUlSLFlBQU87QUFDTixNQURNLEVBQ0osQ0FESSxFQUNGLENBREUsQ0FKQzs7QUFPUixhQUFRLEtBUEEsRUFEUCxFQVZXLENBQWQ7O0FBb0JLLE9BcEJMOztBQXNCQSxHQXhCRDtBQXlCQSxFQTFCRDs7QUE0QkFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxLQUFQLENBQWNILFFBQVNJLFNBQVQsRUFBb0IsSUFBcEIsQ0FBZCxFQUEwQyxLQUExQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYyxFQUFkLENBQWQsRUFBbUMsSUFBbkM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQTFDRDtBQTJDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlZXF1YWxcIixcblx0XHRcdFwicGF0aFwiOiBcImRlZXF1YWwvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlZXF1YWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImRlZXF1YWxcIjogXCJkZWVxdWFsXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBkZWVxdWFsID0gcmVxdWlyZSggXCIuL2RlZXF1YWwuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJkZWVxdWFsXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZXF1YWwgd2l0aCBvYmplY3QgdHlwZSBzb3VyY2UgYW5kIG9iamVjdCB0eXBlIHRhcmdldGBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlZXF1YWwoIHtcblx0XHRcdFx0XCJoZWxsb1wiOiB7XG5cdFx0XHRcdFx0XCJ3b3JsZFwiOiB7XG5cdFx0XHRcdFx0XHRcInllYWhcIjogXCJoaVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcInVnaFwiOiBbXG5cdFx0XHRcdFx0XHQxLDIsM1xuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ3ZWVlXCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0XCJoZWxsb1wiOiB7XG5cdFx0XHRcdFx0XCJ3b3JsZFwiOiB7XG5cdFx0XHRcdFx0XHRcInllYWhcIjogXCJoaVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcInVnaFwiOiBbXG5cdFx0XHRcdFx0XHQxLDIsM1xuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ3ZWVlXCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlZXF1YWwoIHVuZGVmaW5lZCwgbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZWVxdWFsKCB1bmRlZmluZWQsIG51bGwgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVlcXVhbCggeyB9LCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZWVxdWFsKCB7IH0sIHsgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map

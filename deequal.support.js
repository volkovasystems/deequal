"use strict";

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
			"protype": "protype"
		}
	@end-include
*/

var kount = require("kount");
var loosen = require("loosen");
var protype = require("protype");

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
				return source === target || source.toString() == target.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZXF1YWwuanMiXSwibmFtZXMiOlsia291bnQiLCJyZXF1aXJlIiwibG9vc2VuIiwicHJvdHlwZSIsImRlZXF1YWwiLCJzb3VyY2UiLCJ0YXJnZXQiLCJPQkpFQ1QiLCJGVU5DVElPTiIsInRvU3RyaW5nIiwiZXJyb3IiLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxLQUFJLENBQUNILFFBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLENBQUQsSUFBOEIsQ0FBQ0osUUFBU0csTUFBVCxFQUFpQkMsTUFBakIsQ0FBbkMsRUFBOEQ7QUFDN0QsTUFBRztBQUNGLE9BQUlKLFFBQVNFLE1BQVQsRUFBaUJHLFFBQWpCLEtBQStCTCxRQUFTRyxNQUFULEVBQWlCRSxRQUFqQixDQUFuQyxFQUFnRTtBQUMvRCxXQUFPSCxXQUFXQyxNQUFYLElBQXFCRCxPQUFPSSxRQUFQLE1BQXNCSCxPQUFPRyxRQUFQLEVBQWxEO0FBQ0E7O0FBRUQsVUFBT0osV0FBV0MsTUFBbEI7QUFFQSxHQVBELENBT0MsT0FBT0ksS0FBUCxFQUFjO0FBQ2QsVUFBTyxLQUFQO0FBQ0E7QUFDRDs7QUFFREwsVUFBU0gsT0FBUUcsTUFBUixDQUFUO0FBQ0EsTUFBSyxJQUFJTSxRQUFULElBQXFCTixNQUFyQixFQUE2QjtBQUM1QixNQUFJRixRQUFTRSxPQUFRTSxRQUFSLENBQVQsRUFBNkJKLE1BQTdCLENBQUosRUFBMkM7QUFDMUMsVUFBT0YsT0FBUU0sUUFBUixDQUFQO0FBQ0E7QUFDRDs7QUFFREwsVUFBU0osT0FBUUksTUFBUixDQUFUO0FBQ0EsTUFBSyxJQUFJSyxTQUFULElBQXFCTCxNQUFyQixFQUE2QjtBQUM1QixNQUFJSCxRQUFTRyxPQUFRSyxTQUFSLENBQVQsRUFBNkJKLE1BQTdCLENBQUosRUFBMkM7QUFDMUMsVUFBT0QsT0FBUUssU0FBUixDQUFQO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7QUFLQSxNQUFLLElBQUlBLFVBQVQsSUFBcUJOLE1BQXJCLEVBQTZCO0FBQzVCLE1BQUlBLE9BQVFNLFVBQVIsTUFBdUJMLE9BQVFLLFVBQVIsQ0FBM0IsRUFBK0M7QUFDOUMsVUFBTyxLQUFQO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7QUFLQSxRQUFPWCxNQUFPSyxNQUFQLE1BQW9CTCxNQUFPTSxNQUFQLENBQTNCO0FBQ0EsQ0E1REQ7O0FBOERBTSxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQiIsImZpbGUiOiJkZWVxdWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlZXF1YWxcIixcblx0XHRcdFwicGF0aFwiOiBcImRlZXF1YWwvZGVlcXVhbC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGVlcXVhbC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZWVxdWFsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZWVxdWFsLmdpdFwiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHREZWVwIGVxdWFsLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJrb3VudFwiOiBcImtvdW50XCIsXG5cdFx0XHRcImxvb3NlblwiOiBcImxvb3NlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGtvdW50ID0gcmVxdWlyZSggXCJrb3VudFwiICk7XG5jb25zdCBsb29zZW4gPSByZXF1aXJlKCBcImxvb3NlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgZGVlcXVhbCA9IGZ1bmN0aW9uIGRlZXF1YWwoIHNvdXJjZSwgdGFyZ2V0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdEFycmF5XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdEFycmF5XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggc291cmNlLCBPQkpFQ1QgKSB8fCAhcHJvdHlwZSggdGFyZ2V0LCBPQkpFQ1QgKSApe1xuXHRcdHRyeXtcblx0XHRcdGlmKCBwcm90eXBlKCBzb3VyY2UsIEZVTkNUSU9OICkgJiYgcHJvdHlwZSggdGFyZ2V0LCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHJldHVybiBzb3VyY2UgPT09IHRhcmdldCB8fCBzb3VyY2UudG9TdHJpbmcoICkgPT0gdGFyZ2V0LnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc291cmNlID09PSB0YXJnZXQ7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c291cmNlID0gbG9vc2VuKCBzb3VyY2UgKTtcblx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gc291cmNlICl7XG5cdFx0aWYoIHByb3R5cGUoIHNvdXJjZVsgcHJvcGVydHkgXSwgT0JKRUNUICkgKXtcblx0XHRcdGRlbGV0ZSBzb3VyY2VbIHByb3BlcnR5IF07XG5cdFx0fVxuXHR9XG5cblx0dGFyZ2V0ID0gbG9vc2VuKCB0YXJnZXQgKTtcblx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gdGFyZ2V0ICl7XG5cdFx0aWYoIHByb3R5cGUoIHRhcmdldFsgcHJvcGVydHkgXSwgT0JKRUNUICkgKXtcblx0XHRcdGRlbGV0ZSB0YXJnZXRbIHByb3BlcnR5IF07XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRDaGVja3MgZm9yIHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBzb3VyY2UgKXtcblx0XHRpZiggc291cmNlWyBwcm9wZXJ0eSBdICE9PSB0YXJnZXRbIHByb3BlcnR5IF0gKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdENoZWNrcyBmb3Iga2V5IGNvdW50IGVxdWFsaXR5LlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRyZXR1cm4ga291bnQoIHNvdXJjZSApID09PSBrb3VudCggdGFyZ2V0ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXF1YWw7XG4iXX0=

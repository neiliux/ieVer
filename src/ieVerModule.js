var ieVer = (function() {
	var obj = null;

	function isIE() {
		var regEx = /msie|trident/i;
		return regEx.test(userAgent());
	}

	function ieMajorVersion() {
		var match = userAgent().match(/(?:msie |rv:)(\d+(\.\d+)?)/i);
		var version = (match && match.length > 1 && match[1]) || null;

		if (version == null || version.indexOf('.') == -1) {
			return null;
		}

		return parseInt(version.split('.')[0]);
	}

	function version() {
		return '0.1';
	}

	function userAgent() {
		return window.navigator.userAgent;
	}

	if (obj == null) {
		obj = {
			isIE: isIE(),
			majorVersion: ieMajorVersion(),
			version: version(),
			userAgent: userAgent()
		};
	}

	return obj;
}());
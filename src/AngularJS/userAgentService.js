mhIeVer.factory('userAgentService', [
	function() {
		"use strict";
		return {
			getUserAgent: function() {
				if (window.navigator &&
					window.navigator.userAgent) {
					return window.navigator.userAgent;
				}
				return null;
			}
		};
	}
]);
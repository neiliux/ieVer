"use strict";
var ieVer = angular.module('ieVer', [], null);

ieVer.factory('ieVer', [
	'userAgentService',
	function(
		userAgentService) {
		return {
			version: function() {
				return '0.1';
			},

			userAgent: function() {
				return userAgentService.getUserAgent();
			},

			isIE: function() {
				// IE 11 seems to have removed 'msie' from the user agent,
				// but we can use 'trident' to detect IE 11.
				var regEx = /msie|trident/i;
				var userAgent = userAgentService.getUserAgent();
				return regEx.test(userAgent);
			},

			IEMajorVersion: function() {
				var userAgent = userAgentService.getUserAgent();
				var match = userAgent.match(/(?:msie |rv:)(\d+(\.\d+)?)/i);
				var version = (match && match.length > 1 && match[1]) || null;

				if (version == null ||
					version.indexOf('.') == -1) {
					return null;
				}
				return parseInt(version.split('.')[0]);
			}
		};
	}
]);
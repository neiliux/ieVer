'use strict';
var mhIeVer = angular.module('mh.IEVer', [], null);

mhIeVer.factory('IEVer', [
	function () {
		return {
			version: function() {
				return '0.1';
			},

			foo: function() {
				alert('xsdsdf');
			}
		};
	}
]);
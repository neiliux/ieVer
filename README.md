mh.IEVer
========

Collection of vanilla JS Module, JQuery Plugin, and AngularJS Module used to detect IE version.

How to use
----------

###AngularJs:
* Include ieVer.js on your page.
* Add ieVer as a dependency to your Angular module.
* Inject ieVer into your controller, service, etc.
```
var sandbox = angular.module('sandbox', ['ieVer'], null);
var sandboxCtrl = sandbox.controller('sandboxCtrl', [
	'IEVer',
	'$scope',
	function (
			IEVer,
			$scope) {
		$scope.version = IEVer.version();
		$scope.userAgent = IEVer.userAgent();
		$scope.isIE = IEVer.isIE();
		$scope.ieMajorVersion = IEVer.IEMajorVersion();
	}
]);
```

###jQuery:
Include ieVer.js on your page.
```
var ieVer = $.ieVer();
$("#isIE").text(ieVer.isIE);
$("#version").text(ieVer.version);
$("#userAgent").text(ieVer.userAgent);
$("#majorVersion").text(ieVer.majorVersion);
```

###Vanilla JS:

Include ieVerModule.js on your page.

Inspect the ieVer object which will be available on the global scope.
```
$("#isIE").text(ieVer.isIE);
$("#version").text(ieVer.version);
$("#userAgent").text(ieVer.userAgent);
$("#majorVersion").text(ieVer.majorVersion);
```
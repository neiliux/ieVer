mh.IEVer
========

Collection of vanilla JS Module, JQuery Plugin, and AngularJS Module used to detect IE version.

How to use
----------

Vanilla JS:
Include ieVerModule.js on your page.
Inspect the ieVer object which is now available:
	$("#isIE").text(ieVer.isIE);
    $("#version").text(ieVer.version);
    $("#userAgent").text(ieVer.userAgent);
    $("#majorVersion").text(ieVer.majorVersion);
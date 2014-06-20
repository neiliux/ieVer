mh.IEVer
========

Collection of vanilla JS Module, JQuery Plugin, and AngularJS Module used to detect IE version.

How to use
----------

###Vanilla JS:

Include ieVerModule.js on your page.

Inspect the ieVer object which will be available on the global scope.
```
$("#isIE").text(ieVer.isIE);
$("#version").text(ieVer.version);
$("#userAgent").text(ieVer.userAgent);
$("#majorVersion").text(ieVer.majorVersion);
```
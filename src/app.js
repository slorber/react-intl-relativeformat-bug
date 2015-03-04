'use strict';

var $ = require("jquery");
var _ = require("lodash");
var React = require("react/addons");
var AppReactContext = require("appReactContext");

var MyFormattedMessage = require("appComponents").MyFormattedMessage;

var MyFormattedRelative = require("appComponents").MyFormattedRelative;


var preferredLanguage = undefined;

var reactContext = AppReactContext.build(preferredLanguage);


console.debug("React context is",reactContext);


// This one works
React.withContext(reactContext,function() {
    React.render(MyFormattedMessage(),document.getElementById("formattedMessage"));
});

// This one raises an error
React.withContext(reactContext,function() {
    React.render(MyFormattedRelative(),document.getElementById("formattedRelative"));
});



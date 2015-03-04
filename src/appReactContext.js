"use strict";

var React = require("react/addons");
var AppI18n = require("appI18n");
var _ = require("lodash");

// React context is the hidden feature of react which permits to pass data to a whole tree of components
exports.build = function buildReactContext(maybePreferredLang) {
    var language = maybePreferredLang ? maybePreferredLang : AppI18n.guessLanguage();

    // Required for React Intl
    var I18NContext = AppI18n.reactContextForLanguage(language);

    var AppContext = {
        language: language
    };

    return _.assign(
        {},
        I18NContext,
        {appContext: AppContext}
    );
};


exports.Mixin = {
    contextTypes: {
        appContext: React.PropTypes.object.isRequired
    },
    getAppContext: function() {
        return this.context.appContext;
    }
};











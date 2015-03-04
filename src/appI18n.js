"use strict";


var ReactIntl = require('react-intl');
// Required because local data files assume global variable
window.ReactIntl = ReactIntl;
// "en" is provided by default
require("react-intl/dist/locale-data/fr.js");



var reactContextForLanguage = function reactContextForLang(language) {
    switch (language) {
        case "FR": return FR;
        case "EN": return EN;
        default: throw new Error("unsupported lang=" + language);
    }
};
exports.reactContextForLanguage = reactContextForLanguage;



// TODO this can probably be done in a better way but is ok for now
function guessLanguage() {
    var output = "EN";
    var language = window.navigator.userLanguage || window.navigator.language;
    if  ( language && language.indexOf("fr") === 0 ) {
        output = "FR";
    }
    console.debug("No preferred language was set by the user, thus we'll use ["+output+"]");
    return output;
}
exports.guessLanguage = guessLanguage;





var EN = {
    locales : "en",
    messages: {
        test: "english"
    }
};


var FR = {
    locales : "fr",
    messages: {
        test: "french"
    }
};
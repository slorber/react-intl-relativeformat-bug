"use strict";

var React = require("react/addons");

var ReactIntl         = require("react-intl");
var IntlMixin         = ReactIntl.IntlMixin;
var FormattedMessage  = ReactIntl.FormattedMessage;
var FormattedRelative = ReactIntl.FormattedRelative;


var MyFormattedMessage = React.createClass({
    mixins: [IntlMixin],
    render: function() {
        return (
            <div>
                Test formatted message = <FormattedMessage message={this.getIntlMessage("test")}/>
            </div>
        );
    }
});
exports.MyFormattedMessage = MyFormattedMessage;




var MyFormattedRelative = React.createClass({
    mixins: [IntlMixin],
    render: function() {
        return (
            <div>
                Test formatted relative = <FormattedRelative value={1425463192} />
            </div>
        );
    }
});
exports.MyFormattedRelative = MyFormattedRelative;


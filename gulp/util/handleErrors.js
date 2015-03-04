var notify = require("gulp-notify");

module.exports = function() {

	var args = Array.prototype.slice.call(arguments);

	// Send error to notification center with gulp-notify
	notify.onError({
		title: "Compile Error",
		message: "<%= error %>"
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');

	// TODO use node_env variable instead!
	if ( global.buildNoWatch ) {
		// this is very important: for production we do not want to continue the deployment if the build fails!!!
		process.exit(1);
	}

};
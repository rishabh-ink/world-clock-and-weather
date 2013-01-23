"use strict";

/**
 * GeoLocation
 * The GeoLocation module.
 * @author rishabhsrao
 */
define([
	"lib.use!lib.debug",
	"util.Constants",
	"lib.knockoutjs"
],
function(
	debug,
	Constants,
	ko
) {
	debug.log("Loading util.GeoLocation");
	var Module = function() {
		var self = this;

		Module.prototype.get = function() {
			var position = null;

			if(Modernizr.geolocation) {
				navigator.geolocation.getCurrentPosition(function(p) {
				  position = p;
				});
			} else {
				debug.warn("util.GeoLocation", "geolocation not available");
			}

			return position;
		};

		return self;
	};

	return {
		createModule: function() {
			return new Module();
		}
	};
});
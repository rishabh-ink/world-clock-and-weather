"use strict";

/**
 * viewmodel.Home
 * The viewmodel.Home module.
 * @author rishabhsrao
 */
define([
  "lib.use!lib.debug",
  "util.Constants",
  "util.ErrorHandler",
  "util.Storage",
  "util.GeoLocation",
  "model.City",
  "lib.knockoutjs"
],
function(
  debug,
  Constants,
  ErrorHandler,
  Storage,
  GeoLocation,
  City,
  ko
) {
  debug.log("Loading viewmodel.Home");
  var Module = function() {
    var self = this;

    self.cities = ko.observableArray();

    Module.prototype.init = function() {
      debug.log("viewmodel.Home.prototype.init");

      var g = GeoLocation.create();
      debug.debug("viewmodel.Home.prototype.init", "Created GeoLocation object...", g);

      g.get().done(function() {
        debug.log("viewmodel.Home.prototype.init", "position is", g.position);
      });
    };

    return self;
  };

  return {
    create: function() {
      return new Module();
    }
  };
});
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
  "util.Network",
  "model.City",
  "lib.knockoutjs",
  "jquery"
],
function(
  debug,
  Constants,
  ErrorHandler,
  Storage,
  GeoLocation,
  Network,
  City,
  ko,
  jQuery
) {
  debug.log("Loading viewmodel.Home");
  var HomeViewModelModule = function() {
    var self = this;

    self.city = City.create();
    self.network = Network.create();

    HomeViewModelModule.prototype.init = function() {
      debug.log("viewmodel.Home.init");
    };

    HomeViewModelModule.prototype.fetchData = function() {
      debug.log("viewmodel.Home.fetchData");

      if("" !== self.city.city.geo.name()) {
        self.fetchTimezone();
      }
    };

    HomeViewModelModule.prototype.fetchTimezone = function() {
      debug.log("viewmodel.Home.fetchTimezone");

      debug.log("viewmodel.Home.fetchTimezone", "Fetching timezone", self.city);
      self.network.getTimezone(self.city.city.geo.name()).then(
        // Success callback
        function(data) {
          debug.log("viewmodel.Home.fetchTimezone", "Setting up timezone", data);
          self.city.applyTimezoneMappings(data);
        }),

        // Failure callback
        function() {
          debug.warn("viewmodel.Home.fetchTimezone", "Unable to setup timezone");
        }
    };

    self.init();

    return self;
  };

  return {
    create: function() {
      return new HomeViewModelModule();
    }
  };
});
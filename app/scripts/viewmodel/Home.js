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
  "knockout",
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
  var Module = function() {
    var self = this;

    Module.prototype.init = function() {
      debug.log("viewmodel.Home", "init");

      self.city = City.create();
      self.network = Network.create();
    };

    Module.prototype.fetchData = function() {
      debug.log("viewmodel.Home", "fetchData");

      if("" !== self.city.info.name()) {
        self.fetchTimezone();
        self.fetchWeather();
      }
    };

    Module.prototype.fetchWeather = function() {
      debug.log("viewmodel.Home", "fetchWeather");

      debug.log("viewmodel.Home", "fetchWeather", "Fetching weather", self.city);
      self.network.getWeather(self.city.info.name()).then(
        // Success callback
        function(data) {
          debug.log("viewmodel.Home", "fetchWeather", "Setting up weather", data);

          if("undefined" === typeof (data.value.items[0].results)) {
            if(null === data.value.items[0].results) {
              debug.error("viewmodel.Home", "fetchWeather", "Invalid data received.");
            }
          } else {
            debug.log("viewmodel.Home", "fetchWeather", "Data received, applying mappings...");
            self.city.applyMappings(data.value.items[0]);
          }
        },

        // Failure callback
        function() {
          debug.warn("viewmodel.Home", "fetchWeather", "AJAX failed, Unable to setup weather.");
        }
      );
    };

    self.init();

    return self;
  };

  return {
    create: function() {
      return new Module();
    }
  };
});
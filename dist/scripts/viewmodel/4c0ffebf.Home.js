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


      self.available = ko.observable(false);
      self.city = City.create();
      self.network = Network.create();
      self.storage = Storage.create();

      self.test = ko.observable("hello");
    };

    Module.prototype.refresh = function() {
      debug.log("viewmodel.Home", "refresh");

      self.fetchLocation();

      // var cacheStatus = self.load();

      // if(false === cacheStatus) {
      //   debug.log("viewmodel.Home", "refresh", "Data not found in cache.");
      //   self.fetchLocation();

      //   debug.log("viewmodel.Home", "refresh", "Saving to localStorage...");
      //   self.save();
      // }
    };

    Module.prototype.fetchLocation = function() {
      debug.log("viewmodel.Home", "fetchLocation");

      var geo = GeoLocation.create();

      var geoPromise = geo.get();

      geoPromise.done(
        // Success callback
        function(data) {
          debug.log("viewmodel.Home", "fetchLocation", "Got location", { data: data });

          if("undefined" !== typeof data.coords) {
            self.city.weather.location.geo.lat(data.coords.latitude);
            self.city.weather.location.geo.long(data.coords.longitude);
          }

          self.fetchData();
        }
      );

      geoPromise.fail(
        // Failure callback
        function() {
          debug.warn("viewmodel.Home", "fetchLocation", "Failed to get geo-location.");
        }
      );
    };

    Module.prototype.fetchData = function() {
      debug.log("viewmodel.Home", "fetchData");

      if("" !== self.city.weather.location.geo.lat()) {
        self.fetchWeather(self.city.weather.location.getGeoLocationString());
      } else {
        self.fetchWeather(self.city.weather.location.city());
      }
    };

    Module.prototype.save = function() {
      debug.log("viewmodel.Home", "save");

      self.storage.save(Constants.keyrings.storage.HOME_CITY, self.city);
    };

    Module.prototype.load = function() {
      debug.log("viewmodel.Home", "load");

      var data = null;

      if(Constants.errors.storage.FOUND === self.storage.isAlreadyAvailable(Constants.keyrings.storage.HOME_CITY)) {
        data = self.storage.load(Constants.keyrings.storage.HOME_CITY);
        self.city.applyMappings(data);

        return true;
      } else {
        return false;
      }
    };

    Module.prototype.fetchWeather = function(location) {
      debug.log("viewmodel.Home", "fetchWeather");

      debug.log("viewmodel.Home", "fetchWeather", "Fetching weather", self.city);
      self.network.getWeather(location).then(
        // Success callback
        function(data) {
          debug.log("viewmodel.Home", "fetchWeather", "Setting up weather", data);

          if("undefined" !== typeof (data.value.items[0].results)) {
            if(null === data.value.items[0].results) {
              debug.error("viewmodel.Home", "fetchWeather", "Invalid data received.");
            }
          } else {
            debug.log("viewmodel.Home", "fetchWeather", "Data received, applying mappings...");
            self.city.applyMappings(data.value.items[0]);

            self.available(true);
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
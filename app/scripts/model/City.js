define([
  "lib.use!lib.debug",
  "util.Storage",
  "util.Constants",
  "util.ErrorHandler",
  "lib.knockoutjs"
], function(
  debug,
  Storage,
  Constants,
  ErrorHandler,
  ko) {
  "use strict";

  var City = function() {
    var self = this;

    self.city = {
      geo: {
        name: ko.observable(""),
        country: ko.observable(""),

        coordinates: {
          latitude: ko.observable(""),
          longitude: ko.observable("")
        },

        timezoneOffset: ko.observable(0)
      },

      weather: {
        current_condition: {
          temp_C: ko.observable(),
          weatherDesc: {
            value: ko.observable("")
          }
        }
      }
    };

    City.prototype.applyTimezoneMappings = function(data) {
      debug.log("model.city.applyTimezoneMappings", data);

      var timezoneInfo = null;

      if(data.value.items[0].time_zone.utcOffset) {
        timezoneInfo = data.value.items[0];

        debug.log("model.city.applyTimezoneMappings", "Setting timezone info", timezoneInfo);
        self.city.geo.timezoneOffset(timezoneInfo.time_zone.utcOffset);
      } else {
        debug.warn("model.city.applyTimezoneMappings", "Unable to set timezone offset. Assuming UTC.", timezoneInfo.time_zone.utcOffset);
      }
    };

    City.prototype.applyWeatherMappings = function(data) {
      debug.log("model.city.applyWeatherMappings", data);

      var weatherInfo = null;

      if(data.value.items[0]) {
        weatherInfo = data.value.items[0];

        debug.log("model.city.applyWeatherMappings", "Setting weather info", weatherInfo);
        self.city.weather.current_condition.temp_C(weatherInfo.current_condition.temp_C);
        self.city.weather.current_condition.weatherDesc.value(weatherInfo.current_condition.weatherDesc.value);
      } else {
        debug.warn("model.city.applyWeatherMappings", "Unable to set weather info.", weatherInfo);
      }
    };
  };

  return {
    create: function() {
      return new City();
    }
  };
});
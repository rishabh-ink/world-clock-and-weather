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
        temperature: {
          celcius: {
            average: ko.observable(0),
            maximum: ko.observable(0),
            minimum: ko.observable(0)
          },

          fareheit: {
            average: ko.observable(0),
            maximum: ko.observable(0),
            minimum: ko.observable(0)
          }
        },

        text: ko.observable("")
      }
    };

    City.prototype.applyTimezoneMappings = function(data) {
      debug.log("model.city.applyTimezoneMappings", data);

      if(data.value.items[0].time_zone.utcOffset) {
        debug.log("model.city.applyTimezoneMappings", "Setting timezone offset", data.value.items[0].time_zone.utcOffset);
        self.city.geo.timezoneOffset(data.value.items[0].time_zone.utcOffset);
      } else {
        debug.warn("model.city.applyTimezoneMappings", "Unable to set timezone offset. Assuming UTC.", data.value.items[0].time_zone.utcOffset);
      }
    };
  };

  return {
    create: function() {
      return new City();
    }
  };
});
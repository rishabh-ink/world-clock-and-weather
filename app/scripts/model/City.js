/**
 * City
 * The City module.
 * @author rishabhsrao
 */
 define([
  "lib.use!lib.debug",
  "util.Storage",
  "util.Constants",
  "util.ErrorHandler",
  "knockout"
], function(
  debug,
  Storage,
  Constants,
  ErrorHandler,
  ko
) {
  "use strict";

  var City = function() {
    var self = this;

    self.info = {
      name: ko.observable(""),
      
      coordinates: {
        latitude: ko.observable(""),
        longitude: ko.observable("")
      }
    };

    self.timezone = {
      request: {
        query: ko.observable(""),
        type: ko.observable("")
      },

      time_zone: {
        localtime: ko.observable(""),
        utcOffset: ko.observable("")
      },

      description: ko.observable(""),
      title: ko.observable("")
    };

    self.weather = {
      current_condition: {
        cloudcover: ko.observable(""),
        humidity: ko.observable(""),
        observation_time: ko.observable(""),
        precipMM: ko.observable(""),
        pressure: ko.observable(""),
        temp_C: ko.observable(""),
        temp_F: ko.observable(""),
        visibility: ko.observable(""),
        weatherCode: ko.observable(""),
        weatherDesc: {
            value: ko.observable("")
        },
        weatherIconUrl: {
            value: ko.observable("")
        },
        winddir16Point: ko.observable(""),
        winddirDegree: ko.observable(""),
        windspeedKmph: ko.observable(""),
        windspeedMiles: ko.observable("")
      },

      request: {
        query: ko.observable(""),
        type: ko.observable("")
      }
    };

    City.prototype.applyTimezoneMappings = function(data) {
      debug.log("model.city.applyTimezoneMappings", data);

      self.timezone.request.query(data.value.items[0].request.query);
      self.timezone.request.type(data.value.items[0].request.type);
      self.timezone.time_zone.localtime(data.value.items[0].time_zone.localtime);
      self.timezone.time_zone.utcOffset(data.value.items[0].time_zone.utcOffset);
    };

    City.prototype.applyWeatherMappings = function(data) {
      debug.log("model.city.applyWeatherMappings", data);
      
      self.weather.current_condition.cloudcover(data.value.items[0].current_condition.cloudcover);
      self.weather.current_condition.humidity(data.value.items[0].current_condition.humidity);
      self.weather.current_condition.observation_time(data.value.items[0].current_condition.observation_time);
      self.weather.current_condition.precipMM(data.value.items[0].current_condition.precipMM);
      self.weather.current_condition.pressure(data.value.items[0].current_condition.pressure);
      self.weather.current_condition.temp_C(data.value.items[0].current_condition.temp_C);
      self.weather.current_condition.temp_F(data.value.items[0].current_condition.temp_F);
      self.weather.current_condition.visibility(data.value.items[0].current_condition.visibility);
      self.weather.current_condition.weatherCode(data.value.items[0].current_condition.weatherCode);
      self.weather.current_condition.weatherDesc.value(data.value.items[0].current_condition.weatherDesc.value);
      self.weather.current_condition.weatherIconUrl.value(data.value.items[0].current_condition.weatherIconUrl);
      self.weather.current_condition.winddir16Point(data.value.items[0].current_condition.winddir16Point);
      self.weather.current_condition.winddirDegree(data.value.items[0].current_condition.winddirDegree);
      self.weather.current_condition.windspeedKmph(data.value.items[0].current_condition.windspeedKmph);
      self.weather.current_condition.windspeedMiles(data.value.items[0].current_condition.windspeedMiles);
      self.weather.request.query(data.value.items[0].request.query);
      self.weather.request.type(data.value.items[0].request.type);
    };

    return self;
  };

  return {
    create: function() {
      return new City();
    }
  };
});
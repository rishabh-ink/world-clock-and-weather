/**
 * CurrentWeather
 * The CurrentWeather module.
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
  ko) {
  "use strict";

  var CurrentWeather = function() {
    var self = this;
  };

  return {
    create: function() {
      return new CurrentWeather();
    }
  };
});
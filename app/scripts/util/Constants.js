"use strict";

/**
 * Constants
 * The Constants module stores global constants required in the application.
 * @author See /humans.txt
 */
define({
	module: {
		model: {
		}
	},

	api: {
		test: {
			baseUrl: "http://localhost:3501/data/sample-city.json",
			methods: {
			}
		},

		pipes: {
			baseUrl: "http://pipes.yahoo.com/pipes/pipe.run",
			methods: {
				weather: "687279a3ea30ea78c978b1bf6e235055"
			}
		}
	},

	keyrings: {
		storage: {
			HOME_CITY: "WCW_HOME_CITY",
			FAV_CITIES: "WCW_FAV_CITIES"
		}
	},

	refreshTimeouts: {
		cache: (120 * 60 * 1000) // 120 mins in milliseconds.
	},

	errors: {
		timeoutError: 20000,
		timeoutWarn: 5000,
		timeoutInfo: 2000,
		storage: {
			FOUND: {
				code: -5000,
				message: "key-value pair found."
			},
			NOT_AVAILABLE: {
				code: -5001,
				message: "localstorage not supported."
			},

			NOT_FOUND: {
				code: -5002,
				message: "key-value pair not found."
			}
		},

		geolocation: {
			NOT_AVAILABLE: {
				message: "geolocation not supported."
			}
		},

		communication: {
			OK: {
				code: 0,
				message: "OK"
			},

			ERROR: {
				code: -1,
				message: "ERROR"
			}
		}
	},

	settings: {}
});
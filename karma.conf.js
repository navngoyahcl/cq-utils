// Karma configuration
// Generated on Wed May 16 2018 14:00:55 GMT+0530 (India Standard Time)

module.exports = function(config) {
	var configuration = {

		    // base path that will be used to resolve all patterns (eg. files, exclude)
		    basePath: '',


		    // frameworks to use
		    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

		    customLaunchers: {
		        Chrome_travis_ci: {
		            base: 'Chrome',
		            flags: ['--no-sandbox']
		        }
		    },
		    // list of files / patterns to load in the browser
		    files: [
		    	'src/cqutil.js',
		    	'test/test.js'
		    ],


		    // list of files / patterns to exclude
		    exclude: [
		    ],


		    // preprocess matching files before serving them to the browser
		    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		    preprocessors: {
		    		  'src/cqutil.js': 'coverage'
		    },


		    // coverage reporter generates the coverage
		    reporters: ['progress', 'coverage'],

		    coverageReporter: {
		    		  type : 'lcov',
		    		  dir : 'coverage/'
		    /*	type : 'text-summary'*/
		    },

		    // web server port
		    port: 9876,


		    // enable / disable colors in the output (reporters and logs)
		    colors: true,


		    // level of logging
		    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		    logLevel: config.LOG_INFO,


		    // enable / disable watching file and executing tests whenever any file changes
		    autoWatch: true,


		    // start these browsers
		    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		    browsers: ['Chrome'],


		    // Continuous Integration mode
		    // if true, Karma captures browsers, runs the tests and exits
		    singleRun: false,

		    // Concurrency level
		    // how many browser should be started simultaneous
		    concurrency: Infinity
		  };

		if (process.env.TRAVIS) {
		    configuration.browsers = ['Chrome_travis_ci'];
		}

  config.set(configuration)
}

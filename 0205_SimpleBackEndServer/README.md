Welcome to AngularJS Test Driven Development Demo

This folder contains the latest code (as of 8th October 2015) for the Daniel Stern's TutsPlus Course - Angular for Test Driven Development.

Further this folder contains code for the 2nd Chapter Scaffolding a testable Angular App - Lesson 04 Running Karma Tests 

Please feel free to dwonload and use the code for your learning or other responsible use.

Regards, 

Deepak Papanna

Notes:
-------

1. karma.config.js file can be created via 'karma install' command (in command prompt window) in the root directory of the project files. This does the same set of configurations as Daniel mentions in the video, the 'karma init' command adds nice comments for each setting in the config file after configuration is complete.

2. From step 1 above, after the karma.config.js file is created, change the line 'frameworks: ['jasmine']' to 'frameworks: ['mocha']'. This is so because by default karma is configured to work with 'jasmine' and not 'mocha'.

3. In order for the reporter 'mocha' to work correctly (as mentioned in gulpfile.js), you would need to install a npm package called 'karma-mocha-reporter'. I found this the hard way after searching the in Google for the error/warning during execution of gulpfile.js 'test-browser'. 
/*
 * grunt-git-commit-version
 * https://github.com/JiriChara/grunt-git-commit-version
 *
 * Copyright (c) 2015 Jiri Chara
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('git_commit_version', 'Create a file with that with the last commit hash', function() {
      var exec = require('child_process').exec,
          done = this.async(),
          createVersionFile = function (stdout) {
              grunt.log.writeln(stdout);
          };

      grunt.log.writeln('Processing task...');

      exec('git rev-parse HEAD', function (err, stdout) {
          if (err) {
              grunt.log.error(err);
              return done(false);
          }

          createVersionFile(stdout);

          return done();
      });
  });
};

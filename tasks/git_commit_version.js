/*
 * grunt-git-commit-version
 * https://github.com/JiriChara/grunt-git-commit-version
 *
 * Copyright (c) 2015 Jiri Chara
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {
    var taskName = 'git_commit_version',
        desc = 'Create a file with that with the last commit hash';

    grunt.registerTask(
        taskName,
        desc,
        function() {
            var options = this.options({
                file: 'VERSION'
            });

            var done = this.async();

            var createVersionFile = function (stdout) {
                if (grunt.file.exists(options.file)) {
                    grunt.log.writeln(
                        'File ' +
                        options.file +
                        ' exists (updating...)'
                    );
                } else {
                    grunt.log.writeln(
                        'File ' +
                        options.file +
                        ' does not exist (creating...)'
                    );
                }

                grunt.file.write(options.file, stdout);

                grunt.log.writeln('Done c|_|');
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
        }
    );
};

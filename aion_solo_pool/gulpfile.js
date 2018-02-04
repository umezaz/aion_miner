var fs = require('fs');
var moment = require('moment');
var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

gulp.task('release', function () {
    var version = JSON.parse(fs.readFileSync('./package.json')).version;
    gulp.src([
        'coins/**',
        'libs/**',
        'local_modules/**',
        'pool_configs/**',
        'rpc_res/**',
        'scripts/**',
        'LICENSE',
        'README.md',
        'config.json',
        'init.js',
        'package.json',
        'redis.sh',
        'run.sh',
        'node/**',
        'redis/**'
    ], {base: 'pool'})
    .pipe(tar('aion_solo_pool_' + version + '_' + moment().format('YYYY-MM-DD') + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('release'));
});
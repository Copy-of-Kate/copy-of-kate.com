var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    cmq = require('gulp-combine-media-queries'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    uncss = require('gulp-uncss'),
    glob = require('glob'),
    browserSync = require('browser-sync').create();

    
gulp.task('styles', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({ style: 'expanded' }, 'source', {sourcemap: true}))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(uncss({
      html: glob.sync('dist/**/*.html'),
      ignore: [/is-/, /not-/]
    }))
    .pipe(cmq({
      log: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss({processImport:false}))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('scripts', function() {
  return gulp.src(['src/js/vendor/**/*.js', 'src/js/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('html', function() {
  gulp.src(['src/html/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'))
});

gulp.task('clean', function() {
  return gulp.src(['dist/'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

gulp.task('watch', function() {

    browserSync.init({
      server: "dist/"
    });
  
    // Watch .scss files
    gulp.watch('src/sass/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/js/**/*.js', ['scripts']);

    // Watch .html files
    gulp.watch(['src/html/**/*.html', 'src/html/**/*.template'], ['html']);

    gulp.watch(['dist/**/*.js', 'dist/**/*.html']).on("change", browserSync.reload);

});
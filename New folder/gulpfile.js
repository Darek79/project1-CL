var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var include = require("gulp-include");

gulp.task('default',function(){
    
})
gulp.task('sass', function () {
    return gulp.src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task("scripts", function() {
    console.log("-- gulp is running task 'scripts'");
   
    gulp.src("src/js/main.js")
      .pipe(include())
        .on('error', console.log)
      .pipe(gulp.dest("dist/js"));
  });
   
gulp.task("default", ["scripts"]);

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
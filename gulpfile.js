var gulp = require("gulp"),
    minifyCSS = require("gulp-minify-css"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    uglify = require("gulp-uglify");
gulp.task("minifycss",function(){
    return gulp.src(["css/*.css"])
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCSS())
        .pipe(gulp.dest("css/"))
        .pipe(notify({meussfe:"ok!"}))
})
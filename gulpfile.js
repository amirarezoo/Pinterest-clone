const gulp = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')

gulp.task('ejs', () => {
    return gulp.src('src/pages/*.ejs')
    .pipe(ejs({
        title: 'this is a test'
    }))
    .pipe(rename((path) => {
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./build"))
})
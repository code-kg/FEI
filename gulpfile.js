var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var data = require('gulp-data');
var prefix = require('gulp-autoprefixer');
var html_pretty = require('gulp-html-prettify');


gulp.task('styles', function(){
	gulp.src('app/sass/style.sass')
	.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
	.pipe(prefix())
	.pipe(gulp.dest('app/css/'))
});

gulp.task('pages', function(){
	gulp.src('app/templates/*.pug')
	.pipe(data(function(file){
		return require('./app/templates/data/data.json')
	}))
	.pipe(pug())
	.pipe(html_pretty())
	.pipe(gulp.dest('app/'))
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', function(event) {
		setTimeout(function(){
			gulp.start('styles');
		}, 1000);
	});
	gulp.watch('app/templates/**/*.pug', ['pages']);

});

gulp.task('default', ['styles','pages','watch']);
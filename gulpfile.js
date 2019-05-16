//gulp file made by fma350 using vi, 15/05/2019

var pug = require('gulp-pug');
var sass = require('gulp-sass')
var cl = require('gulp-clean');
var gulp = require('gulp');

const {series} = require('gulp');

const src_folder = './src'


function clean(cb){
	//
	gulp.src(src_folder+"/*.html").pipe(cl());
	gulp.src(src_folder+"/*.css").pipe(cl());

	cb();
}

function build(cb){
	buildCSS()
	buildHTML()
	//oldcode
	// exec('pug index.pug',(err, stdout, stderr)=>{
	// 	if (err){
	// 	console.log('Snap! Could not complete the build')
	// 	return;
	// 	}
	// 	console.log('Build completed')
	// });
	cb();
}

function buildCSS(cb){
	gulp.src('*.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest(src_folder))
	//is callback needed?
}

function buildHTML(cb){
	gulp.src('*.pug').pipe(pug({
		doctype: 'html',
		pretty: false
	})).pipe(gulp.dest('src/'));
		//is callback needed?
}

exports.build   = build;
exports.clean   = clean;
exports.default = series(clean, build);

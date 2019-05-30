var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	stylus      = require('gulp-stylus'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
	jeet        = require('jeet'),
	rupture     = require('rupture'),
	koutoSwiss  = require('kouto-swiss'),
	prefixer    = require('autoprefixer-stylus'),
	imagemin    = require('gulp-imagemin'),
	cp          = require('child_process');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';
console.log(browserSync);
/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-build'), function () {
	browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', gulp.series('jekyll-build'), function() {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	});
});

/**
 * Stylus task
 */
gulp.task('stylus', function(cb){
	gulp.src('src/styl/main.styl')
	.pipe(plumber())
	.pipe(stylus({
		use:[koutoSwiss(), prefixer(), jeet(),rupture()],
		compress: true
	}))
	.pipe(gulp.dest('_site/assets/css/'))
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('assets/css'));
	cb();
});

/**
 * Javascript Task
 */
gulp.task('js', function(cb){
	gulp.src('src/js/**/*.js')
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/'))
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('_site/assets/js/'));
	cb();
});

/**
 * Imagemin Task
 */
gulp.task('imagemin', function(cb) {
	gulp.src('src/img/**/*.{jpg,png,gif}')
	.pipe(plumber())
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	.pipe(gulp.dest('assets/img/'));
	cb();
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	console.log('Watch started');
	gulp.watch('src/styl/**/*.styl', gulp.series('stylus'));
	gulp.watch('src/js/**/*.js', gulp.series('js'));
	gulp.watch('src/img/**/*.{jpg,png,gif}', gulp.series('imagemin'));
	gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], gulp.series('jekyll-rebuild'));
	//console.log('Watch ended');
});

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('js', 'stylus', gulp.parallel('browser-sync','watch'),function(){
	return Promise.resolve('done');
}));

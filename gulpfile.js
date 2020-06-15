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
gulp.task('jekyll-rebuild', gulp.series('jekyll-build'), function (done) {
	browserSync.reload();
	done();
});

/**
 * Wait for jekyll-build, then launch the Server
 */

gulp.task('browser-sync', gulp.series('jekyll-build', function(cb) {
    // console.log('asdasd');
	browserSync({
		server: {
			baseDir: '_site'
		}
    });
    cb();
}));

/**
 * Imagemin Task
 */
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
});

/**
 * Stylus task
 */
gulp.task('stylus', function() {
    return gulp.src('src/styl/main.styl').pipe(plumber())
        .pipe(
            stylus({
            use: [koutoSwiss(), prefixer(), jeet(), rupture()],
            compress: true,
            })
        )
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

/**
 * Javascript Task
 */
gulp.task('js', function(){
    // console.log('asd')
	return gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
        .pipe(gulp.dest('_site/assets/js/'))
        .pipe(browserSync.stream());
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch('src/js/**/*.js', gulp.series('js'));
	gulp.watch('src/img/**/*.{jpg,png,gif}', gulp.series('imagemin'));
	gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*','*.md'], gulp.series('jekyll-rebuild'));
	gulp.watch('src/styl/**/*.styl', gulp.series('stylus'));
});

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
// gulp.task('default', gulp.series('jekyll-build', 'browser-sync'));
gulp.task('default', gulp.series('browser-sync', gulp.parallel('stylus', 'js', 'watch')))
// gulp.task('default', gulp.series('browser-sync', 'stylus'))

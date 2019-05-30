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
gulp.task('jekyll-rebuild', gulp.series('jekyll-build'), function () {
	try{
		console.log('jekyll-rebuild started');
		browserSync.reload();
	}
	catch(e)
	{
		console.log("Oh snap jekyll rebuild failed");
		console.log(e);
	}
	return Promise.resolve('done');
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', gulp.series('jekyll-build'), function() {
	try{
		console.log('browser-sync started');
		browserSync({
			server: {
				baseDir: '_site'
			}
		});
		console.log('browser-sync completed hooray!');
	}
	catch(e){
		console.log('browser-sync failed');
		console.log(e);
	}
	return Promise.resolve('done');
});

/**
 * Stylus task
 */
gulp.task('stylus', function(){
		try{
			console.log('Stylus started');
			gulp.src('src/styl/main.styl')
			.pipe(plumber())
			.pipe(stylus({
				use:[koutoSwiss(), prefixer(), jeet(),rupture()],
				compress: true
			}))
			.pipe(gulp.dest('_site/assets/css/'))
			.pipe(browserSync.reload({stream:true}))
			.pipe(gulp.dest('assets/css'));
			console.log('Stylus done');
		}
		catch(e){
			console.log('Stylus failed');
			console.log(e);
		}
		return Promise.resolve('Done');
});

/**
 * Javascript Task
 */
gulp.task('js', function(){
	try{
		console.log('js started');
		gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('_site/assets/js/'));
		console.log('js success!');
	}
	catch(e){
		console.log('js failed');
		console.log(e);
	}
	return Promise.resolve('done');
});

/**
 * Imagemin Task
 */
gulp.task('imagemin', function() {
	try{
		console.log('imagemin started');
		gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
		console.log('imagemin failed');
	}
	catch(e){
		console.log('imagemin f	ailed');
		console.log(e);
	}
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	try{
		console.log('Watch started');
		gulp.watch('src/styl/**/*.styl', gulp.series('stylus'));
		gulp.watch('src/js/**/*.js', gulp.series('js'));
		gulp.watch('src/img/**/*.{jpg,png,gif}', gulp.series('imagemin'));
		gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], gulp.series('jekyll-rebuild'));
		console.log('Watch ended');
	}
	catch(e){
		console.log('Watch failed');
		console.log(e);
	}
	return Promise.resolve('done');
});

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('browser-sync','js', 'stylus', 'watch'),function(){
	return Promise.resolve('done');
});

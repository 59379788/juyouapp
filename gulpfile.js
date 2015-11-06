var gulp = require("gulp");
var browserSync = require('browser-sync');
//var rename = require('gulp-rename');
var minifyHtml = require("gulp-minify-html");
var uglify = require("gulp-uglify");				//js压缩
var minifyCss = require("gulp-minify-css");
var imagemin = require('gulp-imagemin');
//var concat = require("gulp-concat");				//文件合并
var clean = require('gulp-clean');					//清空文件夹
var useref = require('gulp-useref');	
var gulpif = require('gulp-if');			//
var assets = useref.assets();

gulp.task('browser-sync', function() {
  browserSync({
    files: "./app/**",
    server: {
      baseDir: "./app/"
    },
    ui: {
    	port : 8081
    },
    port : 8080
  });
});

gulp.task('serve1', function() {
  browserSync({
    files: "./www/**",
    server: {
      baseDir: "./www/"
    },
    ui: {
        port : 8081
    },
    port : 8080
  });
});

// HTML处理
gulp.task('html', function() {
    var //htmlSrc = './app/*.html',
    	viewsSrc = "app/views/*.html"
        viewsDst = './www/views/';

    gulp.src(viewsSrc)
        .pipe(minifyHtml())
        .pipe(gulp.dest(viewsDst));
});

// font处理
gulp.task('font', function(){
    var fontSrc = './app/bower_components/ionic/release/fonts/*',
        fontDst = './www/fonts';
    gulp.src(fontSrc)
        .pipe(gulp.dest(fontDst));
})

// 图片处理
gulp.task('images', function(){
    var imgSrc = './app/images/**/*',
        imgDst = './www/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
})

// js处理
gulp.task('js', function () {
    var htmlSrc = "app/*.html",
        dst = "www";
        
    gulp.src(htmlSrc)
        .pipe(assets)
    //    .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
    //    .pipe(minifyHtml())
        .pipe(gulp.dest(dst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['www'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', function(){
    gulp.start('html', 'js', 'images', 'font');
});

gulp.task('serve', ["browser-sync"]);
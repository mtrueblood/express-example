// 'use strict';

// const gulp      = require('gulp'),
//     sass        = require('gulp-sass'),
//     uglify      = require('gulp-uglify'),
//     rename      = require('gulp-rename'),
//     notify      = require('gulp-notify'),
//     minifycss   = require('gulp-minify-css'),
//     postcss     = require('gulp-postcss'),
//     reporter    = require('postcss-reporter'),
//     syntax_scss = require('postcss-scss'),
//     stylelint   = require('stylelint'),
//     concat      = require('gulp-concat'),
//     plumber     = require('gulp-plumber'),
//     browserSync = require('browser-sync');
// const reload    = browserSync.reload;

// gulp.task("sass-lint", function() {
    
//     // Stylelint config rules
//     var stylelintConfig = {
//         "rules": {
//             "at-rule-empty-line-before": [
//                 "always", {
//                     except: [
//                         "blockless-after-same-name-blockless",
//                         "first-nested",
//                     ],
//                     ignore: [
//                         "after-comment"
//                     ],
//                 }
//             ],
//             "at-rule-name-case": "lower",
//             "at-rule-name-space-after": "always-single-line",
//             "at-rule-semicolon-newline-after": "always",
//             "block-closing-brace-empty-line-before": "never",
//             "block-closing-brace-newline-after": "always",
//             "block-closing-brace-newline-before": "always-multi-line",
//             "block-closing-brace-space-before": "always-single-line",
//             "block-no-empty": true,
//             "block-opening-brace-newline-after": "always-multi-line",
//             "block-opening-brace-space-after": "always-single-line",
//             "block-opening-brace-space-before": "always",
//             "color-hex-case": "lower",
//             "color-hex-length": "long",
//             "color-no-invalid-hex": true,
//             "comment-empty-line-before": [
//                 "always", {
//                     except: [
//                         "first-nested"
//                     ],
//                     ignore: [
//                         "stylelint-commands"
//                     ],
//                 }
//             ],
//             "comment-no-empty": true,
//             "comment-whitespace-inside": "always",
//             "custom-property-empty-line-before": [
//                 "always", {
//                     except: [
//                         "after-custom-property",
//                         "first-nested",
//                     ],
//                     ignore: [
//                         "after-comment",
//                         "inside-single-line-block",
//                     ],
//                 }
//             ],
//             "declaration-bang-space-after": "never",
//             "declaration-bang-space-before": "always",
//             "declaration-block-no-duplicate-properties": [
//                 true, {
//                     ignore: [
//                         "consecutive-duplicates-with-different-values"
//                     ],
//                 }
//             ],
//             "declaration-block-no-redundant-longhand-properties": true,
//             "declaration-block-no-shorthand-property-overrides": true,
//             "declaration-block-semicolon-newline-after": "always-multi-line",
//             "declaration-block-semicolon-space-after": "always-single-line",
//             "declaration-block-semicolon-space-before": "never",
//             "declaration-block-single-line-max-declarations": 1,
//             "declaration-block-trailing-semicolon": "always",
//             "declaration-colon-newline-after": "always-multi-line",
//             "declaration-colon-space-after": "always-single-line",
//             "declaration-colon-space-before": "never",
//             "declaration-empty-line-before": [
//                 "always", {
//                     except: [
//                         "after-declaration",
//                         "first-nested",
//                     ],
//                     ignore: [
//                         "after-comment",
//                         "inside-single-line-block",
//                     ],
//                 }
//             ],
//             "font-family-no-duplicate-names": true,
//             "function-calc-no-unspaced-operator": true,
//             "function-comma-newline-after": "always-multi-line",
//             "function-comma-space-after": "always-single-line",
//             "function-comma-space-before": "never",
//             "function-linear-gradient-no-nonstandard-direction": true,
//             "function-max-empty-lines": 0,
//             "function-name-case": "lower",
//             "function-parentheses-newline-inside": "always-multi-line",
//             "function-parentheses-space-inside": "never-single-line",
//             "function-whitespace-after": "always",
//             // "indentation": 2,
//             "keyframe-declaration-no-important": true,
//             "length-zero-no-unit": true,
//             "max-empty-lines": 1,
//             "media-feature-colon-space-after": "always",
//             "media-feature-colon-space-before": "never",
//             "media-feature-name-case": "lower",
//             "media-feature-name-no-unknown": true,
//             "media-feature-parentheses-space-inside": "never",
//             "media-feature-range-operator-space-after": "always",
//             "media-feature-range-operator-space-before": "always",
//             "media-query-list-comma-newline-after": "always-multi-line",
//             "media-query-list-comma-space-after": "always-single-line",
//             "media-query-list-comma-space-before": "never",
//             "no-empty-source": true,
//             "no-eol-whitespace": true,
//             "no-extra-semicolons": true,
//             "no-invalid-double-slash-comments": true,
//             "no-missing-end-of-source-newline": true,
//             "number-leading-zero": "always",
//             "number-no-trailing-zeros": true,
//             "property-case": "lower",
//             "property-no-unknown": true,
//             "rule-nested-empty-line-before": [
//                 "always-multi-line", {
//                     except: [
//                         "first-nested"
//                     ],
//                     ignore: [
//                         "after-comment"
//                     ],
//                 }
//             ],
//             "rule-non-nested-empty-line-before": [
//                 "always-multi-line", {
//                     ignore: ["after-comment"],
//                 }
//             ],
//             "selector-attribute-brackets-space-inside": "never",
//             "selector-attribute-operator-space-after": "never",
//             "selector-attribute-operator-space-before": "never",
//             "selector-combinator-space-after": "always",
//             "selector-combinator-space-before": "always",
//             "selector-descendant-combinator-no-non-space": true,
//             "selector-list-comma-newline-after": "always",
//             "selector-list-comma-space-before": "never",
//             "selector-max-empty-lines": 0,
//             "selector-pseudo-class-case": "lower",
//             "selector-pseudo-class-no-unknown": true,
//             "selector-pseudo-class-parentheses-space-inside": "never",
//             "selector-pseudo-element-case": "lower",
//             "selector-pseudo-element-colon-notation": "double",
//             "selector-pseudo-element-no-unknown": true,
//             "selector-type-case": "lower",
//             "selector-type-no-unknown": true,
//             "shorthand-property-no-redundant-values": true,
//             "string-no-newline": true,
//             "unit-case": "lower",
//             "unit-no-unknown": true,
//             "value-list-comma-newline-after": "always-multi-line",
//             "value-list-comma-space-after": "always-single-line",
//             "value-list-comma-space-before": "never",
//             "value-list-max-empty-lines": 0,
//         },
//     }

//     var processors = [
//         stylelint(stylelintConfig),
//         reporter({
//           clearMessages: true,
//           // comment 'throwError' out to show all errors across all files,
//           // leave 'throwError' to error out on first file with an error
//           //throwError: true,
//           failOnError: true
//       })
//     ];
  
//     return gulp.src(['./scss/**/*.scss']).pipe(postcss(processors, {syntax: syntax_scss}));
// });

// gulp.task('scripts', function(){
//     return gulp.src([
//         'public/js/source/meganav.js',
//         'public/js/source/storyblok.js'
//     ])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('public/js'))
//     .pipe(rename('uglify.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('public/js'));
// });

// gulp.task('sass', function () {  
//     gulp.src('sass/main.scss')
//     .pipe(plumber())
//     .pipe(sass({
//         sourceComments: 'map',
//         sourceMap: 'sass',
//         outputStyle: 'nested',
//         includePaths: ['sass'].concat(),
//         errLogToConsole: true
//     }))
//     .pipe(gulp.dest('public/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('public/css'))
//     .pipe(reload({stream:true}));
// });

// gulp.task('bs-reload', function () {
//     browserSync.reload();
// });

// gulp.task('browser-sync', function() {
//     browserSync.init([
//         'public/css/*.css',
//         'public/js/*.js',
//         'views/**/**/*.hbs'
//     ], {  
//         // proxy: "http://localhost:3000",
//         // port: 4300
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// gulp.task('default', ['sass', 'scripts', 'browser-sync'], function () {
//     gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass-lint']);
//     gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
//     gulp.watch(['public/*.js', 'public/**/*.js'], ['scripts']);
//     gulp.watch(['.hbs'], ['bs-reload']);
// });


const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    reporter = require('postcss-reporter'),
    syntax_scss = require('postcss-scss'),
    stylelint = require('stylelint'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    nodemon = require('nodemon');

gulp.task("sass-lint", function() {

    // Stylelint config rules
    var stylelintConfig = {
        "rules": {
            "at-rule-empty-line-before": [
                "always", {
                    except: [
                        "blockless-after-same-name-blockless",
                        "first-nested",
                    ],
                    ignore: [
                        "after-comment"
                    ],
                }
            ],
            "at-rule-name-case": "lower",
            "at-rule-name-space-after": "always-single-line",
            "at-rule-semicolon-newline-after": "always",
            "block-closing-brace-empty-line-before": "never",
            "block-closing-brace-newline-after": "always",
            "block-closing-brace-newline-before": "always-multi-line",
            "block-closing-brace-space-before": "always-single-line",
            "block-no-empty": true,
            "block-opening-brace-newline-after": "always-multi-line",
            "block-opening-brace-space-after": "always-single-line",
            "block-opening-brace-space-before": "always",
            "color-hex-case": "lower",
            "color-hex-length": "long",
            "color-no-invalid-hex": true,
            "comment-empty-line-before": [
                "always", {
                    except: [
                        "first-nested"
                    ],
                    ignore: [
                        "stylelint-commands"
                    ],
                }
            ],
            "comment-no-empty": true,
            "comment-whitespace-inside": "always",
            "custom-property-empty-line-before": [
                "always", {
                    except: [
                        "after-custom-property",
                        "first-nested",
                    ],
                    ignore: [
                        "after-comment",
                        "inside-single-line-block",
                    ],
                }
            ],
            "declaration-bang-space-after": "never",
            "declaration-bang-space-before": "always",
            "declaration-block-no-duplicate-properties": [
                true, {
                    ignore: [
                        "consecutive-duplicates-with-different-values"
                    ],
                }
            ],
            "declaration-block-no-redundant-longhand-properties": true,
            "declaration-block-no-shorthand-property-overrides": true,
            "declaration-block-semicolon-newline-after": "always-multi-line",
            "declaration-block-semicolon-space-after": "always-single-line",
            "declaration-block-semicolon-space-before": "never",
            "declaration-block-single-line-max-declarations": 1,
            "declaration-block-trailing-semicolon": "always",
            "declaration-colon-newline-after": "always-multi-line",
            "declaration-colon-space-after": "always-single-line",
            "declaration-colon-space-before": "never",
            "declaration-empty-line-before": [
                "always", {
                    except: [
                        "after-declaration",
                        "first-nested",
                    ],
                    ignore: [
                        "after-comment",
                        "inside-single-line-block",
                    ],
                }
            ],
            "font-family-no-duplicate-names": true,
            "function-calc-no-unspaced-operator": true,
            "function-comma-newline-after": "always-multi-line",
            "function-comma-space-after": "always-single-line",
            "function-comma-space-before": "never",
            "function-linear-gradient-no-nonstandard-direction": true,
            "function-max-empty-lines": 0,
            "function-name-case": "lower",
            "function-parentheses-newline-inside": "always-multi-line",
            "function-parentheses-space-inside": "never-single-line",
            "function-whitespace-after": "always",
            // "indentation": 2,
            "keyframe-declaration-no-important": true,
            "length-zero-no-unit": true,
            "max-empty-lines": 1,
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-case": "lower",
            "media-feature-name-no-unknown": true,
            "media-feature-parentheses-space-inside": "never",
            "media-feature-range-operator-space-after": "always",
            "media-feature-range-operator-space-before": "always",
            "media-query-list-comma-newline-after": "always-multi-line",
            "media-query-list-comma-space-after": "always-single-line",
            "media-query-list-comma-space-before": "never",
            "no-empty-source": true,
            "no-eol-whitespace": true,
            "no-extra-semicolons": true,
            "no-invalid-double-slash-comments": true,
            "no-missing-end-of-source-newline": true,
            "number-leading-zero": "always",
            "number-no-trailing-zeros": true,
            "property-case": "lower",
            "property-no-unknown": true,
            // "rule-nested-empty-line-before": [
            //     "always-multi-line", {
            //         except: [
            //             "first-nested"
            //         ],
            //         ignore: [
            //             "after-comment"
            //         ],
            //     }
            // ],
            // "rule-non-nested-empty-line-before": [
            //     "always-multi-line", {
            //         ignore: ["after-comment"],
            //     }
            // ],
            "selector-attribute-brackets-space-inside": "never",
            "selector-attribute-operator-space-after": "never",
            "selector-attribute-operator-space-before": "never",
            "selector-combinator-space-after": "always",
            "selector-combinator-space-before": "always",
            "selector-descendant-combinator-no-non-space": true,
            "selector-list-comma-newline-after": "always",
            "selector-list-comma-space-before": "never",
            "selector-max-empty-lines": 0,
            "selector-pseudo-class-case": "lower",
            "selector-pseudo-class-no-unknown": true,
            "selector-pseudo-class-parentheses-space-inside": "never",
            "selector-pseudo-element-case": "lower",
            "selector-pseudo-element-colon-notation": "double",
            "selector-pseudo-element-no-unknown": true,
            "selector-type-case": "lower",
            "selector-type-no-unknown": true,
            "shorthand-property-no-redundant-values": true,
            "string-no-newline": true,
            "unit-case": "lower",
            "unit-no-unknown": true,
            "value-list-comma-newline-after": "always-multi-line",
            "value-list-comma-space-after": "always-single-line",
            "value-list-comma-space-before": "never",
            "value-list-max-empty-lines": 0,
        },
    }

    var processors = [
        stylelint(stylelintConfig),
        reporter({
            clearMessages: true,
            //throwError: true,
            failOnError: true
        })
    ];

    return gulp.src(
        ['./sass/**/*.scss',
        '!./sass/main.scss']
    )
    .pipe(postcss(processors, {syntax: syntax_scss}));
});

gulp.task('sass', function() {
return gulp
    .src('./sass/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'));
});

// takes care of vendor scripts
// must explicitly list the vendor scripts file in order of build
gulp.task('vendor-scripts', function() {
    return gulp
    .src([
        ''
    ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./public/js'));
});

// takes care of utils scripts
gulp.task('utils-scripts', function() {
    return gulp
    .src('./public/js/utils/**/*.js')
    .pipe(concat('utils.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

// takes care of all site specific scripts
gulp.task('scripts', function() {
    return gulp
    .src([
        'public/js/source/meganav.js',
        'public/js/source/storyblok.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('express:dev', function() {
    nodemon({
        script: 'index.js',
        ext: 'js'
    }).on('restart', function() {
        gulp.src('index.js')
            .pipe(notify('App Restarted'));
    });
});

gulp.task('hbs', function() {    
});

gulp.task('watch', function(){
    livereload.listen();
    dest = ['./public/**', './views/**'];
    gulp.watch('sass/**/*.scss', ['sass-lint']);
    gulp.watch('public/js/**/*.js', ['scripts']);
    gulp.watch('public/js/vendor/*.js', ['vendor-scripts']);
    gulp.watch('public/js/utils/*.js', ['utils-scripts']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('views/**/*.hbs', ['hbs']);
    gulp.watch(dest).on('change', function(file){
        livereload.changed(file.path);
    });
});

gulp.task('serve', ['sass-lint', 'sass', 'express:dev', 'watch'], function() {
// not sure if we need this or not, but we'll keep just in case we need it for something
});

gulp.task('build', ['sass', 'scripts', 'vendor-scripts', 'utils-scripts'], function() {

});

gulp.task('default', ['sass-lint', 'sass', 'scripts', 'vendor-scripts', 'utils-scripts', 'express:dev', 'hbs', 'watch'], function() {

});

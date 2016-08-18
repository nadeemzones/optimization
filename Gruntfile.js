'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
          src: 'source',
          app: 'app',
          assets: 'app',
          css: ['<%= project.src %>/sass/style.scss'],
          js: ['<%= project.src %>/js/*.js']
        },
        // SASS
        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              'app/css/style.css': '<%= project.css %>'
            }
          }
        },
        // CSS MIN
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            home: {
                files: {
                    'app/css/style.min.css': ['app/css/style.css']
                }
            },
            master: {
                files: {
                    'app/css/master.min.css':
                     [
                       'source/css/master/bootstrap.css',
                       'source/css/master/font-awesome.css',
                       'source/css/master/style-icons.css',
                       'source/css/master/animation.css',
                       'source/css/master/OpenSans.css',
                       'source/css/master/Montserrat.css',
                       'source/css/master/Roboto.css',
                       'source/css/master/style.css',
                       'source/css/master/prettyPhoto.css',
                       'source/css/master/owl.carousel.css',
                       'source/css/master/owl.theme.css',
                       'source/css/master/color4.css',
                       'source/css/master/style_common.css',
                       'source/css/master/style4.css',
                        'source/css/master/BookRequirement.css'

                     ]
                }
            },
            city: {
                files: {
                    'app/css/city.min.css':
                     [
                       'source/css/citypage/Default.css',
                       'source/css/citypage/bannerscollection_zoominout.css',
                       'source/css/citypage/jquery-ui.css'
                    
                     ]
                }
            },
            search: {
                files: {
                    'app/css/search.min.css':
                        [
                            'source/css/searchpage/css.css',
                            'source/css/searchpage/bootstrap.css',
                            'source/css/searchpage/bootstrap-select.css',
                            'source/css/searchpage/magnific-popup.css',
                            'source/css/searchpage/jquery.css',
                            'source/css/searchpage/owl.css',
                            'source/css/searchpage/searchList-style.css',
                            'source/css/searchpage/Feature_Icon.css'

                        ]
                }
            }
        },

        // UGLIFY
        uglify: {
            options: {
                mangle: false
            },
            home: {
                files: {
                    'app/js/hp.home.min.js':
                    [
                      'source/js/home/jquery-2.0.0.min.js',
                      'source/js/home/Jquery-1.8.0.js',
                      'source/js/home/jquery-ui.js',
                      'source/js/home/bootstrap.js',
                      'source/js/home/lightslider.js',
                      'source/js/home/bootstrap-multiselect.js',
                      'source/js/home/common.js'
                    ]
                }
            },
            citypage: {
                files: {
                    'app/js/hp.citypage.min.js':
                    [
                      'source/js/citypage/Jquery-1.8.0.js',
                      'source/js/citypage/jquery-ui.js',
                      'source/js/citypage/jquery.easing.min.js',
                      'source/js/citypage/jquery.easy-ticker.js',
                      'source/js/citypage/bannerscollection_zoominout.js',
                      'source/js/citypage/jquery.ui.touch-punch.min.js',
                      'source/js/citypage/jquery_cookie.js',
                      'source/js/citypage/jquery.balloon.min.js',
                      'source/js/citypage/HomeSearchScript.js',
                      'source/js/citypage/Default.js',
                      'source/js/citypage/modernizr.js',
                      'source/js/citypage/prettyphoto.js',
                      'source/js/citypage/owl.carousel.min.js',
                      'source/js/citypage/jquery.flexslider.js',
                      'source/js/citypage/helper-plugins.js',
                      'source/js/citypage/bookmarkscroll.js',
                      'source/js/citypage/waypoints.js',
                      'source/js/citypage/init.js',
                      //'source/js/citypage/jquery_cookie.js',
                      'source/js/citypage/bootstrap.js',
                      'source/js/citypage/bootstrap-multiselect.js',
                      'source/js/citypage/HomePopup.js'
                    ]
                }
            },
            search: {
                files: {
                    'app/js/hp.search.min.js':
                    [
                      'source/js/search/retina-1.js',
                      'source/js/search/jshashtable-2.js',
                      'source/js/search/jquery_002.js',
                      'source/js/search/tmpl.js',
                      'source/js/search/jquery.js',
                      'source/js/search/draggable-0.js',
                      'source/js/search/jquery_003.js',
                      'source/js/search/fm.selectator.jquery.js',
                      'source/js/search/custom.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('home', ['uglify:home']);
    grunt.registerTask('citypage', ['uglify:citypage', 'cssmin:city']);
    grunt.registerTask('search', ['uglify:search', 'cssmin:search']);
    grunt.registerTask('master', ['cssmin:master']);
    // grunt.registerTask('server', ['express','watch']);
    grunt.registerTask('default', ['uglify']);

};

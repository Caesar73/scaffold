/**
 * Created by Caesar on 09/25/2015.
 */


// Production 环境
// requirejs.config({
//     baseUrl: 'dist/js',
//     paths  : {
//         "underscore": "lib/src/underscore.min",
//         "backbone"  : "lib/src/backbone.min",
//         "jquery"    : "lib/src/jquery-1.11.3.min",

//         "config" : "lib/config/config",
//         "app"    : "webapp/app" // *模块入口
//         //,"lib"    : "lib/main",

//     }
//     // ,
//     // shim   : {
//     //     backbone: {
//     //         'deps': ['jquery', 'underscore'],
//     //         'exports': 'Backbone'
//     //     },
//     //     underscore: {
//     //         'exports': '_'
//     //     }
//     // }

// });

// Development 环境
// requirejs.config({
//    baseUrl: 'js',
//    paths: {
//        "underscore": "src/underscore.min",
//        "jquery": "src/jquery.min",
//        "lib": "/main"
//    }
// });

//console.log(requirejs.config);

// define([
//     "jquery",
//     "underscore",
//     "backbone",
// ], function ($, _, backbone) {
//     //alert('libs main js');
//     return {
//         $: $,
//         _: _,

//         backbone: backbone
//     }
// });


// require([
//     'lib',
//     'backbone',
//     'app'
//     ],
//     function(lib, Backbone, app){
//         //alert(1);
//         app.init();
// });

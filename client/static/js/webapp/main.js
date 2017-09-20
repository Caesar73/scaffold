requirejs.config({
    baseUrl: 'dist/js',
    paths  : {
        "underscore": "lib/src/underscore.min",
        "backbone"  : "lib/src/backbone.min",
        "jquery"    : "lib/src/jquery-1.11.3.min",

        "config" : "lib/config/config",
        "app"    : "webapp/app" // *模块入口
        //,"lib"    : "lib/main",

    }
    // ,
    // shim   : {
    //     backbone: {
    //         'deps': ['jquery', 'underscore'],
    //         'exports': 'Backbone'
    //     },
    //     underscore: {
    //         'exports': '_'
    //     }
    // }

});

require([
    'jquery',
    'underscore',
    'backbone',
    'app'
    ],
    function($, _, Backbone, app){
        //alert('backbone: ' + backbone);
        //console.log(lib);
        app.init();
});
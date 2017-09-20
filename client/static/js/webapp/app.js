// This is the main entry point for the App
// define(['routers/index'], function(router){
//     var init = function(){
//         this.router = new router();
//     };

//     return { init: init };
// });

// This is the main entry point for the App
define(['webapp/router/index'], function (router) {
    var init = function(){
        //alert('app init !');
        this.router = new router();
    };

    return { init: init };
});

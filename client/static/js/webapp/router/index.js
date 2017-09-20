console.log('routers/index');

// define([
//     'jquery',
//     'underscore',
//     'backbone'
//     ],
// function($, _, Backbone){

//     // var Router = Backbone.Router.extend({

//     // });

//     // return Router;
// });

/*

 */
define([
    'jquery',
    'underscore',
    'backbone',
    'webapp/view/view',
    'webapp/view/index'
    ],
function($, _, Backbone, mainView, indexView){

    // var $ = lib.$;
    // var _ = lib._;
    // var Backbone = lib.backbone;

    var Router = Backbone.Router.extend({
        initialize: function(){
            this.indexView = indexView;
            this.mainView  = mainView;
            addView();
            Backbone.history.start();
        },
        routes: {
            ''  : 'index',
            'a1': 'a1',
            'a2': 'a1',
            'a3': 'a1',

            'giftbag/list'      : 'giftbagList',
            'giftbag/detail/:id': 'giftbagDetail',
            'goods/list'        : 'goodsList',
            'goods/detail/:id'  : 'goodsDetail',

            'close/:target'       : 'close'
        },
        'index': function () {
            // 默认首次加载并渲染
            this.indexView.render();
        },
        'a1': function () {
            //alert(2);
            this.mainView.render('a1');
        },

        'giftbagList': function () {
            this.indexView.render('giftbagList');
        },
        'giftbagDetail': function (id) {
            //alert(id);
            var param = {};
            param.id = id;
            this.indexView.render('giftbagDetail', param);
        },
        'goodsList' : function () {
            this.indexView.render('a1');
        },
        'goodsDetail' : function (id) {
            var param = {};
            param.id = id;
            this.indexView.render('goodsDetail', param);
        },
        'close'  : function (target) {
            //alert(target)
            var param = {};
            param.target = target;
            this.indexView.render('close', param);
        }


    });

    function addView () {
        //alert('addView');
    }

    return Router;
});

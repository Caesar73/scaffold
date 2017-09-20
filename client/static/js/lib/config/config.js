define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
    var Config = Backbone.Model.extend({
        page: [
            {
                name : '',
                route: ''
            },
            {
                name : '',
                route: ''
            },
            {
                name : '',
                route: ''
            }
        ],
        route: [
            {},
            {},
            {}
        ],
        //baseurl: '/api/v1/wechat',
        url: {
            baseurl: '/api/v1/wechat',
            giftbag: {
                list  : '/giftbag/list',
                detail: '/giftbag/detail'
            },
            goods: {
                detail: '/goods/detail'
            }
        }
    });

    return Config;
});
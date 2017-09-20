define([
    'jquery',
    'underscore',
    'backbone',
    'tool/a',
    'webapp/model/model',
    'tool/caesar',
    'text!webapp/template/main.html',
    'text!webapp/template/a.html'
    ],
function(
    $, _, Backbone,
    a,
    model,
    Caesar,
    template,
    aTpl){

    // var $ = lib.$;
    // var _ = lib._;
    // var Backbone = lib.backbone;

    var View = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            this.model = new model({
                message: 'Hello World'
            });

            this.aModel = new model({
                message: 'A'
            });

            this.template = _.template( template, { model: this.model.toJSON() } );
            //this.aTemplate = _.template( aTpl, { model: this.aModel.toJSON() } );
        },
        render: function (type) {
            alert('view view type: ' + type);
            switch (type) {
                case 'a1':
                    /*
                     *  1. getData
                     *  2. render view
                     *  3. handle error
                     *  4.
                     */
                    //$(this.el).append( '渲染<br\/>' );
                    this.aTemplate = _.template( aTpl, { model: this.aModel.toJSON() } );
                    $(this.el).append( this.aTemplate );
                    var options = {
                        type: 'waiting',
                        msg:  '请稍后！',
                        timeout: 500
                    };
                    //alert(Caesar);
                    var caesar = Caesar();
                    caesar.exports(options);
                    break;
                case 'giftbag':
                    break;
                default:
                    // 默认首次渲染
                    $(this.el).append( this.template );
                    break;
            }

        },
        showWaiting: function () {

        }

    });

    return new View();
});

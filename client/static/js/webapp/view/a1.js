define([
    'jquery',
    'underscore',
    'backbone',
    'webapp/model/model',
    'text!webapp/template/main.html'
    ],
function($, _, Backbone, model, template){
    // var $ = lib.$;
    // var _ = lib._;
    // var Backbone = lib.backbone;

    var View = Backbone.View.extend({
        el: '#main',
        initialize: function(){
            this.model = new model({
                message: 'Hello World'
            });
            this.template = _.template( template, { model: this.model.toJSON() } );
        },
        render: function(){
            $(this.el).append( this.template );
        }
    });

    return new View();
});

/**
 * Created by sunlei11 on 2/12 0012.

define([

    "libs",
    "text!./templates/detail.tpl"

], function (libs, detailTpl) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var A = require('./a');
    A.init();
    alert('page1');

    var detailTemplate = _.template(detailTpl);
    var exports = {
        render: function () {
            $("#result").html(detailTemplate({
                content: "Page 1"
            }));
        }
    }
    return exports;
});

 */

define(function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var A = require('./a');
    A.init();
    //alert('page1');

   exports.init = function () {

    };

});
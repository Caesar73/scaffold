/**
 * Created by sunlei11 on 2/11 0011.
 */

define([
    "libs",
    "index/src/page1/page1",
    "index/src/page2/page2"
], function (libs, page1, page2) {

    var _ = libs.underscore;
    var $ = libs.jquery;
    //alert('index main js');
    var exports = {
        init: function () {
            console.log('main init');
            this.initEvents();
        },

        initEvents: function () {
            $(document)
                .on("click", "#page1", function () {
                    alert('click page1');
                    //page1.render();
                })
                .on("click", "#page2", function () {
                    alert('click page2');
                    //page2.render();
                });
        }
    };
    return exports;
});
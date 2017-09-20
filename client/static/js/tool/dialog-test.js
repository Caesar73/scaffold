define([
        'jquery',
        'backbone',
        'underscore'],
function ($, Backbone, _) {
    //alert('a');

var exports = function () {
    var _this = this;

    function a () {
        alert('dialog');
    }

    function init () {
        var overlay = $( '.md-overlay' );
        var f = $('.md-trigger');
        var l = f.size();
        for (var i = 0;i < l;i++) {
            var el = f.eq(i);//console.log(el);
            //console.log();

            function removeModal ( hasPerspective, modal ) {
                modal.removeClass( 'md-show' );

                if( hasPerspective ) {
                    $(document.documentElement).removeClass( 'md-perspective' );
                }
            }

            function removeModalHandler (modal) {
                removeModal( el.hasClass( 'md-setperspective' ), modal );
            }

            el.on('click', function ( ev ) {
                var me = $(this);
                var slct = me.data( 'modal' );
                var modal = $( '#' + slct );
                modal.addClass( 'md-show' );
    /*
                overlay.off( 'click', function () {
                    removeModalHandler(modal);
                } );
                overlay.on( 'click', function () {
                    removeModalHandler();
                } );
    */
                if( el.hasClass( 'md-setperspective' ) ) {
                    setTimeout( function() {
                        $(document.documentElement).addClass( 'md-perspective' );
                    }, 25 );
                }

                var close = modal.find( '.md-close' );
                close.on( 'click', function( ev ) {
                    ev.stopPropagation();
                    removeModalHandler(modal);
                });
            });
        }
    }

    return {
        a: function () {
            a();
        },
        init: function () {
            init();
        }
    }

}
return exports;

});
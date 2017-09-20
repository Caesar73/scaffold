/*
 *  @author: Caesar
 *  @module:
 */
define([
    'jquery',
    'underscore',
    'backbone',

    'webapp/config/config',
    'webapp/model/model',

    'tool/dialog-test',
    'tool/slider',

    'tool/caesar',

    'text!webapp/template/main.html',
    'text!webapp/template/a.html',

    'text!webapp/template/giftbagList.html',
    'text!webapp/template/giftbagDetail.html',
    'text!webapp/template/goodsDetail.html'

        ],
function($, _, Backbone, config, Model,

    TDialog,
    Swipe,

    Caesar,
    template,
    aTpl,

    giftbagListTpl,
    giftbagDetailTpl,
    goodsDetailTpl
    ){

    // var $ = lib.$;
    // var _ = lib._;
    // var Backbone = lib.backbone;

    var tdialog = TDialog();
    tdialog.init();
    //alert(Dialog);
/*
        var overlay = $( '.overlay' );
        var f = $('.trigger');
        var l = f.size();
        for (var i = 0;i < l;i++) {
            var el = f.eq(i);//console.log(el);
            //console.log();

            function removeModal ( hasPerspective, modal ) {
                modal.removeClass( 'show' );

                if( hasPerspective ) {
                    $(document.documentElement).removeClass( 'perspective' );
                }
            }

            function removeModalHandler (modal) {
                removeModal( el.hasClass( 'setperspective' ), modal );
            }

            el.on('click', function ( ev ) {
                var me = $(this);
                var slct = me.data( 'modal' );
                var modal = $( '#' + slct );
                modal.addClass( 'show' );

                overlay.off( 'click', function () {
                    removeModalHandler(modal);
                } );
                overlay.on( 'click', function () {
                    removeModalHandler();
                } );

                if( el.hasClass( 'setperspective' ) ) {
                    setTimeout( function() {
                        $(document.documentElement).addClass( 'perspective' );
                    }, 25 );
                }

                var close = modal.find( '.close' );
                close.on( 'click', function( ev ) {
                    ev.stopPropagation();
                    removeModalHandler(modal);
                });
            });
        }
*/
    var View = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            window.pagination = {};
            window.pagination.giftbagList = 0;

            this.model = new Model({
                message: 'Hello World'
            });

            this.aModel = new Model({
                message: 'A'
            });

            this.giftbagModel = new Model({
                message: 'A'
            });

            this.config = new config();

            this.template = _.template( template, { model: this.model.toJSON() } );
            this.aTemplate = _.template( aTpl, { model: this.aModel.toJSON() } );

        },
        render: function (type, obj) {
            alert('view index type: ' + type);
            $('html')
            .on('touchstart', function () {
                //alert(1);
                //return false;
            })
            .on('touchmove', function () {
                //alert(1);
                return false;
            })
            ;
            switch (type) {
                case 'a1':
                    /*
                     *  1. getData
                     *  2. render view
                     *  3. handle error
                     *  4.
                     */
                    //$(this.el).append( '渲染<br\/>' );
                    //alert(1);
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
                    this.giftbagTemplate = _.template( giftbagTpl, { model: this.giftbagModel.toJSON() } );
                    $('#giftbag-view')
                    .html('')
                    .append( this.giftbagTemplate )
                    //.addClass('show')//show
                    .addClass('show')
                    // .on('click', '.close', function () {
                    //     alert(11);
                    //     //var me = $(this);
                    //     //me.parents('.page').hide();
                    // })
                    ;
                    //alert(2);
                    break;
                case 'giftbagDetail':
                    this.hideAd();
                    var id = obj.id;
                    var param  = {};
                    param.module = 'giftbagDetail';
                    param.addPageGlass = this.addPageGlass;

                    param.url    = this.config.url.baseurl + this.config.url.giftbag.detail;
                    param.type   = 'GET';

                    param.id   = id;
                    console.log('giftbagDetail: ' + id);
                    param.success = function (data) {
                        var model = new Model(data);
                        var template = _.template( giftbagDetailTpl, { model: model.toJSON() } );
                        var page = $('#giftbag-detail-view');
                        //$('.page.show').removeClass('show');
                        $('.page.show').removeClass('show');
                        page
                        .html('')
                        .append(template)
                        //.addClass('show')
                        .addClass('show')
                        .addClass('animated slideInUp')
                        .scrollTop(0)
                        ;
                    }
                    param.error = function (response) {
                    }
                    param.callback = function () {
                        $('body').scrollTop(0);
                        param.addPageGlass();
                    }
                    this.ajax(param);
                    break;
                case 'digest':
                    break;
                case 'goodsDetail':
                    var id = obj.id;
                    var param  = {};
                    param.module = 'goodsDetail';
                    param.addPageGlass = this.addPageGlass;

                    param.url    = this.config.url.baseurl + this.config.url.goods.detail;
                    param.type   = 'GET';

                    param.id   = id;
                    console.log('goodsDetail: ' + id);
                    param.success = function (data) {
                        var model = new Model(data);
                        var template = _.template( goodsDetailTpl, { model: model.toJSON() } );
                        var page = $('#goods-detail-view');
                        //$('.page.show').removeClass('show');
                        $('.page.show').removeClass('show');
                        page
                        .html('')
                        .append(template)
                        //.addClass('show')
                        .addClass('show')
                        .addClass('animated zoomIn')
                        .scrollTop(0)
                        .on('click', '.goodadd', function () {
                            var me = $(this);
                            var id = me.data('id');
                            var sc = $('.shopping-count');
                            var sum = sc.text();
                            sum = parseInt(sum) + 1;
                            sc.text(sum);
                            console.log(sum);
                            if (sum > 0) {
                                sc.show();
                            }
                            else {
                                sc.hide();
                            }
                        })
                        ;
                        //$('#main').addClass('animated bounceInLeft');
                    }
                    param.error = function (response) {
                    }
                    param.callback = function () {
                        $('body').scrollTop(0);
                        param.addPageGlass();
                    }
                    this.ajax(param);
                    break;
                case 'close':
                    var target = obj.target;
                    //$('.page.show').removeClass('show');
                    $('.page.show').off();
                    $('.page.show').removeClass('show');
                    $('#' + target)
                    //.addClass('show')
                    .addClass('show')
                    ;
                    if (target == 'main') {
                        this.showAd();
                        var glass = $('.glass-for-page');
                        if (glass.hasClass('show')) {
                            glass.removeClass('show');
                        }
                    }
                    $('body').scrollTop(0);
                    break;
                default:
                    this.addAd();
                    this.addSales([0,1,2,3,4]);
                    var openid    = '0';
                    var param     = {};
                    param.module  = 'giftbagList';
                    param.ajax    = this.ajax;
                    param.iscroll = this.iscroll;
                    this.iscroll('#main', 'y');
                    param.url     = this.config.url.baseurl + this.config.url.giftbag.list;
                    //console.log(this.config.url.baseurl);
                    param.type    = 'GET';
                    param.openid  = openid;
                    param.pagination = window.pagination.giftbagList;
                    //param.Model    = this._Model;
                    //param.template = this._Tpl;
                    //param.underscore = _;

                    param.success = function (data) {
                        //alert(1);
                        //console.log(this.el);
                        //var underscore = param.underscore;
                        //var Model = param.Model;
                        //var Tpl   = param.template;
                        //console.log(data);
                        var model = new Model(data);
                        //console.log(underscore);
                        var template = _.template( giftbagListTpl, { model: model.toJSON() } );
                        var page = $('#main');

                        if (data.more == '0') {
                            page.find('.more').hide();
                        }
                        if (window.pagination.giftbagList == 0 && data.more != '0') {
                            //page.parent().append('<a href="javascript:void(0);" class="more">更多吃哒<\/a>');
                            page
                            .append(template)
                            //.addClass('show')
                            .addClass('show')
                            .append('<a href="javascript:void(0);" class="more">更多吃哒<\/a>')
                            .on('click', '.giftbag', function () {
                                var me = $(this);
                                var id = me.data('id');
                            })
                            .on('click', '.more', function () {
                                var me = $(this);
                                window.pagination.giftbagList++;
                                param.ajax(param);
                                //alert('more');
                                return false;
                                //var page =
                            });
                        }
                        else if (window.pagination.giftbagList != 0) {
                            page.find('.more').before(template);
                        }

                    }
                    param.error = function (response) {
                        //alert(1);
                        //console.log(this.el);
                        //$('#main').append( this.template );
                    }
                    param.callback = function () {
                        if ($('body').hasClass('mobile')) param.iscroll('#main', 'y');
                        //$('#main').addClass('animated bounceInLeft');
                        //caesar.destory(options);
                        //$(this.el).append( this.template );
                    }

                    this.ajax(param);

                    setTimeout(function () {
                        //this.iscroll('#main');
                        //caesar.destory(options);
                    }, 1000);
                    //$(this.el).append( this.template );
                    break;
            }

        },
        addAd: function () {
            //alert('addAd');
            var html = '' +
                '<li id="slider" class="slider">' +
                    '<div class="swipe-wrap">' +
                            '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="\/wechat\/images\/ad\/img.jpg"\/><\/a><\/div>' +
                            '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="\/wechat\/images\/ad\/img02.jpg"\/><\/a><\/div>' +
                            '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="\/wechat\/images\/ad\/img03.jpg"\/><\/a><\/div>' +
                            '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="\/wechat\/images\/ad\/img04.jpg"\/><\/a><\/div>' +
                    '<\/div>' +
                    '<div class="dot">' +
                    '<\/div>' +
                '<\/li>';
            $('#main').append(html);
            var len = $('#slider .wrap').size();
            //alert(len)
            if(len > 1){
                for(var i = 0;i < len;i++){
                    $('#slider .dot').append(i==0 ? '<span class="current"></span>' : '<span></span>');
                }

                var islider = new Swipe(document.getElementById('slider'),{
                    transitionEnd: function(index, elem) {
                        $('#slider .dot span').removeClass('current').eq(index).addClass('current');
                    }
                });
            }
        },
        hideAd: function () {
            $('#slider').hide();
        },
        showAd: function () {
            $('#slider').show();
        },
        addSales: function (arr) {
            var goodsHtml = '';
            for (var i = 0;i <arr.length;i++) {
                goodsHtml = goodsHtml + '' +
                    '<div class="pure-1-5">' +
                            '<a _type="x" class="p51" href="javascript:void(0);">' +
                            '<img  _type="x" class="p51" src="\/wechat\/images\/ad\/img.jpg"\/><\/a>' +
                    '<\/div>';
            }
            var html = '' +
                '<li id="sales" class="pure-2g">' +
                    goodsHtml +
                '<\/li>';
            $('#main').append(html);
            this.iscroll('#sales', 'x');
        },
        hideSales: function () {
            $('#sales').hide();
        },
        showSales: function () {
            $('#sales').show();
        },
        addPageGlass: function () {
            var glass = $('.glass-for-page');
            if (glass.hasClass('show')) {
                return;
            }
            else {
                glass.addClass('show');
            }
        },
        showWaiting: function () {

        },
        rendering: function (select, tpl) {
            $(select)
            .html('')
            .append(tpl)
            //.addClass('show')
            .addClass('show')
            // .on('click', '.close', function () {
            //     alert(11);
            //     //var me = $(this);
            //     //me.parents('.page').hide();
            // })
            ;
        },
        ajax: function (param) {
            var options = {
                type: 'waiting',
                msg:  '请稍后！'
            };
            var caesar = Caesar();
            caesar.exports(options);

            var data = {};
            switch (param.module) {
                case 'giftbagList':
                    data = {
                        openid    : param.openid,
                        pagination: param.pagination
                    }
                    break;
                case 'giftbagDetail':
                    data = {
                        id: param.id
                    }
                    break;
                case 'goodsDetail':
                    data = {
                        id: param.id
                    }
                    break;
            }

            $.ajax({
                url: param.url,
                type: param.type,
                dataType: 'json',
                data: data,
            })
            .done(function(response) {
                if (response.code == 0) {
                    var data = response.data;
                    if (param.success) {
                        param.success(data);
                    }
                }
                else {
                    alert(response.msg);
                }
                //console.log("success");
            })
            .fail(function(response) {
                //console.log("error");
            })
            .always(function() {
                if (param.callback) {
                    param.callback();
                }
                //$('body').scrollTop(0);
                caesar.destory(options);
                //console.log("complete");
            });
        },
        iscroll: function (select, type) {
            //alert(type)
            console.log(select);
            if (!select) return;
            var el = $('' + select);
            var _type = type;
            //console.log(_type);
            //if ( el.hasClass('iscroll') ) return;
            var bl = $('body');
            var bw = bl.width();
            var bh = bl.height();
            var ew = el.width();
            var eh = el.height() + 110;

            if ( (_type == 'y') && (eh > bh) ) {
                doScroll();
            }
            else if ( (_type == 'x') && (ew > bw) ) {
                doScroll();
            }
            else {
                return;
            }

            function doScroll (_type) {
                el.addClass('iscroll');
                console.log('load iscroll');
                var startPosition, endPosition, deltaX, deltaY, moveLength;
                var elm = document.getElementsByClassName('mobile')[0];
                //elm.setAttribute('stype', _type);
                //console.log('_type: ' + _type);
                elm
                .addEventListener('touchstart', function (e) {
                    //console.log('touchstart');
                    var touch = e.touches[0];
                    //var target = e.target;
                    //var eX    = el.css('left').split('px')[0];
                    var eX    = el.offset().left;
                    var eY    = el.css('top').split('px')[0];
                    eY = parseInt(eY);
                    //console.log('eX: ' + eX + ', eY: ' + eY);
                    //var type = elm.getAttribute('stype');
                    startPosition = {
                        x : touch.pageX,
                        y : touch.pageY,
                        eX: eX,
                        eY: eY,
                        bh: bh,
                        bw: bw,
                        eh: eh,
                        ew: ew,
                        stype: 'y'
                    }
                })
                ;
                elm
                .addEventListener('touchmove', function (e) {
                    //console.log(this.type);
                    var touch = e.touches[0];
                    var target = e.target;
                    //console.log('target: ' + target);
                    //console.log(target);
                    var name = target.className;
                    console.log('target name: ' + name);

                    if (name == 'adimg') {
                        return;
                    }

                    if (name == "p51") {
                        console.log('11111111111111');
                        startPosition.stype = 'x';
                    }
                    else {
                        startPosition.stype = 'y';
                    }

                    endPosition = {
                        x: touch.pageX,
                        y: touch.pageY
                    }
                    //console.log(startPosition);
                    deltaX = endPosition.x - startPosition.x;
                    deltaY = endPosition.y - startPosition.y;
                    console.log('deltaX: ' + deltaX + ', deltaY: ' + deltaY);
                    var x  = startPosition.eX + deltaX;
                    var xm = startPosition.bw - startPosition.ew + 0;
                    var y  = startPosition.eY + deltaY;
                    var ym = startPosition.bh - startPosition.eh + 40;
                    //console.log(x);
                    if (startPosition.stype == 'y') {
                        //console.log(startPosition.type);
                        if (y > 0) {
                            y = 0;
                        }
                        if (y < ym) {
                            y = ym;
                        }
                        el.css('top', y);
                    }
                    else if (startPosition.stype == 'x') {
                        console.log(startPosition.stype);
                        console.log('x: ' + x + ', xm: ' + xm);
                        if (x > 0) {
                            x = 0;
                        }
                        if (x < xm) {
                            x = xm;
                        }
                        el.css('left', x);
                    }


                    if (deltaY >= 0) {
                        // Go down
                    }
                    else {
                        // Go up
                    }

                })
                ;

                /*
                bl
                .on('touchstart', function (e) {
                    console.log('touchstart');
                    var me = $(e.target);
                    var touch = $(e)[0].touches[0];
                    startPosition = {
                        x: touch.pageX,
                        y: touch.pageY
                    }
                })
                .on('touchmove', function (e) {
                    console.log('touchmove');
                    var touch = $(e)[0].touches[0];
                    endPosition = {
                        x: touch.pageX,
                        y: touch.pageY
                    }

                    deltaX = endPosition.x - startPosition.x;
                    console.log('deltaX: ' + deltaX);
                    if (deltaX >= 0) {

                    }
                    else {

                    }

                })
                ;
                */
            }

        },
        index: function(a) {
            return a ?
                typeof a == "string" ?
                    p.inArray(this[0], p(a)) : p.inArray(a.jquery ?
                                                                a[0] : a, this) : this[0] && this[0].parentNode ?
                                                                                                        this.prevAll().length : -1
        },
         removeModal: function ( hasPerspective, modal ) {
            modal.removeClass( 'show' );

            if( hasPerspective ) {
                $(document.documentElement).removeClass( 'perspective' );
            }
        }

/*
    var phone = container.find('#phone').val();
    var oPhoneReg = /^1\d{10}$/.test(phone);
 */
    });

    return new View();
});

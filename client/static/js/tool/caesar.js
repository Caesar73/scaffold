define([
        'jquery',
        'backbone',
        'underscore'],
function ($, Backbone, _) {

var exports = function () {
    var _this = this;
    function init (options) {
        var defaults = {};
        defaults.type       = options.type || 'banner';// banner | alert | confirm | bottomer |
        defaults.selector   = options.selector || '#caesarMobile';// the selector of element
        defaults.msg        = options.msg || '';// the inner message of dialog
        defaults.el         = options.el || '';// the inner element of dialog
        defaults.timeout    = options.timeout || 0;// the delay time
        defaults.foreground = options.foreground || 'yellow';
        defaults.url        = options.url || '';
        this.options = defaults;
        //console.log(this.options)
    }

    function addGlass (options) {
        var size = $('body').find('.glass').size();
        if (size > 0) {
        }
        else {
            $('body').prepend('<div class="glass"></div>')
        }
    }

    function showGlass (options) {
        $('body').find('.glass').show();
    }

    function hideGlass (options) {
        $('body').find('.glass').hide();
    }

    function deleteGlass (options) {
        $('body').find('.glass').remove();
    }

    function exports (options) {
        init(options);
        //console.log(this);
        switch (options.type) {
            case 'banner':
                banner(options);
                break;
            case 'alert':
                addGlass(options);
                banner(options);
                break;
            case 'waiting':
                addGlass(options);
                waiting(options);
                break;
            case 'confirm':
                addGlass(options);
                _confirm(options);
                break;
            case 'bottomer':
                bottomer(options);
                break;
            case 'contact':
                addGlass(options);
                contact(options);
                break;
            case 'verify':
                verify(options);
                break;
            default:
                //alert(1);
                addGlass(options);
                break;
        }
        return this.options;
    }

    function banner (options) {
        var _this = options.that || this;
        var size = $('body').find('.banner').size();
        if (size > 0) {
        }
        else {
            if (_this.options.msg) {
                var html = '' +
                '<div class="balance banner">' +
                '<span class="left pink">' + _this.options.msg + '</span>' +
                '<div class="clearfix"></div>' +
                '<\/div>';
            }
            else if (_this.options.el) {
                var html = '' +
                '<div class="balance banner">' + _this.options.el + '<\/div>';
            }

            $('body').prepend(html);
        }

        $('.banner').show();
        function animatecss (x) {
            $('body .banner')
            .removeClass(x).removeClass('ani')
            .addClass(x + ' ani')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                //console.log(1);
                $(_this).removeClass(x).addClass('animated');
            });
        };
        //animatecss('goDown');
        //$('body .banner').animate({'top': 0, 'height': 50}, 1000);
        //console.log(_this.options.timeout);
        var timeout = _this.options.timeout;
        if (timeout > 0) {
            setTimeout(function () {
                //console.log(timeout);
                $('.banner').hide();
                //animatecss('fadeOut');
                //$('body .banner').animate({'top': -71, 'height': 0}, 1000);
            }, timeout);
        }

    }

    function alert (options) {
        var _this = options.that || this;
    }

    function waiting (options) {
/*
    <div class="mwaiting">
        <div class="mwaiting-content">
            <i></i>
            <div class="msg">请输入本机号码，或移动、联通号码。</div>
        </div>
    </div>
 */
        var _this = options.that || this;
        var size = $('body').find('.mwaiting').size();

        var msgBox = '';
        if (_this.options.el) {
            msgBox = '' +
                '<div class="mwaiting-content">' +
                    _this.options.el +
                '<\/div>';
        }
        else {
            msgBox = '' +
                '<div class="mwaiting-content">' +
                    '<i></i>' +
                    '<div class="msg">' + _this.options.msg + '</div>' +
                '<\/div>';
        }

        if (size > 0) {
            $('body').find('.mwaiting').html('').html(msgBox);
        }
        else {
            /*
            var html = '' +
                '<div class="mwaiting"><div class="mwaiting-content">' +
                    '<i></i>' +
                    '<div class="msg">' + _this.options.msg + '</div>' +
                '<\/div><\/div>';
            */
           var html = '<div class="mwaiting">' + msgBox + '<\/div>';
            $('body').prepend(html);
        }
        $('.mwaiting').show();
        showGlass(options);
        var timeout = _this.options.timeout;
        if (timeout != 0) {
            setTimeout(function () {
                //console.log(timeout);
                $('.mwaiting').hide();
                hideGlass(options);
            }, timeout);
        }

    }

    function _confirm (options) {
        var _options = options;
        var _this = options.that || this;
        var size = $('body').find('.confirm').size();

        var msgBox = '';

        if (_this.options.el) {
            msgBox = _this.options.el;
        }
        else {
            msgBox = '' +
            '<div class="foot">' +
                '<h4>' + _options.msg + '</h4>' +
                '<div class="or">' +
                    '<a class="close" href="#">继续等待</a>' +
                    '<a href="#" class="reelect">其他方式充值</a>' +
                '</div>' +
            '</div>';
        }

        if (size > 0) {
            //var html = '' +
            $('body .confirm').html('').html(msgBox);
        }
        else {
            var html = '' +
            '<div class="underside confirm">' +
                msgBox +
            '</div>';
            $('body').append(html);
        }

        var contact = $('.confirm');
        var height = $('.confirm').height();//console.log(height);
        var mheight = 0 - height;
        //console.log(_this);
        _this.showGlass();
        var hideGlass = _this.hideGlass;

        contact
        .css({
                bottom: mheight
            })
            .show()
            .animate({
                bottom: 0
            }, 200)
        .on('click', '.close', function () {
            contact
            .animate({
                bottom: mheight
            }, 200);
            hideGlass();
        });
/*
        $('body .glass')
            .click(function() {
                contact
                    .animate({
                        bottom: mheight
                    }, 200);
                hideGlass();
            });
*/
        //alert(_this.options.url);
        if (_this.options.url) {
            //alert(_this.options.url);
            contact
            .on('click', '.reelect', function () {
                window.location.href = _this.options.url;
            });
        }

    }

    function bottomer (options) {
        var _this = options.that || this;
    }

    function contact (options) {
        var _this = options.that || this;//console.log(_this);
        var size = $('body').find('.contact').size();
        if (size > 0) {
        }
        else {
            var html = '' +
            '<div class="underside contact">' +
                '<div class="foot foot-ss">' +
                    '<div class="block01">' +
                        '<ul>' +
                            '<li><span>&bull;</span>验证码下发会有延迟，请耐心等待</li>' +
                            '<li><span>&bull;</span>检查手机网络信号是否畅通</li>' +
                            '<li><span>&bull;</span>检查手机号输入是否正确</li>' +
                        '</ul>' +
                    '</div>' +
                    '<a class="h5" tel="4006785158" href="javascript:TaduNative.callPhoneNumber(\'4006785158\');">客服电话&nbsp;400-678-5158</a>' +
                    '<a class="close" href="#">返回</a>' +
                '</div>' +
            '</div>';
            $('body').append(html);
        }

        var contact = $('.contact');
        var height = $('.contact').height();//console.log(height);
        var mheight = 0 - height;
        _this.showGlass();
        var hideGlass = _this.hideGlass;
        contact
        .css({
            bottom: mheight
        })
        .show()
        .animate({
            bottom: 0
        }, 200)
        .on('click', '.close', function () {
            contact
            .animate({
                bottom: mheight
            }, 200);
            hideGlass();
            //contact.hide();
            //console.log(this);
            //this.hideGlass();
        })
        ;

        $('body .glass')
        .click(function() {
            contact
                .animate({
                    bottom: mheight
                }, 200);
            hideGlass();
        });

    }

    function verify (options) {
        var _this = options.that || this;
        var selector = _this.options.selector;
        var timeout = _this.options.timeout;
        var button = $(selector);//console.log(selector);
        var text = button.val();//console.log(text);
        var _confirm = _this.confirm;
        console.log(_this);
        var _options = {
            msg: '每次充值最多获取3次验证码。',
            that: _this
        };

/*
        var contact = $('.confirm');
        var height = $('.confirm').height();//console.log(height);
        var mheight = 0 - height;
        //console.log(_this);
        _this.showGlass();
        var hideGlass = _this.hideGlass;

        contact
        .css({
            bottom: mheight
        })
        .show()
        .animate({
            bottom: 0
        }, 200)
        .on('click', '.close', function () {
            contact
            .animate({
                bottom: mheight
            }, 200);
            hideGlass();
        });
*/

        var timer;
        var clickTime = 0;
        button
        .on('click', function () {
            clickTime++;
            if (clickTime > 3) {
                alert(_options);
                _confirm(_options);
            }
            else {
                var me = $(this);//console.log(me);
                me.prop('disabled', true);
                var tm = timeout;
                timer = setInterval(function () {
                    if (timeout < 0) {
                        clearInterval(timer);
                        me.val(text);
                        me.prop('disabled', false);
                        timeout = tm;
                    }
                    else {
                        me.val('重新发送(' + timeout + ')');
                        timeout--;
                    }

                }, 1000);
            }

        });
    }

    function input (options) {
        var _this = options.that || this;
        var selector = _this.options.selector;
        var inputDiv = $(selector);
        inputDiv
        .on('input', 'input', function () {

        })
        .on('click', '.fault', function () {

        })
        ;
    }

    function destory (options) {
        switch (options.type) {
            case 'banner':
                break;
            case 'alert':
                break;
            case 'waiting':
                $('.mwaiting').hide();
                hideGlass(options);
                break;
            case 'confirm':
                break;
            case 'bottomer':
                break;
            case 'contact':
                break;
            case 'verify':
                break;
            default:
                break;
        }
    }

    return {
        init: function (options) {
            init(options);
        },
        exports: function (options) {
            exports(options);
        },
        destory: function (options) {
            destory(options);
        }
    }

};

/*
$.fn.Shop = function(params) {
  return new Shop(params);
}
*/
    return exports;
});
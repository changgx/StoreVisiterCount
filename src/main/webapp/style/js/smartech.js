if (typeof console.log == "object" && Function.prototype.bind && console) {
    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"]
        .forEach(function (method) {
            console[method] = this.call(console[method], console);
        }, Function.prototype.bind);
}
if (!window.log) {
    window.log = function () {
        log.history = log.history || [];  // store logs to an array for reference
        log.history.push(arguments);
        if (typeof console.log == 'function') {
            // Modern browsers
            if ((Array.prototype.slice.call(arguments)).length == 1 && typeof Array.prototype.slice.call(arguments)[0] == 'string') {
                console.log((Array.prototype.slice.call(arguments)).toString());
            }
            else {
                console.log(Array.prototype.slice.call(arguments));
            }
        } else if (!Function.prototype.bind && typeof console != 'undefined' && typeof console.log == 'object') {
            Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
        } else {
            // Inject Firebug lite
            if (!document.getElementById('firebug-lite')) {
                // Include the script
                var script = document.createElement('script');
                script.type = "text/javascript";
                script.id = 'firebug-lite';
                script.src = '/lib/js/firebug-lite/build/firebug-lite.js';
                // If you want to expand the console by default, uncomment this line
                //document.getElementsByTagName('HTML')[0].setAttribute('debug','true');
                document.getElementsByTagName('HEAD')[0].appendChild(script);
                setTimeout(function () {
                    log(Array.prototype.slice.call(arguments));
                }, 1500);
            }
            else {
                // Script was included but hasn't finished loading yet
                setTimeout(function () {
                    log(Array.prototype.slice.call(arguments));
                }, 500);
            }
        }
    }; // <= that's the end of log(), btw
}
$(function () {
//    $('#side-menu').metisMenu();

    $('.sidebar-toggle').on('click', function () {
        $('body').toggleClass('sidebar-collapse');
        setTimeout(function () {
            $(window).resize()
        }, 850)
    });

    $('.sidebar-search-collapse').on('click', function () {
        $('body').toggleClass('sidebar-collapse');
        $('.sidebar-search input').focus();
        setTimeout(function () {
            $(window).resize()
        }, 500)
    });

    $('.panel').on('click', '.panel-collapse', function () {
        var $panel = $(this).closest('.panel');
        $('.panel-heading .panel-collapse i', $panel).toggleClass('fa-caret-down').toggleClass('fa-caret-up');
        $('.panel-body', $panel).toggleClass('hidden')
    })

});

$(window).resize(function () {
    var width = $(window).width();
    if (width < 768) {
        $('.sidebar-right.open').attr('style', '')
    } else {
        $('.sidebar-right.open').height($('body').height() - 50)
    }
});

// 存储全局变量
var ACCLOUD = {
    modalUrl: "" // 模态框地址
};

/********************
 * 取文档内容实际高度
 *******************/
function getScrollHeight() {
    // console.log("body.scrollHeight: " + document.body.scrollHeight + " documentElement.scrollHeight:" + document.documentElement.scrollHeight + " getClientHeight:" + getClientHeight() + " getScrollTop:" + getScrollTop());
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

//      height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = (this.window.innerHeight > 0) ? getScrollHeight() : this.screen.height;
        height = height - topOffset;
        if (height < 1)
            height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    $(".inputfile").find(".btn").on("click", function () {
        $(this).siblings("[type='file']").trigger("click");
    });


    // 需要弹出确认提示框元素绑定事件
    $("body").on("click", "[data-confirm-url]", function () {
        if ($(this).attr("data-confirm-url").indexOf("?") == -1) {
            var alertNameArray = $(this).attr("data-confirm-url").split("/");
        } else {
            var alertNameArray = $(this).attr("data-confirm-url").split("?")[0].split("/");
        }
        var alertNameLen = alertNameArray.length;
        var alertContentKey = alertNameArray[alertNameLen - 2] + '_' + alertNameArray[alertNameLen - 1];
        //console.log(alertContentKey);
        if (confirm("确定执行此操作吗？")) {
            $.post($(this).attr("data-confirm-url"), function (data) {
                //console.log(data);
                // 根据返回成功与否在页面上显示相应提示信息
                if (data == 'true') {
                    alertContentKey = alertContentKey + "_success";
                    //console.log("true:"+alertContentKey);
                    KT_ALERT.alertSuccess(alertContentList[alertContentKey]);
                } else if (data == 'false') {
                    alertContentKey = alertContentKey + "_fail";
                    //console.log("false:"+alertContentKey);
                    KT_ALERT.alertFail(alertContentList[alertContentKey]);
                } else {
                    alertContentKey = alertContentKey + "_fail";
                    //console.log("null:"+alertContentKey);
                    KT_ALERT.alertWarning(alertContentList[alertContentKey]);
                }

            });
        }
    });

    // 需要弹出模态框元素绑定事件
    $("body").on("click", "[data-modal-url]", function () {

        ACCLOUD.modalUrl = $(this).attr("data-modal-url");
        var height = ($(this).attr("data-modal-height") || 300) + "px";
        var width = ($(this).attr("data-modal-width") || 600) + "px";

        //console.log(height);
        //console.log(width);

        layer.open({
            type: 2,
            title: $(this).attr("data-modal-title"),
            area: [width, height],
            fix: false, //不固定
            maxmin: false,
            content: $(this).attr("data-modal-url")
        });

    });


    // 影藏“已添加应用”
    var alinks = $("#side-menu").find("a");
    $.each(alinks, function (i, e) {
        if ($(e).attr("href") == "/yunac/a/application/myapp") {
            $(this).parent("li").hide();
        }
    });

});

var alertContentList = {
    'channel_resetPwd_success': '密码重置成功，密码与账号一致',
    'channel_resetPwd_fail': '重置失败，请重新尝试',
    'channel_frozen_success': '冻结成功',
    'channel_frozen_fail': '冻结失败，请重新尝试',
    'merchant_resetPWD_success': '密码重置成功，密码与账号一致',
    'merchant_resetPWD_fail': '重置失败，请重新尝试',
    'merchant_frozen_success': '冻结成功',
    'merchant_frozen_fail': '冻结失败，请重新尝试',
    'router_reset_success': '重启成功',
    'router_reset_fail': '重启失败，请重新尝试',
    'router_delete_success': '删除成功',
    'router_delete_fail': '删除失败，请重新尝试',
    'visitor_dropVisitor_success': '3分钟之后生效',
    'visitor_dropVisitor_fail': '踢下线失败',
};

var KT_ALERT = {
    //removeAlert : function () {
    //    $(".alert").remove();
    //    window.location.reload();
    //},
    alertSuccess: function (txt) {
        var txt = txt || "成功";
        //$("body").append('<div id="kt-alert-success" class="alert alert-success text-center ktalert"><i class="fa fa-check fa-3x"></i><br><b>' + txt + '</b></div>');
        //setTimeout(KT_ALERT.removeAlert, 1000);
        layer.msg(txt, {icon: 1, time: 3000}, function () {
            window.location.reload();
        });
    },
    alertFail: function (txt) {
        var txt = txt || "失败";
        //$("body").append('<div id="kt-alert-danger" class="alert alert-danger text-center ktalert"><i class="fa fa-times fa-3x"></i><br><b> ' + txt + '</b></div>');
        //setTimeout(KT_ALERT.removeAlert, 1000);
        layer.msg(txt, {icon: 2, time: 3000}, function () {
            window.location.reload();
        });
    },
    alertWarning: function (txt) {
        var txt = txt || "未知原因/(ㄒoㄒ)/~~";
        //$("body").append('<div id="kt-alert-warning" class="alert alert-warning text-center ktalert"><i class="fa fa-exclamation fa-3x"></i><br><b> ' + txt + '</b></div>');
        //setTimeout(KT_ALERT.removeAlert, 1000);
        layer.msg(txt, {icon: 0, time: 3000}, function () {
            window.location.reload();
        });
    }
};

function reloadPage() {
    window.location.reload();
}

function topRedirect(url) {
    window.location.href = url;
}

// 日期联动
function relatedDate(v) {
    switch (v * 1) {
        case 0 : // 昨天
            $(".start-date").val($.KTDate.getBeforeDate(1, "yyyy-MM-dd"));
            $(".end-date").val($.KTDate.getBeforeDate(1, "yyyy-MM-dd"));
            break;
        case 1: // 一周
            $(".start-date").val($.KTDate.getBeforeDate(6, "yyyy-MM-dd"));
            $(".end-date").val($.KTDate.getToday("yyyy-MM-dd"));
            break;
        case 2: // 30天,一月，本月
            //$(".start-date").val($.KTDate.getBeforeDate(29,"yyyy-MM-dd"));
            //$(".end-date").val($.KTDate.getToday("yyyy-MM-dd"));
            $(".start-date").val($.KTDate.getFirstDate("yyyy-MM-dd"));
            $(".end-date").val($.KTDate.getLastDate("yyyy-MM-dd"));
            break;
    }
    $("#sure").trigger("click");

}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
jQuery.KTDate = {
    getToday: function (pattern) { //根据pattern格式获取系统时间今天日期, 例子: 输入：pattern:"yyyy-MM-dd" 返回:2014-07-16
        return (new Date()).Format(pattern);
    },
    getBeforeDate: function (n, pattern) { //根据pattern格式获取系统时间前n天的日期,n=0表示今天,n=1表示昨天,n=-1表示明天
        var today = new Date();
        var beforeday = new Date(today.getTime() - (n * 24 * 60 * 60 * 1000));
        return beforeday.Format(pattern);
    },
    getFirstDate: function (pattern) { // 获取当前月的第一天
        var Nowdate = new Date();
        var MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth(), 1);
        return MonthFirstDay.Format(pattern);
    },
    getLastDate: function (pattern) {
        var Nowdate = new Date();
        var MonthLastDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1, 0);
        return MonthLastDay.Format(pattern);
    },
    getCurrentTime: function () {
        return (new Date()).getHours() + ":00";
    },
    getBeforeTime: function (n) {
        var bt = ((new Date()).getHours() - n) < 0 ? (24 + ((new Date()).getHours() - n)) : ((new Date()).getHours() - n);
        return bt + ":00";
    }
};
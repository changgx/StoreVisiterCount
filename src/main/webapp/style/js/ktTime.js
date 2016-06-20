(function ($) {
    $.fn.ktTime = function (options) {
        var defaultVal = {
            relatedDom: ".kt-time-input",
            shClass: "",
            smClass: "",
            ehClass: "",
            emClass: "",
            sHour: "00",
            sMinute: "00",
            eHour: "00",
            eMinute: "00"
        };
        var settings = $.extend(defaultVal, options);
        var $o = $(this);

        var hourStr = '';
        for (var i = 0; i < 24; i++) {
            if ((i + "").length == 1) {
                i = "0" + i;
            }
            hourStr += '<option value="' + i + '">' + i + '</option>';
        }

        var minuteStr = '';
        for (var i = 0; i < 60; i++) {
            if ((i + "").length == 1) {
                i = "0" + i;
            }
            minuteStr += '<option value="' + i + '">' + i + '</option>';
        }

        var str = '';
        str += '<select class="timecom start-hour ' + settings.shClass + '" style="padding:5px; margin:2px; width:60px;">';
        str += hourStr;
        str += '</select>:<select class="timecom start-minute ' + settings.smClass + '" style="padding:5px; margin:2px; width:60px;">';
        str += minuteStr;
        str += '</select>-<select class="timecom end-hour ' + settings.ehClass + '" style="padding:5px; margin:2px; width:60px;">';
        str += hourStr;
        str += '</select>:<select class="timecom end-minute ' + settings.emClass + '" style="padding:5px; margin:2px; width:60px;">';
        str += minuteStr;
        str += '</select>';
        $(this).append(str);

        $(this).find(".start-hour").val(settings.sHour);
        $(this).find(".start-minute").val(settings.sMinute);
        $(this).find(".end-hour").val(settings.eHour);
        $(this).find(".end-minute").val(settings.eMinute);

        $(".timecom").change(function () {
            var kttime = $o.find(".start-hour").val() + ":" + $o.find(".start-minute").val() + "-"
                + $o.find(".end-hour").val() + ":" + $o.find(".end-minute").val();
            //console.log(kttime);
            $(settings.relatedDom).val(kttime);
        });

    }
})(jQuery);
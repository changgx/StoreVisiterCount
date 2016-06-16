<!doctype html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" pageEncoding="utf-8"%>

<html lang="en">
<head>
    <!-- Favicon -->
    <link rel="shortcut icon" href="./style/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./style/favicon.ico" type="image/x-icon">

    <!-- Bootstrap Core CSS -->
    <link href="./style/css/bootstrap.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <!--<link href="./style/css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">-->

    <!-- DataTables CSS -->
    <link href="./style/css/plugins/dataTables.bootstrap.css" rel="stylesheet">

    <link href="./style/css/plugins/jquery-ui.css" rel="stylesheet">

    <!-- Datadatetimepicke CSS -->
    <link href="./style/css/plugins/bootstrap-datetimepicker.min.css" rel="stylesheet">


    <%--black color--%>
    <%--<!-- Custom CSS -->--%>
    <%--<link href="./style/css/smartech.css" rel="stylesheet">--%>

    <!-- Custom Fonts -->
    <link href="./style/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- Animate CSS -->
    <link href="./style/css/animate.css" rel="stylesheet">

    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
    <noscript><link rel="stylesheet" type="text/css" href="./style/css/noJS.css" /></noscript>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="./style/js/html5shiv.js"></script>
    <script src="./style/js/respond.min.js"></script>

    <![endif]-->

    <style>
        .btn-actions {
            margin-bottom: 3px;
        }
        .btn{line-height: 1.43}
    </style>
    <script src="./style/jquery/jquery-1.8.3.min.js"></script>
    <script src="./style/highcharts/highcharts.js"></script>
    <script src="./style/highcharts/modules/exporting.js"></script>

    <script>

        function func( data){
            $('#container').highcharts({
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '店铺访客统计'
                },
                subtitle: {
                    text: 'Source: cloud.kunteng.org'
                },
                xAxis: {
                    categories: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
                        '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
                        '19:00', '20:00', '21:00', '22:00', '23:00', '24:00',
                    ]
                },
                yAxis: {
                    title: {
                        text: '访    客   数'
                    },
                    labels: {
                        formatter: function() {
                            return this.value
                        }
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                plotOptions: {
                    spline: {
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        }
                    }
                },
                series: [{
                    name: JSON.parse(data).account,
                    marker: {
                        symbol: 'square'
                    },
                    data:JSON.parse(data).data
                }]
            });
        };

        function select(){
            var timeStart = $("#uvcountstart").val();
            var timeEnd = $("#uvcountend").val();
            var account = $("#account").val();
            $.ajax({
                type:"POST",
                url:"view.do",
                data:"{account:'"+account+"',startTime:'"+timeStart+"',endTime:'"+timeEnd+"'}",
                success: function(data){
                    func(data);
                }
            });
        }
        $(function () {
            $(".dateController").find("input[type='radio']").change(function(){
                if($(this).prop('checked')){
                    relatedDate($(this).attr("data-dateval"));
                }
            });

            $(".start-date").datepicker({
                maxDate: 0,
                onSelect: function(dateText,inst){
                    var str = dateText.replace(/-/g,'/');
                    var timeStamp = (new Date(str)).getTime();
                    var timeStamp2 = new Date($(".end-date").val().replace(/-/g,'/')).getTime();
                    if(timeStamp > timeStamp2) {
                        alert("起始日期应小于结束日期");
                        $(".start-date").val($.KTDate.getBeforeDate(7,"yyyy-MM-dd"));
                    } else {
                    }
                }
            });

            $(".end-date").datepicker({
                maxDate: 0,
                onSelect: function(dateText,inst){
                    var str = dateText.replace(/-/g,'/');
                    var timeStamp = (new Date(str)).getTime();
                    var timeStamp2 = new Date($(".start-date").val().replace(/-/g,'/')).getTime();
                    if(timeStamp < timeStamp2) {
                        alert("结束日期应大于起始日期");
                        $(".end-date").val($.KTDate.getBeforeDate(1,"yyyy-MM-dd"));
                    } else {
                    }
                }
            });

            $("#optionsRadiosInline2").trigger("click");
            select();
            $("#sure").click(function(){
              select();
            });


        });
    </script>
</head>
<body>


<div class="panel panel-success">
    <div class="panel-heading form-inline" >
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">店铺名</span>
            <input type="text" class="form-control"  aria-describedby="basic-addon1" id="account">
        </div>
        <%--<div class="select-inline">--%>
            <%--<select id="channelPath">--%>
                <%--<c:forEach items="${ChannelBeanList}" var="tmp">--%>
                    <%--<option   value="${tmp.channelPath}#${tmp.account}">${tmp.account}</option>--%>
                <%--</c:forEach>--%>
            <%--</select>--%>
        <%--</div>--%>
            <div class="form-group dateController">
            <label class="radio-inline">
                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1"
                       value="option1" checked="" data-dateval="0">昨天
            </label>
            <label class="radio-inline">
                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2"
                       value="option2" data-dateval="1">最近一周
            </label>
            <label class="radio-inline">
                <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3"
                       value="option3" data-dateval="2">本月
            </label>
        </div>
        <input class="form-control start-date" type="text" id="uvcountstart"
               name="timeStart" value=""/>
        <input class="form-control end-date" type="text" id="uvcountend"
               name="timeEnd" value=""/>
        <button id="sure" type="button" class="btn btn-success " style="border-radius: 3px; margin-left: 1px;">确定</button>

    </div>
</div>


<div id="container" style="min-width:700px;height:400px"></div>
</body>


<script src="./style/js/bootstrap.min.js"></script>
<script src="./style/js/plugins/layer/layer.js"></script>

<script src="./style/js/plugins/datatimepick/bootstrap-datetimepicker.min.js"></script>
<script src="./style/js/plugins/jquery-ui-datepicker.js"></script>

<script src="./style/js/smartech.js"></script>
</html>
$(function(){

    var index = top.layer.getFrameIndex(window.name) || top.layer.index;
    $("[data-dismiss]").click(function(){
        top.layer.close(index);
    });

    $(".inputfile").find(".btn").on("click", function(){
        $(this).siblings("[type='file']").trigger("click");
    });

});

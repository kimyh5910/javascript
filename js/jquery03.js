$(document).ready(function() {
    function widthHeight() {
        var text = "";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height() + "</p>";

        return text;
    }

    function innerWidthHeight(text) {
        var text = "";
        text += "<p>div의 너비 : " + $("#div01Div1").innerWidth() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").innerHeight() + "</p>";

        return text;
    }

    function outerWidthHeight(flag, text) {
        if (flag == true) {
            text += "<p>margin 까지의 너비 : " + $("#div01").outerWidth(true) + "</p>";
            text += "<p>margin 까지의 높이 : " + $("#div01").outerHeight(true) + "</p>";
        }
        else {
            text += "<p>border 까지의 너비 : " + $("#div01").outerWidth(true) + "</p>";
            text += "<p>border 까지의 높이 : " + $("#div01").outerHeight(true) + "</p>";
        }
    }












    $("#btn1").on("click", function() {
        var text = widthHeight();
        $("#div01").html(text);
    });

    $("#btn2").on("click", function() {
        $("#div01").width("500px");
        $("#div01").height("500px");
        $("#div01").css("padding","500px");
    });

    $("#btn3").on("click", function() {
        var text = widthHeight();
        text = innerWidthHeight(text);
        $("#div01").html(text);
    });

    $("#btn4").on("click", function() {
        var text = widthHeight();
        text = outerWidthHeight(false,text);
        $("#div01").html(text);
    });

    $("#btn5").on("click", function() {
        var text = widthHeight();
        text = outerWidthHeight(true,text);
        $("#div01").html(text);
    });





   
   









});
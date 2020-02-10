$(document).ready(function() {

    // 문제 1
    $("#div01Btn1").on("click", function() {
        var text = "<li>" + $("#div01Test1").val() + "</li>";
        $("#div01ol1").append(text);

        $("#div01Input").val(""); // 기존에 입력된 input 태그의 value값을 모두 삭제
        $("#div01Input").focus(); // 박스에 커서 이동 (버튼에 주어진 포커스를 textbox로 이동)
    });

    // 문제 2
    $("#div02Btn1").on("click", function() {
        $("#div02ol1").addClass("fontSize");
    });

    $("#div02Btn2").on("click", function() {
        $("#div02ol1").addClass("fontColor");
    });

    $("#div02Btn3").on("click", function() {
        $("#div02ol1").addClass("fontWeight");
    });

    $("#div02Btn4").on("click", function() {
        $("#div02ol1").removeClass("fontSize fontColor fontWeight");
        $("#div02ol1").removeClass(); // 해당 태그에 적용된 모든 class를 삭제
    });











});
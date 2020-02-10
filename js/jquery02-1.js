$(document).ready(function() {
    $("#div01Btn1").on("click", function() {
        $("#div01Link1").attr("href", "https://www.google.co.kr");
        $("#div01Link1").text("구글");
        
    });

    $("#div01Btn2").on("click", function() {
        $("#div01Link2").attr("href", "https://www.google.co.kr");
        $("#div01Link2").text("구글");
    });

    $("#div01Btn3").on("click", function() {
        $("#div01Link3").attr("href", "https://www.google.co.kr");
        $("#div01Link2").text("구글");
    });

    $("#div02Btn1").on("click", function() {
        $("#div02Test1").text("주소창");
    });

    
    
    // 문제 2)
    $("#div02Btn1").on("click", function() {
        var linkAddr = "http://";
        linkAddr = linkAddr + $("#div02Input1").val();
        var linktext = $("#div02Input2").val();

        $("#div02Link1").attr("href", linkAddr);
        $("#div02Link1").text(linktext);
    });
});




















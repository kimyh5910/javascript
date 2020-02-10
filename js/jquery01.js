
$(document).ready(function() {
    // jquery 효과
    
    // hide/show/toggle : jquery에서 미리 만들어 놓은 CSS 효과
    // hide() : 지정한 html 태그를 숨김(display : none 과 같음)
        // $(선택자).hide(속도, 콜백함수)
            // 속도는 총 동작 시간으로 계산됨
            // 1/1000 초로 계산함
    // show() : 숨겨진 html 태그를 보여줌
        // $(선택자).show(속도, 콜백함수)
    // toggle() : hide()/show()의 기능을 돌아가며 실행
        // $(선택자).toggle(속도, 콜백함수)
    $("#btnHide").on("click", function() {
        // $("#div01p").hide();   // 기본사용
        // $("#div01p").hide(500); // 실행 속도 추가
        $("#div01p").hide(300,function() { // 콜백함수 사용
            alert("hide() 가 실행되었습니다.");
        });
    });
    
    $("#btnShow").on("click", function() {
        // $("#div01p").show();
        // $("#div01p").show(1000);
        $("#div01p").show(300,function() {
            alert("show() 가 실행되었습니다.");
        });
    });

    $("#btnToggle").on("click", function() {
        // $("#div01p").toggle();
        // $("#div01p").toggle(500);
        $("#div01p").toggle(300,function() {
            alert("toggle() 가 실행되었습니다.");
        });
    });

    // 슬라이드 효과
    // slideDown() : 지정한 html 요소를 아래로 슬라이드 함
        // $(선택자).slideDown(속도, 콜백);
        // 속도는 slow, fast, 숫자(1/1000 초)로 입력
    // slideUp() : 지정한 html 요소를 위로 슬라이드 함
    // slideToggle() : 지정한 html 요소를 아래로/위로 슬라이드를 돌아가며 동작
    $("#div02flip1").on("click", function() {
        $("#div02panel1").slideDown("slow"); // 기본형식
        // $("#div02panel1").slideDown(); // 시간 입력방식
        // $("#div02panel1").slideDown("fast", function(){ // 콜백함수
        //     alert("slideDown()실행 후 콜백함수 동작");
        // });
    });

    $("#div02flip2").on("click", function() {
        $("#div02panel2").slideUp();
        // $("#div02panel1").slideDown(); // 시간 입력방식
        // $("#div02panel1").slideUp("500", function(){ // 콜백함수
        //     alert("slideUp()실행 후 콜백함수 동작");
        // });
    });

    $("#div02flip3").on("click", function() {
        $("#div02panel3").slideToggle();
        // $("#div02panel1").slideUp(1000); // 시간 입력방식
        // $("#div02panel1").slideToggle("300", function(){ // 콜백함수
            // alert("slideToggle()실행 후 콜백함수 동작");
        // });
    });

    // 애니매이션 효과
    // animate() : 사용자 정의 애니매이션을 작성할 수 있음
    // $(선택자).animate({옵션}, 속도, 콜백);
        // 옵션 : CSS 속성을 입력, object 형을 사용하기 때문에 CSS속성을 여러개 동시에 사용할 수 있음
            // 컬러 관련 CSS 속성은 jQuery.Color 플러그인을 추가 설치해야 함
            // 현재 적용된 값에 증가/감소 값을 넣어서 상대값으로 표현이 가능함
        // 속도 : 1/1000 초로 계산
        // 콜백 : animate()가 실행된 이후 동작할 작업
        // 애니메이션은 연속 여러개 실행할 수 있음
            // animate()를 여러개 입력 시 입력된 순서에 따라 차례대로 실행 됨

    $("#div03btn1").on("click", function() {
        // $("#div03div").animate({left: "250px"}); // 기본형
        // $("#div03div").animate({left: "250px"}, 2000);
        // $("#div03div").animate({left: "250px"}, 2000, function() {
        //     alert("animate() 사용")
        // });

        // 여러가지 옵션 동시에 적용하기
        // $("#div03div").animate({
        // left: "250px",
        // height: "400px",
        // width: "400px",
        // backgroundColor:jQuery.Color("red")
        // }); 
        // 상대값 적용하기
        // $("#div03div").animate({left: "+=250px"});
        
        // 애니메이션 효과 연속으로 주기 1
        // $("#div03div").animate({left: "500px"});
        // $("#div03div").animate({width: "400px"});
        // $("#div03div").animate({height: "400px"});
        // $("#div03div").animate({backgroundColor: jQuery.Color("red")});
        
        // 애니메이션 효과 연속으로 주기 2
        var div = $("#div03div");
        div.animate({left: "500px"});
        div.animate({width: "400px"});
        div.animate({height: "400px"});
        div.animate({backgroundColor: jQuery.Color("red")});
        
        // jquery chaining 을 사용한 방식
        // div.animate({left: "500px"}).animate({width: "400px"}).animate({height: "400px"}).animate({backgroundColor: jQuery.Color("red")});

    });

    // jquery 애니매이션 효과 멈추기
    // stop() : 애니메이션이나 제이쿼리 효과를 끝나기 전에 중지시킴
        // $(선택자).stop(stopAll, goToEnd)
        // stopAll : 기본값 false, 연속된 효과가 있을 경우 모두 중지
        // goToEnd : 기본값 false, 해당 효과의 끝으로 이동

    $("#div04btn1").on("click", function() {
        $("#div04panel").stop();
    });

    $("#div04flip").on("click", function() {
        $("#div04panel").slideDown(5000);
    });

    $("#div04btn3").on("click", function() {
        $("div04div1").stop();
    });

    $("#div04flip").on("click", function() {
        $("#div04div2").slideDown(5000);
    });
    $("#div04div1").on("click", function() {
        $("#div04div1").fadeOut(5000);
    });
    $("#div04div2").on("click", function() {
        $("#div04div2").animate({left :"500px"}, 5000);
    });
    
    $("#div04btn4").on("click", function() {
        $("#div04div3").stop(); // 기본형
        $("#div04div3").stopAll(false,true); // stopAll : false, goToEnd : ture
    });

    $("#div04div3").on("click", function() {
        $("#div04div3").animate({left :"500px"}, 5000);
    });
});
$(function(){//document.ready
   //슬라이드다운 네비
  $(".wrap>.gnb>li").mouseover(function(){
    $(this).find(".sub").stop().slideDown("fast");
    //이벤트가 발생된 li요소의 자식요소인 .sub을 먼저 stop메서드로 대기열에 있는 애니메이션 기능을 모두 제거하고 slideDown메서드로 메뉴가 펼쳐지는 애니메이션을 적용
  });
  //슬라이드업 네비
  $(".wrap>.gnb>li").mouseout(function(){
    $(this).find(".sub").stop().slideUp("fast");
    //이벤트가 발생된 li요소의 자식요소인 .sub를 slideUp메서드로 메뉴가 접히는 애니메이션을 적용
  });


  //#banner 자동이미지 변환
  /*function banner(){
   var first=$("#banner img:first");
   $("#banner").append(first);
  }
  var timer = setInterval(banner,3000);*/

   //#banner dot버튼 클릭이벤트
   $("#banner .round>li").click(function(){
    //모든 버튼에 on클래스를 제거
    $("#banner .round>li").removeClass("on");
    //클릭한 버튼에 on클래스 생성
    $(this).addClass("on");
    var i =$(this).index();
    var pos=i*-1920;
    $("#banner > .imgGroup").stop().animate({"left":pos+"px"},500);
  });



  //model>arrow>i:first버튼에 클릭이벤트 생성
  $("#model>.arrow>i:last").click(function(){
    var first = $(".modelWrap>li:first");//첫번째 이미지요소를 변수 first에 할당
    $(".modelWrap").append(first);//first변수에 할당한 첫번째 이미지를 append메서드로 imgGroup의 마지막 자식위치로 보내줍니다.
  });
  //.use_arrow>i>last버튼에 클릭이벤트 생성
  $("#model>.arrow>i:first").click(function(){
    var last = $(".modelWrap>li:last");//마지막 이미지요소를 변수 last에 할당
    $(".modelWrap").prepend(last);//last변수에 할당한 마지막 이미지를 prepend메서드로 imgGroup의 첫번째 자식위치로 보내줍니다.
  });


  //.use_arrow>i:first버튼에 클릭이벤트 생성
  $(".use_arrow>li:last").click(function(){
    var first = $(".model_search>li:first");//첫번째 이미지요소를 변수 first에 할당
    $(".model_search").append(first);//first변수에 할당한 첫번째 이미지를 append메서드로 imgGroup의 마지막 자식위치로 보내줍니다.
  });
  //.use_arrow>i>last버튼에 클릭이벤트 생성
  $(".use_arrow>li:first").click(function(){
    var last = $(".model_search>li:last");//마지막 이미지요소를 변수 last에 할당
    $(".model_search").prepend(last);//last변수에 할당한 마지막 이미지를 prepend메서드로 imgGroup의 첫번째 자식위치로 보내줍니다.
  });
  


  //인증중고차 찾기 dot버튼 클릭이벤트
   $("#useCar_search>.use_dot>li").click(function(){
    //모든 버튼에 on클래스를 제거
    $("#useCar_search>.use_dot>li").removeClass("on");
    //클릭한 버튼에 on클래스 생성
    $(this).addClass("on");
  });

  /*sub models 이미지 및 텍스트 변경*/
  $("#models .color_dot>li").click(function(){
    var i = $(this).index();
    var path = $(this).attr("data-url");
    $("#models .modelGroup>img").attr("src",path);
    $("#models .text > p").removeClass().eq(i).addClass("on");
  });
  /*sub modleIn 이미지 및 텍스트 변경*/
  $("#modelIn .inColor_dot>li").click(function(){
    var i = $(this).index();
    var path = $(this).attr("data-url");
    $("#modelIn .inImg>img").attr("src",path);
    $("#modelIn .inText > p").removeClass().eq(i).addClass("on");
  });
});
$(function(){
  $(".dot>li").click(function(){
    //모든 버튼에 on클래스를 제거
    $(".dot>li").removeClass("on");
    //클릭한 버튼에 on클래스 생성
    $(this).addClass("on");
  });
})
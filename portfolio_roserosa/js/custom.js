$(function(){// document.ready
  var showImg, nextImg;//현재 보이는 이미지와 다음에 보이는 이미지를 할당할 변수선언
  function fadeInOut(){//fadeInOut함수 선언
    showImg = $(".bannerImg>img:eq(0)");//첫번째 이미지를 showImg에 할당(현재 보이는 이미지)
    nextImg = $(".bannerImg>img:eq(1)");//두번째 이미지를 nextImg에 할당(다음에 보여져야할 이미지)

    nextImg.addClass("active").css("opacity",0);//다음에 보여져야하는 이미지에 active클래스를 적용하여 z-index를 1로 설정하고 opacity를 0으로 안보이게 합니다.

    //nextImg요소의 opacity를 1로 1초동안 변경하여 화면에 표시
    nextImg.animate({"opacity":1},1000,function(){
      //애니메이션 기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 변경하고 active클래스를 제거하여 z-index:1이 적용되지 않도록 한다.
      $(".bannerImg").append(showImg);
      showImg.removeClass("active");
    });

  }
  setInterval(fadeInOut,4000);//fadeInOut함수를 3초에 한번씩 반복 실행

  //collection img 클릭시
  $("#collection .imgGroup").click(function(){
    var src=$(this).find(".largeImg").attr("src");//클릭한 이미지의 src속성값을 변수 src에 할당
    var caption = $(this).find(".largeImg").attr("alt");//클릭한 이미지의 alt속성값을 변수 caption에 할당

    $(".modal-content").attr("src",src);
    //모달이미지요소의 src속성값을 src변수값으로 할당하고 .caption요소의 텍스트 콘텐츠로 caption변수값을 할당
    $("#modal").css("display","block");//.modal을 화면에 표시
  });

  //.close버튼 클릭시 modal팝업을 제거
  $(".close").click(function(){
    $("#modal").css("display","none");
  })

  $(window).click(function(e){
    console.log(e.target);
    if(e.target==modal){
      $("#modal").css("display","none");
    }
  })
});
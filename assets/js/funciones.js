$(document).ready(function(){
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > 100){
			$("#barra").css('display', 'none');
			$("#barra2").css('display', 'block');
       }


       if (scroll == 0){
       		$("#barra").css('display', 'block');
       		$("#barra2").css('display', 'none');
       }
    });
  });
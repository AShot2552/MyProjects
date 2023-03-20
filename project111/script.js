
// дата та час в реальному часі/////////////////////////////
    function date_time(){
       var current_datetime = new Date();
       var day = zero_first_format(current_datetime.getDate());
       var month = zero_first_format(current_datetime.getMonth()+1);
       var year = current_datetime.getFullYear();
       var hours = zero_first_format(current_datetime.getHours());
       var minutes = zero_first_format(current_datetime.getMinutes());
       var seconds = zero_first_format(current_datetime.getSeconds());
       function zero_first_format(value)
        {if (value < 10){
        value='0'+value;}
        return value;}   
        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;}
    setInterval(function () {
    document.getElementById('current_date_time_block2').innerHTML = date_time();
}, 1000);

////////////////// Кнопка прокрутки вгору////////////////

jQuery(document).ready(function() {
  var btn = $('#button');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});

//// висота NAVBAR MENU з урахуванням можливої ​​зміни екрану:

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

/********************************************/












































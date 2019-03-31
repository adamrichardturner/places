$( document ).ready(function() {
     // Fade in first image
     $('div.moscow').animate({ opacity: 1 }, { duration: 1500 });
     // Slicknav
     $(function(){
         $('#menu').slicknav();
     });
});

$(document).ready(function(){
   if($('body').hasClass('home')){
        var settings = { containerResizeSpeed: 350
            };
        $('#gallery a').lightBox(settings);
   
        //-------------------------- GALERIA DE IMAGENS -->
        $("#galeria ul").cycle({
            fx: 'shuffle', speed:1500,
            shuffle:{top:-230,left:230}
        });
        //-------------------------- BANNER -->
   }
   //-------------------------- funcoes para a home -->
   
});
$(window).load(function(){
    if($('body').hasClass('bodyFrm')){
        $('#infoFrm').addClass('alert').show(2000);
    }
    //--------------------------------  INFO TBCONOSCO -->
    if($('body').hasClass('home')){
       $('#cab1').show(2000);
    }
    
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34682639-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
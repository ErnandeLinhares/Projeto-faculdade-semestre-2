$(document).ready(function(){

    $('a[href*="w3.org"]').click(function() {
        var currentUrl = window.location.href;
        var w3cValidation = currentUrl;

        if ($(this).is('[href*="css-validator"'))
          w3cValidation = "http://jigsaw.w3.org/css-validator/validator?uri="+currentUrl;
        else
          w3cValidation = "http://validator.w3.org/check?uri="+currentUrl;

        window.open(w3cValidation);
        return false;
    });

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
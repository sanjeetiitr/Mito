;(function($) {	
    $('.color-settings a').click(function(event){
        $('.color-settings a').removeClass('selected');
        $(this).addClass('selected');             
        event.preventDefault();
    });
jQuery(document).ready(function($) {
	    var path = theme_settings.assets;
         
		// Color Changer
		$(".color_default" ).click(function(){
            $('link[class*=style-switcher]').remove();
			createCookie( "style",'style', 365);
            return false;
		});
		
		$(".color_purple" ).click(function(){
            $('link[id*=purple]').remove();$('link[class*=style-switcher]').remove();
            $('<link id="style-purple" class="style-switcher" rel="stylesheet" href="'+path+'style-purple.css" type="text/css" media="screen"/>').appendTo("head");
            createCookie( "style",'purple', 365);
			return false;
		});
		
		$(".color_red" ).click(function(){
			$('link[id*=red]').remove();$('link[class*=style-switcher]').remove();
            $('<link id="style-red" class="style-switcher" rel="stylesheet" href="'+path+'style-red.css" type="text/css" media="screen"/>').appendTo("head");
            createCookie( "style",'red', 365);
			return false;
		});
		
		$(".color_gold" ).click(function(){
		  $('link[id*=gold]').remove();$('link[class*=style-switcher]').remove();
			$('<link id="style-gold" class="style-switcher" rel="stylesheet" href="'+path+'style-gold.css" type="text/css" media="screen"/>').appendTo("head");
            createCookie( "style",'gold', 365);
			return false;
		});		
		
		$(".color_green" ).click(function(){
		    $('link[id*=green]').remove();$('link[class*=style-switcher]').remove();
			$('<link id="style-green" class="style-switcher" rel="stylesheet" href="'+path+'style-green.css" type="text/css" media="screen"/>').appendTo("head");
            createCookie( "style",'green', 365);
			return false;
		});
        $(".color_black" ).click(function(){
            $('link[id*=black]').remove();$('link[class*=style-switcher]').remove();
		    $('<link id="style-black" class="style-switcher" rel="stylesheet" href="'+path+'style-black.css" type="text/css" media="screen"/>').appendTo("head");
            createCookie( "style",'black', 365);
			return false;
		});
});

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var href = theme_settings.assets;    
  if( cookie &&  cookie !='style' ){
     $('link[class*=style-switcher]').remove();
     $('<link id="style-'+ cookie +'" class="style-switcher" rel="stylesheet" href="'+href+'style-'+cookie+'.css" type="text/css" media="screen"/>').appendTo("head");
  }else{
     $('link[id="style-'+ cookie +'"]').remove();
  }
  
  if(cookie !='style'){
		$('.color-settings a').removeClass("selected");
		$('.color-settings .color_'+cookie ).addClass( "selected" );
	}
}
 
})(jQuery);
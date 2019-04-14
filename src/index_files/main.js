
 function toggleFunction() {
   var x = document.getElementById("collapse");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 }

	$( document ).ready(function() {
		if ($( window ).width()>767) {
			slideslide();		
		}
	});


function showslide(slidenumber) {
	if (!$('[data-slide='+ slidenumber +']').hasClass('item-current') && !$('.item-current').hasClass('trans') ) {	
		$('[data-slide='+ slidenumber +']').addClass('item-next');
		$('.item-next').addClass('trans');
		$('.item-current').addClass('trans');
	   setTimeout(function(){ 
			$('.item-current').removeClass('item-current');
			$('.item-next').removeClass('item-next').addClass('item-current');
		   $('.trans').removeClass('trans');   
	   }, 1000);		
	}		
}

$( ".previmg" ).click(function() {
  		showslide($(this).attr('data-goto'));
});


//Automatski slider
var TotalSlides = $('.previmg').length;
var autoslide = true;
var slideinterval=6000;  // sekunde izmedju slajdova
var intervals=[];
var timeouts=[];
var ki=-1;
var kt=-1;

function slideslide() {
	if (autoslide) {
		for (let i=1; i<TotalSlides;i++) {
			 intervals[++ki]=setInterval(function(){ showslide(0); }, TotalSlides*slideinterval); 
			 timeouts[++kt] = setTimeout(function(){ showslide(i);}, slideinterval*i);
			 timeouts[++kt]  = setTimeout(function(){ 
						intervals[++ki]=setInterval(function(){ showslide(i); }, TotalSlides*slideinterval);  
			  }, i*slideinterval);
		}
		$('.stop').removeClass('hidden');
  		$('.play').addClass('hidden');
	}
}

$( ".stop" ).click(function() {
  		intervals.forEach(clearInterval);
  		timeouts.forEach(clearTimeout);
  		$('.stop').addClass('hidden');
  		$('.play').removeClass('hidden');
});
$( ".play" ).click(function() {
	   showslide(0);
      slideslide();
});

$( ".zoom" ).click(function() {
	  var uvecajme = $('.item-current  div  img').attr('src');
	  $('.vidisme').attr('src',  uvecajme);
	  $('.enlarged').addClass('show');
	  $('body').addClass('noscroll');
});
$( ".close" ).click(function() {
	  $('.enlarged').removeClass('show');
	  $('body').removeClass('noscroll');
});

$( ".rihgt" ).click(function() {
   let vidise = $('.vidisme').attr('src');   
   let x = parseInt($(".glavna-slika div img[src='"+ vidise +"']").parent().parent().parent().attr("data-slide"));
   let next = (x+1)%TotalSlides;
   novisrc = $('[data-slide='+ next +'] div img').attr('src');;
	$('.videcesme').attr('src',novisrc);
   $('.videcesme').addClass('prelaz');
   $('.vidisme').addClass('prelaz');
	   setTimeout(function(){ 
   		$('.vidisme.prelaz').addClass('videcesme').removeClass('prelaz').removeClass('vidisme'); 
   		$('.videcesme.prelaz').addClass('vidisme').removeClass('prelaz').removeClass('videcesme');   
	   }, 1000);   	
});
$( ".left" ).click(function() {
   let vidise = $('.vidisme').attr('src');   
   let x = parseInt($(".glavna-slika div img[src='"+ vidise +"']").parent().parent().parent().attr("data-slide"));
   let next = (x-1+TotalSlides)%TotalSlides;
   novisrc = $('[data-slide='+ next +'] div img').attr('src');;
	$('.videcesme').attr('src',novisrc);
   $('.videcesme').addClass('prelaz');
   $('.vidisme').addClass('prelaz');
	   setTimeout(function(){ 
   		$('.vidisme.prelaz').addClass('videcesme').removeClass('prelaz').removeClass('vidisme'); 
   		$('.videcesme.prelaz').addClass('vidisme').removeClass('prelaz').removeClass('videcesme');   
	   }, 1000);   	
});

$( window ).resize(function() {
		if ($( window ).width()>767) {
			$( ".stop" ).trigger( "click" );
			showslide(0);
			slideslide();		
		} else {
		   $( ".stop" ).trigger( "click" );
		}


});

$( "#openGal" ).click(function() {
	galery();
	return false;
});

function galery() {
	if ($("ul.second-nav").hasClass('closed')) {
		$( "ul.second-nav" ).removeClass('closed').addClass('opened');	
		$('#strelica').html('&#9652;');
		
	}
	else {
     $( "ul.second-nav" ).removeClass('opened').addClass('closed');
     $('#strelica').html('&#x25BE;');	
	}
}

$( "#openGal" ).mouseover(function(){
  galery();
});

$( ".second-nav" ).mouseleave(function() {
   galery();
});




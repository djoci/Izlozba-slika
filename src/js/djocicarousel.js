function toggleFunction() {
	var x = document.getElementById("collapse");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
 }
		var autoslide = true;
	 	var slideinterval=6000;  // sekunde izmedju slajdova
		var intervals=[];
		var timeouts=[];
		var ki=-1;
		var kt=-1;	
	$(document).ready(function() {
	   //Automatski slider
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

function slideslide() {
	var TotalSlides = $('.previmg').length;
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

$( ".colorme" ).click(function() {
	var obojime = $('.item-current  div  img').attr('src');
	$('.bojanka').attr('src',  obojime);
	$('.obojeno').addClass('show');
	$('body').addClass('noscroll');
});

$( ".close" ).click(function() {
	  $('.enlarged').removeClass('show');
	  $('.obojeno').removeClass('show');
	  $('body').removeClass('noscroll');
});

$( ".rihgt" ).click(function() {
	var TotalSlides = $('.previmg').length;
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
	var TotalSlides = $('.previmg').length;
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


$( ".rihgt" ).click(function() {
	var TotalSlides = $('.previmg').length;
   let obojise = $('.bojanka').attr('src');   
   let x = parseInt($(".glavna-slika div img[src='"+ obojise +"']").parent().parent().parent().attr("data-slide"));
   let next = (x+1)%TotalSlides;
   novisrc = $('[data-slide='+ next +'] div img').attr('src');;
	$('.obojicese').attr('src',novisrc);
   $('.obojicese').addClass('prelaz');
   $('.bojanka').addClass('prelaz');
	   setTimeout(function(){ 
   		$('.bojanka.prelaz').addClass('obojicese').removeClass('prelaz').removeClass('bojanka'); 
   		$('.obojicese.prelaz').addClass('bojanka').removeClass('prelaz').removeClass('obojicese');   
	   }, 1000);   	
});
$( ".left" ).click(function() {
	var TotalSlides = $('.previmg').length;
   let obojise = $('.bojanka').attr('src');   
   let x = parseInt($(".glavna-slika div img[src='"+ obojise +"']").parent().parent().parent().attr("data-slide"));
   let next = (x-1+TotalSlides)%TotalSlides;
   novisrc = $('[data-slide='+ next +'] div img').attr('src');;
	$('.obojicese').attr('src',novisrc);
   $('.obojicese').addClass('prelaz');
   $('.bojanka').addClass('prelaz');
	   setTimeout(function(){ 
   		$('.bojanka.prelaz').addClass('obojicese').removeClass('prelaz').removeClass('bojanka'); 
   		$('.obojicese.prelaz').addClass('bojanka').removeClass('prelaz').removeClass('obojicese');   
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

 document.getElementById("inp-color").addEventListener("change", obojiMe);
function obojiMe() {
    var dohvatiInput = document.getElementById("inp-color");
    var boja = dohvatiInput.value;
	//document.body.style.backgroundColor = boja;
	document.getElementById("obojeno").style.backgroundColor=boja;
}
/*var mojedugme = document.getElementById('dugme');
 mojedugme.addEventListener("click", function(event){
	    event.preventDefault()
	});
	mojedugme.onclick = function(){
 	kupi();
    };*/
    document.getElementById("firstName").onblur = function(){
      proveriIme()
     };
  function proveriIme() {
      var ime = document.getElementById('firstName').value.trim();
    
     if (/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime) == false)
     {
      $( "#forIme" ).addClass( "vidi-poruku" );
     } else {
      $( "#forIme" ).removeClass( "vidi-poruku" );
       } 
   }
   document.getElementById("lastName").onblur = function(){
      proveriPrezime()
     };
   function proveriPrezime() {
      var prezime = document.getElementById('lastName').value.trim();
      if (/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}(\s?[A-zčćšđž])*$/.test(prezime) == false)
      {
       $( "#forPrezime" ).addClass( "vidi-poruku" );
      } else {
       $( "#forPrezime" ).removeClass( "vidi-poruku" );
        }
   }
   document.getElementById("address").onblur = function(){
      proveriAdresu()
     };
   function proveriAdresu(){
       var adresa = document.getElementById('address').value.trim();
       if (/[A-ZČĆŠĐŽa-zčćšđž',-\\/.\s]/.test(adresa) == false)
       {
          $( "#forAdress" ).addClass( "vidi-poruku" );  
       } else {
          $( "#forAdress" ).removeClass( "vidi-poruku" );
       }
   }

   document.getElementById("country").onblur = function(){
       proveriZemlju()
      };

   function proveriZemlju() {
     var e = document.getElementById("country");
     var zemlja = e.options[e.selectedIndex].value;

     if (zemlja == '') {
      $( "#forCountry" ).addClass( "vidi-poruku" ); 
     } else {
      $( "#forCountry" ).removeClass( "vidi-poruku" );  
     } 
   }
   document.getElementById("city").onblur = function(){
      proveriGrad()
     };

  function proveriGrad() {
    var city = document.getElementById("city");
    var grad = city.options[city.selectedIndex].value;

    if (grad == '') {
     $( "#forCity" ).addClass( "vidi-poruku" ); 
    } else {
     $( "#forCity" ).removeClass( "vidi-poruku" );  
    } 
  }
  document.getElementById("zip").onblur = function(){
      proveriZipKod()
     };

  function proveriZipKod() {
      var zip = document.getElementById('zip').value.trim();
      if (/[\w',-\\/.\s]/.test(zip) == false)
      {
         $( "#forZip" ).addClass( "vidi-poruku" );  
      } else {
         $( "#forZip" ).removeClass( "vidi-poruku" );
      }
  }
  document.getElementById("cc-name").onblur = function(){
      proveriCCname()
     };
   function proveriCCname() {
      var cc = document.getElementById('cc-name').value.trim();
      if (/[a-z]/gi.test(cc) == false)
      {
       $( "#forCardName" ).addClass( "vidi-poruku" );
      } else {
       $( "#forCardName" ).removeClass( "vidi-poruku" );
        }
   }
   document.getElementById("cc-number").onblur = function(){
      proveriBrojKartice()
     };

  function proveriBrojKartice() {
      var creditNumber = document.getElementById('cc-number').value.trim();
      if (/^\d+$/.test(creditNumber) == false)
      {
         $( "#forCCNumber" ).addClass( "vidi-poruku" );  
      } else {
         $( "#forCCNumber" ).removeClass( "vidi-poruku" );
      }
  }
  document.getElementById("cc-expiration").onblur = function(){
   checkdate()
  };
  function checkdate() {
   var exdate = document.getElementById('cc-expiration').value.trim();
       exdate = exdate.split('/');
       error=0;
       // Proveravamo duzinu
       if (exdate.length == 2) {
          let month=exdate[0];
          let year=exdate[1];
          month = parseInt(month);	        
          year = parseInt(year);
          // proveravamo mesec   
          if (month < 0 || month >11 || isNaN(month)) {
              error = 1;	        	
          }
          // proveravamo godinu  
          if (year < new Date().getFullYear() || isNaN(year) ) {
                error = 1;
          }
         // provera ako istice ove godine  
         if (year == new Date().getFullYear() && month <= new Date().getMonth()) {
                error = 1;
          }
       }
       else {
       // pogresan format -> greska
           error = 1;
       }
        
       if (error==1) {
       // ima greska   -> pokazujemo poruku 
        $( "#forCCExpiration" ).addClass( "vidi-poruku" );      	
       } else {
          $( "#forCCExpiration" ).removeClass( "vidi-poruku" );    
       }        
  } 
  document.getElementById("cc-cvv").onblur = function(){
   proveriCVV()
  };

function proveriCVV() {
   var cvv = document.getElementById('cc-cvv').value.trim();
   if (/^\d{3}$/.test(cvv) == false)
   {
      $( "#forCVV" ).addClass( "vidi-poruku" );  
   } else {
      $( "#forCVV" ).removeClass( "vidi-poruku" );
   }
}        
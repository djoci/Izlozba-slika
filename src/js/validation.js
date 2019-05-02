var mojedugme = document.getElementById('dugme');
 mojedugme.addEventListener("click", function(event){
	    event.preventDefault()
	});
	mojedugme.onclick = function(){
     
 	kupi();
   };
    function kupi() {
      let PROVERA = true; 
      PROVERA = proveriIme() && proveriPrezime() && proveriAdresu() && proveriZemlju() && proveriGrad() && proveriZipKod() && proveriCCname() && proveriBrojKartice() && proveriCVV() && checkdate();
      if(PROVERA){
       ispisIzBaze(); 

      }    
    
    }
    document.getElementById("firstName").onblur = function(){
      proveriIme();
     };
  function proveriIme() {
      var ime = document.getElementById('firstName').value.trim();
      if (/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime) == true) {
         $( "#forIme" ).removeClass( "vidi-poruku" );
         return true;
      } else
     { 
      $( "#forIme" ).addClass( "vidi-poruku" );  
         return false;
   }
   }
   document.getElementById("lastName").onblur = function(){
      proveriPrezime();
     };
   function proveriPrezime() {
      var prezime = document.getElementById('lastName').value.trim();
      if (/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}(\s?[A-zčćšđž])*$/.test(prezime) == true)
      {  $( "#forPrezime" ).removeClass( "vidi-poruku" );
            return true;
      } else {
         $( "#forPrezime" ).addClass( "vidi-poruku" );
         return false;
        }
   }
   document.getElementById("address").onblur = function(){
      proveriAdresu();
     };
   function proveriAdresu(){
       var adresa = document.getElementById('address').value.trim();
       if (/[A-ZČĆŠĐŽa-zčćšđž',-\\/.\s]/.test(adresa) == true)
       {  $( "#forAdress" ).removeClass( "vidi-poruku" );
          return true;  
       } else {
         $( "#forAdress" ).addClass( "vidi-poruku" );
         return false;
       }
   }

   document.getElementById("country").onblur = function(){
       proveriZemlju();
      };

   function proveriZemlju() {
     var e = document.getElementById("country");
     var zemlja = e.options[e.selectedIndex].value;

     if (zemlja == "") {
      $( "#forCountry" ).addClass( "vidi-poruku" );
      return false;      
     } else {
      $( "#forCountry" ).removeClass( "vidi-poruku" );
      return true;  
     } 
   }
   document.getElementById("city").onblur = function(){
      proveriGrad();
     };

  function proveriGrad() {
    var city = document.getElementById("city");
    var grad = city.options[city.selectedIndex].value;

    if (grad == '') {
     $( "#forCity" ).addClass( "vidi-poruku" );
     return false; 
    } else {
     $( "#forCity" ).removeClass( "vidi-poruku" );
     return true;  
    } 
  }
  document.getElementById("zip").onblur = function(){
      proveriZipKod();
     };

  function proveriZipKod() {
      var zip = document.getElementById('zip').value.trim();
      if (/[\w',-\\/.\s]/.test(zip) == false)
      {
         $( "#forZip" ).addClass( "vidi-poruku" );
         return false;  
      } else {
         $( "#forZip" ).removeClass( "vidi-poruku" );
         return true;
      }
  }
  document.getElementById("cc-name").onblur = function(){
      proveriCCname();
     };
   function proveriCCname() {
      var cc = document.getElementById('cc-name').value.trim();
      if (/[a-z]/gi.test(cc) == false)
      {
       $( "#forCardName" ).addClass( "vidi-poruku" );
       return false;
      } else {
       $( "#forCardName" ).removeClass( "vidi-poruku" );
        return true;
        }
   }
   document.getElementById("cc-number").onblur = function(){
      proveriBrojKartice();
     };

  function proveriBrojKartice() {
      var creditNumber = document.getElementById('cc-number').value.trim();
      if (/^\d+$/.test(creditNumber) == false)
      {
         $( "#forCCNumber" ).addClass( "vidi-poruku" ); 
         return false; 
      } else {
         $( "#forCCNumber" ).removeClass( "vidi-poruku" );
         return true;
      }
  }
  document.getElementById("cc-expiration").onblur = function(){
   checkdate();
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
        return false;      	
       } else {
          $( "#forCCExpiration" ).removeClass( "vidi-poruku" ); 
          return true;   
       }        
  } 
  document.getElementById("cc-cvv").onblur = function(){
   proveriCVV();
  };

function proveriCVV() {
   var cvv = document.getElementById('cc-cvv').value.trim();
   if (/^\d{3}$/.test(cvv) == false)
   {
      $( "#forCVV" ).addClass( "vidi-poruku" );
      return false;  
   } else {
      $( "#forCVV" ).removeClass( "vidi-poruku" );
      return true;
   }
}        
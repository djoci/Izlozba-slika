const proveriIme = function () {
    const ime = document.getElementById('firstName').value.trim();
    if (/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime) == true) {
       $( "#forIme" ).removeClass( "vidi-poruku" );
       return true;
    } else
   { 
    $( "#forIme" ).addClass( "vidi-poruku" );  
       return false;
 }
 }

  function checkdate(exdate) {
       exdate = exdate.split('/');
       error=0;
       // Proveravamo duzinu
       if (exdate.length == 2) {
          let month=exdate[0];
          let year=exdate[1];
          month = parseInt(month);	        
          year = parseInt(year);
          // proveravamo mesec   
          if (month < 1 || month >12 || isNaN(month)) {
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
        return false;      	
       } else {
        return true;   
       }        
  }

 module.exports = checkdate


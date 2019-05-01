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
    
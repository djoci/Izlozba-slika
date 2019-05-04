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

 module.exports = proveriIme


document.getElementById("inp-color").addEventListener("change", obojiMe);
function obojiMe() {
    var dohvatiInput = document.getElementById("inp-color");
    var boja = dohvatiInput.value;
	document.getElementById("obojeno").style.backgroundColor=boja;
}
const _api = axios.create({
    baseURL:`http://localhost:3000`
});

async function ucitajmojusliku(slikaID){
  let response = await _api.get(`/izlozba`);
  let slike = await response.data;
  let i=0;
  let item_curent;
  for (const slika of slike) {

     if (slika.ID ==slikaID) {
      _render(slika);
     }
    }
}
async function _render(slika,i,item_curent){
  $(`.check-img`).append(`
  <div><img src="images/${slika.lokacija}" alt="${slika.name}"></div>
  <div class="text-left">
      <p class="it">${slika.name}, ${slika.godina}</p>
      <p class="tehnika">acrylic on canvas</p>
      <p>${slika.sirina}cm &times; ${slika.visina}cm</p>
      <p>€${slika.price}</p>
  </div>
  `)                
}


function getUrlVars() {
let parts = window.location.href.split('=');
ucitajmojusliku(parts[1])
}
getUrlVars()






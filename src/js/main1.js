            const _api = axios.create({
                  baseURL:`http://localhost:3000`
              });

             async function sadrzaj(){
                let response = await _api.get(`/izlozba`);
                let ads = await response.data;
             
                for (const ad of ads) {
                    
                    _render(ad);
                  }
            
            }


            async function _render(ad){
                $(`.carousel`).append(`<div class="slika caroitem grid-containerN item-current" data-slide='0'>
                <div class="glavna-slika item1">
                    <div><img src="./images/CvetSakuri.jpg" alt="Sakura blossom"></div>
                </div>
                <div class="opis text-left item2">
                <p> </p>
                </div>
                <div class="text-left podacioslici item3">
                <p class="author-main">Irina Ohrimenko</p>
                  <p class="it">Soul of the desert, 2016</p>
                  <p class="tehnika">acrylic on canvas</p>
                  <p>140cm &times; 100cm</p>
                 </div>  
                 </div>`)
                }
                sadrzaj()
               
        




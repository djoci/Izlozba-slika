            const _api = axios.create({
                  baseURL:`http://localhost:3000`
              });

             async function sadrzaj(){
                let response = await _api.get(`/izlozba`);
                let slike = await response.data;
                let i=0;
                let item_curent;
                for (const slika of slike) {
                   if(i==0){
 							item_curent="item-current";                   
                   } else {
							item_curent="";                   
                   }
                   if (slika.tip !="A" && slika.ID !="18") {
                    _render(slika,i,item_curent);
                    i++;
                   }
                  }
            }


            async function _render(slika,i,item_curent){
                $(`.carousel`).append(`<div class="slika caroitem grid-containerN ${item_curent}" data-slide='${i}'>
                <div class="glavna-slika item1">
                    <div><img src="images/${slika.lokacija}" alt="${slika.name}" ></div>
                </div>
                <div class="opis text-left item2">
                <p> </p>
                </div>
                <div class="text-left podacioslici item3">
                <p class="author-main">Irina Ohrimenko</p>
                  <p class="it">${slika.name}, ${slika.godina}</p>
                  <p class="tehnika">acrylic on canvas</p>
                  <p>${slika.sirina}cm &times; ${slika.visina}cm</p>
                  <p>€${slika.price}</p>
				  <a href="checkout.html?ID=${slika.ID}" class="btn" id="${slika.ID}">Buy art</a>
                 </div>  
                 </div>`);
                 $(`.grid-galerija`).append(
                 `<img src="thumbs/${slika.lokacija}"  alt="${slika.name}" class="previmg landscape" onclick="showslide(${i})" />`
                         
                 )                 
                  
                 
                }
                sadrzaj()
               
        




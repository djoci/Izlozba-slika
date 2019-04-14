            const _api = axios.create({
                  baseURL:`http://localhost:3000`
              });

             async function sadrzajIndex(){
                let response = await _api.get(`/izlozba`);
                let slike = await response.data;
                for (const slika of slike) {
                    _render_index(slika);
                  }
            }


            async function _render_index(slika){
                $(`.index-container`).append(`<div class="slika slika-index">
				<figure>
					<div class="glavna-slika">
						<div><img src="images/${slika.lokacija}" alt="${slika.name}"></div>
					</div>
					<figcaption>
						<div class="text-left podacioslici">
							<p class="author-main"><span>Irina Ohrimenko</span></p>
							<p class="it"><span>${slika.name}</span>,<span> ${slika.godina}</span></p>
							<p class="tehnika">acrylic on canvas</p>
							<p><span>${slika.sirina}cm</span> &times;
								<span>${slika.visina}cm</span></p>
						</div>
					</figcaption>
				</figure>
			</div>
              `);             
                                   
                }
                sadrzajIndex()
               
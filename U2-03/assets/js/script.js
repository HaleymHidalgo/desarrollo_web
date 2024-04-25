$("document").ready(function(){
    console.log("Api Cargada");
    $.get("https://digimon-api.vercel.app/api/digimon", function(data, status){
        if(status === "success"){
            $.each(data, function(index, digimon){
                console.log(digimon);
                let digimonCard = `
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-1"
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${digimon.img}" alt="${digimon.name}">
                            <div class="card-body">
                                <h5 class="card-title">${digimon.name}</h5>
                                <p class="card-text">${digimon.level}</p>
                            </div>
                        </div>
                    </div>`;

                $("#contenedorDigimones").append(digimonCard);
            });
        } else {
            $("#contenedorDigimones").append("<p>Error al cargar los datos de la Api</p>");
        }
    });
});
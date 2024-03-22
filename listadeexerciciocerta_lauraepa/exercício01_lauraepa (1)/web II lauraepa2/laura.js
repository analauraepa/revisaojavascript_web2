function inserir_mapa(){
    //criei uma variável e apartir dela estou armazenando a opção que cliquei no menu suspenso
    let selecionar_mapa = document.getElementById("selecionar_mapa");
    //criei uma variável e apartir dela é armazenado a img do estado selecionado
    let container_mapa = document.getElementById("img");


    container_mapa.src = selecionar_mapa.value + ".gif" // peguei a variavel que ia armazenar pelo nome do arquivo dele e igualei ao valor que coloquei no option!

    console.log(selecionar_mapa.value)

   
    //container_mapa.appendChild(imagem); // PESQUISAR ESTA MERDA ;p

}




function adicionaraluno(){
    var nome_aluno = document.getElementById("nome").value;
    var nota_aluno = document.getElementById("nota").value;

    if (nome_aluno === "" || nota_aluno === ""){
        alert("Preencha todos os campos!");
        return;
    } else{
        var tabela = document.getElementById("tabela"); //peguei a tabela
        var tr = document.createElement("tr"); //criei uma linha
        tr.innerHTML = "<td>" + nome_aluno +"</td> <td> " +nota_aluno+ "</td>"; //vou adicionar meio que algo mais novo no html
        tabela.appendChild(tr);// adicionando a tr em uma tabela

    }



 



    
}
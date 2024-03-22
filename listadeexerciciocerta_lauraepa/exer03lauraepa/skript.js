
function logar(){
    const email_correto = "email.certo@gmail.com";
    const senha_correta = "senhacorreta";

    var email_teste = document.getElementById("email").value;
    var senha_teste = document.getElementById("senha").value;

    if (email_teste === "" || senha_teste === ""){
        alert("Preencha todos os campos!");
        return;
    } 

    if(email_teste === email_correto && senha_teste=== senha_correta){
        window.location.href= "pagina2.html";
    } else if(email_teste=== email_correto && senha_teste!= senha_correta){
        alert("Sua senha está incorreta!");
        return;
    }else if(email_teste != email_correto && senha_teste === senha_correta){
        alert("Seu email está incorreto!");
        return;
    }else{
        alert("Email e senhas incorretas, tente novamente!")
    }
}
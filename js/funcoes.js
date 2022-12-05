/*====================LocalStorage========================= */
(function(){
    var tbMensagens = localStorage.getItem("tbMensagens");// Recupera os dados armazenados
    tbMensagens = JSON.parse(tbMensagens); // Converte string para objeto
    if(tbMensagens == null) // Caso não haja conteúdo, iniciamos um vetor vazio
      tbMensagens = [];
  
  
  
  function Adicionar(){
/*  var nome = document.getElementById(nomeform);
    var email = document.getElementById(emailform);
    var assunto = document.getElementById(assuntoform); 
    var mensagem = document.getElementById(mensagemform);

    var mensagem = JSON.stringify({
        Nome   : nome.val(),
        Email     : email.val(),
        Assunto : assunto.val(),
        Message   : mensagem.val()
    }); */

    var mensagem = JSON.stringify({
        Nome   : $("#Name").val(),
        Email     : $("#Email").val(),
        Assunto : $("#Subject").val(),
        Message   : $("#Message").val()
    });
    tbMensagens.push(mensagem);
    localStorage.setItem("tbMensagens", JSON.stringify(tbMensagens));
    alert("Registro adicionado.");
    return true;
  }
  
  $("#frmMensagem").on("submit",function(){
        return Adicionar();
  });
  
  });
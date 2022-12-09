const form = document.getElementById ("formContact");
const lista = document.getElementById("lista");
var mensagens = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = event.target.elements['nome'];
    const email = event.target.elements['email'];
    const assunto = event.target.elements['assunto'];
    const mensagem = event.target.elements ['mensagem'];

    adicionarMensagem(nome.value, email.value, assunto.value, mensagem.value);

    nome.value = "";
    email.value = "";
    assunto.value = "";
    mensagem.value = "";
})

function adicionarMensagem(nome, email, assunto, mensagem) {

    const mensagemAtual = {
        "nome": nome,
        "email": email,
        "assunto": assunto,
        "mensagem": mensagem
    }

    mensagens.push(mensagemAtual);

    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    exibirMensagens();
}

function exibirMensagens(){
    let msgs = document.getElementById('mensagens-enviadas');
    msgs.innerHTML = '';
    if (localStorage.mensagens) {
      minhasMensagens = JSON.parse(localStorage.getItem('mensagens'));
    };
  
    for (var i in minhasMensagens) {
      let p = document.createElement('p');
      p.innerHTML = "Nome: " + minhasMensagens[i].nome + 
      '<br> E-mail: ' + minhasMensagens[i].email + 
      '<br> Assunto: ' + minhasMensagens[i].assunto + 
      '<br> Mensagem enviada: ' + minhasMensagens[i].mensagem;
      msgs.append(p);
      //p.classList.add('border', 'border-secondary', 'p-2', 'my-2')
    };
}

function excluirMensagens(){
    mensagens = [];
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
    //localStorage.clear();
}






















/*====================LocalStorage=========================
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
    });

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
  
  });*/
var mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

function adicionarMensagem(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const mensagemAtual = {
        "nome": nome,
        "email": email,
        "assunto": assunto,
        "mensagem": mensagem
    }

    mensagens.push(mensagemAtual);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
    
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('assunto').value = "";
    document.getElementById('mensagem').value = "";
}

function listarMensagens(){
    var msg = document.getElementById('mensagens-enviadas');
    msg.innerHTML = "   ";

    for (let i in mensagens) {
        let p = document.createElement('p');
        p.innerHTML = "<strong>Nome: </strong>" + mensagens[i].nome + '<br> Email: ' + mensagens[i].email + 
        '<br> Assunto: ' + mensagens[i].assunto + '<br> Mensagem enviada: ' + mensagens[i].mensagem;
        msg.append(p);
    }
}

function excluirMensagens(){
    mensagens = [];
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
    //localStorage.clear();
}
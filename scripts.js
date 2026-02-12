function gerarSenha(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const tamanho = parseInt(document.getElementById('tamanho').value);

    if(isNaN(tamanho) || tamanho < 1){
        alert("Por favor, insira um tamanho válido para a senha.");
        return;
    }

    let senhaGerada = '';
    for(let i = 0; i < tamanho; i++){
        const indice = Math.floor(Math.random() * chars.length);
        senhaGerada += chars.charAt(indice);
    }
    document.getElementById('senha').value = senhaGerada;
}

function copiarSenha(){
    const campoSenha = document.getElementById('senha');

    if(campoSenha.value === ''){
        alert("Nenhuma senha para copiar.");
        return;
    }

    navigator.clipboard.writeText(campoSenha.value)
        .then(() => alert("Senha copiada para a área de transferência."))
        .catch(() => alert("Erro ao copiar a senha."));
}

function limparDados(){
    document.getElementById('tamanho').value = '';
    document.getElementById('senha').value = '';
}

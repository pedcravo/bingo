var jogadores = []

function gerarNumerosAleatorios(quantidade, min, max){

    if(quantidade > (max - min)){
        console.log("Intervalo insuficiente ...");
        return;
    }

    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function criar_tabela(){
    var nome_jogador = prompt('Digite o nome do jogador');

    var cartela = [gerarNumerosAleatorios(5,1,15), gerarNumerosAleatorios(5,16,30), gerarNumerosAleatorios(5,31,45),gerarNumerosAleatorios(5,46,60), gerarNumerosAleatorios(5,61,75)]

    jogadores.push({
        nome_jogador: nome_jogador,
        cartela: cartela
    });

    desenharCartela(nome_jogador, cartela);

    console.log(jogadores)
}


function desenharCartela(nome_jogador, cartela) {
    var cartela_1 = document.getElementById('cartelas');

    var div = document.createElement('div')
    cartela_1.appendChild(div);

    var nomeJogadorElement = document.createElement('h4');
    nomeJogadorElement.innerText = nome_jogador;
    div.appendChild(nomeJogadorElement);

    var tabela = document.createElement('table');

    var thead = document.createElement('thead');

    var th_B = document.createElement('th');
    th_B.innerText = 'B';
    
    var th_I = document.createElement('th');
    th_I.innerText = 'I';

    var th_N = document.createElement('th');
    th_N.innerText = 'N';

    var th_G = document.createElement('th');
    th_G.innerText = 'G';

    var th_O = document.createElement('th');
    th_O.innerText = 'O';

    thead.appendChild(th_B);
    thead.appendChild(th_I);
    thead.appendChild(th_N);
    thead.appendChild(th_G);
    thead.appendChild(th_O);

    for(var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            if(i == 2 && j == 2) {
                td.innerText = "X";
                tr.appendChild(td);
            } else {
                td.innerText = cartela[j][i];
                tr.appendChild(td);
            }
        }
        tabela.appendChild(tr);
    }

    tabela.appendChild(thead);
    div.appendChild(tabela);
}

function limpar_cartela(){
    jogadores = [];
  
    var div = document.getElementById('cartelas');
    div.innerHTML = '';
}




function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 71) + 1;
}

function sortear_numero(cartela) {
    var numerosSorteados = [];
  
    while (numerosSorteados.length < cartela) {
      var numeroSorteado = gerarNumeroAleatorio();
  
      if (!numerosSorteados.includes(numeroSorteado)) {
        numerosSorteados.push(numeroSorteado);
  
        if (numerosCartela.includes(numeroSorteado)) {
          var indiceNumero = numerosCartela.indexOf(numeroSorteado);
          numerosCartela.splice(indiceNumero, 1);
        }
      }
    }
  
    console.log("Cartela concluída!");
  }
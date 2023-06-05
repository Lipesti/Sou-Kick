document.getElementById('titulo').innerHTML = 'Sorteando nomes aleatorios'

function gerarNomes() {
    var posicao = Math.floor(Math.random() * 10) + 0
    var nomes = ['Felipe',
        'Juliana',
        'Heitor',
        'Marcia',
        'Victor',
        'Nilson',
        'Mariano',
        'Maria',
        'José',
        'Lucia']
        
        if(posicao == 1 || posicao == 3 || posicao == 7 || posicao == 9){
            document.getElementById('nome').style.color='deeppink';
            document.getElementById('nome').innerHTML = `${nomes[posicao]}`

        }else{
    
             document.getElementById('nome').style.color='darkblue';
            document.getElementById('nome').innerHTML = `${nomes[posicao]}`
        }
        return;
       
}
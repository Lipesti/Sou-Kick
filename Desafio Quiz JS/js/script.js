var nome = '';
var resposta = '';
var pontos = 0;
function respostaT(){
    nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Informe seu nome")
        nome = prompt("Prepare-se para as perguntas  \n Digite seu nome: ")
    }
    
    resposta = prompt("1. Uma página web sem um HTML e CSS bem feitos será ineficiente? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("2. A regra @media é usada para especificar responsividade do site? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("3. O JavaScript é usado para construir aplicativos da Web? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("4. Os objetos JavaScript podem conter dados e funcionalidades? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("5. HTML significa Hypertext Markup Language ? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("6. O CSS é uma linguagem de programação? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    

    document.getElementById("tecno").innerHTML = `<h2>Olá ${nome}, você escolheu perguntas de Tecnologia<br></h2>`
    if(pontos >= 3){
        document.getElementById("respostaTe").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTe").style = 'background-color: green';
    } else if(pontos <= 2 ){
        document.getElementById("respostaTe").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTe").style = 'background-color: red';
    }
}
 



function respostaB(){
     nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Informe seu nome")
        nome = prompt("Prepare-se para as perguntas \n Digite seu nome:")
    }
    resposta = prompt("1. A água é um composto químico? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("2. As plantas fotossintetizam a luz solar? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("3. Os ossos são formados por células vivas? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("4. O coração é o único órgão responsável pela circulação?  verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("5. As células animais possuem seis paredes celulares? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("6. As doenças são causadas por irregularidades no material genético? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    

    document.getElementById("biolo").innerHTML = `<h2>Olá ${nome}, você escolheu perguntas de Biologia</h2>`
    if(pontos >= 3){
        document.getElementById("respostaBio").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaBio").style = 'background-color: green';
    } else if(pontos <= 2 ){
        document.getElementById("respostaBio").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaBio").style = 'background-color: red';
    }
    
}
function respostaS(){
     nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Informe seu nome")
        nome = prompt("Prepare-se para as perguntas \n Digite seu nome:")
    }
    resposta = prompt("1. Os alimentos processados são bons para a saúde? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("2. Álcool contribui para uma boa saúde? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("3. Exercitar-se 3 vezes por semana ajuda na manutenção da saúde? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("4. Fumar é benéfico para a saúde? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("5. O sono é importante para o funcionamento pleno do organismo?  verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("6. O sal é indicado na alimentação saudável? verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    document.getElementById("saude").innerHTML = `<h2>Olá ${nome}, você escolheu perguntas de Saúde</h2>`
    if(pontos >= 3){
        document.getElementById("respostaSau").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaSau").style = 'background-color: green';
    } else if(pontos <= 2 ){
        document.getElementById("respostaSau").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaSau").style = 'background-color: red';
    }
}
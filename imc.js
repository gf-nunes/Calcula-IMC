const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso/(altura*altura));

        resultado.textContent = valorIMC;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}
calcular.addEventListener('click', imc);
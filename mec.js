function Calcular(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pegando os valores das unidades e prova N2
    var unidadeI = Number(document.getElementById('unidadeI').value);
    var unidadeII = Number(document.getElementById('unidadeII').value);
    var unidadeIII = Number(document.getElementById('unidadeIII').value);
    var unidadeIV = Number(document.getElementById('unidadeIV').value);
    var provaN2 = Number(document.getElementById('provaN2').value);

    // Cálculo da média das unidades
    var somaUnidade = (unidadeI + unidadeII + unidadeIII + unidadeIV) / 4; // Média das unidades
    var mediaUnidade = somaUnidade * 0.4; // 40% da média final

    // Cálculo da média da prova N2 (60% da média final)
    var mediaProva = provaN2 * 0.6; // 60% da média final

    // Cálculo da média final
    var mediaFinal = mediaUnidade + mediaProva;

    // Exibir resultados
    document.getElementById('media').innerHTML = "Média Final: " + mediaFinal.toFixed(1);
    
    // Se a média final for maior ou igual a 6, não mostra a nota necessária
    if (mediaFinal >= 6) {
        document.getElementById('notaNecessaria').innerHTML = ""; // Limpa a mensagem
    } else {
        // Cálculo da nota necessária na prova N2 para passar
        var notaNecessaria = (6 - mediaUnidade) / 0.6; // Nota necessária na N2

        // Verificando se a nota necessária é válida
        if (notaNecessaria > 10) {
            document.getElementById('notaNecessaria').innerHTML = "Infelizmente, a nota necessária na N2 é maior que 10. O aluno não pode mais passar.";
        } else if (notaNecessaria <= 0) {
            document.getElementById('notaNecessaria').innerHTML = "Parabéns! O aluno já atingiu a média necessária!";
        } else {
            // Arredondar para cima e remover casas decimais
            document.getElementById('notaNecessaria').innerHTML = "Nota necessária na N2: " + Math.ceil(notaNecessaria).toString();
        }
    }
}

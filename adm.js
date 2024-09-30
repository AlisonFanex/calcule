function Calcular(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pegando os valores das unidades, aulas e prova N2
    var unidadeI = Number(document.getElementById('unidadeI').value);
    var unidadeII = Number(document.getElementById('unidadeII').value);
    var unidadeIII = Number(document.getElementById('unidadeIII').value);
    var unidadeIV = Number(document.getElementById('unidadeIV').value);
    var aulaI = Number(document.getElementById('aulaI').value);
    var aulaII = Number(document.getElementById('aulaII').value);
    var aulaIII = Number(document.getElementById('aulaIII').value);
    var aulaIV = Number(document.getElementById('aulaIV').value);
    var provaN2 = Number(document.getElementById('provaN2').value);

    // Cálculo da média das unidades
    var somaUnidade = (unidadeI + unidadeII + unidadeIII + unidadeIV) / 4;
    var mediaUnidade = somaUnidade * 0.4; // 40% da média final

    // Cálculo da média das aulas
    var somaAula = (aulaI + aulaII + aulaIII + aulaIV) / 4;
    var mediaAula = somaAula * 0.1; // 10% da média final

    // Cálculo da média da prova N2 (60% da média final)
    var mediaProva = provaN2 * 0.6; // 60% da média final

    // Cálculo da média final
    var mediaFinal = mediaProva + mediaUnidade + mediaAula;

    // Exibir média final
    document.getElementById('media').innerHTML = "Média Final: " + mediaFinal.toFixed(1);
    
    // Verificação da nota necessária
    if (mediaFinal < 6) {
        var resultado = (6 - mediaFinal) / 0.6; // Cálculo da nota necessária
        var notaNecessaria = Math.ceil(resultado); // Arredondar para cima

        // Verificar se a nota necessária é maior que 10
        if (notaNecessaria > 10) {
            document.getElementById('notaNecessaria').innerHTML = "Infelizmente, a nota necessária na N2 é maior que 10. O aluno não pode mais passar.";
        } else {
            document.getElementById('notaNecessaria').innerHTML = "Nota necessária na N2: " + notaNecessaria; // Sem casas decimais
        }
    } else {
        document.getElementById('notaNecessaria').innerHTML = ""; // Limpa a mensagem se a média for maior ou igual a 6
    }
}

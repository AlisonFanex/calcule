function Calcular(event) {
    event.preventDefault(); // Impede o recarregamento da página

    var unidadeI = document.getElementById('unidadeI').value;
    var unidadeII = document.getElementById('unidadeII').value;
    var unidadeIII = document.getElementById('unidadeIII').value;
    var unidadeIV = document.getElementById('unidadeIV').value;
    var provaN2 = document.getElementById('provaN2').value;

    var somaUnidade = (Number(unidadeI) + Number(unidadeII) + Number(unidadeIII) + Number(unidadeIV)) / 4;
    var mediaUnidade = Number(somaUnidade) * 0.4;

    var mediaProva = Number(provaN2) * 0.6;

    var mediaFinal = mediaProva + mediaUnidade;

    var resultado = (6 - mediaFinal) / 0.6;
    var notaNecessaria = resultado > 0 ? resultado : 0;

    document.getElementById('media').innerHTML = "Média Final: " + mediaFinal.toFixed(1);
    document.getElementById('notaNecessaria').innerHTML = "Nota necessária: " + notaNecessaria.toFixed(0);
}

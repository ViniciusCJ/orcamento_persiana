// função para calcular os valores das persianas
function calcularOrcamento(){
    const largura = document.getElementById("larguraPersiana").value;
    const altura = document.getElementById("alturaPersiana").value;
    const quantidade = document.getElementById("quantidadePersiana").value;

    //valor de persiana imaginario, depois pegar valor nos dados passados no JSon
    const valorPersiana = 129.90
    const metroQuadrado = largura * altura

    const precoPersiana = (metroQuadrado * valorPersiana) * quantidade
    console.log(precoPersiana)
}

function adicionarPersiana() {
    alert("Teste")
}
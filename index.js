function calcularOrcamento(largura,altura,qtdPersiana){
    // função para calcular os valores das persianas
    console.log('Iniciar Calculo do valor! ');

    //valor de persiana imaginario, depois pegar valor nos dados passados no JSon
    const valorPersiana = 89.90
    const metroQuadrado = largura * altura

    const precoPersiana = (metroQuadrado * valorPersiana) * qtdPersiana
    return(precoPersiana)
}

//declarando variavel quantidade, para mostrar no titulo e nos ID
var quantidade = 0
//função responsavel para duplicar o form "Orçamento Persiana"
function adicionarPersiana() {
    quantidade ++

    let element = document.getElementById ('persianaContainer').innerHTML +=(`        
    <div class="container p-3 mb-2 bg-light text-dark rounded-3" id="card${quantidade}">
        <form class="row gx-3 gy-2 align-items-center">
            <h3>Persiana ${quantidade}</h3>
            <div class="row g-3">
                <div class="col-sm-6">
                    <label class="form-label" for="largura">Informe a largura:</label>
                    <input type="Number" class="form-control" placeholder="Largura" id="larguraPersiana${quantidade}" aria-label="larguraPersiana">
                </div>
                <div class="col-sm-6">
                    <label class="form-label" for="altura">Informe a altura:</label>
                    <input type="Number" class="form-control" placeholder="Altura" id ="alturaPersiana${quantidade}" aria-label="alturaPersiana">
                </div>
                <div class="col-sm-4">
                    <label class="form-label" for="modelo">Informe o modelo da Persiana:</label>
                    <input type="text" class="form-control" placeholder="Modelo" id ="modeloPersiana${quantidade}" aria-label="modeloPersiana">
                </div>
                <div class="col-sm-4">
                    <label class="form-label" for="quantidade">Quantidade:</label>
                    <input type="Number" class="form-control" placeholder="Quantidade" id ="quantidadePersiana${quantidade}" aria-label="quantidadePersiana">
                </div>
                <div class="col-sm-4">
                    <label class="form-label" for="bando">Tem bandô:</label>
                    <select class="form-select" aria-label="bando">
                        <option selected>Tem bandô?</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                    </select>
                    <div>
                        <button class="btn btn-danger" type="button" onclick="deletarOrcamento()">-</button>
                    </div>
            </div>
        </form>
    </div>`);

};
var valorTotal = 0
function armazenarInput(quantidade){
    for(i = 1;i<=quantidade;i++){
        const largura = document.getElementById(`larguraPersiana${i}`).value;
        const altura = document.getElementById(`alturaPersiana${i}`).value;
        const qtdPersiana = document.getElementById(`quantidadePersiana${i}`).value;

        var valor = calcularOrcamento(largura,altura,qtdPersiana)
        console.log(`Persiana Vertical Translucida Nuance \n \nCor: - \nQuantidade: ${qtdPersiana} \nLado da Cordinha: -
        \nBandô: Sim \n\nLargura: ${largura} \nAltura: ${altura} \n\nValor: ${valor} \n--------`)

       valorTotal = valorTotal + valor
    }
    console.log(`Valor Total: ${valorTotal}`)
}

function deletarOrcamento (){
    var elem = document.getElementById(`card${quantidade}`);
    elem.parentNode.removeChild(elem);

    quantidade --
}
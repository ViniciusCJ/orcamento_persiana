function calcularOrcamento(){
    // função para calcular os valores das persianas
    const largura = document.getElementById(`larguraPersiana${quantidade}`).value;
    const altura = document.getElementById(`alturaPersiana${quantidade}`).value;
    const qtdPersiana = document.getElementById(`quantidadePersiana${quantidade}`).value;
    console.log('Chegou');

    console.log(largura,altura,qtdPersiana);
    //valor de persiana imaginario, depois pegar valor nos dados passados no JSon
    const valorPersiana = 129.90
    const metroQuadrado = largura * altura

    const precoPersiana = (metroQuadrado * valorPersiana) * quantidade
    console.log(precoPersiana)
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
                    <div class="col-sm-4">
                        <button class="btn btn-danger" type="button" onclick="deletarOrcamento()">-</button>
                    </div>
                </div>
            </div>
        </form>
    </div>`);
};

function deletarOrcamento (){
    var elem = document.getElementById(`card${quantidade}`);
    elem.parentNode.removeChild(elem);

    quantidade --
}
function calcularOrcamento(largura,altura,qtdPersiana){
    // função para calcular os valores das persianas
    console.log('Iniciar Calculo do valor! ');

    //valor de persiana imaginario, depois pegar valor nos dados passados no JSon
    const valorPersiana = 89.90
    const metroQuadrado = largura * altura

    const precoPersiana = ((metroQuadrado * valorPersiana) * qtdPersiana)
    const roundPrecoPersiana = +(precoPersiana.toFixed(2))

    console.log("O valor arredondado é:" + roundPrecoPersiana)
    return(roundPrecoPersiana)
}

//declarando variavel quantidade, para mostrar no titulo e nos ID
var quantidade = 0
//função responsavel para duplicar o form "Orçamento Persiana"
function adicionarPersiana() {
    quantidade ++

    let element = document.getElementById ('persianaContainer').innerHTML +=(`        
    <div class="container" id="persianaContainer${quantidade}">
        <form class="row m-3 .bg-light.bg-gradient" id="formOrcamento">
            <h3 class="col-2">Persiana ${quantidade}</h3>
            <div class="container col-sm-6 mx-3">
                <button class="btn btn-danger" type="button" onclick="deletarOrcamento()" id="botaoDeletar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
              </svg></button>
            </div>
            <div class="col-6" id="largura">
                <label class="form-label" for="largura">Informe a largura:</label>
                <input type="Number" class="form-control" placeholder="Largura" id="larguraPersiana${quantidade}" aria-label="larguraPersiana">
            </div>
            <div class="col-6" id="altura">
                <label class="form-label" for="altura">Informe a altura:</label>
                <input type="Number" class="form-control" placeholder="Altura" id ="alturaPersiana${quantidade}" aria-label="alturaPersiana">
            </div>

            <div class="col-sm-4" id="modeloPersiana">
                <label class="form-label" for="modelo">Informe o modelo da Persiana:</label>
                <input type="text" class="form-control" placeholder="Modelo" id ="modeloPersiana${quantidade}" aria-label="modeloPersiana">
            </div>

            <div class="col-sm-4" id="quantidadePersiana">
                <label class="form-label" for="quantidade">Quantidade:</label>
                <input type="Number" class="form-control" placeholder="Quantidade" id ="quantidadePersiana${quantidade}" aria-label="quantidadePersiana">
            </div>

            <div class="col-sm-4" id="bando">
                <label class="form-label" for="bando">Tem bandô:</label>
                <select class="form-select" aria-label="bando">
                    <option selected>Tem bandô?</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
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

        console.log(`O valor da persiana ${i} é de: R$ ${valor}`)
        valorTotal = valorTotal + valor
    }
    const roundValorTotal = +(valorTotal.toFixed(2))
    const element = document.getElementById('txtValorTotal').innerHTML=(`Valor Total: R$ ${roundValorTotal}`)
}

function deletarOrcamento (){
    var elem = document.getElementById(`persianaContainer${quantidade}`);
    elem.parentNode.removeChild(elem);

    quantidade --
}
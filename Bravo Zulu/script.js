// arrays com as especificações dos serviços.

const tp = [
	{doc:"tie", condicao:["na validade", "teste", "teste3"]},
	{doc:"Recibo de Compra e Venda", condicao:["Firmas reconhecidas", "Ato Praticado do Cartório Marítimo"]},
	{doc:"Identidade / CPF", condicao:["Na validade", "Sem Prendência na Receita Federal"]}
];

// variáveis utilizadas para contar e limitar na função de criar elementos.

var contador = 0;
var contadorDois = 0;
var limiteDois = tp[contador].condicao.length;

// inicio da função que cria os elementos HTML

function criar () {
	while (contador <= 2) {
		var div = document.getElementById("teste");
		var elDiv = document.createElement("div");
		elDiv.classList.add("item")
		div.appendChild(elDiv);
		var elTitulo = document.createElement("h2");
		elTitulo.innerText = tp[contador].doc;
		elDiv.appendChild(elTitulo);
		while (contadorDois < limiteDois) {
			var elUl = document.createElement("ul");
			var elLi = document.createElement("li");
			elLi.innerText = tp[contador].condicao[contadorDois];
			if(tp[contador].condicao[contadorDois] === undefined){ break;}
			elUl.appendChild(elLi);
			elDiv.appendChild(elUl);
			contadorDois = contadorDois + 1;
		}
		
		var buttonSim = document.createElement("button");
		buttonSim.innerText = "Sim";
		buttonSim.classList.add("btnSim");
		elDiv.appendChild(buttonSim);
		
		var buttonNao = document.createElement("button");
		buttonNao.innerText = "Não"
		buttonNao.classList.add("btnNao");
		elDiv.appendChild(buttonNao);
		
		contadorDois = 0;
		contador = contador + 1;
		console.log(contador);
		div.classList.add("active");
	};
	//funções para verificar se os documentos estão ok

	//variaveis para as funções

	var conBotao = 0;
	var limite = document.getElementsByClassName("active").length;
	var div = document.getElementsByClassName("item");
	var btnSim = document.getElementsByClassName("btnSim");
	var btnNao = document.getElementsByClassName("btnNao");




	//função sim

	function sim () {
		div[conBotao].style.backgroundColor = "green";
		conBotao +=1;
		if(conBotao < div.length){
			btnSim[conBotao].addEventListener("click", sim);
			btnNao[conBotao].addEventListener("click", nao);
		}
		
	}
	
	//função nao
	
	function nao () {
		div[conBotao].style.backgroundColor = "darkred";
		conBotao +=1;
		if (conBotao < div.length){
			btnNao[conBotao].addEventListener("click", nao);
			btnSim[conBotao].addEventListener("click", sim);
		}
	}



	// bototes

	btnSim[conBotao].addEventListener("click", sim);
	
	btnNao[conBotao].addEventListener("click", nao);
	
};


//da a ação no botao para chamar a função criar

var btn = document.getElementById("btn");
btn.addEventListener("click", criar);

	



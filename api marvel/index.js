let ts = '1646960091'; // = Math.floor(Date.now() / 1000)

const timeStamp = '1646960091';
const apiKey = "6743e1cbd20007c611988f36076f2ad0";
const md5 = "b1d69cebf11cebc9858cc290355d1993";
const limite = 20;

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=${limite}`
).then((response) => {
    return response.json();
}).then((jsonParsed) =>{
    console.log(jsonParsed);

    jsonParsed.data.results.forEach(element =>{

        const srcImage = element.thumbnail.path + "." + element.thumbnail.extension;
        const nameHero = element.name;
        let descricao = element.description;
        if (descricao.length == 0){
            descricao = ("Sem descrição")
        }
        
        
        criar(srcImage, nameHero, descricao);

    })

        
})

let criar = (srcImage, nameHero, descricao) => {

    let div = document.createElement("div");
    let img = document.createElement("img");
    let nome = document.createElement("h2");
    let description = document.createElement("p");
    let divPrincipal = document.getElementById("root");

    
    
    divPrincipal.classList.add("content")
    divPrincipal.appendChild(div);
    div.appendChild(img);
    
    img.src = srcImage;
    img.classList.add("fotoHeroi");

    div.classList.add("container");

    div.appendChild(nome);
    nome.textContent = nameHero;  
    nome.classList.add("titulo");

    div.appendChild(description)
    description.textContent = descricao;
    description.classList.add("description")


    let clicado = () =>{
        img.classList.toggle("imagemClicada");
    }

    img.addEventListener("click", clicado);

}

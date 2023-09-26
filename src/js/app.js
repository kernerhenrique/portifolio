// Typewriter function
var i = 0;
var tag = document.getElementById("text-home");
var html = document.getElementById("text-home").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 80;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text-home").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Função para atualizar o conteúdo com base no parágrafo clicado
function atualizarConteudo(paragrafo) {
  // Obtém o texto do parágrafo clicado
  var textoParagrafo = paragrafo.textContent;

  // Obtém os elementos com os IDs correspondentes
  var titulo1 = document.getElementById("titulo1");
  var data1 = document.getElementById("data1");
  var titulo2 = document.getElementById("titulo2");
  var descricao = document.getElementById("descricao");

  // Define os novos valores com base no texto do parágrafo clicado
  switch (textoParagrafo) {
    case "Marketing 365":
      titulo1.textContent = "Desenvolvimento Wordpress";
      data1.textContent = "Nov 202 - Jun 2021";
      titulo2.textContent = "Marketing 365";
      descricao.textContent =
        "Primeira empresa onde trabalhei como desenvolvedor de sites e landing pages em wordpress. Foi onde tive meu primeiro contato profissional com algo que futuramente iria me levar até o desenvolvimento Front End.";
      break;
    case "Lead Masters":
      titulo1.textContent = "Desenvolvimento Wordpress";
      data1.textContent = "Jun 2021 - Jan 2022";
      titulo2.textContent = "Lead Masters";
      descricao.textContent =
        "Empresa onde novamente tive um contato com o Wordpress, dessa vez mais aprofundado, mas onde também tinha o trabalho de desenvolver sites e landing pages. Também tive a oportunidade de conhecer o básico de edição de vídeos no Adobe Premiere e After Effects";
      break;
    case "Superticket":
      titulo1.textContent = "Análise de Antifraude";
      data1.textContent = "Mai 2022 - Abr 2023";
      titulo2.textContent = "Superticket";
      descricao.textContent =
        "Trabalho onde fugi um pouco do desenvolvimento e trabalhei um pouco com análise de antifraude por quase 1 ano. Um lugar onde pude ter uma boa evolução no meu lado profissional por ser uma empresa que estava em constante crescimento e precisava estar sempre por dentro de todas as demandas.";
      break;
    case "ArcelorMittal":
      titulo1.textContent = "Desenvolvimento Front End";
      data1.textContent = "Jun 2023 - Atual";
      titulo2.textContent = "ArcelorMittal";
      descricao.textContent =
        "Primeira oportunidade de trabalhar em uma emrpresa multinacional onde atuo como estágiário de FrontEnd com foco no Angular. Empresa onde em pouco tempo me ensionou sobre ferramentas essenciais na vida de um desenvolvedor, ferramentas que uso diariamente no meu tempo de trabalho.";
      break;
      case "(Certificados)":
        titulo1.textContent = "Certificados online";
        data1.textContent = "-";
        titulo2.textContent = "Alura";
        
        var link = document.createElement('a');
        link.href = "https://cursos.alura.com.br/user/hkvm2000/fullCertificate/fdb687f61bd3b3c8debe29c299941022";
        link.textContent = " Link";
        link.target = "_blank"
      
        var descricaoTexto = document.createTextNode("Link de todos os certificados de cursos que já completei na plataforma, visando evoluir minhas habilidades na programação Front End. Visualize todos os certificados no link a seguir.");
        
        // Adicione o link e o texto à descrição
        descricao.innerHTML = ''; // Limpe qualquer conteúdo anterior
        descricao.appendChild(descricaoTexto);
        descricao.appendChild(link);
      
        break;
      
    default:
      // Caso o texto do parágrafo não corresponda a nenhum dos casos
      break;
  }
}

// Obtém todos os elementos com classe 'link'
const links = document.querySelectorAll(".link");

// Adiciona um evento de clique a cada elemento 'link'
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove a classe 'active-place' de todos os elementos
    links.forEach((link) => {
      link.querySelector("p").classList.remove("active-place");
    });

    // Adiciona a classe 'active-place' apenas ao elemento clicado
    link.querySelector("p").classList.add("active-place");
  });
});

// Adiciona um evento de clique a todos os parágrafos
var paragrafos = document.querySelectorAll(".places p");
paragrafos.forEach(function (paragrafo) {
  paragrafo.addEventListener("click", function () {
    atualizarConteudo(paragrafo);
  });
});

//Carregar automaticamente a primeira experiência
document.addEventListener("DOMContentLoaded", function () {
  // Simular um clique no parágrafo "Marketing 365" quando a página estiver totalmente carregada
  var paragrafoMarketing365 = document.querySelector("#marketing365 p");
  if (paragrafoMarketing365) {
    paragrafoMarketing365.click();
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    // Dark Mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    // Light Mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
});

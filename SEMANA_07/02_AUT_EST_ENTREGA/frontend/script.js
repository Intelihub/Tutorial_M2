var api = "";
var id = 3;
$(document).ready(() => {
  perfil.list();
  habilidades.list();
  formacao.list();
  experiencia.list();
  realizacao.list();
});

var perfil = {
  list() {
    $.ajax({
      url: api + "/cadastrados",
      type: "GET",
      success: (data) => {
        const imageElement = document.createElement("img");
        let imageUrl;
        let descricao = "";
        data.forEach((element) => {
          id = `${element.id_pessoa}`;
          imageUrl = `${element.foto}`;
          descricao += " " + `${element.descricao}`;
        });
        imageElement.src = imageUrl;
        const container = document.getElementById("logo");
        container.appendChild(imageElement);
        document.getElementById("descricao").innerHTML += descricao;
      },
    });
  },
};

var habilidades = {
  list() {
    $.ajax({
      url: api + "/habilidades?id_pessoa=" + id,
      type: "GET",
      success: (data) => {
        let habilidades = data;
        let hab = "";
        let int = "";
        habilidades.map(function (habilidades) {
          hab += "<br><h3>" + `${habilidades.nome}` + "</h3>";
          int = `${habilidades.qualidade}`;
        });
        const tag = document.getElementById("stars"); // Retrieve the tag element
        document.getElementById("habilidades").innerHTML += hab;
        const content = "<img src='star.png' style='margin: 0 0;'>";
        let multipliedContent = ""; // Variable to store the multiplied content
        const separator = " ";
        for (let i = 0; i < int; i++) {
          multipliedContent += content + separator; // Concatenate the tag's inner HTML content to the multipliedContent variable
        }
        tag.innerHTML = multipliedContent;
      },
    });
  },
};

var formacao = {
  list() {
    $.ajax({
      url: api + "/formacao?id_pessoa=" + id,
      type: "GET",
      success: (data) => {
        console.log("teste");
        let formacao = data;
        let forms = "";
        formacao.map(function (formacao) {
          forms +=
            "<br><h3>" +
            `${formacao.nome_curso}` +
            "</h3> " +
            `${formacao.ano_inicio}` +
            " - " +
            `${formacao.ano_fim}` +
            "<br><p>" +
            `${formacao.descricao}` +
            "</p>";
        });
        console.log(forms);
        document.getElementById("formacao").innerHTML += forms;
      },
    });
  },
};

var experiencia = {
  list() {
    $.ajax({
      url: api + "/experiencia?id_pessoa=" + id,
      type: "GET",
      success: (data) => {
        let experiencia = data;
        let exp = "";
        experiencia.map(function (experiencia) {
          exp +=
            "<br><h3>" +
            `${experiencia.cargo}` +
            "</h3> " +
            `${experiencia.nome_empresa}` +
            " " +
            `${experiencia.ano_inicio}` +
            " - "; //+ `${formacao.ano_fim}` +  +"<br><p>" + `${experiencia.descricao}` +"</p>" ;
        });
        console.log(exp);
        document.getElementById("experiencia").innerHTML += exp;
      },
    });
  },
};

var realizacao = {
  list() {
    $.ajax({
      url: api + "/realizacao?id_pessoa=" + id,
      type: "GET",
      success: (data) => {
        let realizacao = data;
        let rel = "";
        realizacao.map(function (realizacao) {
          rel +=
            "<br><h3>" +
            `${realizacao.titulo}` +
            "</h3>" +
            `${realizacao.ano}` +
            "<br> <p>" +
            `${realizacao.descricao}` +
            "</p>";
        });
        console.log(rel);
        document.getElementById("realizacao").innerHTML += rel;
      },
    });
  },
};

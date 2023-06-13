function rodar(){
    $("#darkmode").click(()=>{
        $("body").css("background-color","#3f3434")
        $("h1").css("color","#b6e6e6")
        $("h2").css("color","#b6e6e6")
        $("h3").css("color","#b6e6e6")
        $("p").css("color","#b6e6e6")
        $(".dback").css("background-color","#427abd")
    })
    $("#whitemode").click(()=>{
        $("body").css("background-color","azure")
        $("h1").css("color","darkslategrey")
        $("h2").css("color","darkslategrey")
        $("h3").css("color","darkslategrey")
        $("p").css("color","darkslategrey")
        $(".dback").css("background-color","aquamarine")
    })
    $("#EsconInfo").click(()=>{
        $(".t").toggle()
        var botao = $("#EsconInfo")
        if(botao.text() == "Esconder Informação"){
            botao.text("Mostrar Informação")
        }else{
            botao.text("Esconder Informação")
        }
    })
}

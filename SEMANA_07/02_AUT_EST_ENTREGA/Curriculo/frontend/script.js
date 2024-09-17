function darkmode() {
      $("body").css("background-color", "#3d4a55");
      $("h2").css("color", "aliceblue");
      $("h4").css("color", "aliceblue");
      $("p").css("color", "aliceblue");
      $("hr").css("border-color", "#03232c");
  
      $(".painted_container").css("background-color", "#004d64");
      $(".painted_container").css("border-color", "#03232c");
  
      $(".fixed_area").css("background-color", "#004d64");
      $(".fixed_area").css("border-color", "#03232c");
}

function whitemode() {
    $("body").css("background-color", "aliceblue");
    $("h2").css("color", "#1f1d1d");
    $("h4").css("color", "#1f1d1d");
    $("p").css("color", "#1f1d1d");
    $("hr").css("border-color", "#00C2FF");

    $(".painted_container").css("background-color", "#78DFFF");
    $(".painted_container").css("border-color", "#00C2FF");

    $(".fixed_area").css("background-color", "#78DFFF");
    $(".fixed_area").css("border-color", "#00C2FF");
}
  
function rodar() {
    $("#dark_and_white_mode").click(function() {
      if ($("#dark_and_white_mode").hasClass('darkmode')) {

        darkmode();
        $("#dark_and_white_mode").css('background-color','aliceblue')
        $("#dark_and_white_mode").css('color',"#1f1d1d")
        $("#dark_and_white_mode").text('White Mode')

        $("#dark_and_white_mode").removeClass('darkmode')
        $("#dark_and_white_mode").addClass('whitemode')

      } else if ($("#dark_and_white_mode").hasClass('whitemode')) {

        whitemode();
        $("#dark_and_white_mode").css('background-color','#5A5757')
        $("#dark_and_white_mode").css('color',"aliceblue")
        $("#dark_and_white_mode").text('Dark Mode')

        $("#dark_and_white_mode").removeClass('whitemode')
        $("#dark_and_white_mode").addClass('darkmode')
      }
    });
}

function rodar2() {
  $('#button_update').click(function() {
    var nome = prompt('Digite o novo nome:');
    if (nome) {
        if (nome.trim() != '') {
            $.ajax({
                url: '/userupdate',
                type: 'POST',
                data: {nome:nome},
  
              }).done(function () {
                $('#nome').text(nome)
                alert("funcionou")
              }).fail(function (msg) {
                  //console.log('FAIL');
              }).always(function (msg) {
                  //console.log('ALWAYS');
              }); 
      }
    }
  })
}
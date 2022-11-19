api = 'http://127.0.0.1:3071'

$(document).ready(() => {
    users.list();
});

var users = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + `${element.nome} - ${element.email} - ${element.telefone} ` + '</div>';
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.nome + '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var user = {

    insert() {
        var nome = prompt('Digite o nome:');
        var email = prompt('Digite o email:');
        var telefone = prompt('Digite o telefone:');
        console.log(`${nome} - ${email} - ${telefone}`);
        if (nome && email && telefone) {
            if (nome.trim() != '' && email.trim() != '' && telefone.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {nome: nome, email: email, telefone: telefone},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(userId, oldTitle) {

        var nome = prompt('Digite o novo nome:', oldTitle);
        if (nome) {
            if (nome.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {nome: nome, userId: userId},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(userId) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/userdelete',
                data: {userId: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}
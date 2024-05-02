$(document).ready(function() {
    function enviarDatos(formData){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            dataType: 'json',
            data: formData,
    
            success: function(response) {
                console.log('Respues del servidor: ', response);
            },
    
            error: function(xhr, status, error) {
                console.log('Error al enviar la solicitud: ', error);
            }
        })
    }

    $('#submit-form').click(function(){
        let formData = {
            username: $('#username').val(),
            password: $('#password').val()
        }
        console.log('Data Recopilada');
        enviarDatos(formData);
    })
    console.log('Modulo OK');
})
//Comando para establecer la comunicacion
var socket = io();

var label = $('#lblNuevoTicket');

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual', function(ultimoTicket) {
    label.text(ultimoTicket.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});
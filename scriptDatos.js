function tomarDatosJugador() {
  var nick = $("#nickname").val();
  var edad_jugador = $("#edad").val();
  var sexo = $("#genero").val();
  var puntaje_jugador = $("#puntos").val();
  var respuesta = $("#respuesta").val();

  Jugador = {
    nickname: nick,
    edad: edad_jugador,
    genero: sexo
    //puntaje: puntaje_jugador
  }
  dataToSend = JSON.stringify(Jugador);
  return dataToSend;
};

function tomarDatosPregunta() {
  var id_pregunta = $("#id_pregunta").val();
  var categoria_pregunta = $("#categoria").val();
  var enunciado_pregunta = $("#enunciado").val();
  var opciones_respuesta = $("#opciones_respuesta").val();

  Pregunta = {
    id: id_pregunta,
    categoria: categoria_pregunta,
    enunciado: enunciado_pregunta,
    opcionesRespuesta: opciones_respuesta
  }
  dataToSend = JSON.stringify(Pregunta);
  return dataToSend;
};

function ocultarElemntos() {
  document.getElementById("juego").style.display = "inline";
  document.getElementById("datos").style.display = "none";
};

function vistaJugador(){
  document.getElementById("nombrejugador").innerText = $("#nickname").val();
  document.getElementById("puntjugador").innerText = "100";
  document.getElementById("respjugador").innerText = "Llevas 10 respuestas correctas";
};


$(document).ready(function () {
  $('#enviar').click(function () {             
    dataToSend = tomarDatosJugador();
    vistaJugador()
    alert(dataToSend)
    $.ajax({
      url: "otro servelet",
      contentType: "application/json; charset=UTF-8",
      dataType: "JSON",
      type: "POST",
      data: dataToSend,
      success: function (result) {
        alert("Registro Exitoso");
      },
    });
  });
});

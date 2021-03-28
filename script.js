$(document).ready(function () {
  var arrselecion = '';
  (function () {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      if (actualDeg >= 0 && actualDeg <= 90) {
        arrselecion = "Historia"
      } else if (actualDeg >= 91 && actualDeg <= 180) {
        arrselecion = "Actualidad"
      } else if (actualDeg >= 181 && actualDeg <= 270) {
        arrselecion = "Personal"
      } else {
        arrselecion = "Deportes"
      }
      toBackend()
    });
  })();

  function toBackend() {//Otra funcion              
    //dataToSend = tomarDatosJugador();
    alert(arrselecion)
    dataToSend = JSON.stringify(arrselecion);
    $.ajax({
      url: "aqui va el servelet",
      contentType: "application/json; charset=UTF-8",
      dataType: "JSON",
      type: "POST",
      data: dataToSend,
      success: function (result) {
        alert("Registro Exitoso");
      },
    });
  };
});
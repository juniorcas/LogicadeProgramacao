function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    var horas = hor + ":" + min + ":" + seg;
    document.getElementById("rel").value = horas;
}

var tempo = setInterval(relogio, 10000);
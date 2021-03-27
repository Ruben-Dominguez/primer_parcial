
let horas_inicio = [];

const cambiarImg = (n) => {
    let mesa = document.getElementById("mesa"+n);
    let hora_nueva = new Date();
    let hora_inicio_id = document.getElementById("hora_inicio"+n);
    let hora_final_id = document.getElementById("hora_final"+n);
    
    if (mesa.src.match('mesa_billar_off.jpg')){
        
        mesa.src = "mesa_billar_on.jpg";
        hora_inicio_id.innerHTML = "Hora de Inicio: " + formato(hora_nueva);
        hora_final_id.innerHTML = "Hora de Final: " + "en uso";
        horas_inicio[n] = hora_nueva;
        actualizar(n);

    } else {
        mesa.src = "mesa_billar_off.jpg";
        hora_final_id.innerHTML = "Hora de Final: " + formato(hora_nueva);
        let fecha_nueva = new Date();
        let costo = 50*(fecha_nueva.getTime() - horas_inicio[n].getTime())/1000/60/60;
        document.getElementById("total"+n).innerHTML = "Total: $" + costo.toFixed(2);

        
    }
}

const formato = (hora) => {
    let final = "";
    final = final + (hora.getHours() < 10 ? "0" + hora.getHours() : hora.getHours());
    final = final + ":";
    final = final + (hora.getMinutes() < 10 ? "0" + hora.getMinutes() : hora.getMinutes());

    return final;

}

function actualizar(id) {

    let fecha_nueva = new Date();
    
    let costo = 50*(fecha_nueva.getTime() - horas_inicio[id].getTime())/1000/60/60;

    document.getElementById("total"+id).innerHTML = "Total: $" + costo.toFixed(2);

    setTimeout( () => {
        if(document.getElementById("mesa"+id).src.match("mesa_billar_on")){
            actualizar(id);
        }

    }, 1000);

}


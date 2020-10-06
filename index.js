window.onload = async () => {
    const datos = await fetch(
        "https://www.datos.gov.co/resource/gt2j-8ykr.json",
        {
            method: "GET",
        }
    );
    const datosConvertidos = await datos.json();
    let str = "";
    for (let i = 0; i < 25; i++) {
        let el = datosConvertidos[i];
        str += "<tr>";
        str += "<td>" + el.fecha_de_notificaci_n + "</td>";
        str += "<td>" + el.ciudad_de_ubicaci_n + "</td>";
        str += "<td>" + el.atenci_n + "</td>";
        str += "<td>" + el.edad + "</td>";
        str += "<td>" + el.sexo + "</td>";
        str += "<td>" + el.tipo + "</td>";
        str += "<td>" + el.estado + "</td>";
        str += "<td>" + el.ubicaci_n_recuperado + "</td>";
        str += "</tr>";
    }
    document.getElementById("body").innerHTML = str;
};

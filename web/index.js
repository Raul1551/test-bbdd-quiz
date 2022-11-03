var arrayData = new Array();
var archivoTxt = new XMLHttpRequest();
var fileRoute = 'index.txt';

archivoTxt.open("GET", fileRoute, false);
archivoTxt.send(null)

var txt = archivoTxt.responseText;

for (var i = 0; i < txt.length; i++){
    arrayData.push(txt[i]);
};

arrayData.forEach(function(data){
    console.log(data);
});



function elQueMasAparece() {

    let mapeo = {};
    let mas_frecuente = "";
    let valor_mayor = 0;

    if (typeof arrayData === "string") {
        arrayData = arrayData.split(" ");
    }

    for (let elemento of arrayData) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        } else {
            mapeo[elemento] = 1;
        }

    };

    for (let elemento in mapeo) {
        if (mapeo[elemento] > valor_mayor) {
            valor_mayor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }

    return {
        "mas_frecuente": mas_frecuente,
        "valor_mayor": valor_mayor
    };
};

console.log(elQueMasAparece());



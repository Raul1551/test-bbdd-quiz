var resultadoForm = JSON.parse(sessionStorage.getItem("usuario"));
var resultado4 = JSON.parse(sessionStorage.getItem("pregunta4"));
var resultado7 = JSON.parse(sessionStorage.getItem("pregunta7"));
var resultado8 = JSON.parse(sessionStorage.getItem("pregunta8"));
var resultado10 = JSON.parse(sessionStorage.getItem("pregunta10"));
var resultado11 = JSON.parse(sessionStorage.getItem("pregunta11"));
var resultado12 = JSON.parse(sessionStorage.getItem("pregunta12"));
var resultado13 = JSON.parse(sessionStorage.getItem("pregunta13"));
var resultado14 = JSON.parse(sessionStorage.getItem("pregunta14"));



function elQueMasAparece() {

    const valorDesdeLS = document.getElementById('valorDesdeLS');

    const imgAstroturismo = document.createElement('img');
    imgAstroturismo.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/astroturismo_z8srga.jpg';
    const imgGastronomico = document.createElement('img');
    imgGastronomico.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176875/quiz/peril-viajero/gastronomico_wtbb2r.jpg';
    const imgHistorico = document.createElement('img');
    imgHistorico.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176875/quiz/peril-viajero/historico_wwnpob.jpg';
    const imgWellness = document.createElement('img');
    imgWellness.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/wellness_mzds4f.jpg';
    const imgOutdoors = document.createElement('img');
    imgOutdoors.src = 'https://res.cloudinary.com/udestinations/image/upload/v1666176876/quiz/peril-viajero/aventura_mbmpku.jpg';



    const linkAstro = "https://udestinations.es/su-perfil-viajero-es-astroturismo";
    const linkGastro = "https://udestinations.es/su-perfil-viajero-es-gastronomico";
    const linkHisto = "https://udestinations.es/su-perfil-viajero-es-historico-cultural";
    const linkOut = "https://udestinations.es/tu-perfil-viajero-es-outdoors-aventura";
    const linkWell = "https://udestinations.es/su-perfil-viajero-es-wellnex-relax";

    const elementAstro = document.createElement('a');
    const elementGastro = document.createElement('a');
    const elementHisto = document.createElement('a');
    const elementWell = document.createElement('a');
    const elementOut = document.createElement('a');

    // Propiedades del objeto datos reconvertido a Objeto
    const nombre = resultadoForm.name;
    const apellido = resultadoForm.surname;
    const email = resultadoForm.email;
    const telefono = resultadoForm.phone;

    // ***************************************************

    var arrayTotal = [...resultado4, ...resultado7, ...resultado8, ...resultado10, ...resultado11, ...resultado12, ...resultado13, ...resultado14];
    var arrayOrder = arrayTotal.sort();
    // console.log(arrayOrder);
    // console.log(resultadoForm);

    var mapeo = {};
    var mas_frecuente = "";
    var valor_mayor = 0;

    if (typeof arrayOrder === "string") {
        arrayOrder = arrayOrder.split(" ");
    }

    for (let elemento of arrayOrder) {
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


    elementAstro.setAttribute("href", linkAstro);
    elementAstro.innerHTML = "« Descubre más detalles » ";

    elementGastro.setAttribute("href", linkGastro);
    elementGastro.innerHTML = "« Descubre más detalles » ";

    elementHisto.setAttribute("href", linkHisto);
    elementHisto.innerHTML = "« Descubre más detalles » ";

    elementWell.setAttribute("href", linkWell);
    elementWell.innerHTML = "« Descubre más detalles » ";

    elementOut.setAttribute("href", linkOut);
    elementOut.innerHTML = "« Descubre más detalles » ";

    if (mas_frecuente === 'astroturismo') {
        /*window.location.href = linkAstro;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgAstroturismo)
        document.body.appendChild(elementAstro)
    } else if (mas_frecuente === 'gastronomico') {
        /*window.location.href = linkGastro;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgGastronomico)
        document.body.appendChild(elementGastro)
    } else if (mas_frecuente === 'historico') {
        /*window.location.href = linkHisto;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgHistorico)
        document.body.appendChild(elementHisto)
    } else if (mas_frecuente === 'wellness') {
        /*window.location.href = linkWell;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgWellness)
        document.body.appendChild(elementWell)
    } else if (mas_frecuente === 'outdoors') {
        /*window.location.href = linkOut;*/
        valorDesdeLS.innerHTML = mas_frecuente;
        document.querySelector('.container').appendChild(imgOutdoors)
        document.body.appendChild(elementOut)
    }

    const result = [{
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
    },
    {
        perfil: mas_frecuente
    }];

    const resultJson = JSON.stringify(result);

    fetch('http://localhost:3000/create', {
        method: 'POST',
        body: resultJson
    });

    /* console.log(nombre, apellido, email, telefono);
    console.log(mas_frecuente); */
    console.log(resultJson);
    
};



function ocultar() {
    var elemento = document.getElementById('button-final');
    elemento.style.display = 'none';
}

var button = document.getElementById('button-final');
button.addEventListener('click', () => {
    elQueMasAparece();

});




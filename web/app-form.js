// Función que captura datos desde un cuadro de texto de formulario
function catching() {

    const datos = {
        name: document.getElementById("get-name").value,
        surname: document.getElementById("get-surname").value,
        email: document.getElementById("get-mail").value,
        phone: document.getElementById("get-phone").value,
        isChecked: document.getElementById('consent').checked
    };

    let datosJson = JSON.stringify(datos);
    sessionStorage.setItem("usuario", datosJson);


    if (datos.name == "") {
        alert("El nombre es obligatorio");
        document.getElementById("get-name").focus();
    } else {
        if (datos.surname == "") {
            alert("El apellido es obligatorio");
            document.getElementById("get-surname").focus();
        } else {
            if (datos.email == "") {
                alert("El correo electrónico es obligatorio");
                document.getElementById("get-mail").focus();
            } else {
                if (datos.phone == "") {
                    alert("El número de teléfono es obligatorio");
                    document.getElementById("get-phone").focus();
                } else {
                    if (datos.isChecked == false) {
                        alert('Debes marcar la casilla de consentimiento');
                    } else {
                        window.location.href = "index-pregunta1.html";
                    }

                }

            }

        }
    }

};



document.getElementById('disc-button').addEventListener('click', () => {
    catching();
});
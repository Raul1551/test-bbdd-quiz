function disableSending() {
    if ($('input[name="valores[]"]:checked').length > 0) {
        // Al menos hay un checkbox marcado, habilitar botón
        $('.boton-siguiente').prop('disabled', false);
    } else {
        // No hay checkbox marcado, deshabilitar botón
        $('.boton-siguiente').prop('disabled', true);
    };
};
function Solopositivos(value) {
    var valor = $(value).val();
    if (!isNaN(valor) && valor >= 0) {
        $(value).val(valor);
    } else {
        $(value).val(0);
    }
}
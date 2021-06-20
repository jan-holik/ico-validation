//Validation function in JavaScript for czech IČO (company number)

function validICO(ico) {
    var icoFormat = /^\d{8}$/;
    if (!icoFormat.test(ico)) {
        return false;
    }
    var total = 0;
    for (i = 0; i < 7; i++) {
        total += (8 - i) * ico.charAt(i);
    };
    var modulo = total % 11;
    var checkDigit;
    switch (modulo) {
        case 0:
        case 10:
            checkDigit = 1;
            break;
        case 1:
            checkDigit = 0;
            break;
        default:
            checkDigit = 11 - modulo;
    };
    return Number(ico.charAt(7)) === checkDigit;
};

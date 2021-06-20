//Validation function in JavaScript for czech bank account

function validAccount(account) {
    var providerNo = ["0100", "0300", "0600", "0710", "0800", "2010", "2020", "2030", "2060", "2070", "2100", "2200", "2220", "2240", "2250", "2260", "2275", "2600", "2700", "3030", "3050", "3060", "3500", "4000", "4300", "5500", "5800", "6000", "6100", "6200", "6210", "6300", "6700", "6800", "7910", "7940", "7950", "7960", "7970", "7980", "7990", "8030", "8040", "8060", "8090", "8150", "8190", "8198", "8199", "8200", "8215", "8220", "8230", "8240", "8250", "8255", "8260", "8265", "8270", "8272", "8280", "8283", "8292", "8293", "8294"];
    var accountFormat = /^(([0-9]{1,6})-)?([0-9]{2,10})\/([0-9]{4})$/;
    if (!accountFormat.test(account)) {
        return false;
    };
    var parts = account.split(/[-/]/g);
    var providerExist = false;
    for (i = 0; i < providerNo.length; i++) {
        if (parts[parts.length - 1] === providerNo[i]) {
            providerExist = true;
            break;
        };
    };
    if (!providerExist) {
        return false;
    };
    function partValid(part) {
        var strength = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
        var total = 0;
        for (i = 0; i < part.length; i++) {
            total += strength[strength.length - 1 - i] * part.charAt(part.length - 1 - i);
        }
        return total % 11 === 0;
    }  
    return parts.length > 2 ? partValid(parts[1]) && partValid(parts[0])
        : partValid(parts[0]) ? true
        : false;
};

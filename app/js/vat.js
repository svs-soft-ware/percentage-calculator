'use strict';

var vatCalc = (function() {
    var res = {'tax_amount' : null, 'gross_price' : null};
    function zeroPad(n) {
        var dec = (n.toString()).split(".")[1];
        n = (dec) ? dec : n;
        return (n < 10 ? '0' : '');
    }    
    function calcVat(net_price, tax_amount) {
        return (net_price * tax_amount) / 100;
    }
    function getVat() {
        var net_price = $('#net_price').val(),
                vat = $('#vat').val(),
                gross_price, tax_amount;

        if (net_price === '' || vat === '') {
            return JSON.stringify(res);
        }

        tax_amount = calcVat(net_price, vat);
        tax_amount = tax_amount.toString() + zeroPad(tax_amount);
        
        gross_price = parseFloat(net_price) + parseFloat(tax_amount);
        gross_price = gross_price.toString() + zeroPad(gross_price);
        res = {'tax_amount' : tax_amount, 'gross_price' : gross_price};        
        return JSON.stringify(res);
    }
    function validateExecuteVat() {
        var validator = $("#percentage_calculator").validate();
        validator.form();
        return getVat();
    }
    return {
        validateExecuteVat: function() {
            return validateExecuteVat();
        }
    };
}());
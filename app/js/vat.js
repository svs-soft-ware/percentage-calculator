'use strict';

var vatCalc = (function() {
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
            return;
        }

        tax_amount = calcVat(net_price, vat);
        tax_amount = tax_amount.toString() + zeroPad(tax_amount);
        
        gross_price = parseFloat(net_price) + parseFloat(tax_amount);
        gross_price = gross_price.toString() + zeroPad(gross_price);
        
        $('#tax_amount').val(tax_amount);
        $('#gross_price').val(gross_price);
        return false;
    }
    function initVat() {
        getVat();
    }
    function validateExecuteVat() {
        var validator = $("#vat_calculator").validate();
        validator.form();
        getVat();
    }
    return {
        initVat: function() {
            initVat();
        },
        validateExecuteVat: function() {
            validateExecuteVat();
        }
    };
}());


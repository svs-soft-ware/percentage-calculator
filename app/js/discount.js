'use strict';

var discountCalc = (function() {
    function zeroPad(n) {
        var dec = (n.toString()).split(".")[1];
        n = (dec) ? dec : n;
        return (n < 10 ? '0' : '');
    }
    function validateDecimal(value) {
        var RE = /^\d*(\.\d{1})?\d{0,1}$/;
        if (RE.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    function calcDiscount(of, percentage) {
        return (of * percentage) / 100;
    }
    function getDiscountPrice() {
        var percentage = $('#percentage').val(),
                of = $('#of').val(),
                result, disc_val;

        if (percentage === '' || of === '') {
            return;
        }

        disc_val = calcDiscount(of, percentage);
        disc_val = disc_val.toString() + zeroPad(disc_val);
        
        result = (of - disc_val);
        result = result.toString() + zeroPad(result);
        
        $('#discount_val').val(disc_val);
        $('#result').val(result);
        return false;
    }
    function init() {
        getDiscountPrice();
    }
    function validateExecuteDiscount() {
        var validator = $("#percentage_calculator").validate();
        validator.form();
        getDiscountPrice();
    }
    return {
        init: function() {
            init();
        },
        validateExecuteDiscount: function() {
            validateExecuteDiscount();
        }
    };
}());


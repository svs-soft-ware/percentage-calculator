'use strict';

var percentage = (function() {
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

        var disc_val = calcDiscount(of, percentage);
        result = of - disc_val;
        $('#discount_val').val(disc_val);
        $('#result').val(result);
        return false;
    }
    function init() {
        getDiscountPrice();
    }
    function validateExecute() {
        var validator = $("#percentage_calculator").validate();
        validator.form();
        getDiscountPrice();
    }
    return {
        init: function() {
            init();
        },
        validateExecute: function() {
            validateExecute();
        }
    };
}());


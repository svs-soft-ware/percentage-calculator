'use strict';

var simpleCalc = (function() {
    var res = {'result': null};
    function calcPercentage(of, percentage) {
        return (of * percentage) / 100;
    }
    function getResult() {
        var percentage = $('#percentage').val(),
                of = $('#original').val();

        if (percentage === '' || of === '') {
            return JSON.stringify(res);
        }

        res = {'result': calcPercentage(of, percentage)};
        return JSON.stringify(res);
    }
    return {
        validateExecute: function() {
            var validator = $("#percentage_calculator").validate();
            validator.form();
            return getResult();
        }
    };
}());


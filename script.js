/*
	WEB 303 Assignment 1 - jQuery
	{Sam Sondhi}
*/
$(document).ready(function() {
    // Event handler for change or keyup event on salary and percent fields
    $('#salary, #percent').on('change keyup', function() {
        // Get values from input fields
        var salary = parseFloat($('#salary').val());
        var percent = parseFloat($('#percent').val());

        // Calculate the amount to spend on tech
        var amount = (salary * percent / 100).toFixed(2);

        // Insert the calculated amount into the #amount span element
        $('#amount').text(amount);
    });
});


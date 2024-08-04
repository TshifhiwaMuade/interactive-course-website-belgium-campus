document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const accuracyCheckbox = document.getElementById('accuracy-checkbox');
    const fullname = document.getElementById('fullnames');
    const course = document.querySelector('#course');
    const campus = document.querySelector('#campus');
    const startdate = document.querySelector('#startDate');
    const output = document.getElementById('betterbe');

    function checkTerms() {
        return document.querySelector('input[name="terms"][value="yes"]').checked;
    }

    function validateForm(event) {
        event.preventDefault(); 
        let isValid = true;
        let message = "";

        if (!checkTerms()) {
            isValid = false;
            message += "You must agree to the terms and conditions.\n";
        }

        if (!accuracyCheckbox.checked) {
            isValid = false;
            message += "You must confirm that the information provided is accurate and complete.\n";
        }

        if (!isValid) {
            alert(message);
        } 
        else {
            // If form is valid, display the confirmation message
            output.innerHTML = `Hello and welcome ${fullname.value}, Belgium Campus Itversity thanks you for your form submission. <br> You have selected ${course.value}, that will take place at the campus of your choosing being: ${campus.value} starting on: ${startdate.value} <br> We hope to see you soon🧑🏽‍💻🧑🏽‍💻🧑🏽‍💻`;
        }
    }

    form.addEventListener('submit', validateForm);
});
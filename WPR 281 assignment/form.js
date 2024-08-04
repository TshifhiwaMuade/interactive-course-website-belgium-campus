

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const termsRadios = document.querySelectorAll('input[name="terms"]');
    const accuracyCheckbox = document.getElementById('accuracy-checkbox');
    const submitButton = document.querySelector('button[type="submit"]');

    function checkTerms() {
        let termsAgreed = false;
        termsRadios.forEach(radio => {
            if (radio.checked && radio.value === 'yes') {
                termsAgreed = true;
            }
        });
        return termsAgreed;
    }

    function checkAccuracy() {
        return accuracyCheckbox.checked;
    }

    function validateForm(event) {
        let isValid = true;
        let message = "";

        if (!checkTerms()) {
            isValid = false;
            message += "You must agree to the terms and conditions.\n";
        }

        if (!checkAccuracy()) {
            isValid = false;
            message += "You must confirm that the information provided is accurate and complete.\n";
        }

        if (!isValid) {
            event.preventDefault();
            alert(message);
        }
    }

    submitButton.addEventListener('click', validateForm);
    form.addEventListener('submit', validateForm);
});

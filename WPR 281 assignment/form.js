document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const accuracyCheckbox = document.getElementById('accuracy-checkbox');
    const fullname = document.getElementById('fullnames');
    const course = document.getElementById('course');
    const campus = document.getElementById('campus');
    const startdate = document.getElementById('startDate');
    const output = document.getElementById('betterbe');
    const Date_of_birth = document.getElementById('DOB');
    const Gender = document.getElementById('Gender');
    const Nationality = document.getElementById('Natinality'); 
    const Email_Address = document.getElementById('email');
    const Phone_Numer = document.getElementById('PhoneNumber');
    const Residential_Address = document.getElementById('ResAddress');
    const Highest_Qualification_Achieved = document.getElementById('HQA'); 
    const Previous_Institution = document.getElementById('lastinstitution');
    const Year_Of_Graduation = document.getElementById('grad');
    const Employment_status = document.querySelector('input[name="Employementstat"]:checked');
    const Place_Of_Employment = document.getElementById('employed');
    const Special_Requirements = document.querySelector('input[name="special"]:checked');

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
        } else {
            // If form is valid, display the confirmation message
            const selectedStartDate = new Date(startdate.value);
            const countdown = getCountdown(selectedStartDate);
            
            output.innerHTML = `Hello and welcome ${fullname.value}, Belgium Campus Itversity thanks you for your form submission. <br> You have selected ${course.value}, that will take place at the campus of your choosing being: ${campus.value} starting on: ${startdate.value} <br> ${countdown} <br> We hope to see you soon🧑🏽‍💻🧑🏽‍💻🧑🏽‍💻`;

            localStorage.setItem('Name', fullname.value);
            localStorage.setItem('Date of Birth', Date_of_birth ? Date_of_birth.value : '');
            localStorage.setItem('Gender', Gender ? Gender.value : '');
            localStorage.setItem('Nationality', Nationality ? Nationality.value : '');
            localStorage.setItem('Email_Address', Email_Address ? Email_Address.value : '');
            localStorage.setItem('Phone_Numer', Phone_Numer ? Phone_Numer.value : '');
            localStorage.setItem('Residential_Address', Residential_Address ? Residential_Address.value : '');
            localStorage.setItem('Highest_Qualification_Achieved', Highest_Qualification_Achieved ? Highest_Qualification_Achieved.value : '');
            localStorage.setItem('Previous_Institution', Previous_Institution ? Previous_Institution.value : '');
            localStorage.setItem('Year_Of_Graduation', Year_Of_Graduation ? Year_Of_Graduation.value : '');
            localStorage.setItem('course', course ? course.value : '');
            localStorage.setItem('campus', campus ? campus.value : '');
            localStorage.setItem('startdate', startdate ? startdate.value : '');
            localStorage.setItem('Employment_status', Employment_status ? Employment_status.value : '');
            localStorage.setItem('Place_Of_Employment', Place_Of_Employment ? Place_Of_Employment.value : '');
            localStorage.setItem('Special_Requirements', Special_Requirements ? Special_Requirements.value : '');
        }
    }

    function getCountdown(startDate) {
        const today = new Date().getTime();
        const startDateTime = startDate.getTime();
        const timeLeft = startDateTime - today;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            return `Time left until the course starts: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
        } else {
            return `The course has already started.`;
        }
    }

    form.addEventListener('submit', validateForm);
});

const courses = [
    {
        title: "Higher Certificate in Information technology",
        code: "HIT001",
        duration: "1 year",
        modules: ["Module 1", "Module 2", "Module 3"],
        startDate: "2024-09-01"
    },
    {
        title: "Diploma in Information Technology",
        code: "DIT001",
        duration: "3 years",
        modules: ["Module 1", "Module 2", "Module 3"],
        startDate: "2024-10-01"
    },
    {
        title: "Bachelor of Information Technology",
        code: "BIT001",
        duration: "3 years",
        modules: ["Module 1", "Module 2", "Module 3"],
        startDate: "2024-10-01"
    },
    {
        title: "Bachelor of Computing",
        code: "DP001",
        duration: "4 years",
        modules: ["Module 1", "Module 2", "Module 3"],
        startDate: "2024-10-01"
    }
];

document.addEventListener('DOMContentLoaded', function() {
   
    displayCourses(courses);
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = courses.filter(course => course.title.toLowerCase().includes(query));
    displayCourses(results);
});

function displayCourses(courses) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card col-md-6';
        courseCard.innerHTML = `
            <div class="card bg-light mb-4">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p><strong>Code:</strong> ${course.code}</p>
                    <p><strong>Duration:</strong> ${course.duration}</p>
                    <div class="card-info">
                        <p><strong>Modules:</strong> ${course.modules.join(', ')}</p>
                        <p><strong>Start Date:</strong> ${course.startDate}</p>
                    </div>
                </div>
            </div>
        `;
        courseCard.querySelector('.card-title').addEventListener('click', function() {
            displayCourseDetails(course);
        });
        container.appendChild(courseCard);
    });
}

function displayCourseDetails(course) {
    const container = document.getElementById('course-content');
    container.innerHTML = `
        <h2>${course.title}</h2>
        <p><strong>Code:</strong> ${course.code}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <h3>Modules</h3>
        <ul id="modules-list">${course.modules.map(module => `<li>${module}</li>`).join('')}</ul>
        <h3>Lecturers</h3>
        <ul>${course.lecturers ? course.lecturers.map(lecturer => `<li>${lecturer}</li>`).join('') : ''}</ul>
        <h3>Venues</h3>
        <ul>${course.venues ? course.venues.map(venue => `<li>${venue}</li>`).join('') : ''}</ul>
        <h3>Module Video</h3>
        <iframe width="560" height="315" src="${course.videoLink ? course.videoLink : ''}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button id="print-button" class="btn btn-secondary mt-3">Print Course</button>
        <button id="enroll-button" class="btn btn-primary mt-3">Enroll</button>
    `;

    document.getElementById('print-button').addEventListener('click', function() {
        window.print();
    });

    document.getElementById('enroll-button').addEventListener('click', function() {
        showCountdown(course.title, course.startDate);
    });

    const modulesList = document.getElementById('modules-list');
    modulesList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
            updateCompletedModules();
        }
    });
}

function updateCompletedModules() {
    const completedModules = Array.from(document.querySelectorAll('.completed')).map(li => li.textContent);
    let completedSection = document.getElementById('completed-modules');
    if (!completedSection) {
        completedSection = document.createElement('section');
        completedSection.id = 'completed-modules';
        completedSection.innerHTML = '<h3>Completed Modules</h3><ul></ul>';
        document.body.appendChild(completedSection);
    }
    document.querySelector('#completed-modules ul').innerHTML = completedModules.map(module => `<li>${module}</li>`).join('');
}

function showCountdown(courseTitle, startDate) {
    const container = document.getElementById('course-content');
    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown-timer';
    container.appendChild(countdownElement);
    
    const targetDate = new Date(startDate).getTime();
    
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Course has started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Course starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

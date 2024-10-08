const courses = [
    {
        title: "Higher Certificate in Information technology",
        code: "HIT#51",
        duration: "1 year",
        modules: ["Innovation and Leadership 201", "Programming 252", "Database Development 251"],
        
        link: "Higher Certificate.html"
    },
    {
        title: "Diploma in Information Technology",
        code: "DIT#61",
        duration: "2 years",
        modules: ["Business Communication 161", "Database Functionality 161", "Programming 261"],
        
        link: "DIT.html"
    },
    {
        title: "Bachelor of Information Technology",
        code: "BIT#71",
        duration: "3 years",
        modules: ["English Communication 171", "Entrepreneurship 171", "Innovation and Leadership 202"],
        
        link: "BIT.html"
    },
    {
        title: "Bachelor of Computing",
        code: "DP#81",
        duration: "4 years",
        modules: ["Programming 181", "Information Systems 281", "Project Management 381"],
        
        link: "BComp.html"
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
                        
                    </div>
                    <button class="see-more-btn btn btn-primary" data-link="${course.link}">See More</button>
                </div>
            </div>
        `;
        container.appendChild(courseCard);
    });

    document.querySelectorAll('.see-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-link');
        });
    });
}


// function displayCourseDetails(course) {
//     const container = document.getElementById('course-content');
//     container.innerHTML = `
//         <h2>${course.title}</h2>
//         <p><strong>Code:</strong> ${course.code}</p>
//         <p><strong>Duration:</strong> ${course.duration}</p>
//         <h3>Modules</h3>
//         <ul id="modules-list">${course.modules.map(module => `<li>${module}</li>`).join('')}</ul>
//         <h3>Lecturers</h3>
//         <ul>${course.lecturers ? course.lecturers.map(lecturer => `<li>${lecturer}</li>`).join('') : ''}</ul>
//         <h3>Venues</h3>
//         <ul>${course.venues ? course.venues.map(venue => `<li>${venue}</li>`).join('') : ''}</ul>
//         <h3>Module Video</h3>
//         <iframe width="560" height="315" src="${course.videoLink ? course.videoLink : ''}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         <button id="print-button" class="btn btn-secondary mt-3">Print Course</button>
//         <button id="enroll-button" class="btn btn-primary mt-3">Enroll</button>
//     `;



//     const modulesList = document.getElementById('modules-list');
//     modulesList.addEventListener('click', function(event) {
//         if (event.target.tagName === 'LI') {
//             event.target.classList.toggle('completed');
//             updateCompletedModules();
//         }
//     });
// }

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

// function showCountdown(courseTitle, startDate) {
//     const container = document.getElementById('course-content');
//     const countdownElement = document.createElement('div');
//     countdownElement.id = 'countdown-timer';
//     container.appendChild(countdownElement);
    
//     const targetDate = new Date(startDate).getTime();
    
//     const countdown = setInterval(function() {
//         const now = new Date().getTime();
//         const distance = targetDate - now;

//         if (distance < 0) {
//             clearInterval(countdown);
//             countdownElement.innerHTML = "Course has started!";
//             return;
//         }

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         countdownElement.innerHTML = `Course starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
//     }, 1000);
// }

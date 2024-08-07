document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#course_completed');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the table directly below the button
            let table = this.closest('h4').nextElementSibling;

            if (table && table.tagName === 'TABLE') {
                if (!this.classList.contains('completed')) {
                    // First click: Mark as completed
                    this.classList.add('completed');
                    this.style.backgroundColor = '#5bb450';
                    this.style.color = 'white';

                    // Change the table border and text color to green
                    table.style.border = '2px solid red';
                    table.querySelectorAll('th, td').forEach(cell => {
                        cell.style.color = 'green';
                    });

                    // Add completed courses to the list
                    const completedCoursesList = document.getElementById('completed-courses-list');

                    table.querySelectorAll('tbody tr').forEach(row => {
                        const cells = row.querySelectorAll('td');
                        if (cells.length > 0) {
                            const courseName = cells[0].innerText;
                            const courseCode = cells[1].innerText;

                            const listItem = document.createElement('li');
                            listItem.className = 'list-group-item';
                            listItem.textContent = `${courseName} (${courseCode})`;

                            completedCoursesList.appendChild(listItem);
                        }
                    });
                } else {
                    // Second click: Revert changes
                    this.classList.remove('completed');
                    this.style.backgroundColor = '';
                    this.style.color = '';

                    // Revert table styling
                    table.style.border = '';
                    table.querySelectorAll('th, td').forEach(cell => {
                        cell.style.color = '';
                    });

                    // Remove courses from the completed list
                    const completedCoursesList = document.getElementById('completed-courses-list');
                    completedCoursesList.innerHTML = '';
                }
            }
        });
    });


    const printButton = document.getElementById('print_completed_courses');

    printButton.addEventListener('click', function () {
        const printContents = document.getElementById('completed-courses-list').innerHTML;
        const originalContents = document.body.innerHTML;

        // Open a new window
        const printWindow = window.open('', '', 'height=600,width=800');

        // Add necessary HTML to the new window
        printWindow.document.write('<html><head><title>Print Section</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');

        // Print the content and close the window
        printWindow.document.close();
        printWindow.print();
    });
});

/*const print_me = document.getElementById('print_completed_courses');

print_me.addEventListener('click',function(){

})*/

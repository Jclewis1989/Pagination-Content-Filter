/* Project Two | Pagination & Content Filter

Meet Requirements!
____________________________________________

*/

// Global variables

var studentList = document.querySelectorAll('LI');
var totalPages = Math.ceil(studentList.length / 10);
var container = document.querySelector('.page');

// When the page loads, your program should hide all but the first 10 students in the list.

function hideInitial() {
    for (var i = 10; i < studentList.length; i++) {
        if (studentList.length > 10) {
            studentList[i].style.display = 'none';
        }
    }
}
window.addEventListener('load', hideInitial);

// Look at the HTML in the example-meets.html on lines 119-137 -- this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.

// Create HTML Elements
pagination = document.createElement('DIV');
paginationUl = document.createElement('UL');
// Provide class Names & HREF Attribute
pagination.className = ('pagination');
// Place pagination div in the .page div
container.appendChild(pagination);
// Place unordered list and links within the .pagination div
pagination.appendChild(paginationUl);


// Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.

function paginationLinks() {
    for (var i = 1; i < totalPages + 1; i++) {
        if (i === 1) {
            paginationUl.innerHTML += '<li><a href="#" class="active">' + i + '</a></li>';
        } else if (i > 1) {
            paginationUl.innerHTML += '<li><a href="#" class="inactive">' + i + '</a></li>';
        }
    }
}

paginationLinks();

// When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.
//

function paginateLink() {
    var links = document.querySelector('.pagination');
    links.addEventListener('click', function (e) {
        var currentPage = e.target.textContent;
        var begin = currentPage * 10;
        var end = begin - 10;

        for (var i = 0; i < studentList.length; i++) {
            if (i >= end && i < begin) {
                studentList[i].style.display = 'block';
            } else {
                studentList[i].style.display = 'none';
            }
        }

        var activeLink = document.getElementsByTagName('a');
        for (var i = 0; i < activeLink.length; i++) {
            activeLink[i].classList.remove('active');
        }
        e.target.className = 'active';
    });
}

paginateLink();

// Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding the JavaScript file your write to the other lists of students we’ve provided in the student-list-examples folder.



/*
Exceed Requirements!
    ____________________________________________

*/

// Include a search component so that a user could search for a particular student or students. See the file example-exceeds.html and lines 16-19 for what the markup for the search component should look like.

// When the "Search" button is clicked, the list of students is filtered to match the search. For example if the name Phillip is typed into the box list all students whose name or email includes Phillip.

// If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

/* Project Two | Pagination & Content Filter

Meet Requirements!
____________________________________________

*/

// Global variables

var students = document.querySelectorAll('li');
var pages = Math.ceil(students); // 10 Students per page? We will see how this works

// When the page loads, your program should hide all but the first 10 students in the list.

function loadTen() {
    var ul = document.getElementsByTagName('ul')[0];
    var li = document.querySelectorAll('li');
    for (var i = 10; i < li.length; i++) {
        if(ul) {
            ul.removeChild(li[i]);
        }
    }
}

document.onload = loadTen();

// element.style.display = 'none' OR 'block' to show...



// Look at the HTML in the example-meets.html on lines 119-137 -- this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.


function createHTML() {
    // Create the div container
    var div = document.createElement('div');
    div.className = 'pagination';
    div.textContent = 'DIV IS HERE'; // Testing div with textContent
    document.body.appendChild(div);
    var divPage = document.querySelector('div.page ul');
    divPage.parentNode.insertBefore(div, divPage.nextSibling);
}

createHTML();


/* 
NOT DYNAMIC - Instructions are clear to dynamically add the div .pagination
function createHMTML() {
    var html = '<div class="pagination"><ul><li><a class="active" href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li></ul></div>'
    var divPage = document.querySelector('div.page ul');
    divPage.parentNode.insertBefore(html, divPage.nextSibling);
}

createHTML();

*/

// Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.

// When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.

// Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding the JavaScript file your write to the other lists of students we’ve provided in the student-list-examples folder.




// Event Listeners

/*

Exceed Requirements!
____________________________________________

*/

// Include a search component so that a user could search for a particular student or students. See the file example-exceeds.html and lines 16-19 for what the markup for the search component should look like.

// When the "Search" button is clicked, the list of students is filtered to match the search. For example if the name Phillip is typed into the box list all students whose name or email includes Phillip.

// If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// COMMENT SECTION
// The page launches with two static comments and a user submit form which allows the user to post their own comment.
// Identify and create variable for the comment container
const commentContainer = document.getElementById('posts');

// Enable the form to submit on click
document.getElementById('addComment').addEventListener('click', function (e) {
    addComment(e);
})

// SIDE-QUEST: MAKING DATE INTO A LIVE STRING
// Parse data from function and store into variables
// Create variables for our string to accept
const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentWeekDay = currentDate.getDay() - 1;
// Create array of strings to pass
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
// Create variables that convert current day and month to usable strings
const weekDayString = days[currentWeekDay];
const monthString = months[currentMonth];
// Create function that generates an ordinal suffix for our date
function getOrdinal(n) {
    let ord = 'th';

    if (n % 10 == 1 && n % 100 != 11) {
        ord = 'st';
    }
    else if (n % 10 == 2 && n % 100 != 12) {
        ord = 'nd';
    }
    else if (n % 10 == 3 && n % 100 != 13) {
        ord = 'rd';
    }

    return ord;
}
// Create string for our date
let dayOfMonthString = `${currentDayOfMonth}${getOrdinal(currentDayOfMonth)}`;
// Create string for full date
const fullDate = `${weekDayString} ${monthString} ${dayOfMonthString}, ${currentYear}`;

// Create function to add comment to the page
function addComment(e) {
    // Prevent auto-refresh
    e.preventDefault();
    // Create div to hold new comment
    const div = document.createElement('div');
    div.classList.add('comment');
    // Identify and create variables for form inputs
    const commentText = document.getElementById('comment').value;
    const nameText = document.getElementById('name').value;
    // Convert inputs into strings
    document.getElementById('comment').value = '';
    document.getElementById('name').value = '';
    // Write HTML to go inside our comment div
    div.innerHTML = `<div class="img-container"><img src="http://placekitten.com/200/200" alt="A commenter's profile picture."></div><div class="text-container"><h5></h5><p></p></div>`;
    // Identify and create variable for our text containers
    const commentTextContainer = div.lastChild.lastChild;
    const nameTextContainer = div.lastChild.firstChild;
    // Add our inputs into our text containers
    commentTextContainer.textContent = commentText;
    nameTextContainer.textContent = `${fullDate} by ${nameText}`;

    // Write conditional to prevent blank posts
    if (nameText === '' && commentText === '') {
        alert('Please enter your name and comment!');
    }
    else if (commentText === '') {
        alert('Please enter your comment!')
    }
    else if (nameText === '') {
        alert('Please enter your name!');
    }
    else {
        commentContainer.append(div);
    }
}




// BONUS: The comment will persist on page re-load.

// EMAIL FORM
// https://www.codebrainer.com/blog/contact-form-in-javascript



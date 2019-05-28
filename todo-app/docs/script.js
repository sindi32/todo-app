// Array of shortened month names
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var today = new Date();
// Date number
var day = today.getDate();
// Month name
var month = monthNames[today.getMonth()];
// Year number
var year = today.getFullYear();
// Display date
var displayDate = month + ' ' + day + ' ' + year;
// Selects span containing date
var dateContainer = document.getElementById('date');
// Changes text of span to current date
dateContainer.innerHTML = displayDate;

function deleteGoal() {
    // Target trash icons
    var trash = document.getElementsByClassName('trash');
    // Add event listener, to remove current goal when trash icon is pressed
    for (var i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', function () {
            var par = this.parentNode;
            par.remove();
        })
    }
}

// Select button
var button = document.getElementById('add');
// Add event listener when button is clicked
button.addEventListener('click', function() {
    // Number of goals
    var goalsLength = document.getElementById('goals').childElementCount;
    // Select user input value
    var userInput = document.getElementById('user-input').value;
    if (userInput.length > 0 && goalsLength < 7) {
        var span = document.createElement('span').innerHTML = userInput;
        // Goal div
        var goal = document.createElement('div');
        goal.className = 'goal';
        // Goal span
        var span = document.createElement('span');
        span.innerHTML = userInput;
        // Icon
        var icon = document.createElement('div');
        icon.className = 'far fa-trash-alt';
        // Trash div
        var trash = document.createElement('div');
        trash.className = 'trash';
        // Append span to goal
        goal.appendChild(span);
        // Append trash icon to trash container
        trash.appendChild(icon);
        // Append trash container to goal
        goal.appendChild(trash);
        // Append goal to goals
        var goals = document.getElementById('goals');
        goals.appendChild(goal)
    }
    deleteGoal();
    // Resets value of user input
    document.getElementById('user-input').value = '';
})
deleteGoal();
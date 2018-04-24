/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const flight = document.querySelector('#flight')
const mindreading = document.querySelector('#mindreading')
const xray = document.querySelector('#xray')
const allPowers = document.querySelectorAll('.power')


function togglePower (element) {
    element.classList.toggle('enabled')
    element.classList.toggle('disabled')
}

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    togglePower(mindreading)
})
document.querySelector("#activate-flight").addEventListener("click", function() {
    togglePower(flight)
})
document.querySelector("#activate-xray").addEventListener("click", function() {
    togglePower(xray)
})


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

/*This does both on just one of the functions:*/

document.querySelector('#activate-all').addEventListener('click', function() {
    for (var i = 0; i < allPowers.length; i++) {
        togglePower(allPowers[i])
    }
})
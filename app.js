// get the element that holds the nametag name
const nameElement = document.getElementById('name');

// get the button
const updateButton = document.getElementById('update-button');

// get the input
const nameInput = document.getElementById('name-input');

// user clicks on the button
updateButton.addEventListener('click', () => {

    // get the text in the input field
    const name = nameInput.value;

    // update the name element with the text
    nameElement.textContent = name;
});

// get the element that holds the color value
const colorElement = document.getElementById('middle');

// get the three buttons
const pinkButton = document.getElementById('pink');
const greenButton = document.getElementById('lightgreen');
const blueButton = document.getElementById('lightblue');
const reset = document.getElementById('reset');

// user clicks on the Pink button
pinkButton.addEventListener('click', () => {
    
    // update background with new color
    document.getElementById('background').style.backgroundColor = 'pink';
    
});

// user clicks on the Light Green button
greenButton.addEventListener('click', () => {
    
    // update background with new color
    document.getElementById('background').style.backgroundColor = 'lightgreen';
    
});

// user clicks on the Light Blue button
blueButton.addEventListener('click', () => {
    
    // update background with new color
    document.getElementById('background').style.backgroundColor = 'aqua';
    
});

//user clicks on the Reset button
reset.addEventListener('click', () => {

    // reset background color to white
    document.getElementById('background').style.background = 'white';
});
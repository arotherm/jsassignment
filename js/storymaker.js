// Assignment 1 | COMP1073 Client-Side JavaScript


// Constants for main button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');

// Constants for p tags to display
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');
const displayStory = document.getElementById('story');

// Variables for pre-defined arrays
// Nouns representing tech-themed characters or subjects
const nouns1 = ["The programmer", "The antivirus", "The AI", "The smartphone", "The drone"];

// Verbs that fit with the nouns and are actions these subjects can perform
const verbs = ["debugged", "scanned", "processed", "navigated", "captured"];

// Adjectives to describe the manner of the action or the subject
const adjectives = ["efficiently", "relentlessly", "intelligently", "precisely", "autonomously"];

// Nouns for tech-related objects, targets, or goals
const nouns2 = ["the buggy code", "malware threats", "complex algorithms", "virtual landscape", "aerial footage"];

// Settings that are tech-themed or where the action might take place
const settings = ["in the high-tech lab", "within the secure network", "in the digital realm", "over the smart city", "above the cloud-covered mountains"];


// Function to get a random word from an array
function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function for each button click
function updateWord(element, array) {
    const word = getRandomFromArray(array);
    element.textContent = word;
}

// Event listeners for buttons
noun1Btn.onclick = () => updateWord(choosenNoun1, nouns1);
verbBtn.onclick = () => updateWord(choosenVerb, verbs);
adjectiveBtn.onclick = () => updateWord(choosenAdjective, adjectives);
noun2Btn.onclick = () => updateWord(choosenNoun2, nouns2);
settingBtn.onclick = () => updateWord(choosenSetting, settings);

// Function to display the story
playbackBtn.onclick = function() {
    displayStory.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
};

// Function to generate a random story
randomBtn.onclick = function() {
    displayStory.textContent = `${getRandomFromArray(nouns1)} ${getRandomFromArray(verbs)} ${getRandomFromArray(adjectives)} ${getRandomFromArray(nouns2)} ${getRandomFromArray(settings)}.`;
};

// Adding student name dynamically
const studentIdElement = document.getElementById('studentId');
studentIdElement.textContent = "Student Name: John Doe - ID: 123456789";
// Create container div
const container = document.createElement('div');
container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
`;

// Day counter
const dayCounter = document.createElement('div');
dayCounter.style.cssText = `
    font-size: 72px;
    margin-bottom: 40px;
`;
dayCounter.textContent = 'Day 1'; // Change this number as needed

// Question
const question = document.createElement('div');
question.style.cssText = `
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
`;
question.textContent = 'What is your favorite color?'; // Example question

// Alternatives container
const alternatives = document.createElement('div');
alternatives.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

// Create 4 alternatives
const options = ['Red', 'Blue', 'Green', 'Yellow']; // Example options
options.forEach(option => {
    const button = document.createElement('button');
    button.style.cssText = `
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        min-width: 200px;
    `;
    button.textContent = option;
    
    // Add click event listener
    button.addEventListener('click', () => {
        if (option === 'Green') {
            // Correct answer
            container.innerHTML = ''; // Clear all content
            container.style.backgroundColor = '#00ff00'; // Bright green
            
            const correctText = document.createElement('div');
            correctText.textContent = 'True';
            correctText.style.cssText = `
                font-size: 100px;
                color: black;
                font-weight: bold;
            `;
            container.appendChild(correctText);
        } else {
            // Wrong answer
            container.innerHTML = ''; // Clear all content
            container.style.backgroundColor = '#ff0000'; // Bright red
            
            const wrongText = document.createElement('div');
            wrongText.textContent = 'False';
            wrongText.style.cssText = `
                font-size: 100px;
                color: black;
                font-weight: bold;
            `;
            container.appendChild(wrongText);
        }
    });
    alternatives.appendChild(button);
});

// Append elements to container
container.appendChild(dayCounter);
container.appendChild(question);
container.appendChild(alternatives);

// Add container to document body
document.body.appendChild(container);



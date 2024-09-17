function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Voeg het bericht van de gebruiker toe
    addMessage('User', userInput);

    // Genereer een antwoord van de "AI"
    const botResponse = generateResponse(userInput);
    addMessage('ChatMVD', botResponse);

    // Maak het invoerveld leeg
    document.getElementById('user-input').value = '';
}

function addMessage(sender, text) {
    const messageBox = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messageBox.appendChild(messageDiv);
    messageBox.scrollTop = messageBox.scrollHeight;  // Scroll naar het laatste bericht
}

function generateResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // Simpele keyword matching om een reactie te genereren
    if (lowerCaseInput.includes('hallo')) {
        return 'Hallo! Hoe kan ik je helpen?';
    } else if (lowerCaseInput.includes('hoe gaat het')) {
        return 'Met mij gaat het goed! Hoe gaat het met jou?';
    } else if (lowerCaseInput.includes('wat is je naam')) {
        return 'Ik ben ChatMVD, jouw virtuele assistent!';
    } else if (lowerCaseInput.includes('wat kan je doen')) {
        return 'Ik kan simpele gesprekken voeren en vragen beantwoorden!';
    } else {
        return 'Interessante vraag! Daar heb ik momenteel geen antwoord op.';
    }
}

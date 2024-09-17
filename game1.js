document.addEventListener('DOMContentLoaded', function() {
    const adventureTitle = document.getElementById('adventure-title');
    const adventureDescription = document.getElementById('adventure-description');
    const choices = document.getElementById('choices');
    const restartButton = document.getElementById('restart-button');

    let adventureStep = 0;

    function setupChoices(options) {
        choices.innerHTML = '';
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.addEventListener('click', () => handleChoice(index + 1));
            choices.appendChild(button);
        });
    }

    function handleChoice(choice) {
        switch (adventureStep) {
            case 0:
                if (choice === 1) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 1';
                    adventureDescription.textContent = 'Je staat voor de ingang van de verloren stad. Je hoort vreemde geluiden van binnen. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Ga naar binnen en onderzoek de geluiden.', choice: 1 },
                        { text: 'Wacht buiten en luister naar de geluiden.', choice: 2 },
                        { text: 'Keer terug naar de stad en vraag om hulp.', choice: 3 }
                    ]);
                } else if (choice === 2) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 2';
                    adventureDescription.textContent = 'Je besluit om buiten te wachten. Na een tijdje komt er een mysterieus figuur naar buiten. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Vraag de figuur wat er aan de hand is.', choice: 1 },
                        { text: 'Volg de figuur op afstand.', choice: 2 },
                        { text: 'Keer terug naar de stad en vertel wat je hebt gezien.', choice: 3 }
                    ]);
                } else if (choice === 3) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 3';
                    adventureDescription.textContent = 'Je vraagt om hulp en ontdekt dat de stad vol geheimen zit. Je krijgt een mysterieuze kaart. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Onderzoek de kaart en zoek naar aanwijzingen.', choice: 1 },
                        { text: 'Vraag meer informatie aan de lokale bewoners.', choice: 2 },
                        { text: 'Verken de stad op eigen houtje.', choice: 3 }
                    ]);
                }
                break;
            case 1:
                if (choice === 1) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 1.1';
                    adventureDescription.textContent = 'Binnen vind je een oude tempel. Er liggen opgravingen verspreid. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Onderzoek de opgravingen.', choice: 1 },
                        { text: 'Ga verder naar de binnenste kamers.', choice: 2 },
                        { text: 'Verlaat de tempel en zoek elders.', choice: 3 }
                    ]);
                } else if (choice === 2) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 2.1';
                    adventureDescription.textContent = 'De mysterieuse figuur biedt je een raadsel aan. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Probeer het raadsel op te lossen.', choice: 1 },
                        { text: 'Vraag meer informatie over het raadsel.', choice: 2 },
                        { text: 'Weiger en zoek verder.', choice: 3 }
                    ]);
                } else if (choice === 3) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 3.1';
                    adventureDescription.textContent = 'De kaart leidt je naar een oude ruïne. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Verken de ruïne en zoek naar verborgen kamers.', choice: 1 },
                        { text: 'Gebruik de kaart om verdere aanwijzingen te vinden.', choice: 2 },
                        { text: 'Verlaat de ruïne en vraag om hulp in de stad.', choice: 3 }
                    ]);
                }
                break;
            case 2:
                // Vervolgverhalen gebaseerd op de keuzes van de vorige stappen
                if (choice === 1) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 1.1.1';
                    adventureDescription.textContent = 'Je ontdekt een verborgen doorgang in de tempel. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Volg de verborgen doorgang.', choice: 1 },
                        { text: 'Verlaat de tempel en zoek een andere route.', choice: 2 },
                        { text: 'Bestudeer de opgravingen verder.', choice: 3 }
                    ]);
                } else if (choice === 2) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 1.2';
                    adventureDescription.textContent = 'Je ontdekt een geheime kamer met oude inscripties. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Bestudeer de inscripties.', choice: 1 },
                        { text: 'Zoek naar verborgen deuren.', choice: 2 },
                        { text: 'Verlaat de kamer en verken de tempel verder.', choice: 3 }
                    ]);
                } else if (choice === 3) {
                    adventureTitle.textContent = 'Avontuur 1: De Verloren Stad - Verhaal Keuze 1.3';
                    adventureDescription.textContent = 'Je wordt overvallen door een groep bandieten. Wat doe je?';
                    adventureStep++;
                    setupChoices([
                        { text: 'Vecht terug.', choice: 1 },
                        { text: 'Probeer te vluchten.', choice: 2 },
                        { text: 'Onderhandel met de bandieten.', choice: 3 }
                    ]);
                }
                break;
            // Voeg verdere gevallen toe voor andere keuzes en verhaallijnen
            default:
                endGame();
                break;
        }
    }

    function endGame() {
        choices.classList.add('hidden');
        restartButton.classList.remove('hidden');
    }

    restartButton.addEventListener('click', () => {
        adventureStep = 0;
        adventureTitle.textContent = 'Avontuur Quest';
        adventureDescription.textContent = 'Kies je avontuur!';
        choices.classList.remove('hidden');
        restartButton.classList.add('hidden');
    });

    // Start the adventure
    adventureTitle.textContent = 'Avontuur Quest';
    adventureDescription.textContent = 'Kies je avontuur!';
    setupChoices([
        { text: 'Start Avontuur 1: De Verloren Stad', choice: 1 },
        { text: 'Start Avontuur 2: De Verboden Bossen', choice: 2 },
        { text: 'Start Avontuur 3: De Ondergrondse Grotten', choice: 3 }
    ]);
});

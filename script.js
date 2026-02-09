const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainQuestion = document.getElementById('main-question');

let noClickCount = 0;
const textOptions = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

noBtn.addEventListener('click', () => {
    noClickCount++;

    // Change text on the No button randomly or sequentially
    // const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
    // noBtn.innerText = randomText;

    // Alternatively, change question text as per request? 
    // "change question into question like that im asking her to be my valentine"
    // Let's change the question text to seem more desperate
    if (noClickCount < textOptions.length) {
        noBtn.innerText = textOptions[noClickCount];
    } else {
        noBtn.innerText = "Please?";
    }

    // Make Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.2}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) * 1.5}px`;
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    questionSection.classList.remove('active');

    successSection.classList.remove('hidden');
    successSection.classList.add('active');

    startHearts();
});

// Start hearts immediately when page loads
startHearts();

function startHearts() {
    // Generate hearts very quickly for "godaak" (many) effect
    setInterval(createHeart, 50);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can also use other hearts like 💖 or 💗

    // Randomize position
    heart.style.left = Math.random() * 100 + "vw";

    // Randomize animation duration for natural flow
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5s

    // "Chooty" (Small) size: 10px to 25px
    heart.style.fontSize = Math.random() * 15 + 10 + "px";

    // Randomize color slightly (optional, using CSS filter or specific emojis)
    // heart.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    document.getElementById('hearts-container').appendChild(heart);

    // Cleanup to prevent memory issues
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

const reviews = [
    {
        image: "../img/reviewer-man.jpeg",
        name: "Sam Smith",
        occupation: "Web Developer",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
    },
    {
        image: "../img/reviewer-woman.jpg",
        name: "Jessica White",
        occupation: "UI/UX Designer",
        text: "Shaman humblebrag pickled coloring book salvia hoodie. Cold-pressed four dollar toast everyday carry."
    },
    {
        image: "../img/reviewer-man2.jpg",
        name: "John Doe",
        occupation: "Software Engineer",
        text: "Chambray pop-up activated charcoal, four loko poke 8-bit succulents aesthetic paleo everyday carry."
    }
];

let currentReview = 0;

function updateReview() {
    const reviewContainer = document.getElementById("review-container");
    const review = reviews[currentReview];
    reviewContainer.innerHTML = `
        <div class="reviewer-image">
            <img src="${review.image}" alt="${review.name}">
        </div>
        <div class="reviewer-info">
            <div class="reviewer-name">${review.name}</div>
            <div class="reviewer-occupation">${review.occupation}</div>
        </div>
        <div class="review-text">${review.text}</div>
    `;
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview();
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
}

function randomReview() {
    currentReview = Math.floor(Math.random() * reviews.length);
    updateReview();
}

// Initialize the first review
updateReview();

const toggleBtn = document.querySelector('.menu')
        const dropDownMenu = document.querySelector('.dropdown-menu')

        toggleBtn.onclick = function(){
            dropDownMenu.classList.toggle('open')
        }
       
        // reviews Javascript
document.addEventListener("DOMContentLoaded", function () {
    const reviewImageElement = document.getElementById('userReviewImage');
    const reviewTitleElement = document.getElementById('userReviewTitle');
    const starRatingsElement = document.getElementById('starRatings');
    const userReviewElement = document.getElementById('userReview');

    const reviews = [
        { image: "https://assets-global.website-files.com/6422454f4b30ffcc2876c945/64375c0710e84f2be42752ea_felicity-yost.png", title: "John Hikens", content: "In a medical emergency, every minute counts. 24Local's hospital search feature saved the day by helping me locate the nearest emergency care facility. The real-time reviews from other users gave me confidence in my choice. This platform truly understands the importance of quick and reliable information during critical moments.", rating: 4 },
        { image: "https://profile.justdial.com/profileImg?i=hXNCPfK5Hd7gXBeDoSMU2CiU4HoPnPLeoysK2dXHTrk%3D", title: "Jane Doe", content: "In a medical emergency, every minute counts. 24Local's hospital search feature saved the day by helping me locate the nearest emergency care facility. The real-time reviews from other users gave me confidence in my choice. This platform truly understands the importance of quick and reliable information during critical moments.  ", rating: 5 },
        { image: "alice.jpg", title: "Alice Smith", content: "Frequent traveler here, and 24Local has become my go-to for booking flights. The platform's intuitive design, coupled with a wide range of airlines and prices, makes it my preferred choice. The user reviews on airlines and airports provide valuable insights, ensuring a smooth and stress-free travel experience every time.", rating: 4 }
        // Add more reviews as needed
    ];

    let currentIndex = 0;

    function updateReview() {
        const currentReview = reviews[currentIndex];
        reviewImageElement.src = currentReview.image;
        reviewTitleElement.textContent = currentReview.title;
        userReviewElement.innerHTML = '"' + currentReview.content + '"';
        updateStarRatings(currentReview.rating);
        currentIndex = (currentIndex + 1) % reviews.length;
    }

    function updateStarRatings(rating) {
        starRatingsElement.innerHTML = '';
        for (let i = 0; i < rating; i++) {
            const starIcon = document.createElement('span');
            starIcon.classList.add('star');
            starIcon.innerHTML = '★'; // You can use a star icon or any other representation
            starRatingsElement.appendChild(starIcon);
        }
    }

    // Initial update
    updateReview();

    // Set the interval to change reviews initially
    setInterval(() => {
        updateReview();
    }, 5000); // Set the interval time in milliseconds (5 seconds in this example)
});
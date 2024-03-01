//Services dropdown menu
const toggleBtn = document.querySelector('.menu')
        const dropDownMenu = document.querySelector('.dropdown-menu')

        toggleBtn.onclick = function(){
            dropDownMenu.classList.toggle('open')
        };

// USER TOGGLE MENU
let subMenu=document.getElementById("subMenu");
          
          function toggleMenu(){
            subMenu.classList.toggle("open-menu");
          };

// BannerImage Slide
const SlideImageElement = document.getElementById('SlideImg');

const SlideImg = [{image:"/images/volunteers2.jpg"},{image:"/images/travel.jpg"},{image:"/images/school.jpg"}];

let currentIndex = 0;
function UpdateImage (){
    const currentImg = SlideImg[currentIndex];
    SlideImageElement.src = currentImg.image;
    currentIndex = (currentIndex+1)%SlideImg.length;
    // if (i == currentIndex){
    //     currentImg.style.transform = "translateX(0)"
    // }
    // else{
    //     currentImg.style.transform = "translateX(-100%)"
    // }
}

UpdateImage();
setInterval(()=>{
    UpdateImage();
}, 5000)


        // reviews Javascript
document.addEventListener("DOMContentLoaded", function () {
    const reviewImageElement = document.getElementById('userReviewImage');
    const reviewTitleElement = document.getElementById('userReviewTitle');
    const starRatingsElement = document.getElementById('starRatings');
    const userReviewElement = document.getElementById('userReview');

    const reviews = [
        { image: "https://assets-global.website-files.com/6422454f4b30ffcc2876c945/64375c0710e84f2be42752ea_felicity-yost.png", title: "John Hikens", content: "In a medical emergency, every minute counts. 24Local's hospital search feature saved the day by helping me locate the nearest emergency care facility. The real-time reviews from other users gave me confidence in my choice. This platform truly understands the importance of quick and reliable information during critical moments.", rating: 4 },
        { image: "https://profile.justdial.com/profileImg?i=hXNCPfK5Hd7gXBeDoSMU2CiU4HoPnPLeoysK2dXHTrk%3D", title: "Jane Doe", content: "In a medical emergency, every minute counts. 24Local's hospital search feature saved the day by helping me locate the nearest emergency care facility. The real-time reviews from other users gave me confidence in my choice. This platform truly understands the importance of quick and reliable information during critical moments.  ", rating: 5 },
        { image: "/images/alice.jpg", title: "Alice Smith", content: "Frequent traveler here, and 24Local has become my go-to for booking flights. The platform's intuitive design, coupled with a wide range of airlines and prices, makes it my preferred choice. The user reviews on airlines and airports provide valuable insights, ensuring a smooth and stress-free travel experience every time.", rating: 4 }
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

async function changeLocation(){
    var apiUrl = "https://api-production-55da.up.railway.app/changeLocation";
      var newLocation = prompt("Enter new location");
           
       const postData = {
       "tokken" : localStorage.getItem("tokken"),
       "newLocation" : newLocation
      };
   
    const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type based on your API requirements
          // You may need to include additional headers (e.g., authorization) based on your API
        },
        body: JSON.stringify(postData) // Convert the data object to JSON
      };
      const response = await fetch(apiUrl, fetchOptions);
      if (!response.ok) {
        const resJson = await response.json();
        
 
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    
    }

      async function doSearch(){
        displayLoading();
        var apiUrl = "https://api-production-55da.up.railway.app/service";
     
             const query = document.getElementById("search-query").value;
         const postData = {
         "token" : localStorage.getItem("tokken"),
         "query" : query
        };
        const fetchOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Set the content type based on your API requirements
              // You may need to include additional headers (e.g., authorization) based on your API
            },
            body: JSON.stringify(postData) // Convert the data object to JSON
          };
          const response = await fetch(apiUrl, fetchOptions);
          if (!response.ok) {
            const resJson = await response.json();
            
            document.getElementById("error-message").innerHTML = resJson.message;
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
         var dataArray = await response.json();
         dataArray = JSON.stringify(dataArray);
        data = localStorage.getItem("tokken");
          localStorage.setItem("tokken",data);
          localStorage.setItem("json",dataArray);
          window.location.href = "/services.html";
         //forward the api response to service page.



        




          
}


const loader = document.querySelector("#loading");
      
function displayLoading() {
 console.log(loader);
 loader.classList.add("display");
 // to stop loading after some time

}
function loadContent(){
    id = localStorage.getItem("sellerId");
    data = localStorage.getItem("jsonObject");
    data = JSON.parse(data);
    
    document.getElementById("service-provider").innerHTML = "Provided by : " + data.seller_name;
    document.getElementById("registration-date").innerHTML = "Joined since : " + data.registration_date;
    document.getElementById("heading").innerHTML = data.service_name;
    document.getElementById("address").innerHTML = "Address : " + data.shop_number + ", " + data.area + ", " + data.state + ", " + data.pin_code;
    document.getElementById("contact-details").innerHTML = "Contact Details : " + data.phone_number;
    document.getElementById("email-details").innerHTML = "Email : " + data.email;
}
window.onload  = loadContent;


async function bookAppointment(){

 tokken = localStorage.getItem("tokken");
 id = localStorage.getItem("sellerId");
 data = localStorage.getItem("jsonObject");
 data = JSON.parse(data);
 message = document.getElementById("message").value;
 if(message.length == 0){
    alert("Type some message to Service provider");
    return;
 }
 displayLoading();
 var api = "https://api-production-55da.up.railway.app/book";



 

 const postData = {
   "token": localStorage.getItem("tokken"),
   "message": message,
   "id" : id
 };

const fetchOptions = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json', // Set the content type based on your API requirements
     // You may need to include additional headers (e.g., authorization) based on your API
   },
   body: JSON.stringify(postData) // Convert the data object to JSON
 };
 const response = await fetch(api, fetchOptions);
 hideLoading();
  

}
const loader = document.querySelector("#loading");

function displayLoading() {
console.log(loader);
    loader.classList.add("display");
    // to stop loading after some time
  
}
function hideLoading() {
    loader.classList.remove("display");
}

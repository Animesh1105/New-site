
async function register(){
    var apiUrl = "https://api-production-55da.up.railway.app/register/consumer";
       var name = document.getElementById("f-name").value;
       var email = document.getElementById("mail").value;
       var location = document.getElementById("loc").value;
       var pincode = document.getElementById("pincode").value;
       var password = document.getElementById("user-password").value;
       var confirmPassword = document.getElementById("user-password-confirm").value;  
       if(!(password === confirmPassword)){
                      document.getElementById("error-message").innerHTML = "both the password should be same";
                      return;
         }

       const postData = {
        "password": password,
        "email" : email,
        "consumer_location" : location,
        "name" : name,
        "pin_code" : pincode
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
      const data = await response.text();
      localStorage.setItem("tokken",data);
      window.location.href = "/Login/afterlogin.html";

}



async function registerSeller(){
    var apiUrl = "https://api-production-55da.up.railway.app/register";
    document.getElementById("error-message-email").innerHTML = ""; //resets warning
    document.getElementById("error-message").innerHTML = ""; //resets warning
    var name = document.getElementById("f-name").value;
    console.log(name);
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;

    var businessName = document.getElementById("b-name").value;

    var shopNumber = document.getElementById("shop-number").value;

    var area = document.getElementById("area").value;

    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;

    var service = document.getElementById("service-type").value;
    var password = document.getElementById("user-password").value;

    var passwordConfirm = document.getElementById("user-password-confirm").value;

    if(!(password === passwordConfirm)){
        document.getElementById("error-message").innerHTML = "both the password should be same";
        return;
}

const postData = {
    "password": password,
    "email" : email,
    "area" : area,
    "service_name" : businessName,
    "pin_code" : pincode,
    "service_type" : service,
    "shop_number" : shopNumber,
    "state" : state,
    "phone_number" : phone,
    "seller_name" : name 
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
    
    document.getElementById("error-message-email").innerHTML = resJson.message;
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  const data = await response.text();
  console.log(data);
  localStorage.setItem("tokken",data);



  //forward this tokken to relevant pages.
}


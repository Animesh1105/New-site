const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");

inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
  const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }
  
  if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }


  if (e.key === "Backspace") {
    // iterate over all inputs again
    inputs.forEach((input, index2) => {
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }
  if (!inputs[3].disabled && inputs[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});
window.addEventListener("load", () => inputs[0].focus());



//otp verification


async function verifyOtp(){
  document.getElementById("error-message").innerHTML = "";
 
  var api =  "https://api-production-55da.up.railway.app/otp/verify";


var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;
var num5 = document.getElementById("num5").value;
var num6 = document.getElementById("num6").value;

var otp = num1 + num2 + num3 + num4 + num5 + num6;

  const postData = {
    "otp": otp,
    "token" : localStorage.getItem("tokken")
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

  if (!response.ok) {
   
    const resJson = await response.json();
       
    document.getElementById("error-message").innerHTML = resJson.message;
 
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
 
  const data = await response.text();
  localStorage.setItem("tokken",data);
  console.log(data);
  window.location.href = "/Login/Reset_password.html";
}
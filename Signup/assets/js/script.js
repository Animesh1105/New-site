const submitBtn = document.querySelector('.submit-btn'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#user-password'),
    passwordConfirm = document.querySelector('#user-password-confirm'),
    email = document.querySelector('#mail'),
    errorDisplayers = document.getElementsByClassName('error'),
    inputFields = document.querySelectorAll('input'),
    cardContainer = document.querySelector('.card-container'),
    outroOverlay = document.querySelector('.outro-overlay')

let count = 2

function onValidation(current, messageString, booleanTest) {
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count : count
}

for (let i = 0; i < inputFields.length; i++) {
    let currentInputField = inputFields[i]
    let currentErrorDisplayer = errorDisplayers[i]

    currentInputField.addEventListener('keyup', (e) => {
        let message = currentErrorDisplayer
        e.target.value != "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*This field is Required', 0)
    })
}

phone.addEventListener('keyup', (e) => {
    let message = errorDisplayers[3]
    e.target.value == e.target.value.replace(/\D/g, '') ? onValidation(message, '', 1) : onValidation(message, '*Please enter valid number', 0)
})

email.addEventListener('keyup', (e) => {
    let message = errorDisplayers[2]
    mail.value.includes('@') & mail.value.includes('.com') ? onValidation(message, '', 1) : onValidation(message, '*Please provide a valid Email', 0)
})

password.addEventListener('keyup', (e) => {
    let message = errorDisplayers[4]
    password.value.length >= 8 ? onValidation(message, '', 1) : onValidation(message, 'Password requires minimum 8 charecters', 0)
})

passwordConfirm.addEventListener('keyup', (e) => {
    let message = errorDisplayers[5]
    password.value === e.target.value ? onValidation(message, '', 1) : onValidation(message, '*Password did not match', 0)
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (count > 5) {
        cardContainer.style.display = 'none'
        outroOverlay.classList.remove('disabled')
    }
    else {
        for (let i = 0; i < errorDisplayers.length; i++) {
            errorDisplayers[i].textContent = '*This field is Required'
        }
    }
})


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



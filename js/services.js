
//pre processing 


dataArray = localStorage.getItem("json");
dataArray = JSON.parse(dataArray);
                 
           // Assuming the API returns an array of JSON objects
           dataArray.forEach((data, index) => {
            // Iterate through each JSON object
        
            console.log(`Object ${index + 1}:`, data);
          //  document.getElementsByClassName("list-container").innerHTML =  `<h1>  ${data.service_name} </h1>`;
         
            console.log('---'); // Separator for better readability
          });
      






async function doSearch(){
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
      var jsonData = await response.json();
   
     jsonData = JSON.stringify(jsonData);
      localStorage.setItem("json",jsonData);
    data = localStorage.getItem("tokken");
      localStorage.setItem("tokken",data);
      window.location.href = "/services.html";
     //forward the api response to service page.
      
}



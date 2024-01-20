var counterContainer = document.querySelector(".website-counter");
var visitCount = 0;
// Define the URL of your Azure Function
const functionUrl = "https://resumesitepyapi.azurewebsites.net/api/HttpTrigger?code=x7PKmg7pWHlS2CkHSJu7q76YVfoZj39pSa4yx9c_-QNeAzFup1ZsTw==";

// Define the data you want to send (if needed)
const data = {
    name: "Jem"
};

// Create an AJAX request using the fetch API
fetch(functionUrl, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(data => {
        const dataJSON = JSON.parse(data);
        const visitCount = Number(dataJSON.retval) + 1;
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        visitCount = "0";
    })
    .finally( data => {
      counterContainer.innerHTML = "Website visit count: " + visitCount;    
  });

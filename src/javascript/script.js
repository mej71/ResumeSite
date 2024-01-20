var counterContainer = document.querySelector(".website-counter");
var visitCount = 0;
// Define the URL of your Azure Function
const functionUrl = "https://resumesitepyapi.azurewebsites.net/api/HttpTrigger1?code=hRT8PCLqcMDQJHFha39n7EZgU-HbmP2kBTuJ5TLfKplZAzFucmEZvQ==";

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
        visitCount = data;
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        visitCount = "0";
    })
    .finally( data => {
      visitCount = Number(visitCount) + 1;
      counterContainer.innerHTML = "Website visit count: " + visitCount;    
  });

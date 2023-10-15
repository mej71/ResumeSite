var counterContainer = document.querySelector(".website-counter");
var visitCount = 0;
// Define the URL of your Azure Function
const functionUrl = "https://resumesite-pyapi.azurewebsites.net/api/HttpVisitor?&name=Azure";

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
        console.log(data + "A");
        visitCount = data;
        console.log("why no works?");
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        visitCount = "0";
    })
    .finally( data => {
      console.log("Test");
      if (visitCount) {
        visitCount = Number(visitCount) + 1;
        //localStorage.setItem("page_view", visitCount);
      } else {
        visitCount = 1;
        //localStorage.setItem("page_view", 1);
      }
      counterContainer.innerHTML = visitCount;    
  });


//var visitCount = $.get('https://resumesite-pyapi.azurewebsites.net/api/HttpVisitor?&name=Azure');

// Check if page_view entry is present

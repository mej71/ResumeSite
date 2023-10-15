var counterContainer = document.querySelector(".website-counter");

// Define the URL of your Azure Function
const functionUrl = "https://resumesite-pyapi.azurewebsites.net/api/HttpVisitor?&name=Azure";

// Define the data you want to send (if needed)
const data = {
    name: "Jem"
};

// Create an AJAX request using the fetch API
fetch(functionUrl, {
    method: "GET", // or "POST" if you need to send data
    headers: {
        "Content-Type": "application/json",
    },
    // If you need to send data, you can use the following line
    // body: JSON.stringify(data),
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text(); // assuming you expect plain text as the response
    })
    .then(data => {
        console.log(data); // "42" should be printed in the console
        visitCount = data;
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        visitCount = "0"
    });


//var visitCount = $.get('https://resumesite-pyapi.azurewebsites.net/api/HttpVisitor?&name=Azure');

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  //localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  //localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
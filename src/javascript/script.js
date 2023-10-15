var counterContainer = document.querySelector(".website-counter");
var visitCount = $.ajax({

  url: 'https://resumesite-pyapi.azurewebsites.net/api/HttpVisitor?&name=Azure',
  type: 'GET',
  crossDomain: true,
  dataType: "json",
    data: {
    },
  success: function() { alert("Success"); },
  error: function() { alert('Failed!'); },
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
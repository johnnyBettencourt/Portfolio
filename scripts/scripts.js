$(function () {
    $("#contactButton").click(function () {
        $('#contactModal').modal('show')
    });

    $("#loginButton").click(function () {
        $('#loginModal').modal('show')
    });
});

var portfolioBtn = document.getElementById("portfolioInfoBtn");
var i;

portfolioBtn.addEventListener("click", () => {
    this.classList.toggle("active");
    var portfolioInfo = document.getElementById('portfolioInfo');
    if (portfolioInfo.style.display != "none") {
        portfolioInfo.style.display = "none";
    } else {
        portfolioInfo.style.display = "block";
    }
});



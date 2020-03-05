$(document).ready(function() { 
    var searching = "article";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searching +"&api-key=7UZtOVuuKSWAGSyxeMuY5Zjxbo39d6WE" 

    $("#search-btn").on("click", function() {
        searching = $("#term").val()
        // alert($("#inputGroupSelect01").val())
        console.log(searching);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(r) {
            console.log(r);
            console.log(r.response.docs[0].headline.main);
            console.log(r.response.docs[0].pub_date);
            console.log(r.response.docs[0].byline.original);
            console.log(r.response.docs[0].word_count);
            console.log(r.response.docs[0].snippet)
            var title = $("<h1>");
        })
    })
});

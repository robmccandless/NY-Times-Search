var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=7UZtOVuuKSWAGSyxeMuY5Zjxbo39d6WE" 
 
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

});

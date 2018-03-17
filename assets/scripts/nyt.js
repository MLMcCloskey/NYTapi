// Built by LucyBot. www.lucybot.com
var query = $("#history").val();
var beginDate = $("#minYear").val()+"0101";
var endDate = $("maxYear").val()+"1230";
// var result;
// var method;
// var err;
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "cd50f6ee4ff84d33afe8f9085c2cb013",
  'q': "Tiger Woods",
  'begin_date': "19900101",
  'end_date': "19990101",
  'fl': "headline, abstract, snippet, pub_date"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
// }).fail(function(err) {
//   throw err;
for (i=0; i<10; i++){
  $("body").append(result.response.docs[i].headline.main + "<hr>")
}
});

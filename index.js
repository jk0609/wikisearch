$(document).ready(function(){
  $("#randomBut").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

  //Retrieves search box input and assigns it to variable
  $("#searchBut").click(function(){
    var searchInput="";
    function search(){
      searchInput = document.getElementById("searchInp").value;
    }
    search();

    //Replace spaces in search input with "+" and inject into API url
    var finalInput = searchInput.replace(/\s/g,"+");
    var urlAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+finalInput+"&profile=normal&utf8=1";

    //API call to Wikipedia
    $.ajax({
      url: urlAPI,
      dataType: "json",
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function(data){
        console.log(data);
        $(".result").remove();
          for (i=0;i<data[1].length;i++){
            //Create the div elements displaying each result
            $("#resultDiv").append("<a class='result' href="+data[3][i]+"><div class='result animated fadeInUp'><h3>"+data[1][i]+"</h3><p>"+data[2][i]+"</p></div></a>");
          }//results loop
      }//ajax success function
    })//ajax call
  });
});//document.ready

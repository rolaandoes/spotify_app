$(function (){

// form to search spotify
  var $spotifySearch = $("#spotify-search");
  // form input for tracks
 var $track = $("#track");

  //where to show results 
  var $results = $("#results")
  
// click event on button
$('button').on('click', function() {
  $.get('https://api.spotify.com/v1/search?q=hello&type=album', function(data) {
    console.log(data);
  });
});


// submit event on form
$('form').on('submit', function(){
  $.get('https://api.spotify.com/v1/search?q=goodbye&type=artist', function(data) {
    console.log(data);
  });
});
$spotifySearch.on('submit', function(event){
	event.preventDefault();
	console.log("get it")
	var slappers = "https://api.spotify.com/v1/search?type=track&q=" + $track.val();
	console.log(slappers);
	$.get(slappers, function(data){
		console.log(data)
    //THIS is appending the data from the song the user searched for below

    _.each(data.tracks.items, function(items, i){
            console.log(items.name);
            $results.append("<li>"+ items.name +"</li>");

});
	})
})



});
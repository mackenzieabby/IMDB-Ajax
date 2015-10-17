$(document).ready(function() {
	
	// Click
	$('#search').click(function(event) { //  When Clicked
		event.preventDefault(); // Prevent any default action we dont want
    	var searchTerm = $('#query').val(); // var that is teh value of the input
    	getRequest(searchTerm); // getRequest is == the user innput value
	});
    	

		 // Gets the JSON Data
		function getRequest(searchTerm){
			url = 'http://www.omdbapi.com'; // JSON URL
  			var params = { // Var parameters
    			s: searchTerm, // Search term which is the user input value
   				 r: 'json', // type is json
  			};
  				$.getJSON(url, params, function(data){ // get JSON and the url ,params and a fucntion with a var of data
    				showResults(data.Search); // show results function is = the json data Search
 				 });
		}
		// Shows Results
		function showResults(results) { // adds all the data in the function to the results variable
			 var html = ""; // create var of html
			$.each(results, function(index,value){ // .each is all of funtion var which is the Search data put into a var of value
				html += '<p>' + value.Title + '</p>'; // change html var to a P tag with the value.Title with a closing p tag
				console.log(value.Title); // all of the json search data Titles console log them
				$("#search-results").html(html); // shows the JSON all of the title seach results in paragraph
			}); 
		}
});
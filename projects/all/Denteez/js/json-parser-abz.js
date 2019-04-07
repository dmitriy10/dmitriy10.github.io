$.fn.parser = function() {

	// Vars
	// htmlTemplate = '';
	// $selector = this;

	// Controllers


	// Init
		$.getJSON('http://504080.com/api/v1/services/categories', function(json_abz) {
			// parser(json_abz);
			console.log(json_abz);
		})

	// Actions
}



















// $.fn.parser = function() {

// 	// Vars
// 	htmlTemplate = '';
// 	$selector = this;

// 	// Controllers
// 	function parser(swapijson) {
// 	htmlTemplate += '<table>';
			
// 		htmlTemplate += '<thead>' +
// 						'<th>Name</th>' +
// 			 			'<th>Height</th>' +
// 			 			'<th>Mass</th>' +
// 						'<th>Films</th>' +
// 						'<th>Starships</th>' +
// 						'<th>Created</th>' +
// 						'</thead>';
			
// 		htmlTemplate += '<tbody>';

// 		for(i in swapijson.results) {	
// 				htmlTemplate += '<tr>' +
// 					'<td>' + swapijson.results[i].name + '</td>' +
// 					'<td>' + swapijson.results[i].height + '</td>' +
// 					'<td>' + swapijson.results[i].mass + '</td>' +
// 					'<td>' + swapijson.results[i].films + '</td>' +
// 					'<td>' + swapijson.results[i].starships + '</td>' +
// 					'<td>' + swapijson.results[i].created + '</td>' +
// 					'</tr>';
// 		}

// 		htmlTemplate += '</tbody>';
			
// 	htmlTemplate += '</table>';
			
// 	$selector.html(htmlTemplate);
// 	}
// 	// Init
// 		$.getJSON('https://swapi.co/api/people', function(swapijson) {
// 			parser(swapijson);
// 			console.log(swapijson);
// 		})

// 	// Actions
// }
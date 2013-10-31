var LocalSearch = (function () {
	var Game;
	
	return {
		config : function(newGame) {
			Game = newGame;
		},
		
		search : function(start, max_steps) {
			// Set the start array of queens
			var current = start;
			
			// Loop through and change values for the queens,
			// limited by the max_steps variable
			for (var i = 0; i < max_steps; i++) {
				
				// Create a new array to store all the queens
				// that conflicts with other ones
				var conflicts = new Array();
				for (var j in current) {
					// array of all the conflicts for each column
					var row_conflicts = Game.conflict(current, j);
					
					// Find the lowest number of conflict
					var min = current.length;
					for (var k in row_conflicts) {
						if (row_conflics[j] < min) {
							min = row_conflics[k];
						}
					}
					
					// If the current value is not the lowest,
					// push this queen to the conflicts list.
					if (row_conflicts[j] > min)
						conflicts.push(j);
					
				}
				
				// Check if we found any conflicts.
				// If not, a solution has been found
				if (conflicts.length === 0) {
					return current;
				}
				
				// Find a random, conflicting queen
				var index = Math.floor(Math.random() * conflicts.length);
				var queen = conflicts[index];
				
				// Search for a value that minimizes conflicts
				var row_conflicts = Game.conflict(current, queen);
				var potentials;
				var min = current.length;
				for (var j = 0; j < row_conflicts.length; j++) {
					if (row_conflicts[i] < min) {
						potensials = new Array();
						potensials.push(i);
					} else if (row_conflicts[i] == min) {
						potensials.push(i);
					}
				}
				
				// Choose a random location to move to from the 
				// list of potensials, and store the new position.
				index = Math.floor(Math.random() * potensials.length);
				current[queen] = potensials[index];
			}
			
			return false;
		},
	};
	
}());
var LocalSearch = (function () {
	var Game;
	var iterations;
	
	return {
		config : function(newGame) {
			Game = newGame;
		},
		
		numIterations : function() {
			return iterations;
		},
		
		search : function(start, max_steps) {
			// Set the start array of queens
			var current = start;
			
			LocalSearch.printBoard(current);
			
			// Loop through and change values for the queens,
			// limited by the max_steps variable
			for (var i = 0; i < max_steps; i++) {
				
				// Create a new array to store all the queens
				// that conflicts with other ones
				var conflicts = new Array();
				for (var j in current) {
					// array of all the conflicts for each column
					var row_conflicts = Game.conflict(current, j);
					
					// If the current position has an error,
					// Push it to the array of conflicts
					if (row_conflicts[current[j]] !== 0) {
						conflicts.push(j);
					}
					
				}
				
				// Check if we found any conflicts.
				// If not, a solution has been found
				if (conflicts.length === 0) {
					iterations = i;
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
					if (row_conflicts[j] < min) {
						potensials = new Array();
						potensials.push(j);
						min = row_conflicts[j];
					} else if (row_conflicts[j] == min) {
						potensials.push(j);
					}
				}
				
				// Choose a random location to move to from the 
				// list of potensials, and store the new position.
				index = Math.floor(Math.random() * potensials.length);
				current[queen] = potensials[index];
				
				// LocalSearch.printBoard(current);
			}
			
			return false;
		},
		
		printBoard : function(queens) {
			var border = '----';
			var board = '';
			for (var i = 0; i < queens.length; i++) {
				var str = '| ';
				for (var j = 0; j < queens.length; j++) {
					str += (queens[i] == j ? ' Q ' : ' - ');
				}
				board += str + ' |\n';
				border += '---';
			}
			console.log(border);
			console.log(board);
			console.log(border);
		}
	};
	
}());

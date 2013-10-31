var Game = (function () {
	var k;
	
	return {
		//Checks whether two queens attack eachother
		//Returns true if no collisions are detected
		checkPair(x1, y1, x2, y2){
			if(	x1==x2 || 	//checks for column conflicts
			x1-y1==x2-y2 || //checks for diagonal(down right) conflicts
			y1-x1==y2-x2){ 	//checks for diagonal(down left) conflicts
				return false;
			}else{
				return true;
			}
		}
		//Checks all columns for a row for collisions with the other queens on the board
		//Returns a list over conflicts in each column for a given row
		confict(csp, currentQueen){
			var conflicts=new Array();
			//Loops through all columns
			for(var column=0; x<csp.length; column++){
				var collisionsForCurrentColumn=0;
				//Loops through all queens, to check conflicts for current column
				for(var otherQueen=0; otherQueen<csp.length; s++){
					if(otherQueen!=currentQueen){
						//if the queens attack eachother we increment collisions
						if(checkPair(column,currentQueen,csp[otherQueen],otherQueen))
							collisionsForCurrentColumn++;
					}
				}
				//Saves number of collisions for the current column to the array
				conflicts.push(collisionsForCurrentColumn);
			}
			//Returns a list of collisions
			return conflicts;
		}

		config : function(numQueens) {
			k = numQueens;
		},
		
		genRandomBoard : function() {
			
		},
	}
	
}());

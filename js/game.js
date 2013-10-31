var Game = (function () {
	//Checks whether two queens attack eachother
	//Returns true if no collisions are detected
	function checkPair(x1, y1, x2, y2){
    	if(x1==x2 || 
           x1==x2+Math.abs(y2-y1) ||
           x1==x2-Math.abs(y2-y1)){
           
		   return false;
       }else{
           return true;
       }
	};
	
	return {
		//Checks all columns for a row for collisions with the other queens on the board
		//Returns a list over conflicts in each column for a given row
		conflict : function(csp, currentQueen){
			var conflicts=new Array();
			//Loops through all columns
			for(var column=0; column<csp.length; column++){
				var collisionsForCurrentColumn=0;
				//Loops through all queens, to check conflicts for current column
				for(var otherQueen=0; otherQueen<csp.length; otherQueen++){
					if(otherQueen!=currentQueen){
						//if the queens attack eachother we increment collisions
						if(!checkPair(column,currentQueen,csp[otherQueen],otherQueen))
							collisionsForCurrentColumn++;
					}
				}
				//Saves number of collisions for the current column to the array
				conflicts.push(collisionsForCurrentColumn);
			}
			//Returns a list of collisions
			return conflicts;
		},
		
		genRandomBoard : function(k) {
			var queens = new Array();
			for (var i = 0; i < k; i++) {
				queens[i] = Math.floor(Math.random() * k);
			}
			return queens;
		},
	}
	
}());

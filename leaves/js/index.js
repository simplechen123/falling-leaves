define(function(require){
	var Leaf = require('./leaf');

	for(var i=0; i<8; i++){
		var r = 1 + Math.floor(Math.random() * 4);
		var leaf = new Leaf('img/'+r+'.png');
		leaf.render();

		// leaf.fall();
	}



});
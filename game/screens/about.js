var aboutScreen = function(game) {
	this.init();
	
	// back button
	var backBtn = new Button(game);
	backBtn.click = function() {
		game.changeScreen('menu');
	};
	backBtn.value = 'Back';
	backBtn.width = 50;
	backBtn.height = 25;
	this.addChild(backBtn);
	
	// about text
	var aboutText = new Text(game);
	aboutText.value = 'Proto Hex! by Charlie Cochran';
	aboutText.x = 150;
	aboutText.y = 200;
	this.addChild(aboutText);
};
aboutScreen.prototype = new Screen();
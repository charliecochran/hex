var menuScreen = function(game) {
	this.init();
	
	// About Button
	var aboutBtn = new Button(game);
	aboutBtn.click = function() {
		game.changeScreen('about');
	};
	aboutBtn.value = 'ABOUT';
	aboutBtn.x = 350;
	aboutBtn.y = 200;
	this.addChild(aboutBtn);
	
	// Editor Button
	var editorBtn = new Button(game);
	editorBtn.click = function() {
		game.changeScreen('editor');
	};
	editorBtn.value = 'EDITOR';
	editorBtn.x = 350;
	editorBtn.y = 300;
	this.addChild(editorBtn);
};
menuScreen.prototype = new Screen();
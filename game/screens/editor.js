var editorScreen = function(game) {
	this.init();
	this.active = null;
	
	// viewport
	var viewport = new Viewport(game);
	viewport.width = g.STAGE_WIDTH;
	viewport.height = 400;
	viewport.loadMap(Map);
	this.addChild(viewport);
	
	// menu button
	var menuBtn = new Button(game);
	menuBtn.click = function() {
		game.changeScreen('menu');
	};
	menuBtn.value = 'Menu';
	menuBtn.height = 25;
	menuBtn.width = 50;
	menuBtn.x = 25;
	menuBtn.y = 435;
	this.addChild(menuBtn);
	
	// load map button
	var loadMapBtn = new Button(game);
	loadMapBtn.click = function() {
		this.showLoadMapDialog();
	};
	loadMapBtn.value = 'Load Map';
	loadMapBtn.height = 25;
	loadMapBtn.width = 100;
	loadMapBtn.x = 100;
	loadMapBtn.y = 410;
	this.addChild(loadMapBtn);
	
	// new map button
	var newMapBtn = new Button(game);
	newMapBtn.click = function() {
		this.parent.showNewMapDialog();
	};
	newMapBtn.value = 'New Map';
	newMapBtn.height = 25;
	newMapBtn.width = 100;
	newMapBtn.x = 100;
	newMapBtn.y = 435;
	this.addChild(newMapBtn);
	
	// save map button
	var saveMapBtn = new Button(game);
	saveMapBtn.click = function() {
		this.saveMap();
	};
	saveMapBtn.value = 'Save Map';
	saveMapBtn.height = 25;
	saveMapBtn.width = 100;
	saveMapBtn.x = 100;
	saveMapBtn.y = 460;
	this.addChild(saveMapBtn);
	
	// toggle visibility button
	var visibleBtn = new Button(game);
	visibleBtn.click = function() {
		if(this.parent.active) {
			this.parent.active.visible = !this.parent.active.visible;
			this.parent.updateEditorArea();
		}
	};
	visibleBtn.value = 'Toggle Visibility';
	visibleBtn.height = 25;
	visibleBtn.width = 100;
	visibleBtn.x = 350;
	visibleBtn.y = 410;
	visibleBtn.visible = false;
	this.addChild(visibleBtn);
	
	// toggle tower button
	var towerBtn = new Button(game);
	towerBtn.click = function() {
		if(this.parent.active) {
			this.parent.active.tower = !this.parent.active.tower;
			this.parent.updateEditorArea();
		}
	};
	towerBtn.value = 'Toggle Tower';
	towerBtn.height = 25;
	towerBtn.width = 100;
	towerBtn.x = 350;
	towerBtn.y = 435;
	towerBtn.visible = false;
	this.addChild(towerBtn);
	
	// toggle recruit button
	var recruitBtn = new Button(game);
	recruitBtn.click = function() {
		if(this.parent.active) {
			this.parent.active.recruit = !this.parent.active.recruit;
			this.parent.updateEditorArea();
		}
	};
	recruitBtn.value = 'Toggle Recruit';
	recruitBtn.height = 25;
	recruitBtn.width = 100;
	recruitBtn.x = 350;
	recruitBtn.y = 460;
	recruitBtn.visible = false;
	this.addChild(recruitBtn);
	
	// x
	var xText = new Text(game);
	xText.name = 'xText';
	xText.x = 220;
	xText.y = 425;
	this.addChild(xText);
	
	// y
	var yText = new Text(game);
	yText.name = 'yText';
	yText.x = 270;
	yText.y = 425;
	this.addChild(yText);
	
	// visible
	var visibleText = new Text(game);
	visibleText.name = 'visibleText';
	visibleText.x = 220;
	visibleText.y = 440;
	this.addChild(visibleText);
	
	// recruit
	var recruitText = new Text(game);
	recruitText.name = 'recruitText';
	recruitText.x = 220;
	recruitText.y = 455;
	this.addChild(recruitText);
	
	// tower
	var towerText = new Text(game);
	towerText.name = 'towerText';
	towerText.x = 220;
	towerText.y = 470;
	this.addChild(towerText);
	
	// new map dialog
	var newMapDialog = new NewMapDialog(game);
	newMapDialog.x = 200;
	newMapDialog.y = 100;
	newMapDialog.width = 200;
	newMapDialog.height = 250;
	this.addChild(newMapDialog);
	
	this.setActiveTile = function(hex) {
		if(this.active && this.active != hex) {
			this.active.active = false;
		}
		if(this.active != hex) {
			this.active = hex;
			hex.active = true;
			this.updateEditorArea();
		}
	};
	this.updateEditorArea = function() {
		var hex = this.active;
		
		visibleBtn.visible = true;
		towerBtn.visible = true;
		recruitBtn.visible = true;
		
		xText.value = 'X: ' + hex.x;
		yText.value = 'Y: ' + hex.y;
		visibleText.value = 'VISIBLE: ' + hex.visible;
		recruitText.value = 'RECRUIT: ' + hex.recruit;
		towerText.value = 'TOWER: ' + hex.tower;
	};
	this.showNewMapDialog = function() {
		newMapDialog.visible = true;
	};
};
editorScreen.prototype = new Screen();
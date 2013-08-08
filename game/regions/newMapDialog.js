var NewMapDialog = function(game) {
	this.init();
	this.name = 'newMapDialog';
	this.visible = false;
	
	var background = new Rect(game);
	background.width = 200;
	background.height = 250;
	background.color = 'rgba(255,255,255,0.35)';
	this.addChild(background);
	
	this.createMap = function(width, height) {
		var map = {};
		for(var x=0; x<width; x++) {
			for(var y=0; y<height*2; y++) {
				if( (x%2 == 0 && y%2 == 0) || (x%2 == 1 && y%2 == 1) ) {
					map[x+'_'+y] = {
						id: x+'_'+y,
						x:x,
						y:y,
						owner:0,
						recruit:false,
						maxRecruits:0,
						tower:false,
						units:0
					};
				}
			}
		}
		this.parent.getChildByName('viewport').loadMap(map);
	};
	
	var smallMapBtn = new Button(game);
	smallMapBtn.x = 25;
	smallMapBtn.y = 25;
	smallMapBtn.width = 150;
	smallMapBtn.height = 50;
	smallMapBtn.value = 'Create Small Map';
	smallMapBtn.hoverable = true;
	smallMapBtn.click = function() {
		this.parent.createMap(12, 6);
		this.parent.visible = false;
	};
	this.addChild(smallMapBtn);
	
	var mediumMapBtn = new Button(game);
	mediumMapBtn.x = 25;
	mediumMapBtn.y = 75;
	mediumMapBtn.width = 150;
	mediumMapBtn.height = 50;
	mediumMapBtn.value = 'Create Medium Map';
	mediumMapBtn.hoverable = true;
	mediumMapBtn.click = function() {
		this.parent.createMap(16, 8);
		this.parent.visible = false;
	};
	this.addChild(mediumMapBtn);
	
	var largeMapBtn = new Button(game);
	largeMapBtn.x = 25;
	largeMapBtn.y = 125;
	largeMapBtn.width = 150;
	largeMapBtn.height = 50;
	largeMapBtn.value = 'Create Large Map';
	largeMapBtn.hoverable = true;
	largeMapBtn.click = function() {
		this.parent.createMap(24, 12);
		this.parent.visible = false;
	};
	this.addChild(largeMapBtn);
	
	var cancelBtn = new Button(game);
	cancelBtn.x = 25;
	cancelBtn.y = 175;
	cancelBtn.width = 150;
	cancelBtn.height = 50;
	cancelBtn.value = 'Cancel';
	cancelBtn.hoverable = true;
	cancelBtn.click = function() {
		this.parent.visible = false;
	};
	this.addChild(cancelBtn);
};
NewMapDialog.prototype = new Region();
var Viewport = function(game) {
	this.init();
	this.name = 'viewport';
	this.disableInvisible = false;
};
Viewport.prototype = new Region();
Viewport.prototype.loadMap = function(map) {
	this.children = [];
	for (var t in map) {
		var hex = new Hexagon();
		hex.color = g.playerColors[map[t].owner];
		hex.x = map[t].x;
		hex.y = map[t].y;
		hex.tower = map[t].tower;
		hex.recruit = map[t].recruit;
		hex.click = function() {
			this.parent.parent.setActiveTile(this);
		};
		this.addChild(hex);
		map[t].Tile = hex;
	}
};
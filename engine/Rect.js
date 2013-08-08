var Rect = function() {
	this.init();
};
Rect.prototype = new DisplayObject();
Rect.prototype.clickable = false;
Rect.prototype.height = 50;
Rect.prototype.hoverable = false;
Rect.prototype.width = 50;
Rect.prototype.x = 0;
Rect.prototype.y = 0;
Rect.prototype.color = 'rgba(255,255,255,1)';
Rect.prototype.init = function() {};
Rect.prototype.draw = function() {
	g.ctx.fillStyle = this.color;
	g.ctx.fillRect(this.x, this.y, this.width, this.height);
};
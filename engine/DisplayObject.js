var DisplayObject = function() {};

// Default properties
DisplayObject.prototype.clickable = false;
DisplayObject.prototype.height = 0;
DisplayObject.prototype.hoverable = false;
DisplayObject.prototype.hover = false;
DisplayObject.prototype.name = null;
DisplayObject.prototype.parent = null;
DisplayObject.prototype.screen = null;
DisplayObject.prototype.visible = true;
DisplayObject.prototype.width = 0;
DisplayObject.prototype.x = 0;
DisplayObject.prototype.y = 0;

// Methods
DisplayObject.prototype.init = function() {
	this.children = [];
};
DisplayObject.prototype.addChild = function(child) {
	child.parent = this;
	child.screen = this.screen;
	this.children.push(child);
	return this;
};
DisplayObject.prototype.removeChild = function(child) {
	var index = this.children.indexOf(child);
	this.children.splice(index, 1);
	return this;
};
DisplayObject.prototype.removeFromParent = function() {
	if(this.parent) {
		this.parent.removeChild(this);
	}
	return this;
};
DisplayObject.prototype.getChildByName = function(name) {
	return _.find(this.children, function(child) {
		return child.name === name;
	});
};
DisplayObject.prototype.over = function() {
	if(!this.hovering) this.hovering = true;
	// TODO: publish event like events.pub(screen, region, this, 'over');
	return this;
};
DisplayObject.prototype.out = function() {
	if(this.hovering) this.hovering = false;
	// TODO: publish event like events.pub(screen, region, this, 'out');
	return this;
};
DisplayObject.prototype.click = function() {
	return this;
};
DisplayObject.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x+this.width) && (y > this.y && y < this.y+this.height);
};
DisplayObject.prototype.draw = function() {
	return this;
};
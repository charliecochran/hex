var Screen = function() {};

Screen.prototype.disableInvisible = true;
Screen.prototype.init = function() {
	this.children = [];
};
Screen.prototype.addChild = function(child) {
	child.parent = this;
	child.screen = this.screen;
	this.children.push(child);
	return this;
};
Screen.prototype.removeChild = function(child) {
	var index = this.children.indexOf(child);
	this.children.splice(index, 1);
	return this;
};
Screen.prototype.getChildByName = function(name) {
	return _.find(this.children, function(child) {
		return child.name === name;
	});
};
Screen.prototype.draw = function() {
	g.ctx.clearRect(0,0,g.STAGE_WIDTH,g.STAGE_HEIGHT);
	_.each(this.children, function(child) {
		if(child.visible) {
			child.draw();
		}
	});
};
Screen.prototype.hover = function(x, y) {
	var stop = false,
		child;
		
	for(var i = this.children.length-1; i>-1; i--) {
		child = this.children[i];
		if(!stop && (child.visible || !this.disableInvisible) && child.hoverable && child.contains(x, y)) {
			child.over(x, y);
			stop = child.stopHoverPropagation;
		} else if(child.hoverable && child.hovering) {
			child.out(x, y);
		}
	}
};
Screen.prototype.click = function(x, y) {
	var stop = false,
		child;
		
	for(var i = this.children.length-1; i>-1; i--) {
		child = this.children[i];
		if(!stop && child.visible && child.clickable && child.contains(x, y)) {
			child.click(x, y);
			stop = child.stopClickPropagation;
		}
	}
};
Screen.prototype.add = function() {
	
};
Screen.prototype.remove = function() {
	
};
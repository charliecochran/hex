var Region = function() {
	this.init();
};
Region.prototype = new DisplayObject();
Region.prototype.clickable = true;
Region.prototype.stopClickPropagation = true;
Region.prototype.hoverable = true;
Region.prototype.stopHoverPropagation = true;
Screen.prototype.disableInvisible = true;
Region.prototype.draw = function() {
	g.ctx.save();
	g.ctx.translate(this.x, this.y);
	g.ctx.rect(0, 0, this.width, this.height);
	g.ctx.clip();
	_.each(this.children, function(child) {
		if(child.visible || !this.disableInvisible) {
			child.draw();
		}
	});
	g.ctx.beginPath();
	g.ctx.restore();
};
Region.prototype.over = function(x, y) {
	x -= this.x;
	y -= this.y;
	if(!this.hovering) this.hovering = true;
	_.each(this.children, function(child) {
		if((child.visible || !this.disableInvisible) && child.hoverable && child.contains(x, y)) {
			child.over(x, y);
		} else if(child.hoverable && child.hovering) {
			child.out(x, y);
		}
	});
	return this;
};
Region.prototype.out = function(x, y) {
	if(this.hovering) {
		this.hovering = false;
		_.each(this.children, function(child) {
			child.out();
		});
	}
	return this;
};
Region.prototype.click = function(x, y) {
	var stop = false,
		child;
	
	x -= this.x;
	y -= this.y;
		
	for(var i = this.children.length-1; i>-1; i--) {
		child = this.children[i];
		if(!stop && (child.visible || !this.disableInvisible) && child.clickable && child.contains(x, y)) {
			child.click(x, y);
			stop = child.stopClickPropagation;
		}
	}
};
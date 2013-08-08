var Text = function() {
	this.init();
};
Text.prototype = new DisplayObject();
Text.prototype.align = 'left';
Text.prototype.baseline = 'alphabetic';
Text.prototype.color = 'rgba(255,255,255,1)';
Text.prototype.value = '';
Text.prototype.draw = function() {
	g.ctx.fillStyle = this.color;
	g.ctx.textAlign = this.align;
	g.ctx.textBaseline = this.baseline;
	g.ctx.fillText(this.value, this.x, this.y);
};
var Button = function() {
	this.init();
};
Button.prototype = new DisplayObject();
Button.prototype.clickable = true;
Button.prototype.height = 50;
Button.prototype.hoverable = true;
Button.prototype.width = 100;
Button.prototype.x = 100;
Button.prototype.y = 100;
Button.prototype.init = function() {
	this.style = {
		default: {
			backgroundColor: 'rgba(216,216,216,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 0,
			color: 'rgba(0,0,0,1)'
		},
		hover: {
			backgroundColor: 'rgba(48,64,128,1)',
			borderColor: 'rgba(32,32,32,0.5)',
			borderWidth: 0,
			color: 'rgba(255,255,255,1)'
		}
	};
};
Button.prototype.draw = function() {
	var style = this.hovering ? this.style.hover : this.style.default;
	
	// Button
	g.ctx.fillStyle = style.backgroundColor;
	g.ctx.fillRect(this.x, this.y, this.width, this.height);
	if(style.borderWidth) {
		g.ctx.lineWidth = style.borderWidth;
		g.ctx.strokeStyle = style.borderColor;
		g.ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	// Text
	g.ctx.fillStyle = style.color;
	g.ctx.textAlign = 'center';
	g.ctx.textBaseline = 'middle';
	g.ctx.fillText(this.value, this.x+this.width/2, this.y+this.height/2);
};
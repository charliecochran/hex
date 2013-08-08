var Hexagon = function() {};
Hexagon.prototype = new DisplayObject();
Hexagon.prototype.active = false;
Hexagon.prototype.clickable = true;
Hexagon.prototype.color = 'rgba(255,255,255,0.3)';
Hexagon.prototype.distance = 3;
Hexagon.prototype.hoverable = true;
Hexagon.prototype.width = 60;
Hexagon.prototype.height = 53;
Hexagon.prototype.recruit = false;
Hexagon.prototype.tower = false;
Hexagon.prototype.units = 0;
Hexagon.prototype.set = function(key, value) {
	this[key] = value;
	return this;
};
Hexagon.prototype.getBoundingBox = function() {
	var scale = g.Viewport.scale,
		offsetx = g.Viewport.x,
		offsety = g.Viewport.y,
		x = this.x,
		y = Math.ceil(this.y / 2),
		width = this.width * scale,
		height = this.height * scale,
		cx = x * (3/4 * width + this.distance) + width + offsetx,
		cy = y * (height + this.distance) - (x % 2) * (height + this.distance) / 2 + height + offsety;

	return {
		top:cy - height/2,
		bottom:cy + height/2,
		left:cx - width/2,
		right:cx + width/2,
		cx: cx,
		cy: cy,
		width: width,
		height: height
	};
};
Hexagon.prototype.contains = function(x, y) {
	var box = this.getBoundingBox();
	if(x >= box.left && x <= box.right && y >= box.top && y <= box.bottom) {
		var check = {
			x: x,
			y: y
		};

		// hex points in order starting from left most point
		var pts = [
			{ x: box.left, y: box.cy },
			{ x: box.cx - box.width/4, y: box.top },
			{ x: box.cx + box.width/4, y: box.top },
			{ x: box.right, y: box.cy },
			{ x: box.cx + box.width/4, y: box.bottom },
			{ x: box.cx - box.width/4, y: box.bottom }
		];

		if( lineTest(pts[0], pts[1], check)>0 && lineTest(pts[2], pts[3], check)>0 && lineTest(pts[3], pts[4], check)>0 && lineTest(pts[5], pts[0], check)>0 ) {
			return true;
		}
	}
	return false;
};
Hexagon.prototype.draw = function () {
	var scale = g.Viewport.scale,
		offsetx = g.Viewport.x,
		offsety = g.Viewport.y;
	
	var x = this.x,
		y = Math.ceil(this.y / 2),
		width	= this.width	* scale, // scaled width
		height = this.height * scale, // scaled height
		cx	= x * (3/4 * width + this.distance) + width + offsetx,
		cy	= y * (height + this.distance) - (x % 2) * (height + this.distance) / 2 + height + offsety,
		ctx = g.ctx;
	
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(cx - width/4, cy - height/2);
	ctx.lineTo(cx + width/4, cy - height/2);
	ctx.lineTo(cx + width/2, cy);
	ctx.lineTo(cx + width/4, cy + height/2);
	ctx.lineTo(cx - width/4, cy + height/2);
	ctx.lineTo(cx - width/2, cy);
	ctx.lineTo(cx - width/4, cy - height/2);
	ctx.closePath();
	if(this.visible) {
		ctx.fill();
	}
	if(this.active) {
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgba(255,255,255,0.8)';
		ctx.stroke();
	}
	if(this.hovering) {
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgba(255,255,255,0.5)';
		ctx.stroke();
	}

	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	if(this.units) {
		ctx.fillText(this.units, cx, cy);
	}
	ctx.textAlign = 'left';
	ctx.textBaseline = 'hanging';
	if(this.recruit) {
		ctx.fillText('R', cx-width/4+2, cy-height/2);
	}
	ctx.textAlign = 'right';
	if(this.tower) {
		ctx.fillText('T', cx+width/4-2, cy-height/2);
	}
};
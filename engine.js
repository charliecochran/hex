var ctx;

var state = {
	name: 'default',
	selectedTile: null,
	hoverTile: null
};

var click = function(x, y) {
	// Determine what's been clicked then broadcast an event
	_.each(Map, function(elem, key) {
		if(elem.Tile.isPointInside(x, y)) {
			events.pub(state.name, 'click.tile', elem);
		}
	});

	// If we have a GUI bar at the bottom, we could do an if y > 600 or whatever to skip the tile checks
};

var hover = function(x, y) {
	// Determine what's being hovered then broadcast an event
	_.each(Map, function(elem, key) {
		if(elem.Tile.isPointInside(x, y)) {
			events.pub(state.name, 'hover.tile', elem);
		}
	});
};

var init = function() {
	var $canvas = $('#c'),
		canvas = $canvas[0];
	
	ctx = canvas.getContext('2d');
	
	$canvas.mousemove(function(e) {
		hover(e.offsetX, e.offsetY);
	});

	$canvas.click(function(e) {
		click(e.offsetX, e.offsetY);
	});

	// w = 87, a = 65, s = 83, d =68
	$(document).keydown(function(e) {
		if(e.keyCode == 87) {
			Viewport.scrollup = true;
		} else if(e.keyCode == 65) {
			Viewport.scrollleft = true;
		} else if(e.keyCode == 83) {
			Viewport.scrolldown = true;
		} else if(e.keyCode == 68) {
			Viewport.scrollright = true;
		}
	});

	$(document).keyup(function(e) {
		if(e.keyCode == 87) {
			Viewport.scrollup = false;
		} else if(e.keyCode == 65) {
			Viewport.scrollleft = false;
		} else if(e.keyCode == 83) {
			Viewport.scrolldown = false;
		} else if(e.keyCode == 68) {
			Viewport.scrollright = false;
		} else if(e.keyCode == 81) {
			Viewport.scale -= Viewport.scale > 0.25 ? 0.25 : 0;
		} else if(e.keyCode == 69) {
			Viewport.scale += 0.25;
		}
	});

	for (var t in Map) {
		Map[t].Tile = new Hexagon(ctx, playerColors[Map[t].owner], [Map[t].x, Map[t].y], Map[t]);
	}

	// Start main game loop
	setInterval(main, 50);
};

var draw = function() {
	ctx.clearRect(0,0,800,600);
	_.each(Map, function(elem) {
		elem.Tile.draw();
	});
};

var main = function() {
	// Main game loop
	// Scroll viewport
	Viewport.scroll();

	// Draw map
	draw();
};